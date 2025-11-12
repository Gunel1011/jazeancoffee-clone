import Footer from "./components/Footer";
import Header from "./components/Header";
import Myrouters from "./router/Myrouters";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-out-cubic",
      offset: 100,
      delay: 500,
      once: false,
    });
  }, []);
  return (
    <>
      <Header />
      <Myrouters />
      <Footer />
    </>
  );
};

export default App;
