import React, { useEffect, useState } from "react";
import firebaseInstance from "@/services/firebase";
import { getCurrentDateTimeUpdate } from "./DateTime";
import StarRating from "./StarRating";
import "./ReviewProduct.css";


const ReviewProduct = ({ productId, currentUserEmail }) => {
  const [reviews, setReviews] = useState([]);
  const [editingReviewId, setEditingReviewId] = useState(null);
  const [editedReviewText, setEditedReviewText] = useState(""); // Nuevo estado para el texto editado
  const [editedReviewRating, setEditedReviewRating] = useState(0);
  const [editedReview, setEditedReview] = useState({
    text: "",
    rating: 0,
  });
  const [editedRating, setEditedRating] = useState(0);
  

  useEffect(() => {
    // Obtener las revisiones para el producto específico
    const getReviews = async () => {
      try {
        const reviewsSnapshot = await firebaseInstance.db
          .collection("reviews")
          .where("productId", "==", productId)
          .get();

        const reviewsData = reviewsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setReviews(reviewsData);
      } catch (error) {
        console.error("Error al obtener las revisiones:", error);
      }
    };

    getReviews();
  }, [productId]);

  const handleEditReview = async (reviewId) => {
    try {
      // Actualiza la revisión con el nuevo texto, rating y marca como editada
      await firebaseInstance.db.collection("reviews").doc(reviewId).update({
        text: editedReview.text,
        rating: editedReview.rating,
        date: getCurrentDateTimeUpdate(),
        edited: true,
      });
  
      // Limpia el estado de edición
      setEditingReviewId(null);
      setEditedReview({ text: "", rating: 0 }); // Limpia los valores editados
    } catch (error) {
      console.error("Error al editar la revisión:", error);
    }
  };

  const handleDeleteReview = async (reviewId) => {
    try {
      // Elimina la revisión de la colección "reviews"
      await firebaseInstance.db.collection("reviews").doc(reviewId).delete();
    } catch (error) {
      console.error("Error al eliminar la revisión:", error);
    }
  };

  const handleCancelEdit = () => {
    // Limpia el estado de edición y mantiene los valores originales
    setEditingReviewId(null);
    setEditedReviewText(""); // Mantener el texto editado como está
    setEditedReviewRating(0); // Mantener el rating editado como está
  };

  return (
    
      <div className="review-product-container">
      <h2>Reseñas del producto:</h2>
      
  
      {reviews.map((review) => (
  <div key={review.id} className="review-item">
  <div className="review-header">
    <strong>{review.username}</strong> dijo:
  </div>
    {editingReviewId === review.id ? (
  <div className="review-modal">
    <div className="review-modal-content">
      <h3 className="review-modal-title">Editar reseña</h3>
      <div className="review-modal-form">
        <div className="review-modal-label">Calificación:</div>
        <div className="review-modal-rating">
          <select
            className="review-modal-select"
            value={editedRating || review.rating}
            onChange={(e) => setEditedRating(parseInt(e.target.value))}
          >
            {[1, 2, 3, 4, 5].map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="review-modal-label">Texto de la revisión:</div>
        <textarea
          className="review-modal-textarea"
          value={editedReview.text || review.text}
          onChange={(e) =>
            setEditedReview({
              ...editedReview,
              text: e.target.value,
            })
          }
        />
        <div className="review-modal-buttons">
          <button
            className="review-modal-button"
            onClick={() => handleEditReview(review.id)}
          >
            Send
          </button>
          <button
            className="review-modal-button"
            onClick={handleCancelEdit}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  </div>
) : (
            <div>
              <div className="review-rating">
  Calificación:
  {Array.from({ length: 5 }).map((_, index) => (
    <span
      key={index}
      className={`stare ${index >= review.rating ? 'inactive' : ''}`}
    >
      &#9733;
    </span>
  ))}
</div>
              <div className="review-text">{review.text}</div>
              <div className="review-info">
                {review.date}
                {review.edited && <span>editado</span>}
              </div>
              {currentUserEmail === review.userId && (
                <div className="review-buttons">
                  <button onClick={() => setEditingReviewId(review.id)}>Edit</button>
                  <button onClick={() => handleDeleteReview(review.id)}>Delete</button>
                </div>
              )}
            </div>
          )}
        </div>
      ))}
  
    </div>
  );
};

export default ReviewProduct;