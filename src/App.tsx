import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Myrouters from "./router/Myrouters";

import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "./redux/store";

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
    <Provider store={store}>
      <Header />
      <main>
        <Myrouters />
      </main>
      <Footer />
    </Provider>
  );
};

export default App;
