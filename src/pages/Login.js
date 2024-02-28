import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { mockAccount } from '../data/mockData';
import { Copyright, DEFAULT_EMAIL_LENGTH, DEFAULT_PASSWORD_LENGTH, EMAIL_ERROR_LENGTH_MESSAGE, EMAIL_INVALID_MESSAGE, PASSWORD_ERROR_LENGTH_MESSAGE } from '../util/Constant';
import { emailRegex } from '../util/utilities';
import UserApi from '../api/generated/generate-api/api/UserApi';

const userAPI = new UserApi();
const defaultTheme = createTheme();
// const userAPI = new UserApi()

export default function Login() {
    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const email = data.get('email');
        const pw = data.get('password');
        const isValidEmail = emailRegex.test(email);
        if (!isValidEmail) {
            return toast.error(EMAIL_INVALID_MESSAGE);
        }
        if (email.length > DEFAULT_EMAIL_LENGTH) {
            return toast.error(EMAIL_ERROR_LENGTH_MESSAGE);
        }
        if (pw.length > DEFAULT_PASSWORD_LENGTH) {
            return toast.error(PASSWORD_ERROR_LENGTH_MESSAGE);
        }


        const accounts = mockAccount;
        // eslint-disable-next-line
        const account = accounts.find(a => a.email === email && a.password == pw)
        if (account) {
            sessionStorage.setItem("ACCOUNT", JSON.stringify(account));
            navigate('/admin')
        } else {
            return toast.error("User is not exist");
        }
       

    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box component="form" noValidate={false} onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            {/* <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                            /> */}
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="/forgot-password" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                {/* <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid> */}
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
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
        </ThemeProvider>
    );
}