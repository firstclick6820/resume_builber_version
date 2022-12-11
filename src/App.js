import React , { useState } from "react";
import { Routes, Route } from "react-router-dom";


// Imoprt Custom Components
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";

import Dashboard from "./scenes/dashboard";
import Templates from "./scenes/template";


import Contacts from "./scenes/contacts";
import Social from "./scenes/social media";
import EmailMarketing from "./scenes/email marketing";


import Profile from "./scenes/profile";
import Account from './scenes/account'
import Messages from './scenes/messages'
import API from './scenes/api'



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
              <Route path="/templates" element={<Templates />} />
              <Route path="/social_media" element={<Social />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/email_marketing" element={<EmailMarketing />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/account" element={<Account />} />
              <Route path="/api" element={<API />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
