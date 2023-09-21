import React, { useRef } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useDispatch } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import { deleteUser, changeUserRole } from "@/redux/actions/userActions"; // Import your user-related actions
import { displayActionMessage } from "@/helpers/utils";

const UserItem = ({ user }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userRef = useRef(null);

  const onClickEdit = () => {
    // Implement navigation to edit user profile if needed
    // history.push(`/edit-user/${user.id}`);
  };

  const onDeleteUser = () => {
    userRef.current.classList.toggle("item-active");
  };

  const onConfirmDelete = () => {
    dispatch(removeUser(user.id)); // Dispatch your remove user action
    displayActionMessage("User successfully deleted");
    userRef.current.classList.remove("item-active");
  };

  const onCancelDelete = () => {
    userRef.current.classList.remove("item-active");
  };

  const onChangeRoleToAdmin = () => {
    dispatch(changeUserRole(user.id)); // Dispatch your change user role action
    displayActionMessage("User role changed to ADMIN");
  };

  return (
    <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
      <div
        className={`item item-users ${!user.id && "item-loading"}`}
        ref={userRef}
      >
        {/* Display user-related information similar to how you did with products */}
        <div className="grid grid-count-6">
          {/* Modify this section to display user-specific fields */}
          <div className="grid-col">
            <span className="text-overflow-ellipsis">
              {user.name || <Skeleton width={50} />}
            </span>
          </div>
          <div className="grid-col">
            <span>{user.email || <Skeleton width={50} />}</span>
          </div>
          {/* Add more grid-cols for other user attributes */}
        </div>

        {user.id && (
          <div className="item-action">
            <button
              className="button button-border button-small"
              onClick={onClickEdit}
              type="button"
            >
              Edit
            </button>
            &nbsp;
            <button
              className="button button-border button-small button-danger"
              onClick={onDeleteUser}
              type="button"
            >
              Delete
            </button>
            &nbsp;
            <button
              className="button button-border button-small"
              onClick={onChangeRoleToAdmin}
              type="button"
            >
              Change to ADMIN
            </button>
            <div className="item-action-confirm">
              <h5>Are you sure you want to delete this user?</h5>
              <button
                className="button button-small button-border"
                onClick={onCancelDelete}
                type="button"
              >
                No
              </button>
              &nbsp;
              <button
                className="button button-small button-danger"
                onClick={onConfirmDelete}
                type="button"
              >
                Yes
              </button>
            </div>
          </div>
        )}
      </div>
    </SkeletonTheme>
  );
};

export default withRouter(UserItem);
