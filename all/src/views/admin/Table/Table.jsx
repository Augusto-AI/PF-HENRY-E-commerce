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
import { useSelector, useDispatch } from "react-redux";
import { setOrderStatus } from "../../../redux/actions/orderActions";

export default function OrdersTable() {
  const [orders, setOrders] = useState([]);
  const [orderStatus, setOrderStatus] = useState({});
  
  const orderArrive = useSelector((state) => state.orderArrive);
  const orderes = useSelector((state) => state.orderActive);
  const dispatch = useDispatch();

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
        
        const isArrive = orderData.isArrive;
        const isActive = orderData.isActive;


        const userData = await getUserData(orderData.UserId);
        updatedOrders.push({
          id: doc.id,
          UserId: orderData.UserId,
          UserName: userData.fullname,
          Email: userData.email,
          Rol: userData.role,
          products: products,
          isArrive: isArrive,
          isActive: isActive,
        });
      }
  console.log(updatedOrders)
      setOrders(updatedOrders);
    });
  
    return () => {
      unsubscribe();
    };
  }, []);
  
  const deleteUser = async (orderId) => {
    try {
      console.log("Orden desactivada:", orderId);
    } catch (error) {
      console.error("Error al desactivar la orden:", error);
    }
  };


  const markOrderAsArrived = (orderId) => {
    try {
      const orderRef = firebase.firestore().collection("orders").doc(orderId);
  
      orderRef.update({
        isArrive: true,
      });
      console.log(orderId);
    } catch (error) {
      console.error(error);
    }
  };
  
  const setOrderId = (orderId) => {
    dispatch(setOrderStatus(orderId));
  }
  

  // Función para obtener los datos del usuario
  const getUserData = async (userId) => {
    const userDoc = await firebase.firestore().collection("users").doc(userId).get();
    return userDoc.data();
  };

  return (
    <div className="Table">
      <h3>Recent Orders</h3>
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
              <TableCell>Has it been canceled?</TableCell>
              <TableCell>Product arrival information</TableCell>
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
                  <span

               style={{
               color: order.isActive ? "green" : "red",
               fontWeight: "bold",
               }}
               >
                {order.isActive ? "No" : "Yes"}
             </span>
             </TableCell>

                  <TableCell>
                  <Button
  variant="contained"
  color={order.isArrive ? "success" : (order.isActive ? "primary" : "error")}
  onClick={async () => {
    if (!order.isArrive && order.isActive) {
      await markOrderAsArrived(order.id);
      const updatedOrders = orders.map((o) => {
        if (o.id === order.id) {
          return { ...o, isArrive: true };
        }
        return o;
      });

      setOrders(updatedOrders);
    }
  }}
  disabled={order.isArrive || !order.isActive}
>
  {order.isArrive ? "Arrived" : (order.isActive ? "Has Arrived?" : "Canceled")}
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
