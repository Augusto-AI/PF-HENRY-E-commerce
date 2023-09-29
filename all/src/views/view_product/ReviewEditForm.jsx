import React, { useState } from "react";
import firebaseInstance from "@/services/firebase";
import { getCurrentDateTimeUpdate } from "./DateTime";
import StarRating from "./StarRating";
import "./Review.css"; // Importa tu archivo CSS

const ReviewEditForm = ({ review, onClose, onReviewEdited }) => {
  const [editedReview, setEditedReview] = useState({
    rating: review.rating,
    text: review.text,
  });

  const handleRatingChange = (newRating) => {
    setEditedReview({ ...editedReview, rating: newRating });
  };

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setEditedReview({ ...editedReview, text: newText });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Actualiza la revisión con el nuevo texto, rating y marca como editada
      await firebaseInstance.db.collection("reviews").doc(review.id).update({
        text: editedReview.text,
        rating: editedReview.rating,
        date: getCurrentDateTimeUpdate(),
        edited: true,
      });

      // Llama a la función de devolución de llamada después de editar con éxito
      onReviewEdited();
      // Cierra el modal de edición
      onClose();
    } catch (error) {
      console.error("Error al editar la revisión:", error);
    }
  };

  const handleCancelEdit = () => {
    // Cierra el modal de edición sin guardar cambios
    onClose();
  };

  return (
    <div className="review-modal">
      <div className="review-modal-content">
        <h2 className="tittle">EDIT REVIEW</h2>
        <form className="review-form" onSubmit={handleSubmit}>
          <div>
            Comment:
            <textarea
              className="review-modal-textarea"
              value={editedReview.text}
              onChange={handleTextChange}
            />
          </div>
          <div className="star-rating">
            Rating:
            <StarRating rating={editedReview.rating} onRatingChange={handleRatingChange} />
          </div>
          <button type="submit" className="review-submit-button">
            Send
          </button>
          <button className="review-modal-button2" onClick={handleCancelEdit}>
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewEditForm;