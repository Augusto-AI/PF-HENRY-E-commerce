import React from "react";
import { CloseCircleOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { applyFilter } from "@/redux/actions/filterActions"; // Import the correct action

const UserAppliedFilters = ({ filteredUsersCount }) => {
  const filter = useSelector((state) => state.userFilter, shallowEqual);
  const fields = ["name", "email", "role"];
  const isFiltered = fields.some((key) => !!filter[key]);
  const dispatch = useDispatch();

  const onRemoveNameFilter = () => {
    dispatch(applyFilter({ name: "" })); // Use the correct action here
  };

  const onRemoveEmailFilter = () => {
    dispatch(applyFilter({ email: "" })); // Use the correct action here
  };

  const onRemoveRoleFilter = () => {
    dispatch(applyFilter({ role: "" })); // Use the correct action here
  };

  return !isFiltered ? null : (
    <>
      <div className="user-list-header">
        <div className="user-list-header-title">
          <h5>
            {filteredUsersCount > 0 &&
              `Found ${filteredUsersCount} ${
                filteredUsersCount > 1 ? "users" : "user"
              }`}
          </h5>
        </div>
      </div>
      <div className="user-applied-filters">
        {filter.name && (
          <div className="pill-wrapper">
            <span className="d-block">Name</span>
            <div className="pill padding-right-l">
              <h5 className="pill-content margin-0">{filter.name}</h5>
              <div
                className="pill-remove"
                onClick={onRemoveNameFilter}
                role="presentation"
              >
                <h5 className="margin-0 text-subtle">
                  <CloseCircleOutlined />
                </h5>
              </div>
            </div>
          </div>
        )}
        {filter.email && (
          <div className="pill-wrapper">
            <span className="d-block">Email</span>
            <div className="pill padding-right-l">
              <h5 className="pill-content margin-0">{filter.email}</h5>
              <div
                className="pill-remove"
                onClick={onRemoveEmailFilter}
                role="presentation"
              >
                <h5 className="margin-0 text-subtle">
                  <CloseCircleOutlined />
                </h5>
              </div>
            </div>
          </div>
        )}
        {filter.role && (
          <div className="pill-wrapper">
            <span className="d-block">Role</span>
            <div className="pill padding-right-l">
              <h5 className="pill-content margin-0">{filter.role}</h5>
              <div
                className="pill-remove"
                onClick={onRemoveRoleFilter}
                role="presentation"
              >
                <h5 className="margin-0 text-subtle">
                  <CloseCircleOutlined />
                </h5>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

UserAppliedFilters.defaultProps = {
  filteredUsersCount: 0,
};

UserAppliedFilters.propTypes = {
  filteredUsersCount: PropTypes.number,
};

export default UserAppliedFilters;
