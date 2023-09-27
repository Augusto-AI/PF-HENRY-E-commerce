/* eslint-disable indent */
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import {
  DownOutlined,
  LoadingOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@ant-design/icons";
import PropTypes from "prop-types";
import { signOut } from "@/redux/actions/authActions";
import { ACCOUNT } from "@/constants/routes";

const UserNav = () => {
  const { profile, isAuthenticating } = useSelector((state) => ({
    profile: state.profile,
    isAuthenticating: state.app.isAuthenticating,
  }));
  const darkMode = useSelector((state) => state.darkMode);
  
  const array = Object.values(darkMode)
  const darkModelo = array[0]
  const userNav = useRef(null);
  const dispatch = useDispatch();

  const toggleDropdown = (e) => {
    const closest = e.target.closest(".user-nav");

    try {
      if (!closest && userNav.current.classList.contains("user-sub-open")) {
        userNav.current.classList.remove("user-sub-open");
      }
    } catch (err) {
      console.log(err);
    }
  };

  // useEffect(() => {
  //   document.addEventListener("click", toggleDropdown);

  //   return () => document.removeEventListener("click", toggleDropdown);
  // }, []);
  const [isUserSubOpen, setIsUserSubOpen] = useState(false);

  const onClickNav = () => {
    setIsUserSubOpen(!isUserSubOpen);
  };

  return (
    <button
    className={`user-nav ${isUserSubOpen ? "user-sub-open" : ""} ${darkModelo ? 'dark-mode' : ''} user-profile`}

      onClick={onClickNav}
      onKeyDown={() => {}}
      ref={userNav}
      role="button"
      tabIndex={0}
      style={{ borderRadius: "2em"}}
    >
      {isAuthenticating ? (
        <>
          <span>Signing Out</span>
          &nbsp;
          <LoadingOutlined />
        </>
      ) : (
        <>
          <h5 className="text-overflow-ellipsis">
            {profile.fullname && profile.fullname.split(" ")[0]}
          </h5>
          <div className="user-nav-img-wrapper">
            <img alt="" className="user-nav-img" src={profile.avatar} />
          </div>
          <DownOutlined style={{ fontSize: "1.2rem", marginLeft: "1rem" }} />
          <div className={`user-nav-sub ${darkModelo ? 'dark-mode' : ''}`} style={darkModelo ? {hover: ""} : {}}>
            {profile.role !== "ADMIN" && (
              <Link to={ACCOUNT} className={`user-nav-sub-link ${darkModelo ? 'dark-mode' : ''}`}>
                View Account
                <UserOutlined />
              </Link>
            )}
            <h6
              className="user-nav-sub-link margin-0 d-flex"
              onClick={() => dispatch(signOut())}
              role="presentation"
            >
              Sign Out
              <LogoutOutlined />
            </h6>
          </div>
        </>
      )}
    </button>
  );
};

UserNav.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default withRouter(UserNav);
