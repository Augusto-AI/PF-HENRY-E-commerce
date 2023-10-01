import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const CustomerReview = () => {
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    // Configura la referencia a la colección "reviews" en Firestore
    const reviewsCollection = firebase.firestore().collection("reviews");

    // Escucha cambios en la colección "reviews"
    const unsubscribe = reviewsCollection.onSnapshot((snapshot) => {
      const updatedReviews = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setReviewsData(updatedReviews);
    });

    // Detén la escucha cuando el componente se desmonte
    return () => unsubscribe();
  }, []);

  // Procesa las fechas y calificaciones de Firestore
  const formattedReviews = reviewsData.map((review) => ({
    x: new Date(review.date).getTime(),
    y: review.rating,
  }));

  const data = {
    series: [
      {
        name: "Rating",
        data: reviewsData.map((review) => review.rating), // Usamos las calificaciones de Firebase
      },
    ],
    options: {
      chart: {
        type: "area",
        height: "auto",
      },
      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["#ff929f"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: false,
      },
      xaxis: {
        type: "datetime",
        categories: reviewsData.map((review) => new Date(review.date)), // Usamos las fechas de Firebase
      },
      yaxis: {
        show: false,
      },
      toolbar: {
        show: false,
      },
    },
  };

  return (
    <div className="CustomerReview">
      <Chart options={data.options} series={data.series} type="area" />
    </div>
  );
};

export default CustomerReview;
