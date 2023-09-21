import { FilterOutlined, PlusOutlined } from "@ant-design/icons";
import { FiltersToggle, SearchBar } from "@/components/common";
import { ADD_USER } from "@/constants/routes"; // Update route constant to ADD_USER
import PropTypes from "prop-types";
import React from "react";
import { useHistory } from "react-router-dom";

const UsersNavbar = (props) => {
  const { usersCount, totalUsersCount } = props; // Update variable names to usersCount and totalUsersCount
  const history = useHistory();

  return (
    <div className="user-admin-header">
      <h3 className="user-admin-header-title">
        Users &nbsp; ({`${usersCount} / ${totalUsersCount}`})
      </h3>
      <SearchBar />
      &nbsp;
      <FiltersToggle>
        <button className="button-muted button-small" type="button">
          <FilterOutlined />
          &nbsp;More Filters
        </button>
      </FiltersToggle>
      <button
        className="button button-small"
        onClick={() => history.push(ADD_USER)}
        type="button"
      >
        <PlusOutlined />
        &nbsp; Add New User
      </button>
    </div>
  );
};

UsersNavbar.propTypes = {
  usersCount: PropTypes.number.isRequired, // Update PropType name to usersCount
  totalUsersCount: PropTypes.number.isRequired,
  // Update PropType name to totalUsersCount
};

export default UsersNavbar;
