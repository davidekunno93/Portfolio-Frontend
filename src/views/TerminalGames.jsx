import { Link } from "react-router-dom"

const TerminalGames = () => {

    return (
        <>
        <div className="empty-5"></div>
            <h1 className="center-text">My Terminal Games</h1>
            <div className="section-90 flx-r flx-wrap just-se">
                <div className="square flx-c mx-2 my-5">
                    <div className="square-img-div">
                        <img className="square-img-top" src="https://i.imgur.com/t7emokh.png" />
                    </div>
                    <p className="m0 square-title large center-text my-1 dark-text"><strong>Equation Solver</strong></p>
                    <p className="m0 square-desc medium center-text black-text">My first program was an equation solver that solves linear equations instantly!</p>
                    <Link to="https://replit.com/@DavidEkunno/Equation-Solver-Ax-a-Bx-b" target="_blank"><button className="square-btn-big center x-large mt-3">
                        <p className="m0 inline v-align ml-3 mb-2">View</p>
                        <span className="material-symbols-outlined v-align ml-2 mb-2 white-text">
                            arrow_forward
                        </span>
                    </button></Link>
                </div>
                <div className="square flx-c mx-2 my-5">
                    <div className="square-img-div">
                        <img className="square-img-bottom" src="https://i.imgur.com/0iG7iHj.jpg" />
                    </div>
                    <p className="m0 square-title large center-text my-1 dark-text"><strong>BlackJack 21</strong></p>
                    <p className="m0 square-desc medium center-text black-text">A simple version of the casino game created for fun to be playable in the terminal.</p>
                    <Link to="https://replit.com/@DavidEkunno/BlackJack" target="_blank"><button className="square-btn-big center x-large mt-3">
                        <p className="m0 inline v-align ml-3 mb-2">View</p>
                        <span className="material-symbols-outlined v-align ml-2 mb-2 white-text">
                            arrow_forward
                        </span>
                    </button></Link>
                </div>
                <div className="square flx-c mx-2 my-5">
                    <div className="square-img-div">
                        <img className="square-img" src="https://i.imgur.com/mpoJg17.jpg" />
                    </div>
                    <p className="m0 square-title large center-text my-1 dark-text"><strong>Rock, Paper, Scissors</strong></p>
                    <p className="m0 square-desc medium center-text black-text">Play against the PC and add wins, losses, and draws to your standings</p>
                    <Link to="https://replit.com/@DavidEkunno/Rock-Paper-Scissors" target="_blank"><button className="square-btn-big center x-large mt-3">
                        <p className="m0 inline v-align ml-3 mb-2">View</p>
                        <span className="material-symbols-outlined v-align ml-2 mb-2 white-text">
                            arrow_forward
                        </span>
                    </button></Link>
                </div>
            </div>
            <div className="empty-2"></div>
        </>
    )
}
export default TerminalGames;
