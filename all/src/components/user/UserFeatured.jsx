import { ImageLoader } from "@/components/common";
import PropType from "prop-types";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

const UserFeatured = ({ user }) => {
  const history = useHistory();
  const onClickItem = () => {
    if (!user) return;

    history.push(`/user/${user.id}`);
  };
  const darkMode = useSelector((state) => state.darkMode);

  const array = Object.values(darkMode);
  const darkModelo = array[0];

  return (
    <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
      <div
        className={`user-display ${darkModelo ? "dark-mode" : ""}`}
        onClick={onClickItem}
        role="presentation"
      >
        <div
          className={`user-display-img${darkModelo ? " dark-mode" : ""}`}
          style={
            darkModelo ? { backgroundColor: "black", borderRadius: "50em" } : {}
          }
        >
          {user.image ? (
            <ImageLoader
              className={`user-card-img${darkModelo ? " dark-mode" : ""}`}
              src={user.image}
            />
          ) : (
            <Skeleton width="100%" height="100%" />
          )}
        </div>
        <div
          className={`user-display-details ${darkModelo ? "dark-mode" : ""}`}
        >
          <h2>{user.name || <Skeleton width={80} />}</h2>
          <p className="text-subtle text-italic">
            {user.username || <Skeleton width={40} />}
          </p>
        </div>
      </div>
    </SkeletonTheme>
  );
};

UserFeatured.propTypes = {
  user: PropType.shape({
    image: PropType.string,
    name: PropType.string,
    id: PropType.string,
    username: PropType.string,
  }).isRequired,
};

export default UserFeatured;
