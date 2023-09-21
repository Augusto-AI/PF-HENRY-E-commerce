import { useDocumentTitle, useScrollTop } from "@/hooks";
import React from "react";
import AddProduct from "../add_product/index";
import Products from "../products/index";
import Users from "../users/index";

const Dashboard = () => {
  useDocumentTitle("Welcome | Admin Dashboard");
  useScrollTop();

  return (
    <div className="loader">
      <h2>Administrator</h2>
      <Products />
      <Users />
    </div>
  );
};

export default Dashboard;
