import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ShowPage = () => {
    const [projectShowing, setProjectShowing] = useState(null);
    const location = useLocation()
    const { project } = location.state

    return (
        <>
            <div className="empty-5"></div>
            <h1 className="center-text xx-large">{project.title}</h1>
            <div className="section-80 center my-2 flx-c">
                <img className="section1-img" src={project.title_img} />
                <div className="section-text">
                    {project.text1}
                </div>
            </div>
            <div className="section-80 center my-2 flx-c">
                <div className="img-section flx-r flx-wrap just-sb">
                    {project.more_imgs.split("*").map((img_url, i) => {
                    return <div key={i} className="s-img my-1">
                        <Link to={img_url} target="_blank"><img className="section2-img center" src={img_url} /></Link>
                    </div>
                    })}
                </div>
                <div className="section-text">
                {project.text2}
                </div>
            </div>

            <div className="section-80 center my-2 flx-c">
                <div className="section-text">
                    <p className="m0"><strong>Technologies:</strong> {project.techs}</p>
                </div>
                <div className="section-text">
                    <p className="m0"><strong>Github:</strong> <Link className="wrap-text" to={project.github} target="_blank">{project.github}</Link></p>
                </div>
                <div className="section-text">
                    <p className="m0"><strong>Deployed site:</strong> <Link className="wrap-text">{project.website}</Link></p>
                </div>
            </div>
        </>
    )
}
export default ShowPage;