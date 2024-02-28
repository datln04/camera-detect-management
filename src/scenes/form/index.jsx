import { Box, Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { mockAccount } from "../../data/mockData";
import { ToastContainer, toast } from "react-toastify";
import { DEFAULT_EMAIL_LENGTH, DEFAULT_PASSWORD_LENGTH, DEFAULT_TEXT_LENGTH, EMAIL_ERROR_LENGTH_MESSAGE, PASSWORD_ERROR_LENGTH_MESSAGE, TEXT_ERROR_LENGTH_MESSAGE } from "../../util/Constant";

const Form = () => {
  const [account, setAccount] = useState();
  const isNonMobile = useMediaQuery("(min-width:600px)");
  const [dialogOpen, setDialogOpen] = useState(false);

  useEffect(() => {
    const auth = sessionStorage.getItem("ACCOUNT");
    if (auth) {
      setAccount(JSON.parse(auth))
    }
  }, [])

  const handleFormSubmit = (values) => {
    const accounts = mockAccount;
    const existAccount = accounts.find(a => a.id === account?.id)
    if (existAccount) {
      const tmp = { ...account, email: values?.email, fullName: values?.fullName, phone: values?.phone }
      // Update the array
      mockAccount.map(user =>
        user.id === tmp.id ? { ...user, ...tmp } : user
      );
      sessionStorage.setItem("ACCOUNT", JSON.stringify(tmp))
      return toast.success("Update account successful!");
    }
  };

  const handleCloseDialog = () => {
    setDialogOpen(false);
  };

  const handleDialogSubmit = (values) => {
    //call BE check password
    // if ok -> render <TextField>code in email</TextField>
    // submit and done
  }

  return (
    account && <Box m="20px">
      <Header title="MANAGE PROFILE" subtitle="Manage your profile there" />
      <Button variant="contained" color="success" sx={{ marginBottom: 2 }} onClick={() => setDialogOpen(true)}>Change Password</Button>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={account}
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
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                name="email"
                value={values.email}
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Full Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.fullName}
                name="fullName"
                error={!!touched.fullName && !!errors.fullName}
                helperText={touched.fullName && errors.fullName}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Phone"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone}
                name="phone"
                error={!!touched.phone && !!errors.phone}
                helperText={touched.phone && errors.phone}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Save
              </Button>
            </Box>
          </form>
        )}
      </Formik>
      <Dialog open={dialogOpen} onClose={handleCloseDialog}>
        <DialogTitle>Change Password</DialogTitle>
        <Formik
          onSubmit={handleDialogSubmit}
          initialValues={initPassword}
          validationSchema={passwordSchema}
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
                  name="password"
                  label="Password"
                  type="password"
                  fullWidth
                  autoComplete="password"
                  variant="standard"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values?.password || ''}
                  error={!!touched?.password && !!errors.password}
                  helperText={touched?.password && errors.password}
                />
                <TextField
                  margin="dense"
                  name="passwordConfirm"
                  label="Password Confirmation"
                  type="password"
                  autoComplete="new-password"
                  fullWidth
                  variant="standard"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values?.passwordConfirm || ''}
                  error={!!touched?.passwordConfirm && !!errors.passwordConfirm}
                  helperText={touched?.passwordConfirm && errors.passwordConfirm}
                />
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
  fullName: yup.string().required("required").test('len', 'fullName' + TEXT_ERROR_LENGTH_MESSAGE, val => val.length <= DEFAULT_TEXT_LENGTH),
  // lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required").test('len', 'email' + EMAIL_ERROR_LENGTH_MESSAGE, val => val.length <= DEFAULT_EMAIL_LENGTH),
  phone: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required")
});

const initPassword = {
  password: '',
  passwordConfirm: ''
}

const passwordSchema = yup.object().shape({
  password: yup.string().required("required")
    .test('len', 'password' + PASSWORD_ERROR_LENGTH_MESSAGE, val => val?.length <= DEFAULT_PASSWORD_LENGTH),
  passwordConfirm: yup.string()
    .oneOf([yup.ref('password'), null], 'Password confirmation must match')
    .required("required")
    .test('len', "Length of passwordConfirm should less than " + DEFAULT_PASSWORD_LENGTH, val => val?.length <= DEFAULT_PASSWORD_LENGTH)
});

export default Form;
