import './App.css';

const Footer = () => {
    return (
        <>
            <section class="footer">

                <footer class="footer-distributed">

                    <div class="footer-left">
                        <h3>React<span>WEB</span></h3>

                        <p class="footer-links">
                            <a href="#">Home</a>
                            |
                            <a href="#">About</a>
                            |
                            <a href="#">Services</a>
                            |
                            <a href="#">Blog</a>
                        </p>

                        <p class="footer-company-name">Copyright © 2021
                            <b className="strong_text"> ReactWEB </b>
                            All rights reserved</p>
                    </div>

                    <div class="footer-center">
                        <div>
                            <i class="fa fa-map-marker"></i>
                            <p><span>Mumbai</span>
                                Maharashtra</p>
                        </div>

                        <div>
                            <i class="fa fa-phone"></i>
                            <p>+91 12345678903</p>
                        </div>
                        <div>
                            <i class="fa fa-envelope"></i>
                            <p><a href="mailto:devgeek@gmail.com">Reactweb@gmail.com</a></p>
                        </div>
                    </div>
                    <div class="footer-right">
                        <p class="footer-company-about">
                            <span>About the company</span>
                            <b  className="strong_text">ReactWEB </b>
                            delivers high-quality coffee, that is Made In India, ethical and
                            sustainable. We guarantee 100% coffee, 0% nonsense.
                        </p>
                        <div class="footer-icons">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-instagram"></i></a>
                            <a href="#"><i class="fa fa-linkedin"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-youtube"></i></a>
                            <a href="#"><i class="fa fa-github"></i></a>
                        </div>
                    </div>
                </footer>

            </section>
        </>
    );
}

export default Footer;






