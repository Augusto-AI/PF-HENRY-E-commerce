import { useEffect, useState } from "react";
import firebase from "@/services/firebase";

const useOrders = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch orders from Firebase
    const fetchOrders = async () => {
      try {
        const querySnapshot = await firebase.getOrders(); // Replace with your Firebase service function to get orders.

        const ordersData = [];
        querySnapshot.forEach((doc) => {
          const data = { ...doc.data(), id: doc.id };
          ordersData.push(data);
        });

        setOrders(ordersData);
        setLoading(false);
      } catch (err) {
        setError(err?.message || "Something went wrong.");
        setLoading(false);
      }
    };

    // Call the fetchOrders function
    fetchOrders();
  }, []);

  return { orders, isLoading, error };
};

export default useOrders;
