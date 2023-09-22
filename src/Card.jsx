import './App.css';




const Card = (props) => {
    return (
        <>
            <div className='col-md-4 col-10 mx-auto'>
                <div class="card">
                    <img src={props.imgsrc} class="card-img-top" width="190px" height="230px" alt='card-img' />
                    <div class="card-body">
                        <h5 class="card-title font-weight-bold">{props.title}</h5>
                        <p class="card-text">
                            Note that the development build is not optimized.
                            To create a production build, use npm run build.
                        </p>
                        <a href='#' class="btn btn-primary">Learn More</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;
