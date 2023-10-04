import React, { useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import InputBase from "@mui/material/InputBase";

export default function UsersTable() {
  const [users, setUsers] = useState([]);
  const [clickedButtons, setClickedButtons] = useState({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);
  const [isEnableDialogOpen, setIsEnableDialogOpen] = useState(false);
  const [userToEnable, setUserToEnable] = useState(null);
  const [filterText, setFilterText] = useState("");

  useEffect(() => {
    // Configure the reference to the "users" collection in Firestore
    const usersCollection = firebase.firestore().collection("users");

    // Listen for changes in the "users" collection
    const unsubscribe = usersCollection.onSnapshot((snapshot) => {
      const updatedUsers = [];
      snapshot.forEach((doc) => {
        updatedUsers.push({ id: doc.id, ...doc.data() });
      });
      setUsers(updatedUsers);
    });

    // Stop listening when the component unmounts
    return () => unsubscribe();
  }, []);

  const deleteUser = (userId) => {
    // Set the user to disable and open the dialog
    openDialog(userId);
  };

  const openDialog = (userId) => {
    setIsDialogOpen(true);
    setUserToDelete(userId);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setUserToDelete(null);
  };

  const disableUserAccount = async (userId) => {
    try {
      // Update the user's account status to disabled in Firestore
      await firebase.firestore().collection("users").doc(userId).update({
        disabled: true,
      });
      console.log("User disabled:", userId);

      // Mark the button as clicked
      setClickedButtons((prevState) => ({
        ...prevState,
        [userId]: true,
      }));

      // Close the dialog after disabling the user
      closeDialog();
    } catch (error) {
      console.error("Error disabling user:", error);
    }
  };

  const openEnableDialog = (userId) => {
    setIsEnableDialogOpen(true);
    setUserToEnable(userId);
  };

  const closeEnableDialog = () => {
    setIsEnableDialogOpen(false);
    setUserToEnable(null);
  };

  const enableUserAccount = async (userId) => {
    try {
      // Update the user's account status to enabled in Firestore
      await firebase.firestore().collection("users").doc(userId).update({
        disabled: false,
      });
      console.log("User enabled:", userId);

      // Mark the button as not clicked
      setClickedButtons((prevState) => ({
        ...prevState,
        [userId]: false,
      }));

      // Close the dialog after enabling the user
      closeEnableDialog();
    } catch (error) {
      console.error("Error enabling user:", error);
    }
  };

  const filteredUsers = users.filter((user) =>
    user.fullname.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="Table">
      <h3>User List</h3>
      <InputBase
        placeholder="Search by Name"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        style={{ marginBottom: 20 }}
      />
      <div style={{ maxHeight: "400px", overflowY: "auto" }}>
        {/* Set a maximum height and enable vertical scrolling */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="user table">
            <TableHead>
              <TableRow>
                <TableCell>User Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.fullname}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color={clickedButtons[user.id] ? "secondary" : "primary"}
                      onClick={() => {
                        if (user.disabled) {
                          openEnableDialog(user.id);
                        } else {
                          deleteUser(user.id);
                        }
                      }}
                    >
                      {user.disabled ? "ENABLE" : "DISABLE"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <Dialog open={isDialogOpen} onClose={closeDialog}>
        <DialogTitle>Confirm Deactivation</DialogTitle>
        <DialogContent>
          Are you sure you want to deactivate this user?
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDialog} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              disableUserAccount(userToDelete);
            }}
            color="secondary"
          >
            Confirm Deactivation
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={isEnableDialogOpen} onClose={closeEnableDialog}>
        <DialogTitle>Confirm Enable</DialogTitle>
        <DialogContent>
          Are you sure you want to enable this user?
        </DialogContent>
        <DialogActions>
          <Button onClick={closeEnableDialog} color="primary">
            Cancel
          </Button>
          <Button
            onClick={() => {
              enableUserAccount(userToEnable);
            }}
            color="secondary"
          >
            Confirm Enable
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
