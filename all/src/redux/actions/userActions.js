import {
  ADD_USER,
  DELETE_USER,
  EDIT_USER,
  GET_USERS,
  REGISTER_USER,
  PROMOTE_TO_ADMIN,
  ADMIN_USERS,
} from "@/constants/constants";

// insert in profile array
export const adminUsers = (user) => ({
  type: ADMIN_USERS,
  payload: user,
});

export const registerUser = (user) => ({
  type: REGISTER_USER,
  payload: user,
});

export const getUser = (uid) => ({
  type: GET_USERS,
  payload: uid,
});

// different from registerUser -- only inserted in admins' users array not in profile array
export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

export const editUser = (updates) => ({
  type: EDIT_USER,
  payload: updates,
});

export const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: id,
});

export const changeUserRole = (uid) => {
  return async (dispatch) => {
    try {
      // Update the user's role in Firestore
      await firestore.collection("users").doc(uid).update({ role: "ADMIN" });

      // Dispatch an action to update your Redux store
      dispatch({
        type: PROMOTE_TO_ADMIN,
        payload: { uid, newRole: "ADMIN" },
      });

      // Optionally, you can also update the user's role in Firebase Authentication if needed.
      // Be cautious and follow proper security practices when updating roles.

      // For example:
      // await auth.setCustomUserClaims(uid, { role: 'ADMIN' });
    } catch (error) {
      console.error("Error changing user role:", error);
    }
  };
};
