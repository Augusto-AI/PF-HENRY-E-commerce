import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

export default function UsersTable() {
  const [users, setUsers] = useState([]);
  const [clickedButtons, setClickedButtons] = useState({});

  useEffect(() => {
    // Configura la referencia a la colección "users" en Firestore
    const usersCollection = firebase.firestore().collection("users");

    // Escucha cambios en la colección "users"
    const unsubscribe = usersCollection.onSnapshot((snapshot) => {
      const updatedUsers = [];
      snapshot.forEach((doc) => {
        updatedUsers.push({ id: doc.id, ...doc.data() });
      });
      setUsers(updatedUsers);
    });

    // Detén la escucha cuando el componente se desmonte
    return () => unsubscribe();
  }, []);

  const deleteUser = async (userId) => {
    try {
      // Realiza un borrado lógico del usuario estableciendo un campo "deleted" en true
      await firebase.firestore().collection("users").doc(userId).update({
        deleted: true,
      });
      console.log("Usuario desactivado:", userId);

      // Marca el botón como clicado
      setClickedButtons((prevState) => ({
        ...prevState,
        [userId]: true,
      }));
    } catch (error) {
      console.error("Error al desactivar el usuario:", error);
    }
  };

  return (
    <div className="Table">
      <h3>Lista de Usuarios</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID de Usuario</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Rol</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.fullname}</TableCell>{" "}
                {/* Mostrar el nombre en lugar del ID */}
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color={clickedButtons[user.id] ? "secondary" : "primary"}
                    onClick={() => deleteUser(user.id)}
                  >
                    {user.deleted ? "DESACTIVADO" : "DESACTIVAR"}
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
