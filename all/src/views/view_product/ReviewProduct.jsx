import React, { useEffect, useState } from "react";
import firebaseInstance from "@/services/firebase";
import "./ReviewProduct.css"; // Importa tu archivo CSS

const ReviewProduct = ({ productId, currentUserEmail }) => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Consulta las revisiones para el producto específico utilizando Firebase
    const fetchReviews = async () => {
      try {
        const reviewsSnapshot = await firebaseInstance.db
          .collection("reviews")
          .where("productId", "==", productId)
          .get();

          const reviewData = reviewsSnapshot.docs.map((doc) => ({
            id: doc.id, // Agrega el ID del documento a cada revisión
            ...doc.data(),
          }));
      
          setReviews(reviewData);
      } catch (error) {
        console.error("Error al obtener las revisiones:", error);
        // Maneja el error según tus necesidades
      }
    };

    fetchReviews();
  }, [productId]);

  const handleDeleteReview = async (reviewId) => {
    try {
      // Elimina la revisión de la colección "reviews"
      await firebaseInstance.db.collection("reviews").doc(reviewId).delete();
    } catch (error) {
      console.error("Error al eliminar la revisión:", error);
    }
  };

  return (
    <div>
      <h2 className="title">REVIEWS FOR PRODUCT</h2>
      {reviews.length === 0 ? (
        <p>There are no reviews available for this product.</p>
      ) : (
        <ul className="review-list">
          {reviews.map((review, index) => (
            <div key={index} className="review-item">
              <div className="review-rating">
                    Rating:
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span
                        key={index}
                        className={`stare ${index >= review.rating ? 'inactive' : ''}`}
                      >
                        &#9733;
                      </span>
                    ))}
                  </div>
              <h3>{review.username} say:</h3>
              <p>{review.text}</p>
              <p>{review.date}</p>
              {review.edited && <span>editado</span>}
              {currentUserEmail === review.userId && (
                <div className="review-buttons">
                  <button onClick={() => setEditingReviewId(review.id)}>Edit</button>
                  <button onClick={() => handleDeleteReview(review.id)}>Delete</button>
                </div>
              )}
    
              {/* Puedes mostrar otros detalles de la revisión aquí */}
            </div>
            
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewProduct;