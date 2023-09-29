import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { setPurchasedItems } from "../../../redux/actions/paypalActions";
import ReviewForm from "@/views/view_product/ReviewForm";
import firebaseInstance from "@/services/firebase";
import { Link } from 'react-router-dom';
import "./OrdersTab.css";

const UserOrdersTab = () => {
  const purchasedItems = useSelector((state) => state.purchasedItems);
  const array = Object.values(purchasedItems);
  let filteredItems = [];

  

  if (array && array[0]) {
    for (let i = 0; i < array.length; i++) {
      const purch = array[i];
      for (let j = 0; j < purch.length; j++) {
        if (Array.isArray(purch[j])) {
          filteredItems = [...filteredItems, ...purch[j]];
          console.log(filteredItems);
        }
      }
    }
  }

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
    console.log(product)
    console.log(filteredItems)
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

  const { auth, profile } = useSelector((state) => ({
    auth: state.auth,
    profile: state.profile,
  }));
  
  const [userReviews, setUserReviews] = useState([]);
  
  useEffect(() => {
    // Llamar a la función para obtener las revisiones del usuario actual
    if (auth.id) {
      fetchUserReviews(auth.id).then((reviews) => {
        setUserReviews(reviews);
      });
    }
  }, [auth.id]);


  
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
        `}
      </style>

      <h3>My Orders</h3>
      {filteredItems.length === 0 ? (
        <strong>
          <span className="no-orders">You don't have any orders</span>
        </strong>
      ) : (
        filteredItems.map((item) => {
    // Verificar si el usuario actual ya dejó una revisión para este producto
    const hasReview = userReviews.some(
      (review) => review.productId === item.id
    );

    return (
          <div className="order-item" key={item.id}>
            <p className="order-item n">{item.name}</p>
            <img src={item.image} alt={item.name} />
            <p>{item.description}</p>
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
    onClick={() => openReviewForm(item)}
    disabled={item.reviewed}
  >
    Leave Review
  </button>
)}
          </div>
        );
        })
      )}
      {showReviewForm && (
        <div className="review-modal">
          <div className="review-modal-content">
            <button className="close-button" onClick={closeReviewForm}>
              Close
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
