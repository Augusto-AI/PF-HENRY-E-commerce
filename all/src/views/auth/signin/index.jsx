import React from "react";
import { useDocumentTitle, useScrollTop } from "@/hooks";
import { SocialLogin } from "@/components/common";
import PropType from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setAuthenticating, setAuthStatus } from "@/redux/actions/miscActions";

const SignIn = ({ history }) => {
  const { authStatus, isAuthenticating } = useSelector((state) => ({
    authStatus: state.app.authStatus,
    isAuthenticating: state.app.isAuthenticating,
  }));

  const dispatch = useDispatch();

  useScrollTop();
  useDocumentTitle("Sign In | HENRY & CO");

  React.useEffect(() => {
    return () => {
      dispatch(setAuthStatus(null));
      dispatch(setAuthenticating(false));
    };
  }, []);

  return (
    <div className="auth-content">
      {authStatus?.success && (
        <div className="loader">
          <h3 className="toast-success auth-success">{authStatus.message}</h3>
        </div>
      )}
      {!authStatus?.success && (
        <div className={`auth`}>
          {authStatus?.message && (
            <h5 className="text-center toast-error">{authStatus?.message}</h5>
          )}
          <div className="auth-main">
            <h3>Sign in to HENRY & CO</h3>
            <div className="auth-wrapper">
              <div className="auth-divider"></div>
              <SocialLogin isLoading={isAuthenticating} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

SignIn.propTypes = {
  history: PropType.shape({
    push: PropType.func,
  }).isRequired,
};

export default SignIn;
