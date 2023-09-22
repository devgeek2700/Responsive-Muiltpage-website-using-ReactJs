import './App.css';
import Card from './Card';
import Datacard from './Datacard';
import Footer from './Footer';


const Services = () => {
  return (
    <> <div className='my-5'>
      <h1 className='tab-center serv_txt'>Our Services</h1>
    </div>
      <div class="container-fluid">
        <div class="row">
          <div className='col-10 mx-auto'>
            <div className='row gy-4'>

              {/* <Card tour_img={tour1} tour_title="Norway" /> */}
              {
                Datacard.map((curVal, idx) =>{
                  return <Card 
                    imgsrc = {curVal.imgsrc}
                    title = {curVal.title}
                  />

                })
              }
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Services;
