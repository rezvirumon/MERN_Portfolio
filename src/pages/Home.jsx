import About from "../components/About";
import Projects from "../components/Projects";
import Skill from "../components/Skill";
import Banner from "../components/shared/Banner";



const Home = () => {
  return (
    <div>
      
      <Banner></Banner>
      <Skill></Skill>
      <About></About>
      <Projects></Projects>
    </div>
  );
};

export default Home;