import { ColorModeContext,useMode } from "./theme";
import { CssBaseline,ThemeProvider } from "@mui/material";
import Topbar from "./data/scenes/global/Topbar";
import Dashboard from "./data/scenes/dashboard";
import { Routes,Route } from "react-router-dom";
import Sidebar from "./data/scenes/global/Sidebar";
import { useState } from "react";
import Team from "./data/scenes/team";
import Invoices from "./data/scenes/invoices";
import Contacts from "./data/scenes/contacts";
import Bar from "./data/scenes/bar";
import Form from "./data/scenes/form";
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
    <Sidebar isSidebar={isSidebar} />
    
   
      <main className="content">
      <Topbar setIsSidebar={setIsSidebar}/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/team" element={<Team/>}/>
          <Route path="/contacts" element={<Contacts/>}></Route>
          <Route path="/invoices" element={<Invoices/>}></Route>
          <Route path="/form" element={<Form/>}></Route>
          <Route path="/bar" element={<Bar/>}></Route>
        </Routes>
      </main>
    </div>
    </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
export default App;
