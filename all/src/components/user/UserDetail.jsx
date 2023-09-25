import React, { useState } from "react";
import { toast } from "react-toastify"; // Importa la función toast de react-toastify

const UserDetail = ({ user, onEdit, onDelete, onChangeRole }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({ ...user });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    // Aquí puedes agregar lógica para guardar los cambios en el usuario
    // Puedes utilizar una función prop que se encargue de actualizar los datos en Firebase

    // Por ejemplo, supongamos que tienes una función prop llamada onSave
    // que actualiza los datos del usuario en Firebase
    onSave(editedUser);

    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    // Aquí puedes agregar lógica para borrar el usuario
    // Puedes utilizar una función prop que se encargue de eliminar el usuario de Firebase

    // Por ejemplo, supongamos que tienes una función prop llamada onDelete
    // que elimina el usuario de Firebase
    onDelete(user.id);
  };

  const handleRoleChange = () => {
    // Aquí puedes agregar lógica para cambiar el rol del usuario
    // Puedes utilizar una función prop que se encargue de actualizar el rol en Firebase

    // Por ejemplo, supongamos que tienes una función prop llamada onChangeRole
    // que cambia el rol del usuario en Firebase
    onChangeRole(user.id, editedUser.role);

    // Mostrar una notificación de éxito
    toast.success("El rol del usuario se cambió a ADMIN", {
      position: "top-right",
      autoClose: 3000, // Duración de la notificación en milisegundos
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedUser({
      ...editedUser,
      [name]: value,
    });
  };

  return (
    <div>
      <h3>{user.role === "ADMIN" ? "ADMIN" : "User"}</h3>
      <p>Nombre: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={() => onDelete(user.id)}>DELETE</button>
      {user.role !== "ADMIN" && (
        <button onClick={handleRoleChange}>Change to ADMIN</button>
      )}
    </div>
  );
};

export default UserDetail;
