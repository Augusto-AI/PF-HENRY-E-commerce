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
import "./Table.scss";

export default function OrdersTable() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Configura la referencia a la colección "orders" en Firestore
    const ordersCollection = firebase.firestore().collection("orders");

    // Escucha cambios en la colección "orders"
    const unsubscribe = ordersCollection.onSnapshot((snapshot) => {
      const updatedOrders = [];
      snapshot.forEach((doc) => {
        updatedOrders.push({ id: doc.id, ...doc.data() });
      });
      setOrders(updatedOrders);
    });

    // Detén la escucha cuando el componente se desmonte
    return () => unsubscribe();
  }, []);

  return (
    <div className="Table">
      <h3>Recent Orders</h3>
      <TableContainer
        component={Paper}
        style={{ boxShadow: "0px 13px 20px 0px #80808029" }}
      >
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>UserId</TableCell>
              <TableCell>Brand</TableCell>
              <TableCell>Product</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.UserId}</TableCell>
                <TableCell>{order.brand}</TableCell>
                <TableCell>{order.image}</TableCell>
                <TableCell>{order.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
