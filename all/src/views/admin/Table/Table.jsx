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
import "./Table.scss";

export default function OrdersTable() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const ordersCollection = firebase.firestore().collection("orders");
    const unsubscribe = ordersCollection.onSnapshot(async (snapshot) => {
      const updatedOrders = [];

      for (const doc of snapshot.docs) {
        const orderData = doc.data();
        const products = orderData.product.map((productItem) => {
          return {
            brand: productItem.brand,
            product: productItem.description,
            quantity: productItem.quantity,
          };
        });

        // Obtén los datos del usuario a partir del UserId
        const userData = await getUserData(orderData.UserId);

        updatedOrders.push({
          id: doc.id,
          UserId: orderData.UserId,
          UserName: userData.fullname, // Agrega el nombre del usuario
          Email: userData.email, // Agrega el correo electrónico del usuario
          Rol: userData.role, // Agrega el rol del usuario
          products: products,
        });
      }

      setOrders(updatedOrders);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const deleteUser = async (orderId) => {
    try {
      // Aquí debes implementar la lógica para dar de baja una orden
      console.log("Orden desactivada:", orderId);
    } catch (error) {
      console.error("Error al desactivar la orden:", error);
    }
  };

  // Función para obtener los datos del usuario
  const getUserData = async (userId) => {
    const userDoc = await firebase
      .firestore()
      .collection("users")
      .doc(userId)
      .get();
    return userDoc.data();
  };

  return (
    <div className="Table">
      <h3>Órdenes Recientes</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="tabla simple">
          <TableHead>
            <TableRow>
              <TableCell>User Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Rol</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Activate</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) =>
              order.products.map((product, index) => (
                <TableRow key={order.id + "_" + index}>
                  <TableCell>{order.UserName}</TableCell>
                  <TableCell>{order.Email}</TableCell>
                  <TableCell>{order.Rol}</TableCell>
                  <TableCell>{product.brand}</TableCell>
                  <TableCell>{product.product}</TableCell>
                  <TableCell>{product.quantity}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => deleteUser(order.id)}
                    >
                      Desactivate
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
