import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "@/redux/actions/miscActions";
import { registerUser } from "@/redux/actions/userActions"; // Asegúrate de importar la acción adecuada para obtener usuarios
import { MessageDisplay, Boundary } from "@/components/common";
import PropTypes from "prop-types";

const UserList = (props) => {
  const { users, filteredUsers, isLoading, requestStatus, children } = props;
  const [isFetching, setFetching] = useState(false);
  const dispatch = useDispatch();

  const fetchUsers = () => {
    setFetching(true);
    dispatch(getUsers(users.lastRefKey)); // Utiliza la acción para obtener usuarios
  };

  useEffect(() => {
    if (users.items.length === 0 || !users.lastRefKey) {
      fetchUsers();
    }

    window.scrollTo(0, 0);
    return () => dispatch(setLoading(false));
  }, []);

  useEffect(() => {
    setFetching(false);
  }, [users.lastRefKey]);

  if (filteredUsers.length === 0 && !isLoading) {
    return (
      <MessageDisplay
        message={requestStatus?.message || "No se encontraron usuarios."}
      />
    );
  }
  if (filteredUsers.length === 0 && requestStatus) {
    return (
      <MessageDisplay
        message={requestStatus?.message || "Algo salió mal :("}
        action={fetchUsers}
        buttonLabel="Intentar de nuevo"
      />
    );
  }
  return (
    <Boundary>
      {children}
      {/* Mostrar el botón 'Mostrar más' si la longitud de usuarios es menor que el total de usuarios */}
      {users.items.length < users.total && (
        <div className="d-flex-center padding-l">
          <button
            className="button button-small"
            disabled={isFetching}
            onClick={fetchUsers}
            type="button"
          >
            {isFetching ? "Obteniendo usuarios..." : "Mostrar más usuarios"}
          </button>
        </div>
      )}
    </Boundary>
  );
};

UserList.defaultProps = {
  requestStatus: null,
};

UserList.propTypes = {
  users: PropTypes.object.isRequired,
  filteredUsers: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  requestStatus: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default UserList;
