import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { Link, Typography } from "@mui/material";


export const PUBLIC_ROUTES = ["/login", "/forgot-password"]

export const SIDEBAR = [
    {
        title: 'Dashboard',
        url: '/admin',
        icon: <HomeOutlinedIcon />,
        type: ''
    },
    {
        title: 'Manage Account',
        url: '/manage-account',
        icon: <PeopleOutlinedIcon />,
        type: 'Data'
    },
    {
        title: 'Contacts Information',
        url: '/contacts',
        icon: <ContactsOutlinedIcon />,
        type: 'Data'
    },
    {
        title: 'Invoices Balances',
        url: '/invoices',
        icon: <ReceiptOutlinedIcon />,
        type: 'Data'
    },
    {
        title: 'Calendar',
        url: '/calendar',
        icon: <CalendarTodayOutlinedIcon />,
        type: 'Pages'
    },
    {
        title: 'FAQ Page',
        url: '/faq',
        icon: <HelpOutlineOutlinedIcon />,
        type: 'Pages'
    },
    {
        title: 'Bar Chart',
        url: '/bar',
        icon: <BarChartOutlinedIcon />,
        type: 'Charts'
    },
    {
        title: 'Pie Chart',
        url: '/pie',
        icon: <PieChartOutlineOutlinedIcon />,
        type: 'Charts'
    },
    {
        title: 'Line Chart',
        url: '/line',
        icon: <TimelineOutlinedIcon />,
        type: 'Charts'
    },
    {
        title: 'Geography Chart',
        url: '/geography',
        icon: <MapOutlinedIcon />,
        type: 'Charts'
    }
]

export function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Admin Dashboard
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export const DEFAULT_EMAIL_LENGTH = 100;
export const EMAIL_INVALID_MESSAGE = "Email is not valid!"
export const EMAIL_ERROR_LENGTH_MESSAGE = "Length of email should less than " + DEFAULT_EMAIL_LENGTH

export const DEFAULT_PASSWORD_LENGTH = 100;
export const PASSWORD_ERROR_LENGTH_MESSAGE = "Length of password should less than " + DEFAULT_PASSWORD_LENGTH

export const DEFAULT_TEXT_LENGTH = 100;
export const TEXT_ERROR_LENGTH_MESSAGE = "should less than " + DEFAULT_TEXT_LENGTH + " length"