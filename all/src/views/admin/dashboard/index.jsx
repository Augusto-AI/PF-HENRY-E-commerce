import { useDocumentTitle, useScrollTop } from "@/hooks";
import React from "react";
import AddProduct from "../add_product/index";
import UsersList from "../../../components/user/UserList";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";
import RightSide from "../RigtSide/RightSide";

const Dashboard = () => {
  useDocumentTitle("Welcome | Admin Dashboard");
  useScrollTop();

  return (
    <div className="loader">
      <h2>Admin</h2>
      <Cards />
      <RightSide /> {/* Render RightSide component to the right */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <div style={{ flex: "1", marginRight: "16px" }}>
          <Table />
        </div>
        <div style={{ flex: "1", marginRight: "16px" }}>
          {/* <UsersList /> */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
