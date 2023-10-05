/* eslint-disable react/no-multi-comp */
import { LoadingOutlined } from "@ant-design/icons";
import { useDocumentTitle, useScrollTop } from "@/hooks";
import React, { lazy, Suspense } from "react";
import UserTab from "../components/UserTab";
import { useSelector } from "react-redux";


const UserAccountTab = lazy(() => import("../components/UserAccountTab"));
const UserOrdersTab = lazy(() => import("../components/UserOrdersTab"));

const Loader = () => (
  <div className="loader" style={{ minHeight: "80vh" }}>
    <LoadingOutlined />
    <h6>Loading ... </h6>
  </div>
);

const UserAccount = () => {
  useScrollTop();
  useDocumentTitle("My Account | PF HENRY & CO.");

  const darkMode = useSelector((state) => state.darkMode);

  const array = Object.values(darkMode);
  const darkModelo = array[0];

  return (
    <main className={`content ${darkModelo ? "dark-mode" : ""}`}>
      <UserTab>
        <div index={0} label="Account">
          <Suspense fallback={<Loader />}>
            <UserAccountTab />
          </Suspense>
        </div>

        <div index={2} label="My Orders">
          <Suspense fallback={<Loader />}>
            <UserOrdersTab />
          </Suspense>
        </div>
      </UserTab>
    </main>

  );
};

export default UserAccount;
