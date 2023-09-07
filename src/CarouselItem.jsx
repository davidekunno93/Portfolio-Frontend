import { Link } from "react-router-dom"

export const CarouselItem = ({ item }) => {

    return (
        <div className="carousel-item rel">
            <div></div>
            <div className="carousel-img-div wide50">
            <img className="carousel-img center" src={item.img} />
            </div>
            <div className="carousel-text flx-c wide50">
                <h2 className="carousel-title m0 xx-large">{item.title.toUpperCase()}</h2>
                <p className="carousel-p m0 small">{item.description}</p>
                {item.link ? <Link to={item.link} target="_blank"><button className="square-btn mt-4"><p className="m0 inline v-align">Learn More</p>
                    <span class="material-symbols-outlined v-align ml-2">
                        arrow_forward
                    </span></button>
                    </Link> : null}
                <img className="carousel-shape" src={item.shape} />
            </div>
        </div>
    )
}