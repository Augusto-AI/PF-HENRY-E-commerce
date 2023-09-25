// UserList.js
import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import UserDetail from "./UserDetail";
import "../../styles/5 - components/admin/UserList.scss";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [, forceUpdate] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersCollection = firebase.firestore().collection("users");
        const querySnapshot = await usersCollection.get();
        const userData = [];
        querySnapshot.forEach((doc) => {
          userData.push({ id: doc.id, ...doc.data() });
        });
        setUsers(userData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users:", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDeleteUser = async (userId) => {
    try {
      await firebase.firestore().collection("users").doc(userId).delete();
      console.log("User deleted:", userId);

      // Actualiza la lista de usuarios después de eliminar uno
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleChangeUserRole = (userId, newRole) => {
    try {
      firebase
        .firestore()
        .collection("users")
        .doc(userId)
        .update({ role: newRole })
        .then(() => {
          // Actualiza la lista de usuarios después de cambiar el rol
          setUsers((prevUsers) =>
            prevUsers.map((user) =>
              user.id === userId ? { ...user, role: newRole } : user
            )
          );

          // Muestra el aviso de cambio de rol
          setShowNotification(true);
          setNotificationMessage(`Rol cambiado a ${newRole}`);

          // Forzar la actualización del componente
          forceUpdate(Date.now());
        });
      console.log("User role changed:", userId, newRole);
    } catch (error) {
      console.error("Error changing user role:", error);
    }
  };

  return (
    <div className="user-list-container">
      {" "}
      {/* Aplica una clase para el contenedor principal */}
      <h2>Users</h2>
      {isLoading ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <UserDetail
                user={user}
                onDelete={() => handleDeleteUser(user.id)}
                onChangeRole={(newRole) =>
                  handleChangeUserRole(user.id, newRole)
                }
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UserList;
