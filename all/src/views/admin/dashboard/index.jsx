import { useDocumentTitle, useScrollTop } from "@/hooks";
import React from "react";
import AddProduct from "../add_product/index";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import UsersTable from "../Table/UsersTable";

const Dashboard = () => {
  useDocumentTitle("Welcome | Admin Dashboard");
  useScrollTop();

  return (
    <div className="loader">
      <h2>Admin</h2>
      <Cards />

      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ flex: "1", marginRight: "16px" }}>
          <UsersTable />
        </div>
        <div style={{ flex: "1", marginRight: "16px" }}>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
