import React from "react";
import PropTypes from "prop-types";
import { UserItem } from ".";
import { useDispatch } from "react-redux";
import { deleteUser, changeUserRole } from "@/redux/actions/userActions";
import { displayActionMessage } from "@/helpers/utils";

const UsersTable = ({ users }) => {
  const dispatch = useDispatch();

  const onDeleteUser = (userId) => {
    dispatch(removeUser(userId));
    displayActionMessage("User successfully deleted");
  };

  const onChangeRoleToAdmin = (userId) => {
    dispatch(changeUserRole(userId));
    displayActionMessage("User role changed to ADMIN");
  };

  return (
    <div>
      {users.length > 0 && (
        <div className="grid grid-user grid-count-6">
          <div className="grid-col" />
          <div className="grid-col">
            <h5>Name</h5>
          </div>
          <div className="grid-col">
            <h5>Email</h5>
          </div>
          {/* Add more headers for other user attributes */}
        </div>
      )}
      {users.length === 0
        ? new Array(10).fill({}).map((user, index) => (
            <UserItem
              key={`user-skeleton-${index}`} // Provide a unique key
              user={user}
              onDeleteUser={() => onDeleteUser(user.id)}
              onChangeRoleToAdmin={() => onChangeRoleToAdmin(user.id)}
            />
          ))
        : users.map((user) => (
            <UserItem
              key={user.id} // Use a unique attribute as the key
              user={user}
              onDeleteUser={() => onDeleteUser(user.id)}
              onChangeRoleToAdmin={() => onChangeRoleToAdmin(user.id)}
            />
          ))}
    </div>
  );
};

UsersTable.propTypes = {
  users: PropTypes.array.isRequired,
};

export default UsersTable;
