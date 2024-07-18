import About from "../components/About";
import Skill from "../components/Skill";
import Banner from "../components/shared/Banner";
import Navbar from "../components/shared/Navbar";


const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Banner></Banner>
      <Skill></Skill>
      <About></About>

    </div>
  );
};

export default Home;