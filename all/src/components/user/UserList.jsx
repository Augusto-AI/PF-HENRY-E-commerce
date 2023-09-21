import React from "react";
import PropTypes from "prop-types";
import { CloseCircleOutlined } from "@ant-design/icons";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { applyFilter } from "@/redux/actions/filterActions";

const UserAppliedFilters = ({ filteredUsersCount }) => {
  const filter = useSelector((state) => state.filter, shallowEqual);
  const fields = ["role", "minAge", "maxAge", "sortBy", "keyword"]; // Assuming these are your filter fields
  const isFiltered = fields.some((key) => !!filter[key]);
  const dispatch = useDispatch();

  const onRemoveKeywordFilter = () => {
    dispatch(applyFilter({ keyword: "" }));
  };

  const onRemoveAgeRangeFilter = () => {
    dispatch(applyFilter({ minAge: 0, maxAge: 0 }));
  };

  const onRemoveRoleFilter = () => {
    dispatch(applyFilter({ role: "" }));
  };

  const onRemoveSortFilter = () => {
    dispatch(applyFilter({ sortBy: "" }));
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
        {filter.keyword && (
          <div className="pill-wrapper">
            <span className="d-block">Keyword</span>
            <div className="pill padding-right-l">
              <h5 className="pill-content margin-0">{filter.keyword}</h5>
              <div
                className="pill-remove"
                onClick={onRemoveKeywordFilter}
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
        {(!!filter.minAge || !!filter.maxAge) && (
          <div className="pill-wrapper">
            <span className="d-block">Age Range</span>
            <div className="pill padding-right-l">
              <h5 className="pill-content margin-0">
                {`${filter.minAge} - ${filter.maxAge} years`}
              </h5>
              <div
                className="pill-remove"
                onClick={onRemoveAgeRangeFilter}
                role="presentation"
              >
                <h5 className="margin-0 text-subtle">
                  <CloseCircleOutlined />
                </h5>
              </div>
            </div>
          </div>
        )}
        {filter.sortBy && (
          <div className="pill-wrapper">
            <span className="d-block">Sort By</span>
            <div className="pill padding-right-l">
              <h5 className="pill-content margin-0">
                {filter.sortBy === "name-asc"
                  ? "Name A - Z"
                  : filter.sortBy === "name-desc"
                  ? "Name Z - A"
                  : filter.sortBy === "age-asc"
                  ? "Age Low - High"
                  : "Age High - Low"}
              </h5>
              <div
                className="pill-remove"
                onClick={onRemoveSortFilter}
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
