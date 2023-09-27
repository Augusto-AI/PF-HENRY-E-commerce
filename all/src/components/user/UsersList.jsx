import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import UserDetail from "./UserDetail";
import Paper from "@mui/material/Paper";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
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
    <div className="Table">
      <h3>Users</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell align="left">Actions</TableCell>
              <TableCell align="left">Role</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={3}>Loading users...</TableCell>
              </TableRow>
            ) : (
              users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <UserDetail
                      user={user}
                      onDelete={() => handleDeleteUser(user.id)}
                      onChangeRole={(newRole) =>
                        handleChangeUserRole(user.id, newRole)
                      }
                    />
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserList;
