import React, { useState } from "react";
import firebaseInstance from "@/services/firebase";
import { getCurrentDateTime } from "./DateTime";
import StarRating from "./StarRating"; // Asegúrate de importar StarRating
import "./Review.css"; // Importa tu archivo CSS



const ReviewForm = ({ productId, userEmail, userName }) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Obtén la fecha y hora actuales en formato inglés
      const { date, time } = getCurrentDateTime();
      // Agrega una nueva revisión a la colección "reviews" en Firebase
      await firebaseInstance.db.collection("reviews").add({
        productId,
        userId: userEmail,
        username: userName,
        text,
        rating,
        date,
        time,
        edited: false,
      });

      // Limpia los campos del formulario después de enviar la revisión
      setText("");
      setRating(1);


      // Puedes realizar alguna acción adicional después de enviar la revisión si es necesario
    } catch (error) {
      console.error("Error al enviar la revisión:", error);
      // Maneja el error según tus necesidades
    }
  };

  return (
    <div >
      <h2 className="tittle">LEAVE A REVIEW</h2>
    <form className="review-form" onSubmit={handleSubmit}>
      <div>
        Comment:
        <textarea
          id="reviewText"
          className="review-textarea"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Write your review here..."
          required
        />
      </div>
      <div>
        
        
      </div>
      <div className="star-rating">
        Rating:  
        <StarRating rating={rating} onRatingChange={setRating} />
      </div>
      <button type="submit" className="review-submit-button">
        Send
      </button>
    </form>
    </div>
  );
};

export default ReviewForm;