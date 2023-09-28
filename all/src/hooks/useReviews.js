import { useEffect, useState } from "react";
import firebase from "@/services/firebase";

const useReviews = (reviewId) => {
  // Get and check if the review exists in the store (if applicable)
  // Replace this with your Redux or local state logic if necessary
  // const storeReview = useSelector((state) => state.reviews.items.find((item) => item.id === reviewId));

  const [review, setReview] = useState(null); // Change this initial state value if needed
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        // Check if the review is already in the local state (if applicable)
        // Replace this logic with your Redux or local state handling
        // if (storeReview) {
        //   setReview(storeReview);
        //   setLoading(false);
        //   return;
        // }

        setLoading(true);
        const doc = await firebase.getSingleReview(reviewId);

        if (doc.exists) {
          const data = { ...doc.data(), id: doc.id };

          setReview(data);
          setLoading(false);
        } else {
          setError("Review not found.");
        }
      } catch (err) {
        setLoading(false);
        setError(err?.message || "Something went wrong.");
      }
    })();
  }, [reviewId]);

  return { review, isLoading, error };
};

export default useReviews;
