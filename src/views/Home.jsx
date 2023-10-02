import { Link, useNavigate } from "react-router-dom";
import { Carousel } from "../Carousel";
import { useEffect, useState } from "react";
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
                headers: { "Content-Type": "application/json" }
            })
                .then(resp => handleFeedbackData(resp));
            // navigate('/feedback-received')
        }

    }

    const handleFeedbackData = (resp) => {
        console.log(resp.data.data)
        navigate('/feedback-received')
    }

    const getData = async () => {
        const resp = await axios.get('https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple')
        return resp.data
    }
    const loadData = async () => {
        let data = await getData();
        // console.log(data)
        console.log(data.results)
        setQuestions(data.results)
        // console.log(data.results.incorrect_answers)
        // updateAnswers()
        let answers = [data.results[count].correct_answer, ...data.results[count].incorrect_answers]
        console.log(answers)
        answers.sort()
        console.log(answers)
        setCurrentAnswers(answers)
    }

    const [questions, setQuestions] = useState(() => loadData())
    const [currentAnswers, setCurrentAnswers] = useState(null)
    const [count, setCount] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [points, setPoints] = useState(0)

    const updateSelection = (ans) => {
        // e.preventDefault();
        console.log(ans)
        setSelectedAnswer(ans)
    }

    const nextQuestion = () => {
        let correct = document.getElementById('correct-answer')
        let incorrect = document.getElementById('incorrect-answer')
        let finish = document.getElementById('finish')
        correct.classList.add('d-none')
        incorrect.classList.add('d-none')
        for (let i = 0; i < 4; i++) {
            let radio = document.getElementById(i)
            radio.checked = false
        }
        if (count < 9) {
            let answers = [questions[count + 1].correct_answer, ...questions[count + 1].incorrect_answers]
            answers.sort()
            setCurrentAnswers(answers)
            setCount(count + 1);
        } else {
            finish.classList.remove('d-none')
        }
    }

    const submitAnswer = () => {
        let correct = document.getElementById('correct-answer')
        let incorrect = document.getElementById('incorrect-answer')
        console.log(questions[count].correct_answer, "is the correct answer")
        if (selectedAnswer === questions[count].correct_answer) {
            correct.classList.remove('d-none')
            if (points < 10) {
                setPoints(points + 1)
            }

        } else {
            incorrect.classList.remove('d-none')
        }
    }


    return (
        <>
        <div className="p1">
            <div className="empty-5"></div>
            {/* <h1 className="center-text">Hi, I'm David...</h1>
            <div className="flx-r flx-wrap just-se">
                <div className="section">
                    <h2 className="center-text">About Me</h2>
                    <p className="center-text font-ub">
                        I'm of <strong>Nigerian heritage</strong>, born and raised in the <strong>UK</strong> and now living in the <strong>United States of America</strong>.
                        I work as a <strong>Research Coordinator</strong> for clinical drug trials. My favorite pass times are watching a <strong>deep, thrilling movie</strong> or show (my favorite
                        Director is Christopher Nolan), <strong>socializing with friends</strong>, and playing <strong>Soccer</strong> or <strong>Football</strong> as I'm more used to calling it.

                    </p>
                </div>
                <div className="section">
                    <h2 className="center-text">My Experience</h2>
                    <p className="center-text font-ub">
                        My <strong>Full-Stack Programming</strong> Experience has come from a <strong>Coding Bootcamp</strong>,
                        <strong>Video Courses</strong> and <strong>Youtube</strong>. I have learned how to use <strong>Python,
                            JavaScript, HTML, CSS, SQL, React, Flask</strong> and built full-stack applications using these languages/frameworks.
                        I have experience with <strong>web page development, authentication, relational databases, debugging</strong>,
                        and <strong>web page designing</strong> and <strong>styling</strong>.
                    </p>
                </div>
                <div className="section">
                    <h2 className="center-text">My Journey</h2>
                    <p className="center-text font-ub">
                        I am developing myself as a <strong>Front End Programmer! </strong>
                        My first contact was a video course teaching <strong>Python</strong>. Its logic felt very
                        natural and exciting for me and so I found a Coding Bootcamp called <Link to="http://codingtemple.com" target="_blank">Coding Temple</Link>.
                        Here I was properly introduced to the world of programming. I learned different <strong>languages and frameworks</strong> but also learned
                        <strong>'how to learn'</strong>, and where to find resources to facilitate learning.
                    </p>
                </div>
            </div> */}

            <div className="bio-section flx-r-respond m-auto wide90">
                <h1 className="respond-visible center-text">Hi, my name is David...</h1>
                <div className="c1 flx-1 section3">
                    <img src="https://i.imgur.com/g0ZSvBo.png" alt="" className="bio-img center" />
                </div>
                <div className="c2 flx-2 flx-c respond-center">
                    <div className="c2r4 flx-1 respond-invisible">
                        <h1>Hi, my name is David...</h1>
                    </div>
                    <div className="c2r1 flx-1">
                        <h2>I am a Frontend Programmer</h2>
                    </div>
                    <div className="c2r2 flx-3">
                        <p>I love programming because <strong>I love to problem solve</strong>, and programming
                            is a constant hamster wheel of solving for solutions. <strong>My favorite language is Python</strong>, its logic feels incredibly natural to me. Though Python isn't a Frontend language, JavaScript has similar logic and syntax, and I enjoy the <strong>combination of problem solving and stylistic creativity</strong> that feels unique to Frontend programming. At <Link to="https://www.codingtemple.com/" target="_blank">Coding Temple</Link>, a coding bootcamp, I was properly introduced to the world of programming. I learned different languages and frameworks, and I also learned <strong>'how to learn'</strong>, and where to find resources to facilitate learning.
                        </p>
                    </div>
                    <div className="c2r3 flx-r flx-1">
                        <div className="btns"></div>
                        <Link to='https://github.com/davidekunno93' target="_blank"><button className="square-btn mr-2"><p className="m0 inline v-align">Github</p><img src="https://i.imgur.com/ECvRrxw.png" alt="" className="link-img ml-2" /></button></Link>
                        <Link to='https://www.linkedin.com/in/david-ekunno-794619a3/' target="_blank"><button className="square-btn ml-2"><p className="m0 inline v-align">LinkedIn</p><img src="https://i.imgur.com/WBpcM53.png" alt="" className="link-img ml-2" /></button></Link>

                    </div>
                </div>
            </div>

            <div className="empty-3"></div>
            </div>
            <div className="p2-p3">
                {/* <div className="container part2">
                    <h1 className="center-text m0 mt-5">Build In Public</h1>
                    <Carousel />
                </div> */}

                <h1 className="center-text mt-5">My Personal Skills</h1>
                {/* <p className="m0 small center-text">(Vote which skill is most important for you)</p> */}
                <div className="flx-r flx-wrap just-se">

                    {/* <div className="box flx-c"> */}
                        <div className="section4-yellow flx-c">
                            <img src="https://i.imgur.com/f4gfQvQ.png" className="section4-img center" />
                            <h2 className="center-text">Communication</h2>
                            <p className="m0 font-ub center-text mb-2">Keeping a positive mindset and remaining on the same page with your team is paramount. I do this with positive reinforcement, constructive feedback and actively exploring others' ideas.</p>
                        </div>
                        {/* <div className="favorites flx-r just-ce my-2">
                            <img src="https://i.imgur.com/OysRrUq.png" alt="" className="star-img" />
                            <p className="m0">&nbsp;#</p>
                        </div> */}
                    {/* </div> */}

                    <div className="section4-orange flx-c">
                        <img src="https://i.imgur.com/CMzRfXk.png" className="section4-img center" />
                        <h2 className="center-text">Commitment</h2>
                        <p className="m0 font-ub center-text mb-2">Commitment means prioritizing, in committing to an objective I make available the time and effort to complete it, and make the necessary sacrifices when that's not enough.</p>
                    </div>
                    <div className="section4-pink flx-c">
                        <img src="https://i.imgur.com/TmRbW7D.png" className="section4-img center" />
                        <h2 className="center-text">Creativity</h2>
                        <p className="m0 font-ub center-text mb-2">I am a creative individual. I bring unique and ambitious perspectives to design and when tackling problems which can be useful for finding solutions and opening up the discussion.</p>
                    </div>
                </div>

                <div className="empty-5"></div>
                <h1 className="center-text">My Work</h1>
                <div className="part3 section-90 flx-r flx-wrap just-sb-respond">
                    <div className="section2-space flx-c">
                        <img src="https://i.imgur.com/E7qxluT.png" className="mywork-img" />
                        <h2 className="center-text xx-large dark-text">Projects</h2>
                        <Link to="/web-pages"><button className="square-btn-big center mb-3">
                            <p className="m0 ml-4 inline v-align">See More</p>
                            <span class="material-symbols-outlined right v-align ml-2 white-text">
                                arrow_forward
                            </span>
                        </button></Link>
                    </div>
                    <div className="section2-space flx-c">
                        <img src="https://i.imgur.com/40THUP7.png" className="mywork-img" />
                        <h2 className="center-text xx-large dark-text">Mini Apps</h2>
                        <Link to="/mini-apps"><button className="square-btn-big center mb-3">
                            <p className="m0 ml-4 inline v-align">See More</p>
                            <span class="material-symbols-outlined right v-align ml-2 white-text">
                                arrow_forward
                            </span>
                        </button></Link>
                    </div>
                    <div className="section2-space flx-c">
                        <img src="https://i.imgur.com/t7emokh.png" className="mywork-img" />
                        <h2 className="center-text xx-large dark-text">Terminal Games</h2>
                        <Link to="/terminal-games"><button className="square-btn-big center mb-3">
                            <p className="m0 ml-4 inline v-align">See More</p>
                            <span class="material-symbols-outlined right v-align ml-2 white-text">
                                arrow_forward
                            </span>
                        </button></Link>
                    </div>

                </div>

                <div className="empty-4"></div>

                <h1 className="center-text">How's your Trivia?!</h1>
                {Array.isArray(questions) ? <>
                    <div className="trivia-section wide90 flx-c m-auto font-ub rel section3-auto">
                        <div id="finish" className="finish d-none center-text">
                            <div className="v-helper"></div>
                            <div className="v-align inline-block">
                                <h1 className="m0 center-text">End of Quiz</h1>
                                <h2 className="m0 center-text my-2 color-green">You Scored {points}/10</h2>
                                {/* <button onClick={() => nextQuestion()} className="square-btn center">Next Question</button> */}
                            </div>
                        </div>
                        <div id="correct-answer" className="correct-answer d-none center-text">
                            <div className="v-helper"></div>
                            <div className="v-align inline-block">
                                <h1 className="m0 center-text">Correct Answer!</h1>
                                <h2 className="m0 center-text my-2 color-green">+1</h2>
                                <button onClick={() => nextQuestion()} className="square-btn center">Next Question</button>
                            </div>
                        </div>
                        <div id="incorrect-answer" className="incorrect-answer d-none center-text">
                            <div className="v-helper"></div>
                            <div className="v-align inline-block">
                                <h1 className="m0 center-text">Incorrect Answer!</h1>
                                <h2 className="m0 center-text my-2 color-green">&nbsp;</h2>
                                <button onClick={() => nextQuestion()} className="square-btn center">Next Question</button>
                            </div>
                        </div>
                        <h2 className="r1 flx-1 center-text pad8">Q{count + 1}: <span className="question">{questions[count].question}</span> </h2>

                        <div className="r2 flx-r-respond flx-4">
                            <div className="r2c1 flx-1">
                                <Link to='https://opentdb.com' target="_blank" className="black-link"><img src="https://i.imgur.com/xgQwmEi.png" className="trivia-pic center mt-3h" />
                                    <p className="m0 v-align center-text small">
                                        Click to see the open Trivia Database API
                                        <span class="material-symbols-outlined v-tbott ml-1 medium">
                                            open_in_new
                                        </span>
                                    </p></Link>
                            </div>
                            <div className="r2c2 flx-3">
                                <div className="answers flx-r-respond flx-wrap pad8">
                                    {currentAnswers.map((ans, i) => {
                                        return <div className="answer-choice my-2">
                                            <input onClick={() => updateSelection(ans)} id={i} type="radio" name="multiple-choice" className="radio-btn v-align" value={ans} />
                                            <label htmlFor={i} className="radio-label m0 inline ml-2 v-align large">{ans}</label>
                                        </div>
                                    })}


                                </div>
                                <div onClick={() => submitAnswer()} className="submit"><button className="square-btn right my-4 mx-5">Submit Answer</button></div>

                            </div>
                        </div>
                    </div>
                    <div className="black-bar rel">
                        <div className="green-bar abs" style={{ width: `${points * 10}%` }}></div>
                        <p className="trivia-score m0 white-text small abs mr-4">Score: {points}/10</p>
                    </div>
                </> : <p className="center-text">Loading...</p>}

                <div className="empty-2"></div>


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
            <div className="review flx-r flx-wrap just-se wide90 m-auto">
                <div className="fb-text flx-2">
                    <div className="text pad28">
                        <h1 className="center-text m0 mt-5">Your Feedback is Invaluable</h1>
                        <p className="pad16 center-text font-ub">Any suggestion, constructive criticism, appraisal or even question is welcome! The feedback you provide will help improve this porfolio page.</p>
                    </div>
                </div>
                <div className="section2 flx-1 flx-c">
                    <input onChange={(e) => updateSuggestion(e)} className="form-input2 my-2" type="text" placeholder="I think it would be cool if..." />
                    <textarea onChange={(e) => updateExtraFeedback(e)} className="form-textarea2 flx-1" placeholder="Any extra information..."></textarea>
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