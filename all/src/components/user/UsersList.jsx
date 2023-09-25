import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import UserDetail from "./UserDetail";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);

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

  const handleEditUser = (userId, updatedUserData) => {
    try {
      firebase
        .firestore()
        .collection("users")
        .doc(userId)
        .update(updatedUserData);
      console.log("User updated:", userId);
    } catch (error) {
      console.error("Error editing user:", error);
    }
  };

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
        .update({ role: newRole });
      console.log("User role changed:", userId, newRole);
    } catch (error) {
      console.error("Error changing user role:", error);
    }
  };

  return (
    <div>
      <h2>Users</h2>
      {isLoading ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <UserDetail
                user={user}
                onEdit={(updatedUserData) =>
                  handleEditUser(user.id, updatedUserData)
                }
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
