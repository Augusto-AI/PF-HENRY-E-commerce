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
import InputBase from "@mui/material/InputBase";
import TablePagination from "@mui/material/TablePagination";

export default function UsersTable() {
  const [users, setUsers] = useState([]);
  const [clickedButtons, setClickedButtons] = useState({});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
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

  const deleteUser = async (userId) => {
    // Perform a logical delete of the user by setting a "deleted" field to true
    try {
      await firebase.firestore().collection("users").doc(userId).update({
        deleted: true,
      });
      console.log("User deactivated:", userId);

      // Mark the button as clicked
      setClickedButtons((prevState) => ({
        ...prevState,
        [userId]: true,
      }));
    } catch (error) {
      console.error("Error deactivating user:", error);
    }
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.fullname.toLowerCase().includes(filterText.toLowerCase()) &&
      !user.deleted
  );

  return (
    <div className="Table">
      <h3>User List</h3>
      <InputBase
        placeholder="Filter by Name"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        style={{ marginBottom: 20 }}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.id}</TableCell>
                  <TableCell>{user.fullname}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color={clickedButtons[user.id] ? "secondary" : "primary"}
                      onClick={() => deleteUser(user.id)}
                    >
                      {user.deleted ? "DEACTIVATED" : "DEACTIVATE"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50]}
        component="div"
        count={filteredUsers.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
}
