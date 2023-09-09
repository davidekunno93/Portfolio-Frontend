import { Link, useNavigate } from "react-router-dom";
import { Carousel } from "../Carousel";
import { useState } from "react";
import axios from "axios";

const Home = () => {
    const [suggestion, setSuggestion] = useState(null);
    const [extraFeedback, setExtraFeedback] = useState(null);
    const navigate = useNavigate()

    const updateSuggestion = (e) => {
        e.preventDefault();
        // const element = document.getElementById('suggestion')
        setSuggestion(e.target.value);
        // console.log(suggestion)
    }

    const updateExtraFeedback = (e) => {
        e.preventDefault();
        setExtraFeedback(e.target.value);
        // console.log(extraFeedback)
    }

    const submitFeedback = async () => {
        if (!suggestion) {
            alert("Please enter a suggestion before submitting feedback.")
        } else if (suggestion) {
            const data = {
                "suggestion": suggestion,
                "extraFeedback": extraFeedback
            }
            // post the data to backend and give return data to handle data function
            const resp = await axios.post("https://portfolio-backend-render-dh74.onrender.com/submit-feedback", JSON.stringify(data), {
                headers: {"Content-Type" : "application/json"}
            })
            .then(resp => handleFeedbackData(resp));
            // navigate('/feedback-received')
        }
        
    }

    const handleFeedbackData = (resp) => {
        console.log(resp.data.data)
        navigate('/feedback-received')
    }

    
    return (
        <>
            <div className="empty-5"></div>
            <h1 className="center-text">Hi, I'm David...</h1>
            <div className="flx-r flx-wrap just-se">
                <div className="section">
                    <h2 className="center-text">About Me</h2>
                    <p className="center-text">
                        I'm of <strong>Nigerian heritage</strong>, born and raised in the <strong>UK</strong> and now living in the <strong>United States of America</strong>.
                        I work as a <strong>Research Coordinator</strong> for clinical drug trials. My favorite pass times are watching a <strong>deep, thrilling movie</strong> or show (my favorite
                        Director is Christopher Nolan), <strong>socializing with friends</strong>, and playing <strong>Soccer</strong> or <strong>Football</strong> as I'm more used to calling it.

                    </p>
                </div>
                <div className="section">
                    <h2 className="center-text">My Experience</h2>
                    <p className="center-text">
                        My <strong>Full-Stack Programming</strong> Experience has come from a <strong>Coding Bootcamp</strong>,
                        <strong>Video Courses</strong> and <strong>Youtube</strong>. I have learned how to use <strong>Python,
                            JavaScript, HTML, CSS, SQL, React, Flask</strong> and built full-stack applications using these languages/frameworks.
                        I have experience with <strong>web page development, authentication, relational databases, debugging</strong>,
                        and <strong>web page designing</strong> and <strong>styling</strong>.
                    </p>
                </div>
                <div className="section">
                    <h2 className="center-text">My Journey</h2>
                    <p className="center-text">
                        I am developing myself as a <strong>Front End Programmer! </strong>
                        My first contact was a video course teaching <strong>Python</strong>. Its logic felt very
                        natural and exciting for me and so I found a Coding Bootcamp called <Link to="http://codingtemple.com" target="_blank">Coding Temple</Link>.
                        Here I was properly introduced to the world of programming. I learned different <strong>languages and frameworks</strong> but also learned
                        <strong>'how to learn'</strong>, and where to find resources to facilitate learning.
                    </p>
                </div>
            </div>

            <div className="empty-3"></div>

            <div className="p2-p3">
                <div className="container part2">
                    <h1 className="center-text roboto m0 mt-5">Build In Public</h1>
                    <Carousel />
                </div>

                <div className="empty-5"></div>
                <h1 className="center-text">My Projects</h1>
                <div className="container part3 flx-r flx-wrap just-se">
                    <div className="section2 flx-c">
                        <img src="https://i.imgur.com/8s3omTG.png" />
                        <h2 className="center-text xx-large dark-text">Web Pages</h2>
                        <Link to="/web-pages"><button className="square-btn-big center mb-3">
                            <p className="m0 inline v-align">See More</p>
                            <span class="material-symbols-outlined v-align ml-2 white-text">
                                arrow_forward
                            </span>
                        </button></Link>
                    </div>
                    <div className="section2 flx-c">
                        <img src="https://i.imgur.com/40THUP7.png" />
                        <h2 className="center-text xx-large dark-text">Mini Apps</h2>
                        <Link to="/mini-apps"><button className="square-btn-big center mb-3">
                            <p className="m0 inline v-align">See More</p>
                            <span class="material-symbols-outlined v-align ml-2 white-text">
                                arrow_forward
                            </span>
                        </button></Link>
                    </div>
                    <div className="section2 flx-c">
                        <img src="https://i.imgur.com/t7emokh.png" />
                        <h2 className="center-text xx-large dark-text">Terminal Games</h2>
                        <Link to="/terminal-games"><button className="square-btn-big center mb-3">
                            <p className="m0 inline v-align">See More</p>
                            <span class="material-symbols-outlined v-align ml-2 white-text">
                                arrow_forward
                            </span>
                        </button></Link>
                    </div>

                </div>


                <h2 className="center-text xx-large">Technologies Used</h2>
                <div className="technologies flx-r flx-wrap just-se">
                    <img className="tech-img mx-2 my-2" src="https://i.imgur.com/IZ5Z5oT.png" />
                    <img className="tech-img mx-2 my-2" src="https://i.imgur.com/acnLzcG.png" />
                    <img className="tech-img mx-2 my-2" src="https://i.imgur.com/xr9rm7N.png" />
                    <img className="tech-img mx-2 my-2" src="https://i.imgur.com/gOMVKam.png" />
                    <img className="tech-img mx-2 my-2" src="https://i.imgur.com/jWg176W.png" />
                </div>

            </div>
            <div className="empty-5"></div>
            <h1 className="center-text m0 mt-5">Your Feedback is Appreciated!</h1>
            <div className="review flx-r flx-wrap just-se">
                <div className="section2 flx-c">
                    <input onChange={(e) => updateSuggestion(e)} className="form-input2 my-2" type="text" placeholder="Suggestion..." />
                    <textarea onChange={(e) => updateExtraFeedback(e)} className="form-textarea2" placeholder="Any more information..."></textarea>
                    <button onClick={() => submitFeedback()} className="square-btn-big center my-3">
                        <p className="m0 ml-3 inline v-align large">SUBMIT</p>
                        <span class="material-symbols-outlined v-align ml-2 white-text">
                            arrow_forward
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}
export default Home;