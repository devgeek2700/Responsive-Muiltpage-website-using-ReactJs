import './App.css';

const Navbar = () => {
    return (
        <>
            <div class="container-fluid nav_bg">
                <div class="row">
                    <div>
                        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                            <div class="container-fluid">
                                <a class="navbar-brand logo" href="#"><i class="fa-brands fa-slack"></i></a>
                                <a class="navbar-brand" href="#">ReactWEB</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-center">
                                        <li class="nav-item">
                                            <a class="nav-link active" aria-current="page" href="/">Home</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/About">About</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/Services">Services</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="/Contact">Contact</a>
                                        </li>

                                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 justify-content-center">

                                            <li class="nav-item">
                                                <button type="button" class="btn btn-warning position-relative rounded-circle ms-4 text-white ">
                                                    <i class="fa-solid fa-message"></i>
                                                    <span class="position-absolute top-8 start-100 translate-middle badge rounded-pill bg-danger mt-2">
                                                        4
                                                        <span class="visually-hidden">unread messages</span>
                                                    </span>
                                                </button>
                                            </li>

                                            <li class="nav-item">
                                                <button type="button" class="btn btn-primary position-relative rounded-circle ms-4">
                                                    <i class="fa-solid fa-gear"></i>
                                                </button>
                                            </li>

                                            <li class="nav-item">
                                                <button type="button" class="btn btn-info position-relative rounded-circle ms-4">
                                                    <i class="fa-solid fa-question"></i>
                                                </button>
                                            </li>


                                            <li class="nav-item">
                                                <button type="button" class="btn btn-primary position-relative rounded-circle ms-4">
                                                    <i class="fa-solid fa-user"></i>
                                                    <span class="position-absolute top-8 start-100 translate-middle badge rounded-pill bg-danger mt-2">
                                                        9+
                                                        <span class="visually-hidden">unread messages</span>
                                                    </span>
                                                </button>
                                            </li>

                                        </ul>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
