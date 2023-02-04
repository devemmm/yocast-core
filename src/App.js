import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Store } from "./store";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Topbar from "./screen/global/Topbar";
import Sidebar from "./screen/global/Sidebar";
import Dashboard from "./screen/dashboard";
import USER from "./screen/user";
import Bar from "./screen/bar";
import Line from "./screen/line";
import Pie from "./screen/pie";
import FAQ from "./screen/faq";
import Loading from "./components/global/Loading";
const Podcast = lazy(() => import("./screen/podcast"));
const Subscription = lazy(() => import("./screen/subscription"));
const LoginActivity = lazy(() => import("./screen/login"));
const Geography = lazy(() => import("./screen/geography"));
const Home = lazy(() => import("./screen/Home"));
const Create = lazy(() => import("./scenes/create"));
const Login = lazy(() => import("./screen/auth/Login"));
const Signup = lazy(() => import("./screen/auth/Signup"));
const Contact = lazy(() => import("./screen/contact"));
const Services = lazy(() => import("./screen/Services"));
const About = lazy(() => import("./screen/global/About"));
const UpdateForm = lazy(() => import("./scenes/update"));

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
      route === "/contact" ||
      route === "/services" ||
      route === "/about" ? (
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/signup" element={<Signup />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      ) : (
        <ColorModeContext.Provider value={colorMode}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="app">
              <Sidebar isSidebar={isSidebar} />
              <main className="content">
                <Topbar setIsSidebar={setIsSidebar} />
                <Suspense fallback={<Loading />}>
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
                </Suspense>
              </main>
            </div>
          </ThemeProvider>
        </ColorModeContext.Provider>
      )}
    </Provider>
  );
}

export default App;
