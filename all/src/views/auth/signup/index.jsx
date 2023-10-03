import { ArrowRightOutlined, LoadingOutlined } from "@ant-design/icons";
import { SocialLogin } from "@/components/common";
import { CustomInput } from "@/components/formik";
import { SIGNIN } from "@/constants/routes";
import { Field, Form, Formik } from "formik";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signUp } from "@/redux/actions/authActions";
import {
  setAuthenticating,
  setAuthStatus,
  clearAuthStatus,
} from "@/redux/actions/miscActions";
import * as Yup from "yup";

const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email("El correo electrónico no es válido.")
    .required("El correo electrónico es obligatorio."),
  password: Yup.string()
    .required("La contraseña es obligatoria.")
    .min(8, "La contraseña debe tener al menos 8 caracteres.")
    .matches(
      /[A-Z\W]/g,
      "La contraseña debe contener al menos 1 letra mayúscula."
    ),
  fullname: Yup.string()
    .required("El nombre completo es obligatorio.")
    .min(4, "El nombre debe tener al menos 4 caracteres."),
});

const SignUp = ({ history }) => {
  const { isAuthenticating, authStatus } = useSelector((state) => ({
    isAuthenticating: state.app.isAuthenticating,
    authStatus: state.app.authStatus,
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    // Limpiar el estado de autenticación al desmontar el componente
    return () => {
      dispatch(clearAuthStatus());
      dispatch(setAuthenticating(false));
    };
  }, [dispatch]);

  const onClickSignIn = () => {
    history.push(SIGNIN);
  };

  const onFormSubmit = (form) => {
    dispatch(
      signUp({
        fullname: form.fullname.trim(),
        email: form.email.trim().toLowerCase(),
        password: form.password.trim(),
      })
    );
  };

  return (
    <div className="auth-content">
      {authStatus?.success && (
        <div className="loader">
          <h3 className="toast-success auth-success">
            {authStatus?.message}
            <LoadingOutlined />
          </h3>
        </div>
      )}
      {!authStatus?.success && (
        <>
          {authStatus?.message && (
            <h5 className="text-center toast-error">{authStatus?.message}</h5>
          )}
          <div
            className={`auth ${
              authStatus?.message && !authStatus?.success && "input-error"
            }`}
          >
            <div className="auth-main">
              <h3>Regístrate en PF HENRY & CO.</h3>
              <Formik
                initialValues={{
                  fullname: "",
                  email: "",
                  password: "",
                }}
                validateOnChange
                validationSchema={SignInSchema}
                onSubmit={onFormSubmit}
              >
                {() => (
                  <Form>
                    <div className="auth-field">
                      <Field
                        disabled={isAuthenticating}
                        name="fullname"
                        type="text"
                        label="* Nombre completo"
                        placeholder="Juan Pérez"
                        style={{ textTransform: "capitalize" }}
                        component={CustomInput}
                      />
                    </div>
                    <div className="auth-field">
                      <Field
                        disabled={isAuthenticating}
                        name="email"
                        type="email"
                        label="* Correo electrónico"
                        placeholder="ejemplo@correo.com"
                        component={CustomInput}
                      />
                    </div>
                    <div className="auth-field">
                      <Field
                        disabled={isAuthenticating}
                        name="password"
                        type="password"
                        label="* Contraseña"
                        placeholder="Tu contraseña"
                        component={CustomInput}
                      />
                    </div>
                    <br />
                    <div className="auth-field auth-action auth-action-signup">
                      <button
                        className="button auth-button"
                        disabled={isAuthenticating}
                        type="submit"
                      >
                        {isAuthenticating ? "Registrando" : "Registrarse"}
                        &nbsp;
                        {isAuthenticating ? (
                          <LoadingOutlined />
                        ) : (
                          <ArrowRightOutlined />
                        )}
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="auth-divider">
              <h6>OR</h6>
            </div>
            <SocialLogin isLoading={isAuthenticating} />
          </div>
          <div className="auth-message">
            <span className="auth-info">
              <strong>¿Ya tienes una cuenta?</strong>
            </span>
            <button
              className="button button-small button-border button-border-gray"
              disabled={isAuthenticating}
              onClick={onClickSignIn}
              type="button"
            >
              Iniciar sesión
            </button>
          </div>
        </>
      )}
    </div>
  );
};

SignUp.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default SignUp;
