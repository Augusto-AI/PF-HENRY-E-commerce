import PropTypes from "prop-types";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useHistory, withRouter } from "react-router-dom";
import { deleteUser } from "@/redux/actions/userActions"; // Asegúrate de importar la acción correcta para eliminar usuarios
import { displayActionMessage, displayDate } from "@/helpers/utils";
import { ImageLoader } from "@/components/common";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const UserItem = ({ user }) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userRef = useRef(null);

  const onClickEdit = () => {
    // Aquí debes definir la ruta correcta para editar un usuario si es necesario
    // history.push(`/edit_user/${user.id}`);
  };

  const onDeleteUser = () => {
    userRef.current.classList.toggle("item-active");
  };

  const onConfirmDelete = () => {
    dispatch(deleteUser(user.id)); // Asegúrate de utilizar la acción correcta para eliminar usuarios
    displayActionMessage("Usuario eliminado con éxito");
    userRef.current.classList.remove("item-active");
  };

  const onCancelDelete = () => {
    userRef.current.classList.remove("item-active");
  };

  return (
    <SkeletonTheme color="#e1e1e1" highlightColor="#f2f2f2">
      <div
        className={`item item-users ${!user.id && "item-loading"}`}
        ref={userRef}
      >
        <div className="grid grid-count-6">
          <div className="grid-col item-img-wrapper">
            {user.image ? (
              <ImageLoader
                alt={user.name || "User Image"}
                className="item-img"
                src={user.image}
              />
            ) : (
              <Skeleton width={50} height={30} />
            )}
          </div>
          <div className="grid-col">
            <span className="text-overflow-ellipsis">
              {user.name || <Skeleton width={50} />}
            </span>
          </div>
          <div className="grid-col">
            <span>{user.email || <Skeleton width={50} />}</span>
          </div>
          <div className="grid-col">
            {/* Agrega más campos según los datos del usuario */}
          </div>
          <div className="grid-col">
            <span>
              {user.dateAdded ? (
                displayDate(user.dateAdded)
              ) : (
                <Skeleton width={30} />
              )}
            </span>
          </div>
          <div className="grid-col">
            {/* Agrega más campos según los datos del usuario */}
          </div>
        </div>
        {user.id && (
          <div className="item-action">
            <button
              className="button button-border button-small"
              onClick={onClickEdit}
              type="button"
            >
              Editar
            </button>
            &nbsp;
            <button
              className="button button-border button-small button-danger"
              onClick={onDeleteUser}
              type="button"
            >
              Eliminar
            </button>
            <div className="item-action-confirm">
              <h5>¿Seguro que deseas eliminar esto?</h5>
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
                Sí
              </button>
            </div>
          </div>
        )}
      </div>
    </SkeletonTheme>
  );
};

UserItem.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    // Agrega más propiedades según los datos del usuario
    image: PropTypes.string,
    dateAdded: PropTypes.number,
  }).isRequired,
};

export default withRouter(UserItem);
