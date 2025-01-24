import React , {useState} from "react";
import AboutUs from "./pages/AboutUs/AboutUs";
import Navbar from "./components/NavBar/NavBar";
import LogoHeader from "./components/LogoHeader/LogoHeader";
import Desert from "./pages/Desert/Desert";
import Salty from "./pages/Salty/Salty";
import Beverages from "./pages/Beverages/Beverages";

function App() {
  const [currentPage, setCurrentPage] = useState("desert");  return (
    <div className="App">
      <LogoHeader />
      <Navbar setCurrentPage={setCurrentPage} />
      {currentPage === "desert" && <Desert />}
      {currentPage === "salty" && <Salty />}
      {currentPage === "beverages" && <Beverages />}
      {/* {currentPage === "about-us" && <AboutUs />} */}
    </div>
  );
}

export default App;
