import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import firebase from "@/services/firebase";

const useUser = () => {
  // Quita el argumento 'user' aquí
  // Obtener y verificar si el usuario existe en el almacenamiento global
  const storeUser = useSelector((state) => state.auth.user);

  const [userData, setUserData] = useState(storeUser); // Cambia el nombre de 'user' a 'userData'
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Función asincrónica para obtener los datos del usuario
    const fetchUser = async () => {
      try {
        // Comprueba si ya existe una instancia de usuario en el estado local
        if (!userData || userData.id !== storeUser.id) {
          // Cambia 'user' a 'userData' y compara con 'storeUser.id'
          setLoading(true);

          // Llama a tu servicio para obtener los datos del usuario
          const userData = await firebase.getUserData(userId);

          if (userData) {
            // Actualiza el estado local con los datos del usuario
            setUserData(userData); // Cambia 'setUser' a 'setUserData'
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
  }, [userData, storeUser.id]); // Cambia 'user' a 'userData' y usa 'storeUser.id' como dependencia

  return { userData, isLoading, error }; // Cambia 'user' a 'userData'
};

export default useUser;
