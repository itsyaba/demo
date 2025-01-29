import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Pages/Home/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Services from "./components/Pages/Services/Services";

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/donate" element={<Services />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;
