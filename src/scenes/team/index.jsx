/* eslint-disable eqeqeq */
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Formik } from "formik";
import { useState } from "react";
import Swal from "sweetalert2";
import * as yup from "yup";
import Header from "../../components/Header";
import { mockAccount } from "../../data/mockData";
import { tokens } from "../../theme";

const Team = () => {
  const [accounts, setAccounts] = useState(mockAccount);
  const [editingAccount, setEditingAccount] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID", flex: 1 },
    {
      field: "fullName",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    // {
    //   field: "age",
    //   headerName: "Age",
    //   type: "number",
    //   headerAlign: "left",
    //   align: "left",
    // },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "accessLevel",
      headerName: "Access Level",
      flex: 1,
      headerAlign: 'center',
      renderCell: ({ row: { access_role } }) => {
        return (
          <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access_role === "admin"
                ? colors.greenAccent[600]
                : access_role === "manager"
                  ? colors.greenAccent[700]
                  : colors.greenAccent[700]
            }
            borderRadius="4px"
          >
            {access_role === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access_role === "manager" && <SecurityOutlinedIcon />}
            {access_role === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access_role}
            </Typography>
          </Box>
        );
      }
    },
    {
      field: 'actions',
      headerName: 'Actions',
      headerAlign: 'center',
      width: 150,

      renderCell: (params) => (
        <>
          <Button onClick={() => handleEdit(params.row)} variant="contained" color="info" sx={{ marginRight: 1 }}>Edit</Button>
          <Button onClick={() => handleDelete(params.id)} variant="contained" color="error">Delete</Button>
        </>
      ),
    },
  ];

  const handleEdit = (account) => {
    setEditingAccount(account);
    setDialogOpen(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Do you want to delete this record?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sure",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        setAccounts(accounts.filter((account) => account.id !== id));
      }
    });
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setEditingAccount(null);
  };

  const handleDialogSubmit = (values) => {
    if (editingAccount) {
      const tmp = { ...editingAccount, email: values?.email, fullName: values?.fullName, phone: values?.phone }
      if (mockAccount.find(a => a.id == editingAccount?.id)) {
        const updatedAccounts = mockAccount.map((account) =>
          account.id === editingAccount.id ? tmp : account
        );
        setAccounts(updatedAccounts);
      } else {
        setAccounts([...mockAccount, tmp]);
      }
    }
    handleCloseDialog();
  };

  return (
    accounts && <Box m="20px">
      <Header title="MANAGE ACCOUNT" subtitle="Managing the accounts" />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        {/* checkboxSelection */}
        <Button variant="contained" color="success" onClick={() => handleEdit({ id: mockAccount.length + 1, fullName: '', email: '', phone: '', access_role: 'user' })} sx={{ marginBottom: 2 }}>Create Account</Button>
        <DataGrid rows={accounts} columns={columns} />
      </Box>
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>{editingAccount?.id ? 'Edit Account' : 'Create Account'}</DialogTitle>
        <Formik
          onSubmit={handleDialogSubmit}
          initialValues={editingAccount}
          validationSchema={checkoutSchema}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleChange,
            handleSubmit,
          }) => (
            <form onSubmit={handleSubmit}>
              <DialogContent>

                <TextField
                  autoFocus
                  margin="dense"
                  name="email"
                  label="Email"
                  type="email"
                  fullWidth
                  variant="standard"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values?.email || ''}
                  error={!!touched?.email && !!errors.email}
                  helperText={touched?.email && errors.email}
                />
                <TextField
                  margin="dense"
                  name="fullName"
                  label="Full Name"
                  type="text"
                  fullWidth
                  variant="standard"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values?.fullName || ''}
                  error={!!touched?.fullName && !!errors.fullName}
                  helperText={touched?.fullName && errors.fullName}
                />
                <TextField
                  margin="dense"
                  name="phone"
                  label="Phone"
                  type="text"
                  fullWidth
                  variant="standard"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values?.phone || ''}
                  error={!!touched?.phone && !!errors.phone}
                  helperText={touched?.phone && errors.phone}
                />
                <FormControl fullWidth sx={{ marginTop: 2 }}>
                  <InputLabel id="access-role-label">Role</InputLabel>
                  <Select
                    labelId="access-role-label"
                    name="access_role"
                    label="Access Role"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values?.access_role || ''}
                    error={!!touched?.access_role && !!errors.access_role}
                    helperText={touched?.access_role && errors.access_role}
                  >
                    {editingAccount?.access_role == 'admin' && <MenuItem value="admin">Admin</MenuItem>}
                    <MenuItem value="manager">Manager</MenuItem>
                    <MenuItem value="user">User</MenuItem>
                  </Select>
                </FormControl>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleCloseDialog} variant="contained" color="inherit" style={{ color: 'grey' }}>Cancel</Button>
                <Button variant="contained" color="success" type="submit">Submit</Button>
              </DialogActions>
            </form>
          )}
        </Formik>
      </Dialog>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  fullName: yup.string().required("required"),
  access_role: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
});

export default Team;
