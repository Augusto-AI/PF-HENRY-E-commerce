// import React, { useState, useEffect } from "react";
// import firebase from "firebase/app"; // Asegúrate de importar Firebase aquí
// import "firebase/firestore"; // Importa los servicios de Firestore que necesitas
// import UserDetail from "../../../components/user/UserDetail"; // Importa el componente UserDetail

// const UserList = () => {
//   const [users, setUsers] = useState([]);
//   const [isLoading, setLoading] = useState(true);

//   useEffect(() => {
//     // Obtener la colección de usuarios desde Firebase y almacenarla en el estado local
//     const fetchUsers = async () => {
//       try {
//         const usersCollection = firebase.firestore().collection("users");
//         const querySnapshot = await usersCollection.get();
//         const userData = [];
//         querySnapshot.forEach((doc) => {
//           userData.push({ id: doc.id, ...doc.data() });
//         });
//         setUsers(userData);
//         setLoading(false);
//       } catch (error) {
//         console.error("Error al obtener usuarios:", error);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const handleEditUser = (userId, updatedUserData) => {
//     // Aquí puedes agregar lógica para actualizar los datos del usuario en Firebase
//     // Utiliza el userId y los datos actualizados (updatedUserData) para realizar la actualización
//     // Por ejemplo:
//     // firebase.firestore().collection("users").doc(userId).update(updatedUserData);
//   };

//   const handleDeleteUser = (userId) => {
//     // Aquí puedes agregar lógica para eliminar el usuario de Firebase
//     // Utiliza el userId para identificar al usuario que deseas eliminar
//     // Por ejemplo:
//     // firebase.firestore().collection("users").doc(userId).delete();
//   };

//   const handleChangeUserRole = (userId, newRole) => {
//     // Aquí puedes agregar lógica para cambiar el rol del usuario en Firebase
//     // Utiliza el userId y el nuevo rol (newRole) para realizar el cambio
//     // Por ejemplo:
//     // firebase.firestore().collection("users").doc(userId).update({ role: newRole });
//   };

//   return (
//     <div>
//       <h1>User List</h1>
//       {isLoading ? (
//         <p>Cargando usuarios...</p>
//       ) : (
//         <ul>
//           {users.map((user) => (
//             <li key={user.id}>
//               <UserDetail
//                 user={user}
//                 onEdit={(updatedUserData) =>
//                   handleEditUser(user.id, updatedUserData)
//                 }
//                 onDelete={() => handleDeleteUser(user.id)}
//                 onChangeRole={(newRole) =>
//                   handleChangeUserRole(user.id, newRole)
//                 }
//               />
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default UserList;

import { Boundary } from "@/components/common";
import React from "react";
import { useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { selectFilter } from "@/selectors/selector";
import { UsersNavbar } from "../components"; // Asegúrate de importar el componente Navbar correcto para usuarios
import UsersTable from "../components/UsersTable"; // Asegúrate de importar el componente de tabla de usuarios
import UserList from "../../../components/user/UserList";

const Users = () => {
  const store = useSelector((state) => ({
    filteredUsers: selectFilter(state.users.items, state.filter), // Asegúrate de utilizar el selector correcto para los usuarios
    requestStatus: state.app.requestStatus,
    isLoading: state.app.loading,
    users: state.users, // Asegúrate de obtener el estado de los usuarios desde tu store
  }));

  return (
    <Boundary>
      <UsersNavbar
        usersCount={store.users.items.length}
        totalUsersCount={store.users.total} // Asegúrate de utilizar la propiedad correcta para el total de usuarios
      />
      <div className="user-admin-items">
        <UserList {...store}>
          <UsersTable filteredUsers={store.filteredUsers} />
        </UserList>
      </div>
    </Boundary>
  );
};

export default withRouter(Users);
