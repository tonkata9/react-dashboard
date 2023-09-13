import { ColorModeContext,useMode } from "./theme";
import { CssBaseline,ThemeProvider } from "@mui/material";
import Topbar from "./data/scenes/global/Topbar";
import Dashboard from "./data/scenes/dashboard";
import { Routes,Route } from "react-router-dom";
import Sidebar from "./data/scenes/global/Sidebar";
import { useState } from "react";

//import Team from "./scenes/team";
//import Invoices from "./scenes/invoices";
//import Contacts from "./scenes/contacts";
//import Bar from "./scenes/bar";
//import Form from "./scenes/form";
//import Line from "./scenes/line";
//import Pie from "./scenes/pie";
//import FAQ from "./scenes/faq";
//import Geography from "./scenes/geography";
//import Calendar from "./scenes/calendar/calendar";
function App() {
  const [theme,colorMode]=useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline/>

    <div className="app">
    <Topbar setIsSidebar={setIsSidebar}/>
    <Sidebar isSidebar={isSidebar} />
      <main className="content">
      
        <Routes>
          <Route path="/" element={Dashboard}/>
           
        </Routes>
      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App;
