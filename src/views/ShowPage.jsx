import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CarouselImg } from "../CarouselImg";

const ShowPage = () => {
    const [carouselPosition, setCarouselPosition] = useState(0)
    const [projectShowing, setProjectShowing] = useState(null);
    const location = useLocation()
    const { project } = location.state

    const slideCarousel = (newPosition) => {
        if (newPosition > project.more_imgs.split("*").length - 3) {
            newPosition = 0
        } else if (newPosition < 0) {
            newPosition = project.more_imgs.split("*").length - 3
        }
        setCarouselPosition(newPosition)
    }

    return (
        <>
            <div className="empty-5"></div>
            <h1 className="center-text xx-large">{project.title}</h1>
            <div className="section-80 center my-2 flx-c">
                <img className="section1-img" src={project.title_img} />
                <div className="section-text dark-text">
                    {project.text1}
                </div>
            </div>
            <div className="section-80 center my-2 flx-c">

                {project.more_imgs.split("*").length > 3 ? <>
                    <div className="picture-row flx-r invisible768">
                        <div className="left-btn center-text">
                            <div className="v-helper"></div>
                            <img onClick={() => slideCarousel(carouselPosition - 1)} src="https://i.imgur.com/KapYyYQ.png" alt="" className="vb-arrow-left v-align inline-block" />
                        </div>
                        <div className="carousel flx-1">
                            <div className="inner" style={{ transform: `translateX(-${carouselPosition * 33.3}%)` }}>
                                {project.more_imgs.split("*").map((img_url, i) => {
                                    return <CarouselImg img_url={img_url} />
                                })}
                            </div>
                        </div>
                        <div className="right-btn center-text">
                            <div className="v-helper"></div>
                            <img onClick={() => slideCarousel(carouselPosition + 1)} src="https://i.imgur.com/N3aNd8b.png" alt="" className="vb-arrow-right v-align inline-block" />
                        </div>
                    </div>

                    <div className="img-section flx-r flx-wrap just-sb visible768">
                        {project.more_imgs.split("*").map((img_url, i) => {
                            return <div key={i} className="s-img my-1">
                                <Link to={img_url} target="_blank"><img className="section2-img center" src={img_url} /></Link>
                            </div>
                        })}
                    </div>

                </> :

                    <div className="img-section flx-r flx-wrap just-sb">
                        {project.more_imgs.split("*").map((img_url, i) => {
                            return <div key={i} className="s-img my-1">
                                <Link to={img_url} target="_blank"><img className="section2-img center" src={img_url} /></Link>
                            </div>
                        })}
                    </div>}


                <div className="section-text dark-text">
                    {project.text2}
                </div>
            </div>

            <div className="section-80 center my-2 flx-c dark-text">
                <div className="section-text">
                    <p className="m0"><strong>Technologies:</strong> {project.techs}</p>
                </div>
                <div className="section-text">
                    <p className="m0"><strong>Github: </strong><Link className="wrap-text" to={project.github} target="_blank">{project.github}</Link></p>
                </div>
                <div className="section-text">
                    <p className="m0"><strong>Deployed site: </strong>{project.website ? <Link className="wrap-text" to={project.website} target="_blank">{project.website}</Link> : " Coming soon"}</p>
                </div>
            </div>
            <div className="empty-2"></div>
        </>
    )
}
export default ShowPage;