import React, { useState } from "react";

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
      {isEditing ? (
        <div>
          <input
            type="text"
            name="name"
            value={editedUser.name}
            onChange={handleInputChange}
          />
          <input
            type="email"
            name="email"
            value={editedUser.email}
            onChange={handleInputChange}
          />
          <input
            type="text"
            name="role"
            value={editedUser.role}
            onChange={handleInputChange}
          />
          <button onClick={handleSaveClick}>Guardar</button>
        </div>
      ) : (
        <div>
          <p>
            <strong>Nombre:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Rol:</strong> {user.role}
          </p>
          <button onClick={handleEditClick}>Editar</button>
          <button onClick={handleDeleteClick}>Borrar</button>
          <button onClick={handleRoleChange}>Cambiar Rol</button>
        </div>
      )}
    </div>
  );
};

export default UserDetail;
