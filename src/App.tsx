// import { Route, Routes } from "react-router-dom";
import HomePage from "./components/Pages/Home/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <HomePage />
      <Footer />
    </>
  );
};

export default App;
