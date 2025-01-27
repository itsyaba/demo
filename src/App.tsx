import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Pages/Home/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;
