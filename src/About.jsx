import './App.css';
import Common_h_a from './Common_h_a';
import abt_img from "./Images/abt_img.png"


const Home = () => {
  return (
    <>
      <Common_h_a tilte1 = "ReactWEB Company"  
        tilte2 = "Potential Growth"
        btn = "Learn More"
        image = {abt_img}
      />
    </>
  );
}

export default Home;
