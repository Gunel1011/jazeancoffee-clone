import CustomSection from "../../../components/CustomSection";
import Navgitaion from "../../../components/Navgitaion";
import CoffeeHarvest from "./sections/CoffeeHarvest";
import DiscoverYourPath from "./sections/DiscoverYourPath";
import Hero from "./sections/Hero";
import OurOrigin from "./sections/OurOrigin";
import PerfectFusion from "./sections/PerfectFusion";
import Products from "./sections/Products";
import RefinedProcess from "./sections/RefinedProcess";
import RoastedBeans from "./sections/RoastedBeans";

const Home = () => {
  return (
    <>
      <Navgitaion />
      <Hero />
      <OurOrigin />
      <CoffeeHarvest />
      <RefinedProcess />
      <RoastedBeans />
      <PerfectFusion />
      <DiscoverYourPath />
      <Products />
      <CustomSection />
    </>
  );
};
export default Home;
