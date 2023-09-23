import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


const UserOrdersTab = () => {
  const purchasedItems = useSelector((state) => state.purchasedItems);
console.log(purchasedItems)

const items = Object.values(purchasedItems)
  return (
    <div className="loader" style={{ minHeight: "80vh" }}>
      <h3>My Orders</h3>
      {items.length !== 0 ? (
        items.map((item) => (
          <div key={item.id} className="order-card">
            <img src={item.image} alt={item.description} />
            <p>{item.description}</p>
            <p>Brand: {item.brand}</p>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))
      ) : (
        <strong>
          <span className="text-subtle">You don't have any orders</span>
        </strong>
      )}
    </div>
  );
};

export default UserOrdersTab;
