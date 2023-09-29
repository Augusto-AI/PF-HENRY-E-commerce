import React, { useState } from "react";
import { useSelector } from "react-redux";
import firebaseInstance from "@/services/firebase";
import { getCurrentDateTime } from "./DateTime";
import { Link } from 'react-router-dom';
import StarRating from "./StarRating"; // Asegúrate de importar StarRating
import "./Review.css"; // Importa tu archivo CSS



const ReviewForm = ({ productId, onClose }) => {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(1);
<<<<<<< HEAD
  const [reviewSent, setReviewSent] = useState(false);

  const { profile } = useSelector((state) => ({
   
    profile: state.profile,
   
  }));

  const { auth} = useSelector((state) => ({
   
    auth: state.auth,

  }));
=======
>>>>>>> d5a239fbb69513f0b45e5e5690abc08a0c9b5671

  const handleSubmit = async (e) => {
    e.preventDefault();
   

    try {
      // Obtén la fecha y hora actuales en formato inglés
      const { date, time } = getCurrentDateTime();
      // Agrega una nueva revisión a la colección "reviews" en Firebase
      await firebaseInstance.db.collection("reviews").add({
        productId,
        userId: auth.id,
        username: profile.fullname,
        email: profile.email,
        text,
        rating,
        date,
        time,
        edited: false,
      });

      // Limpia los campos del formulario después de enviar la revisión
      setReviewSent(true);

      


      // Puedes realizar alguna acción adicional después de enviar la revisión si es necesario
    } catch (error) {
      console.error("Error al enviar la revisión:", error);
      // Maneja el error según tus necesidades
    }
  };

  return (
    <div >
      <h2 className="tittle">
        {reviewSent ? "Send review successfully!" : "LEAVE A REVIEW"}
      </h2>
      {reviewSent ? (
        <div>
          <Link to={`/product/${productId}`} className="review-submit-button">
            Close
          </Link>
        </div>
      ) : (
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
    )}
    </div>
  );
};

export default ReviewForm;