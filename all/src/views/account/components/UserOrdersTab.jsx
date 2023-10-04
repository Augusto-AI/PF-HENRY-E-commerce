import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { setPurchasedItems } from "../../../redux/actions/paypalActions";
import ReviewForm from "@/views/view_product/ReviewForm";
import firebaseInstance from "@/services/firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { Link } from 'react-router-dom';
import "./OrdersTab.css";

const UserOrdersTab = () => {
  const [userOrders, setUserOrders] = useState([]);
  const { auth, profile } = useSelector((state) => ({
    auth: state.auth,
    profile: state.profile,
  }));
  useEffect(() => {
    if (auth.id) {
      const fetchUserOrders = async () => {
        try {
          const ordersRef = firebaseInstance.db.collection("orders");
          const snapshot = await ordersRef.where("UserId", "==", auth.id).get();
          const userOrdersData = [];
          snapshot.forEach((doc) => {
            const orderData = doc.data();
            const orderId = doc.id;
            userOrdersData.push({
              ...orderData,
              id: orderId,
            });
          });
          
          console.log(userOrdersData)
          setUserOrders(userOrdersData);
        } catch (error) {
          console.error("Error fetching user orders:", error);
        }
      };

      fetchUserOrders();
    }
  }, [auth.id]);
  // Estado para controlar si se muestra el formulario de revisión
  const [showReviewForm, setShowReviewForm] = useState(false);

  // Estado para controlar el producto seleccionado para la revisión
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productId, setProductId] = useState(null);
  const [reviewsSent, setReviewsSent] = useState([]);

  // Función para manejar la apertura del formulario de revisión
  const openReviewForm = (product) => {
    setSelectedProduct(product);
    setShowReviewForm(true);
    setProductId(product.id);

  };

  // Función para manejar el cierre del formulario de revisión
  const closeReviewForm = () => {
    setSelectedProduct(null);
    setShowReviewForm(false);
  };

  const sendReview = (productId) => {
    setReviewsSent([...reviewsSent, productId]);
  };

  const fetchUserReviews = async (userId) => {
    const reviewsRef = firebaseInstance.db.collection("reviews");
    const userReviews = [];
  
    try {
      const snapshot = await reviewsRef.where("userId", "==", userId).get();
      snapshot.forEach((doc) => {
        const review = doc.data();
        userReviews.push(review);
      });
    } catch (error) {
      console.error("Error fetching user reviews:", error);
    }
  
    return userReviews;
  };


  
  const [userReviews, setUserReviews] = useState([]);
  
  useEffect(() => {
    // Llamar a la función para obtener las revisiones del usuario actual
    if (auth.id) {
      fetchUserReviews(auth.id).then((reviews) => {
        setUserReviews(reviews);
      });
    }
  }, [auth.id]);


  const markOrderAsActive = (orderId) => {
    try {
      const orderRef = firebase.firestore().collection("orders").doc(orderId);
  
      orderRef.update({
        isActive: false,
      });
      console.log(orderId);
    } catch (error) {
      console.error(error);
    }
  };

  
  return (
    <div className="user-orders-tab">
      <style>
        {`
          .user-orders-tab {
            margin: 20px;
            padding: 20px;
            border: 1px solid #ccc;
            background-color: smoke;
            border-radius: 100px;
          }

          h3 {
            font-size: 24px;
            margin-bottom: 10px;
          }

          .order-item {
            margin-bottom: 20px;
            padding: 10px;
            border: 1px solid #ddd;
            background-color: #fff;
          }

          .order-item img {
            max-width: 150px;
            height: auto;
          }
          

          .order-item p {
            margin: 0;
          }
          .order-item n {
            background-color: red;
            font-weight: bold;
            font-style: italic;
          }

          .order-item p:first-child {
            font-weight: bold;
          }

          .order-item p.price {
          }

          .no-orders {
            font-weight: bold;
            font-style: italic;
          }

          .cancelar {
            font-weight: bold;
            font-style: italic;
          }

          .cancelar-boton {
            background-color: red;
            color: white;
            border-radius: 2em;
          }
        `}
      </style>

      <h3>My Orders</h3>
      {userOrders.length === 0 ? (
        <strong>
          <span className="no-orders">You don't have any orders</span>
        </strong>
      ) : (
        userOrders.map((order) => (
          <div className="order-item" key={order.id}>      
            {!order.isArrive ? (
      order.isActive ? (
        <div>
          <button className="cancelar-boton" onClick={() => markOrderAsActive(order.id)}>Cancel</button>
          <div>You can only cancel your order before it arrives!</div>
        </div>
      ) : (
        <div>Cancelled  (Your payment will be refunded within 3 business days.)</div>
      )
    ) : (
      <div>You cannot cancel your order anymore(You had an order.)</div>
    )}
            {order.product.map((item) => {
              const hasReview = userReviews.some(
                (review) => review.productId === item.id
              );

              return (
                <div className="order-item" key={item.id}>
                  <p className="order-item n">{item.name}</p>
                  <img src={item.image} alt={item.name} />
                  <p>Brand: {item.brand}</p>
                  <p className="price">Price: {item.price * item.quantity} $</p>
                  <p>Quantity purchased: {item.quantity}</p>
                  {hasReview ? (
                    <div className="review-successful">
                      <div>Review Successful!
                        <Link to={`/product/${item.id}`} className="review-submit-button">
                          View Product
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <button
                    className="review-submit-button"
                      onClick={() => openReviewForm(item)}
                      disabled={item.reviewed}
                    >
                      Leave Review
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        ))
      )}
      {showReviewForm && (
        <div className="review-modal">
          <div className="review-modal-content">
            <button className="close-button" onClick={closeReviewForm}>
              X
            </button>
            <ReviewForm
              productId={productId}
              onClose={closeReviewForm}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default React.memo(UserOrdersTab);
