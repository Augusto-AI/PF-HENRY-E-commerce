import React from "react";
import { useHistory } from "react-router-dom";
import PropType from "prop-types";
import { CheckOutlined } from "@ant-design/icons";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { displayMoney } from "@/helpers/utils";
import { ImageLoader } from "@/components/common";

const UserItem = ({ user, isUserSelected, selectUser }) => {
  const history = useHistory();

  const onClickUser = () => {
    if (!user) return;

    if (user.id) {
      history.push(`/user/${user.id}`);
    }
  };

  const userSelected = isUserSelected ? isUserSelected(user.id) : false;

  const handleSelectUser = () => {
    if (selectUser) selectUser(user.id);
  };

  return (
    <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
      <div
        className={`user-card ${!user.id ? "user-loading" : ""}`}
        style={{
          border: user && userSelected ? "1px solid #a6a5a5" : "",
          boxShadow:
            user && userSelected ? "0 10px 15px rgba(0, 0, 0, .07)" : "none",
        }}
      >
        {userSelected && (
          <CheckOutlined className="fa fa-check user-card-check" />
        )}
        <div
          className="user-card-content"
          onClick={onClickUser}
          role="presentation"
        >
          <div className="user-card-img-wrapper">
            {user.image ? (
              <ImageLoader
                alt={user.name}
                className="user-card-img"
                src={user.image}
              />
            ) : (
              <Skeleton width="100%" height="90%" />
            )}
          </div>
          <div className="user-details">
            <h5 className="user-card-name text-overflow-ellipsis margin-auto">
              {user.name || <Skeleton width={80} />}
            </h5>
            <p className="user-card-email">
              {user.email || <Skeleton width={60} />}
            </p>
            {/* Add more user details as needed */}
          </div>
        </div>
        {user.id && (
          <button
            className={`user-card-button button-small button button-block ${
              userSelected ? "button-border button-border-gray" : ""
            }`}
            onClick={handleSelectUser}
            type="button"
          >
            {userSelected ? "Deselect User" : "Select User"}
          </button>
        )}
      </div>
    </SkeletonTheme>
  );
};

UserItem.defaultProps = {
  isUserSelected: undefined,
  selectUser: undefined,
};

UserItem.propTypes = {
  user: PropType.object.isRequired,
  isUserSelected: PropType.func,
  selectUser: PropType.func,
};

export default UserItem;
