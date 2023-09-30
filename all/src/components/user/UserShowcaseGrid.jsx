import React from "react";
import { useSelector } from "react-redux";
import { UserFeatured } from "@/components/user"; // Asegúrate de importar el componente de usuario correcto
import PropTypes from "prop-types";

const UserShowcaseGrid = ({ users, skeletonCount }) => {
  const darkMode = useSelector((state) => state.darkMode);
  const array = Object.values(darkMode);
  const darkModelo = array[0];

  return (
    <div className={`user-display-grid ${darkModelo ? "dark-mode" : ""}`}>
      {users.length === 0
        ? new Array(skeletonCount)
            .fill({})
            .map((user, index) => (
              <UserFeatured key={`user-skeleton ${index}`} user={user} />
            ))
        : users.map((user) => <UserFeatured key={user.id} user={user} />)}
    </div>
  );
};

UserShowcaseGrid.defaultProps = {
  skeletonCount: 4,
};

UserShowcaseGrid.propTypes = {
  users: PropTypes.array.isRequired,
  skeletonCount: PropTypes.number,
};

export default UserShowcaseGrid;
