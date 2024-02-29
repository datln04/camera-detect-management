/* eslint-disable eqeqeq */
import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, InputLabel, MenuItem, Select, TextField, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Swal from "sweetalert2";
import * as yup from "yup";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { get, post } from "../../util/api";
// const userAPI = new UserApi();
const User = () => {
  const [accounts, setAccounts] = useState(null);
  const [editingAccount, setEditingAccount] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "securityCode", headerName: "Code", flex: 1 },
    {
      field: "email",
      headerName: "email",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
    // {
    //   field: "accessLevel",
    //   headerName: "Access Level",
    //   flex: 1,
    //   headerAlign: 'center',
    //   renderCell: ({ row: { access_role } }) => {
    //     return (
    //       <Box
    //         width="60%"
    //         m="0 auto"
    //         p="5px"
    //         display="flex"
    //         justifyContent="center"
    //         backgroundColor={
    //           access_role === "admin"
    //             ? colors.greenAccent[600]
    //             : access_role === "manager"
    //               ? colors.greenAccent[700]
    //               : colors.greenAccent[700]
    //         }
    //         borderRadius="4px"
    //       >
    //         {access_role === "admin" && <AdminPanelSettingsOutlinedIcon />}
    //         {access_role === "manager" && <SecurityOutlinedIcon />}
    //         {access_role === "user" && <LockOpenOutlinedIcon />}
    //         <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
    //           {access_role}
    //         </Typography>
    //       </Box>
    //     );
    //   }
    // },
    {
      field: 'actions',
      headerName: 'Actions',
      headerAlign: 'center',
      width: 150,
      renderCell: (params) => (
        <>
          <Button onClick={() => handleEdit(params.row)} variant="contained" color="info" sx={{ marginRight: 1 }}>Edit</Button>
          <Button onClick={() => handleDelete(params.id)} variant="contained" color="error" >Deactivate</Button>
        </>
      ),
    },
  ];

  useEffect(() => {
    fetchUser()
  }, [])
  
  const fetchUser = () => {
    get('/User', { Page: 1, PageSize: 25 }).then(res => {
      if (res && res?.data) {
        setAccounts(res?.data?.results)
      }
    }).catch(err => console.log(err))
  }


  const handleEdit = (account) => {
    setEditingAccount(account);
    setDialogOpen(true);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Do you want to deactivate this record?",
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

      const tmp = { email: values?.email, name: values?.name, password: "123", phone: values?.phone, userRole: parseInt(values?.role) }
      post('/User', tmp).then(resp => {
        if(resp && resp?.data){
          fetchUser()
          return toast.success("Update account successful!");
        }
      })
    
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
        <Button variant="contained" color="success" onClick={() => handleEdit({ id: 0, fullName: '', email: '', phone: '', access_role: 'user' })} sx={{ marginBottom: 2 }}>Create Account</Button>
        <DataGrid rows={accounts} columns={columns} getRowId={(row) => row.securityCode}/>
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
                  name="name"
                  label="Name"
                  type="text"
                  fullWidth
                  variant="standard"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values?.name || ''}
                  error={!!touched?.name && !!errors.name}
                  helperText={touched?.name && errors.name}
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
                    name="role"
                    label="Access Role"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values?.role || ''}
                    error={!!touched?.role && !!errors.role}
                    helperText={touched?.role && errors.role}
                  >
                    {editingAccount?.role == 'admin' && <MenuItem value="admin">Admin</MenuItem>}
                    <MenuItem value="1">Manager</MenuItem>
                    <MenuItem value="2">User</MenuItem>
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
      <ToastContainer position="top-center" autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
      />
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  name: yup.string().required("required"),
  role: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
});

export default User;
