import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import firebaseInstance from "@/services/firebase";
import "./ReviewProduct.css"; // Importa tu archivo CSS
import ReviewEditForm from "./ReviewEditForm";

const ReviewProduct = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [shouldReload, setShouldReload] = useState(false);
  const [editingReviewId, setEditingReviewId] = useState(null); // Estado para controlar la edición
  

  const { profile, auth } = useSelector((state) => ({
   
    profile: state.profile,
    auth: state.auth,
   
  }));

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
  }, [productId, shouldReload]);

  const handleDeleteReview = async (reviewId) => {
    try {
      // Elimina la revisión de la colección "reviews"
      await firebaseInstance.db.collection("reviews").doc(reviewId).delete();
      // Establece shouldReload en true para volver a cargar las revisiones
      setShouldReload(true);
    } catch (error) {
      console.error("Error al eliminar la revisión:", error);
    }
  };

  const handleEditReviewClick = (reviewId) => {
    // Establece el ID de la revisión que se está editando
    setEditingReviewId(reviewId); 
  };

  const handleReviewEdited = () => {
    setShouldReload(false);
    // Activa la recarga de revisiones
    setShouldReload(true);
  };

  return (
    <div>
      <h2 className="title">REVIEWS FOR PRODUCT</h2>
      {reviews.length === 0 ? (
<<<<<<< HEAD
        <p>There are no reviews for this product 😥</p>
=======
        <p>There are no reviews available for this product.</p>
>>>>>>> d5a239fbb69513f0b45e5e5690abc08a0c9b5671
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
<<<<<<< HEAD
              <div className="review-text2"><p>{review.text}</p></div>
              <p>{review.date}{review.edited && <span className="edit">Edited.</span>}</p>
              
              {auth.id === review.userId && (
                <div className="review-buttons">
                  <button onClick={() => handleEditReviewClick(review.id)}>Edit</button>
=======
              <p>{review.text}</p>
              <p>{review.date}</p>
              {review.edited && <span>editado</span>}
              {currentUserEmail === review.userId && (
                <div className="review-buttons">
                  <button onClick={() => setEditingReviewId(review.id)}>Edit</button>
>>>>>>> d5a239fbb69513f0b45e5e5690abc08a0c9b5671
                  <button onClick={() => handleDeleteReview(review.id)}>Delete</button>
                </div>
              )}
              {editingReviewId === review.id && (
                <ReviewEditForm
                  review={review}
                  onClose={() => setEditingReviewId(null)} // Cerrar el formulario de edición
                  onReviewEdited={handleReviewEdited} // Pasar la función de devolución de llamada
                />
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