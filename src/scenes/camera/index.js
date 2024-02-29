import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Formik } from "formik";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import * as yup from "yup";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { get, post } from "../../util/api";

const ManageCamera = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    // { field: "id", headerName: "ID" },
    {
      field: "cameraDestination",
      headerName: "destination",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "status",
      headerName: "Status",
      flex: 1,
    },
    {
      field: 'actions',
      headerName: 'Actions',
      headerAlign: 'center',
      width: 150,
      renderCell: (params) => (
        <>
          <Button variant="contained" color="info" sx={{ marginRight: 1 }}>Edit</Button>
          <Button variant="contained" color="error" >Delete</Button>
        </>
      ),
    },
    // {
    //   field: "email",
    //   headerName: "Email",
    //   flex: 1,
    // },
    // {
    //   field: "cost",
    //   headerName: "Cost",
    //   flex: 1,
    //   renderCell: (params) => (
    //     <Typography color={colors.greenAccent[500]}>
    //       ${params.row.cost}
    //     </Typography>
    //   ),
    // },
    // {
    //   field: "date",
    //   headerName: "Date",
    //   flex: 1,
    // },
  ];

  const [cameras, setCameras] = useState()
  const [editingCamera, setEditingCamera] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const fetchData = () => {
    get('/Camera').then(resp => {
      if (resp && resp?.data) {
        setCameras(resp?.data)
      }
    }).catch(err => console.log(err))
  }

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setEditingCamera(null);
  };

  useEffect(() => {
    fetchData()
  }, [])


  const handleDialogSubmit = (values) => {
    const body = { locationName: values?.locationName }
    post('/Location', body).then(resp => {
      if(resp && resp?.data){
        fetchData()
        return toast.success("Successful!");
      }
    })
  
  handleCloseDialog();
};

const handleOpenDialog = (location) => {
  setEditingCamera(location);
  setDialogOpen(true);
};

  return (
    cameras && <Box m="20px">
      <Header title="CAMERAS" subtitle="List of camera" />

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
        <Button variant="contained" color="success" sx={{ marginBottom: 2 }}>Create Camera</Button>
        <DataGrid rows={cameras} columns={columns} getRowId={(row) => row.cameraId}/>
        <Dialog open={dialogOpen} onClose={handleCloseDialog}>
          <DialogTitle>{editingCamera?.id ? 'Edit Camera' : 'Create Camera'}</DialogTitle>
          <Formik
            onSubmit={handleDialogSubmit}
            initialValues={editingCamera}
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
                    name="locationName"
                    label="Location Name"
                    type="locationName"
                    fullWidth
                    variant="standard"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values?.locationName || ''}
                    error={!!touched?.locationName && !!errors.locationName}
                    helperText={touched?.locationName && errors.locationName}
                  />
                  
                  {/* <FormControl fullWidth sx={{ marginTop: 2 }}>
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
                  </FormControl> */}
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseDialog}  variant="contained" color="inherit" style={{ color: 'grey' }}>Cancel</Button>
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
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  locationName: yup.string().required("required")
});

export default ManageCamera;
