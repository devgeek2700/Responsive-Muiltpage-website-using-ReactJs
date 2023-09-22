import './App.css';
import bus_team_img from "./Images/bus_team.png"
import Common_h_a from './Common_h_a';

const Home = () => {
  return (
    <>
      <Common_h_a tilte1 = "Grow your business"  
        tilte2 = "ReactWEB"
        btn = "Get Started"
        image = {bus_team_img}
      />
    </>
  );
}

export default Home;
