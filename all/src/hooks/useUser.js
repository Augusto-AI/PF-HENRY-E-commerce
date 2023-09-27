import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import firebase from "@/services/firebase";

const useUser = () => {
  // Obtener y verificar si el usuario existe en el almacenamiento global
  const storeUser = useSelector((state) => state.auth.user);

  const [userData, setUserData] = useState(storeUser);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Función asincrónica para obtener los datos del usuario
    const fetchUser = async () => {
      try {
        // Comprueba si ya existe una instancia de usuario en el estado local
        if (!userData || userData.id !== storeUser.id) {
          setLoading(true);

          // Llama a tu servicio para obtener los datos del usuario
          const userData = await firebase.getUserData(storeUser.id);

          if (userData) {
            // Actualiza el estado local con los datos del usuario
            setUserData(userData);
            setLoading(false);
          } else {
            setError("Usuario no encontrado.");
          }
        }
      } catch (err) {
        // Manejo de errores (puedes personalizarlo según tus necesidades)
        setLoading(false);
        setError(err?.message || "Algo salió mal.");
      }
    };

    // Llama a la función para obtener los datos del usuario
    fetchUser();
  }, [userData, storeUser.id]);

  return { userData, isLoading, error };
};

export default useUser;
