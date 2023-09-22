import './App.css';
import Footer from './Footer';


const Common_h_a = (props) => {
    return (
        <>
            <section id="header" className='home_cont d-flex align-items-center'>
                <div class="container-fluid nav_bg">
                    <div class="row  d-flex align-items-center" >
                        <div className='col-10 mx-auto'>

                            <div className="row">

                                <div className='left_h_box col-md-6 pt-5 pt-lg-5 order-2 order-lg-1'>
                                    <h1>{props.tilte1} <br /> with <strong>{props.tilte2}</strong> </h1>
                                    <h2 className='my-3'>
                                        We are the team of talented developer making websites
                                    </h2>
                                    <div className='mt-3 btn btn-outline-primary Btn'>
                                        <a href='/Services'>{props.btn} </a>
                                    </div>
                                </div>

                                <div className='right_h_box col-lg-6 header-img pt-lg-5 order-2 order-lg-2'>
                                    <img src={props.image} className='animated_img' width="700px" height="500px" alt='bus_team_img' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Common_h_a;
