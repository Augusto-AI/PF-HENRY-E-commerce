import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  clearRecentSearch,
  removeSelectedRecent,
  setTextFilter,
} from "@/redux/actions/filterActions";

const UserSearch = () => {
  const history = useHistory();

  const { usersLength, filter, users, isLoading } = useSelector((state) => ({
    filter: state.filter,
    users: state.users.items, // Assuming this is your user data
    isLoading: state.app.loading,
    usersLength: state.users.length, // Assuming you have a users array in your Redux state
  }));
  const dispatch = useDispatch();
  const searchInput = useRef(null);
  let input = "";

  useEffect(() => {
    searchInput.current.focus();
  }, []);

  const onSearchChange = (e) => {
    const val = e.target.value.trim();
    input = val;

    if (val === "" && usersLength !== 0) {
      dispatch(setTextFilter(val));
      history.push("/");
    }
  };

  const onKeyUp = (e) => {
    if (e.keyCode === 13 && usersLength !== 0) {
      dispatch(setTextFilter(input));
      history.push("/");
    }
  };

  const onClearRecentSearch = () => {
    dispatch(clearRecentSearch());
  };

  return (
    <div className="user-search">
      <div className="user-search-header">
        <h3 onClick={history.goBack} role="presentation">
          <i className="fa fa-chevron-left" />
        </h3>
        <div className="user-search-wrapper">
          <input
            className="user-search-input"
            onChange={onSearchChange}
            onKeyUp={onKeyUp}
            placeholder="Search for user..."
            ref={searchInput}
            type="text"
          />
          <div className="searchbar-icon" />
        </div>
      </div>
      <div className="user-search-body">
        <div className="user-search-recent">
          <div className="user-search-recent-header">
            <h5>Recent Searches</h5>
            <h5
              onClick={onClearRecentSearch}
              style={{ color: "red" }}
              role="presentation"
            >
              Clear
            </h5>
          </div>
          {filter.recent.map((item, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div className="pill-wrapper" key={`${item}${index}`}>
              <div className="pill padding-right-l">
                <h5
                  className="pill-content margin-0"
                  onClick={() => {
                    dispatch(setTextFilter(item));
                    history.push("/");
                  }}
                  role="presentation"
                >
                  {item}
                </h5>
                <div
                  className="pill-remove"
                  onClick={() => dispatch(removeSelectedRecent(item))}
                  role="presentation"
                >
                  <h5 className="text-subtle margin-0">
                    <i className="fa fa-times-circle" />
                  </h5>
                </div>
              </div>
            </div>
          ))}
          {filter.recent.length === 0 && (
            <h5 className="text-subtle">No recent searches</h5>
          )}
        </div>
        <div className="user-search-filter">
          <h5 className="margin-0">Choose Filters</h5>
        </div>
        {/* Replace 'Filters' component with user-specific filter component */}
        {/* You'll need to create a 'UserFilters' component */}
        {/* Example: <UserFilters dispatch={dispatch} filter={filter} isLoading={isLoading} users={users} usersLength={usersLength} /> */}
      </div>
    </div>
  );
};

export default UserSearch;
