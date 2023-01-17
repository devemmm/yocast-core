import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./screen/global/Topbar";
import Sidebar from "./screen/global/Sidebar";
import Dashboard from "./screen/dashboard";
import USER from "./screen/user";
import Bar from "./screen/bar";
import Line from "./screen/line";
import Pie from "./screen/pie";
import FAQ from "./screen/faq";
import Podcast from "./screen/podcast"
import Subscription from "./screen/subscription"
import LoginActivity from "./screen/login";
import Geography from "./screen/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/USER" element={<USER />} />
              <Route path="/USER" element={<USER />} />
              <Route path="/bar" element={<Bar />} />
              <Route path="/pie" element={<Pie />} />
              <Route path="/line" element={<Line />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/podcast" element={<Podcast />} />
              <Route path="/subscription" element={<Subscription />} />
        
              <Route path="/geography" element={<Geography />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
