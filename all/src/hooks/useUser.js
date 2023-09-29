import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import firebase from "@/services/firebase";

const useUser = () => {
  // Obtener y verificar si el usuario existe en el almacenamiento global
  const storeUser = useSelector((state) => state.auth.user);

  const [Users, setUsers] = useState(storeUser);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Función asincrónica para obtener los datos del usuario
    const fetchUser = async () => {
      try {
        // Comprueba si ya existe una instancia de usuario en el estado local
        if (!Users || Users.id !== storeUser.id) {
          setLoading(true);

          // Llama a tu servicio para obtener los datos del usuario
          const Users = await firebase.getUsers(storeUser.id);

          if (Users) {
            // Actualiza el estado local con los datos del usuario
            setUsers(Users);
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
  }, [Users, storeUser.id]);

  return { Users, isLoading, error };
};

export default useUser;
