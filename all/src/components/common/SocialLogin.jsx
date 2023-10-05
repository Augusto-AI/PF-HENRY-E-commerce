import React from "react";
import PropType from "prop-types";
import { useDispatch } from "react-redux";
import { FacebookOutlined, GoogleOutlined } from "@ant-design/icons";
import {
  signInWithFacebook,
  signInWithGoogle,
  signInWithMicrosoft,
} from "@/redux/actions/authActions";

const SocialLogin = ({ isLoading }) => {
  const dispatch = useDispatch();

  const onSignInWithGoogle = () => {
    dispatch(signInWithGoogle());
  };

  const onSignInWithFacebook = () => {
    dispatch(signInWithFacebook());
  };

  const onSignInWithMicrosoft = () => {
    dispatch(signInWithMicrosoft());
  };

  return (
    <div className="auth-provider">
      <button
        className="button auth-provider-button provider-facebook"
        disabled={isLoading}
        onClick={onSignInWithFacebook}
        type="button"
      >
        <i className="fab fa-facebook" />
        <FacebookOutlined />
        Continue with Facebook
      </button>
      <button
        className="button auth-provider-button provider-google"
        disabled={isLoading}
        onClick={onSignInWithGoogle}
        type="button"
      >
        <GoogleOutlined />
        Continue with Google
      </button>
      {/* <button
        className="button auth-provider-button provider-microsoft"
        disabled={isLoading}
        onClick={onSignInWithMicrosoft}
        type="button"
      >
        Sign in with Email or Phone power by Microsoft
      </button> */}
    </div>
  );
};

SocialLogin.propTypes = {
  isLoading: PropType.bool.isRequired,
};

export default SocialLogin;
