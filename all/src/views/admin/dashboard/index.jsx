import { useDocumentTitle, useScrollTop } from "@/hooks";
import React from "react";
import AddProduct from "../add_product/index";
import Products from "../products/index";
import UsersList from "../../../components/user/UsersList";

const Dashboard = () => {
  useDocumentTitle("Welcome | Admin Dashboard");
  useScrollTop();

  return (
    <div className="loader">
      <h2>Admin</h2>
      <Products />
      <UsersList />
    </div>
  );
};

export default Dashboard;
