import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectFilter } from "@/selectors/selector";
import { UsersNavbar } from "../components"; // Importa tu componente UsersNavbar
import UsersTable from "../components/UsersTable"; // Importa tu componente UsersTable
import { Boundary } from "@/components/common";
import { AppliedFilters } from "@/components/user"; // Importa tu componente AppliedFilters si es necesario
import { useDocumentTitle, useScrollTop } from "@/hooks";

const Users = () => {
  useDocumentTitle("Lista de Usuarios | Admin de HENRY & CO.");
  useScrollTop();

  // Utiliza useSelector con desestructuración para obtener las propiedades del estado
  const {
    users: { items, total },
    filter,
    app: { requestStatus, loading },
  } = useSelector((state) => ({
    users: state.users,
    filter: state.filter,
    app: state.app,
  }));

  // Comprueba si items está definido antes de acceder a su propiedad length
  const usersCount = items ? items.length : 0;

  return (
    <Boundary>
      <UsersNavbar
        usersCount={usersCount} // Utiliza usersCount condicionalmente aquí
        totalUsersCount={total}
      />
      <div className="user-admin-items">
        {/* Puedes incluir el componente AppliedFilters aquí si es necesario */}
        <UsersTable filteredUsers={selectFilter(items, filter)} />
      </div>
    </Boundary>
  );
};

export default withRouter(Users);
