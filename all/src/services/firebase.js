import app from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import "firebase/compat/functions";

import firebaseConfig from "./config";
//push
class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.storage = app.storage();
    this.db = app.firestore();
    this.auth = app.auth();
    this.functions = app.functions();
  }

  //*---------------------------------------------------------AUTH FUNCTIONS

  createAccount = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  signIn = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  signInWithGoogle = () =>
    this.auth.signInWithPopup(new app.auth.GoogleAuthProvider());

  signInWithFacebook = () =>
    this.auth.signInWithPopup(new app.auth.FacebookAuthProvider());

  signInWithGithub = () =>
    this.auth.signInWithPopup(new app.auth.GithubAuthProvider());

  signOut = () => this.auth.signOut();

  passwordReset = (email) => this.auth.sendPasswordResetEmail(email);

  passwordUpdate = (password) => this.auth.currentUser.updatePassword(password);

  changePassword = (currentPassword, newPassword) =>
    new Promise((resolve, reject) => {
      this.reauthenticate(currentPassword)
        .then(() => {
          const user = this.auth.currentUser;
          user
            .updatePassword(newPassword)
            .then(() => {
              resolve("Password updated successfully!");
            })
            .catch((error) => reject(error));
        })
        .catch((error) => reject(error));
    });

  reauthenticate = (currentPassword) => {
    const user = this.auth.currentUser;
    const cred = app.auth.EmailAuthProvider.credential(
      user.email,
      currentPassword
    );

    return user.reauthenticateWithCredential(cred);
  };

  updateEmail = (currentPassword, newEmail) =>
    new Promise((resolve, reject) => {
      this.reauthenticate(currentPassword)
        .then(() => {
          const user = this.auth.currentUser;
          user
            .updateEmail(newEmail)
            .then(() => {
              resolve("Email Successfully updated");
            })
            .catch((error) => reject(error));
        })
        .catch((error) => reject(error));
    });

  updateProfile = (id, updates) =>
    this.db.collection("users").doc(id).update(updates);

  onAuthStateChanged = () =>
    new Promise((resolve, reject) => {
      this.auth.onAuthStateChanged((user) => {
        if (user) {
          resolve(user);
        } else {
          reject(new Error("Auth State Changed failed"));
        }
      });
    });

  sendMail = async (email, subject, text) => {
    try {
      const functions = app.functions();
      const result = await this.functions.httpsCallable("sendMail")({
        email,
        subject,
        text,
      });

      console.log("Email sent:", result.data);
      return result.data;
    } catch (error) {
      console.error("Error sending email:", error);
      throw error;
    }
  };

  //*---------------------------------------------------------PRODCUTO FUNCTIONS

  getSingleProduct = (id) => this.db.collection("products").doc(id).get();

  getProducts = (lastRefKey) => {
    let didTimeout = false;

    return new Promise((resolve, reject) => {
      (async () => {
        if (lastRefKey) {
          try {
            const query = this.db
              .collection("products")
              .orderBy(app.firestore.FieldPath.documentId())
              .startAfter(lastRefKey)
              .limit(12);

            const snapshot = await query.get();
            const products = [];
            snapshot.forEach((doc) =>
              products.push({ id: doc.id, ...doc.data() })
            );
            const lastKey = snapshot.docs[snapshot.docs.length - 1];

            resolve({ products, lastKey });
          } catch (e) {
            reject(e?.message || ":( Failed to fetch products.");
          }
        } else {
          const timeout = setTimeout(() => {
            didTimeout = true;
            reject(new Error("Request timeout, please try again"));
          }, 15000);

          try {
            const totalQuery = await this.db.collection("products").get();
            const total = totalQuery.docs.length;
            const query = this.db
              .collection("products")
              .orderBy(app.firestore.FieldPath.documentId())
              .limit(12);
            const snapshot = await query.get();

            clearTimeout(timeout);
            if (!didTimeout) {
              const products = [];
              snapshot.forEach((doc) =>
                products.push({ id: doc.id, ...doc.data() })
              );
              const lastKey = snapshot.docs[snapshot.docs.length - 1];

              resolve({ products, lastKey, total });
            }
          } catch (e) {
            if (didTimeout) return;
            reject(e?.message || ":( Failed to fetch products.");
          }
        }
      })();
    });
  };
  decreaseMaxQuantity = async (productId, newMaxQuantity) => {
    const productRef = this.db.collection("products").doc(productId);
    try {
      const productDoc = await productRef.get();

      if (productDoc.exists) {
        const currentMaxQuantity = productDoc.data().maxQuantity;
        const updatedMaxQuantity = Math.max(
          currentMaxQuantity - 1,
          newMaxQuantity
        );

        await productRef.update({
          maxQuantity: updatedMaxQuantity,
        });

        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  searchProducts = (searchKey) => {
    let didTimeout = false;

    return new Promise((resolve, reject) => {
      (async () => {
        const productsRef = this.db.collection("products");

        const timeout = setTimeout(() => {
          didTimeout = true;
          reject(new Error("Request timeout, please try again"));
        }, 15000);

        try {
          const searchedNameRef = productsRef
            .orderBy("name_lower")
            .where("name_lower", ">=", searchKey)
            .where("name_lower", "<=", `${searchKey}\uf8ff`)
            .limit(12);
          const searchedKeywordsRef = productsRef
            .orderBy("dateAdded", "desc")
            .where("keywords", "array-contains-any", searchKey.split(" "))
            .limit(12);

          // const totalResult = await totalQueryRef.get();
          const nameSnaps = await searchedNameRef.get();
          const keywordsSnaps = await searchedKeywordsRef.get();
          // const total = totalResult.docs.length;

          clearTimeout(timeout);
          if (!didTimeout) {
            const searchedNameProducts = [];
            const searchedKeywordsProducts = [];
            let lastKey = null;

            if (!nameSnaps.empty) {
              nameSnaps.forEach((doc) => {
                searchedNameProducts.push({ id: doc.id, ...doc.data() });
              });
              lastKey = nameSnaps.docs[nameSnaps.docs.length - 1];
            }

            if (!keywordsSnaps.empty) {
              keywordsSnaps.forEach((doc) => {
                searchedKeywordsProducts.push({ id: doc.id, ...doc.data() });
              });
            }

            // MERGE PRODUCTS
            const mergedProducts = [
              ...searchedNameProducts,
              ...searchedKeywordsProducts,
            ];
            const hash = {};

            mergedProducts.forEach((product) => {
              hash[product.id] = product;
            });

            resolve({ products: Object.values(hash), lastKey });
          }
        } catch (e) {
          if (didTimeout) return;
          reject(e);
        }
      })();
    });
  };

  getFeaturedProducts = (itemsCount = 12) =>
    this.db
      .collection("products")
      .where("isFeatured", "==", true)
      .limit(itemsCount)
      .get();

  getRecommendedProducts = (itemsCount = 12) =>
    this.db
      .collection("products")
      .where("isRecommended", "==", true)
      .limit(itemsCount)
      .get();

  addProduct = (id, product) =>
    this.db.collection("products").doc(id).set(product);

  generateKey = () => this.db.collection("products").doc().id;

  storeImage = async (id, folder, imageFile) => {
    const snapshot = await this.storage.ref(folder).child(id).put(imageFile);
    const downloadURL = await snapshot.ref.getDownloadURL();

    return downloadURL;
  };

  deleteImage = (id) => this.storage.ref("products").child(id).delete();

  editProduct = (id, updates) =>
    this.db.collection("products").doc(id).update(updates);

  removeProduct = (id) => this.db.collection("products").doc(id).delete();

  //*------------------------------------------------------------ORDERS FUNCTIONS

  getOrders = () => this.db.collection("orders").get();

  addOrder = async (userId, dataPayment) => {
    try {
      const orderId = this.db.collection("orders").doc().id;
      const orderRef = this.db.collection("orders").doc(orderId);

      await orderRef.set({ ...dataPayment, userId });

      const userOrdersRef = this.db
        .collection("users")
        .doc(userId)
        .collection("userOrders");
      await userOrdersRef.add({ orderId });

      return orderId;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  isArriveOrder = (orderId) => {
    return this.db.collection("orders").doc(orderId).update({
      isArrive: true,
    });
  };


  softDeleteOrder = (orderId) => {
    return this.db.collection("orders").doc(orderId).update({
      isArrive: true,
    });
  };

  saveBasketItems = (items, userId) =>
    this.db.collection("users").doc(userId).update({ basket: items });

  setAuthPersistence = () =>
    this.auth.setPersistence(app.auth.Auth.Persistence.LOCAL);
  getOrders = () => this.db.collection("orders").get();

  getSingleOrder = (orderId) => this.db.collection("orders").doc(orderId).get();

  //*-------------------------------------------------------REVIEWS FUNCTIONS

  getReviews = () => this.db.collection("reviews").get();

  getSingleReview = (reviewId) =>
    this.db.collection("reviews").doc(reviewId).get();

  addReview = async (reviewData) => {
    try {
      const docRef = await this.db.collection("reviews").add(reviewData);
      return docRef.id;
    } catch (error) {
      throw error; // Propagar cualquier error que ocurra al agregar la reseña
    }
  };

  deleteReview = async (reviewId) => {
    const reviewRef = this.db.collection("reviews").doc(reviewId);
    try {
      await reviewRef.delete();
    } catch (error) {
      throw error; // Propagar cualquier error que ocurra al eliminar la reseña
    }
  };

  //*----------------------------------------------------------USER FUNCTIONS

  addUser = (id, user) => this.db.collection("users").doc(id).set(user);

  getUser = (id) => this.db.collection("users").doc(id).get();

  editUser = (id, updates) =>
    this.db.collection("users").doc(id).update(updates);

  removeUser = (id) => this.db.collection("users").doc(id).delete();

  softDeleteUser = (userId) => {
    return this.db.collection("users").doc(userId).update({
      isActive: false, // Marcar al usuario como inactivo
    });
  };

  promoteUserToAdmin = (userId) => {
    return this.db.collection("users").doc(userId).update({
      isAdmin: true, // Marcar al usuario como administrador
    });
  };

  getUsers = async () => {
    try {
      const querySnapshot = await this.db.collection("users").get();
      const usersData = [];
      querySnapshot.forEach((doc) => {
        // Agregar los datos del usuario al arreglo
        usersData.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      return usersData;
    } catch (error) {
      throw error; // Propagar cualquier error que ocurra al obtener usuarios
    }
  };
}

//*--------------------------------------------DATA CHARTS DASH

export const getTotalReviews = async () => {
  try {
    const reviewsCollection = app.firestore().collection("reviews");
    const snapshot = await reviewsCollection.get();
    return snapshot.size; // Retorna la cantidad total de documentos en la colección 'reviews'
  } catch (error) {
    console.error("Error al obtener la cantidad total de revisiones:", error);
    throw error;
  }
};

export const getTotalOrders = async () => {
  try {
    const ordersCollection = app.firestore().collection("orders");
    const snapshot = await ordersCollection.get();
    return snapshot.size; // Retorna la cantidad total de documentos en la colección 'orders'
  } catch (error) {
    console.error("Error al obtener la cantidad total de órdenes:", error);
    throw error;
  }
};

export const getTotalUsers = async () => {
  try {
    const usersCollection = app.firestore().collection("users");
    const snapshot = await usersCollection.get();
    return snapshot.size; // Retorna la cantidad total de documentos en la colección 'users'
  } catch (error) {
    console.error("Error al obtener la cantidad total de usuarios:", error);
    throw error;
  }
};

const firebaseInstance = new Firebase();

export default firebaseInstance;
