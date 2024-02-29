import { CssBaseline, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import ForgotPassword from "./pages/ForgotPassword";
import Login from "./pages/Login";
import Bar from "./scenes/bar";
import Calendar from "./scenes/calendar/calendar";
import Contacts from "./scenes/contacts";
import Dashboard from "./scenes/dashboard";
import FAQ from "./scenes/faq";
import Form from "./scenes/form";
import Geography from "./scenes/geography";
import Sidebar from "./scenes/global/Sidebar";
import Topbar from "./scenes/global/Topbar";
import Line from "./scenes/line";
import ManageLocation from "./scenes/location";
import Pie from "./scenes/pie";
import Team from "./scenes/user";
import { ColorModeContext, useMode } from "./theme";
import { PUBLIC_ROUTES, SIDEBAR } from "./util/Constant";
import PrivateRoute from "./util/PrivateRoute";
import User from "./scenes/user";
import ManageCamera from "./scenes/camera";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const location = useLocation();
  const isPublicRoute = PUBLIC_ROUTES.includes(location.pathname);
  const [selected, setSelected] = useState("Dashboard");
  const navigate = useNavigate();

  useEffect(() => {
    const currentPage = SIDEBAR.find((s) => s.url === location.pathname);
    if (currentPage) {
      setSelected(currentPage.title);
    }
    if (location.pathname === "/") {
      navigate("/admin");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <ColorModeContext.Provider value={colorMode}>
     
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            {!isPublicRoute && (
              <Sidebar
                isSidebar={isSidebar}
                selected={selected}
                setSelected={setSelected}
              />
            )}
            <main className="content">
              {!isPublicRoute && <Topbar setIsSidebar={setIsSidebar} />}
              <Routes>
                <Route element={<PrivateRoute />}>
                  <Route path="/admin" element={<Dashboard />} />
                  <Route path="/manage-account" element={<User />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/manage-location" element={<ManageLocation />} />
                  <Route path="/manage-camera" element={<ManageCamera />} />
                  <Route path="/my-profile" element={<Form />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/line" element={<Line />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/geography" element={<Geography />} />
                </Route>
                <Route element={<Login />} path="/login" />
                <Route element={<ForgotPassword />} path="/forgot-password" />
              </Routes>
            </main>
          </div>
        </ThemeProvider>

    </ColorModeContext.Provider>
  );
}

export default App;
