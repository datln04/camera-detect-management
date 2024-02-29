import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { get, post } from "../../util/api";
import { formatDate } from "../../util/utilities";
import { ToastContainer, toast } from "react-toastify";
import { Formik } from "formik";
import * as yup from "yup";

const ManageLocation = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    // { field: "id", headerName: "ID" },
    {
      field: "locationName",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "createdDate",
      headerName: "Create On",
      flex: 1,
      renderCell: (params) => (
        <Typography>
          {formatDate(params?.row?.createdDate)}
        </Typography>
      ),
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

  const [locations, setLocations] = useState()
  const [editingLocation, setEditingLocation] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const fetchData = () => {
    get('/Location').then(resp => {
      if (resp && resp?.data) {
        setLocations(resp?.data)
      }
    }).catch(err => console.log(err))
  }

  const handleCloseDialog = () => {
    setDialogOpen(false);
    setEditingLocation(null);
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
  setEditingLocation(location);
  setDialogOpen(true);
};

  return (
    locations && <Box m="20px">
      <Header title="LOCATIONS" subtitle="List of location" />

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
        <Button variant="contained" color="success" onClick={() => handleOpenDialog({ id: 0, locationName: "" })} sx={{ marginBottom: 2 }}>Create Location</Button>
        <DataGrid rows={locations} columns={columns} />
        <Dialog open={dialogOpen} onClose={handleCloseDialog}>
          <DialogTitle>{editingLocation?.id ? 'Edit Location' : 'Create Location'}</DialogTitle>
          <Formik
            onSubmit={handleDialogSubmit}
            initialValues={editingLocation}
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

export default ManageLocation;
