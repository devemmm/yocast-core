import { Routes, Route } from "react-router-dom";
import Topbar from "./screen/global/Topbar";
import Sidebar from "./screen/global/Sidebar";
import Dashboard from "./screen/dashboard";
import USER from "./screen/user";
import Bar from "./screen/bar";
import Line from "./screen/line";
import Pie from "./screen/pie";
import FAQ from "./screen/faq";
import Podcast from "./screen/podcast";
import Subscription from "./screen/subscription";
import LoginActivity from "./screen/login";
import Geography from "./screen/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Create from "./scenes/create";
import Home from "./screen/Home";
import { Provider } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Store } from "./store";
import Login from "./screen/auth/Login";
import Signup from "./screen/auth/Signup";
import UpdateForm from "./scenes/update";
import About from "./screen/global/About";
import Services from "./screen/Services";
import Contact from "./screen/contact";
function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const [route, setRoute] = useState(null);
  const location = useLocation();
  useEffect(() => {
    setRoute(location.pathname);
  });
  return (
    <Provider store={Store}>
      {route === "/auth/login" ||
      route === "/auth/signup" ||
      route === "/" ||
      route === "/contact"||
      route === "/services" ||
      route === "/about" ? (
        <Routes>
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      ) : (
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app">
              <Sidebar isSidebar={isSidebar} />
              <main className="content">
                <Topbar setIsSidebar={setIsSidebar} />
                <Routes>
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="/USER" element={<USER />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/line" element={<Line />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/create" element={<Create />} />
                  <Route path="/podcast" element={<Podcast />} />
                  <Route path="/subscription" element={<Subscription />} />
                  <Route path="/geography" element={<Geography />} />
                  <Route path="/update/" element={<UpdateForm />} />
                </Routes>
              </main>
            </div>
          </ThemeProvider>
        </ColorModeContext.Provider>
      )}
    </Provider>
  );
}

export default App;
