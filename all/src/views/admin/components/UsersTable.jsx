import PropTypes from "prop-types";
import React from "react";
import { UserItem } from "."; // Asegúrate de importar el componente correcto para los elementos de usuario

const UsersTable = ({ filteredUsers }) => (
  <div>
    {filteredUsers.length > 0 && (
      <div className="grid grid-user grid-count-6">
        {" "}
        {/* Asegúrate de ajustar las clases CSS según tus necesidades */}
        <div className="grid-col" />
        <div className="grid-col">
          <h5>Name</h5>
        </div>
        <div className="grid-col">
          <h5>Email</h5>{" "}
          {/* Agrega las columnas necesarias para mostrar los datos de usuario */}
        </div>
        <div className="grid-col">
          <h5>Role</h5>{" "}
          {/* Por ejemplo, aquí se agrega la columna "Role" para mostrar el rol de usuario */}
        </div>
        <div className="grid-col">
          <h5>Join Date</h5> {/* Ajusta las columnas según tus necesidades */}
        </div>
        <div className="grid-col">
          <h5>Status</h5> {/* Añade más columnas si es necesario */}
        </div>
      </div>
    )}
    {filteredUsers.length === 0
      ? new Array(10)
          .fill({})
          .map((user, index) => (
            <UserItem key={`user-skeleton-${index}`} user={user} />
          ))
      : filteredUsers.map((user) => <UserItem key={user.id} user={user} />)}
  </div>
);

UsersTable.propTypes = {
  filteredUsers: PropTypes.array.isRequired,
};

export default UsersTable;
