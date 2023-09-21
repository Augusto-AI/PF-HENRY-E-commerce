import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectFilter } from "@/selectors/selector";
import { UsersNavbar } from "../components"; // Import your UsersNavbar component
import UsersTable from "../components/UsersTable"; // Import your UsersTable component
import { Boundary } from "@/components/common";
import { AppliedFilters } from "@/components/user"; // Import your AppliedFilters component if needed
import { useDocumentTitle, useScrollTop } from "@/hooks";

const Users = () => {
  useDocumentTitle("User List | HENRY & CO. Admin");
  useScrollTop();

  const store = useSelector((state) => ({
    filteredUsers: selectFilter(state.users.items, state.filter),
    requestStatus: state.app.requestStatus,
    isLoading: state.app.loading,
    users: state.users,
  }));

  // Check if store.users.items is defined before accessing its length property
  const usersCount = store.users.items ? store.users.items.length : 0;

  return (
    <Boundary>
      <UsersNavbar
        usersCount={usersCount} // Use the conditional usersCount here
        totalUsersCount={store.users.total}
      />
      <div className="user-admin-items">
        {/* You can include AppliedFilters component here if needed */}
        <UsersTable filteredUsers={store.filteredUsers} />
      </div>
    </Boundary>
  );
};

export default withRouter(Users);
