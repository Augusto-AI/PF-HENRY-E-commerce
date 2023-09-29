import PropType from "prop-types";
import React from "react";
import UserItem from "./UserItem";
import { useSelector } from "react-redux";

const UserGrid = ({ users }) => {
  const darkMode = useSelector((state) => state.darkMode);

  const array = Object.values(darkMode);
  const darkModelo = array[0];

  return (
    <div className={`user-grid ${darkModelo ? "dark-mode" : ""}`}>
      {users.length === 0
        ? new Array(12).fill({}).map((user, index) => (
            <UserItem
              // eslint-disable-next-line react/no-array-index-key
              key={`user-skeleton ${index}`}
              user={user}
            />
          ))
        : users.map((user) => <UserItem key={user.id} user={user} />)}
    </div>
  );
};

UserGrid.propTypes = {
  users: PropType.array.isRequired,
};

export default UserGrid;
