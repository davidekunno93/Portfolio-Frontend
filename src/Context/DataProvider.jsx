import { createContext, useContext, useState } from "react"

const DataProvider = (props) => {
    const [webProjects, setWebProjects] = useState([
        {
            title: "Routewise",
            dp: "https://i.imgur.com/und3dr5.png",
            title_img: "https://i.imgur.com/1RTY0lA.png",
            desc: "This App allows users to catch up to 5 pokemon and battle them against other users",
            text1: "Routewise is product that serves as a itinerary generator for users who are travelling to foreign destinations. I worked with a team of four; Cheryl Chen (Product Manager), Jenny Jin (Product Designer), Kate Leuders (Back-End Developer) and myself (Front-End Developer), creating this real-world product using a product idea that met real customer needs and customizing its user-flow based on user feedback. I used Firebase to handle the authentication, I worked with Kate using Flask to handle the Back-End operations and I used React, HTML and CSS to create everything on the Front-End. In this project I worked with several APIs, I learned how to implement things like an on-screen map, a date-range picker, and create panels and I got a real idea of what it's like to work on a team with different disciplines.",
            text2: "The Routewise web app gives users the ability to sign up and log in, create a trip to a destination, name that trip, populate it with places searched for on a map using an address autocomplete API, have an optimized itinerary generated based on place proximities and new functions are continually being worked on to improve the web application.",
            more_imgs: "https://i.imgur.com/wx4upLO.png*https://i.imgur.com/02aZHAR.png*https://i.imgur.com/oe52kHu.png*https://i.imgur.com/cCoCoMv.png",
            techs: "HTML, CSS, Javascript, Python, Flask, PostgreSQL, Firebase",
            github: "https://github.com/davidekunno93/Routewise-FrontEnd.git",
            website: "https://routewise-front-end.vercel.app/",
        },
        {
            title: "Real Peace Meditation",
            dp: "https://i.imgur.com/w6Akx1Z.png",
            title_img: "https://i.imgur.com/Pa1FfzI.png",
            desc: "RealPeace is a website for social gatherings and organized group meditation meetups",
            text1: "RealPeace is a group created by one of my close friends. The group aims to create a space and provide activities for people who are interested in meditation to meet, socialize and practice meditation together. I was particularly interested in making this website responsive for phone devices as this is likely the primary way the website will be accessed. This project the opportunity for me to learn how to optimize UX, my goal was to create a stylistic website which looks both professional and modern but also has a calm feel with softer colors and round edges. I also learned how to build a carousel during this project. Flask is used for the Backend, React JS is used for the Frontend",
            text2: "When this website is complete, users will be able to find scheduled meetups and register to go those meetups. Users will also be able to subscribe to meetups so they receive email reminders for them, and users will be able to make donations to the event organizers if they would like to.",
            more_imgs: "https://i.imgur.com/w4yT2Bw.png*https://i.imgur.com/g3wpY65.png",
            techs: "HTML, CSS, Python, React JS, Flask, PostgreSQL",
            github: "https://github.com/davidekunno93/RealPeace-Website.git",
            website: "https://real-peace-website.vercel.app/",
        },
        {
            title: "FitHub App",
            dp: "https://i.imgur.com/HcCt0Kp.png",
            title_img: "https://i.imgur.com/RjHiSYb.png",
            desc: "FitHub is a social workout app that allows users to build, share, use and review each other's workouts",
            text1: "This App was my final project in a Coding Bootcamp. I really wanted to combine all of the pieces I had learned thus far, but also challenge myself to do more. I already learned user authentication, api calls and how to use the DOM, but the challenge was that now I had to do this all in React JS. I also learned more complex uses of databases and conditional rendering by having review buttons, and bookmark buttons. I did the styling entirely in CSS, and had lots of fun being creative with the design of this web page, and basing it on the wonderful social app that already exists - Github. I used Flask for the Backend and React JS for the Frontend.",
            text2: "In Fithub, users can build a workout using a library of exercises made availble by API Ninjas. Users can change details of their workout down to the sets, reps, order of exercises, weight intensity etc. before creating the workout and making it available to other users on the site. Once it is created, users can complete the workout or bookmark it and save it for later. Users also can review each workout",
            more_imgs: "https://i.imgur.com/eu2XVUs.png*https://i.imgur.com/EfZ7RH1.png*https://i.imgur.com/w2u0W2a.png*https://i.imgur.com/1tyT5Kz.png*https://i.imgur.com/cwF14AS.png*https://i.imgur.com/9dhGfgt.png*https://i.imgur.com/s0QwhGG.png*https://i.imgur.com/RjHiSYb.png",
            techs: "HTML, CSS, Python, React JS, Flask, PostgreSQL",
            github: "https://github.com/davidekunno93/Workout-App-React.git",
            website: "",
        },
        {
            title: "Pokemon Battle X",
            dp: "https://i.imgur.com/JVZi5Nr.png",
            title_img: "https://i.imgur.com/60THHlZ.png",
            desc: "This App allows users to catch up to 5 pokemon and battle them against other users",
            text1: "I was tasked with creating this App during my Coding Bootcamp. I used Flask for the Backend, HTML and Jinja for the Frontend and PostgreSQL to organize the databases. User authentication, api calls, conditional rendering on a webpage, database structuring and lots of backend processing are some of the major things I learned and practiced while doing this project.",
            text2: "This App allows users to search for pokemon using the pokedex functionality which also displays the pokemon stats. Users can catch and release pokemon (up to 5 can be caught), look over their pokemon on the 'My Team' page and find other users to battle. These battles update your win stats",
            more_imgs: "https://i.imgur.com/x58F4yh.png*https://i.imgur.com/H1w3kaT.png*https://i.imgur.com/8pUi2Ue.png*https://i.imgur.com/cGX5imp.png*https://i.imgur.com/Qf3kZoO.png*https://i.imgur.com/KtqKI1z.png",
            techs: "HTML, CSS, Python, Jinja, Flask, PostgreSQL",
            github: "https://github.com/davidekunno93/Flask_pokedex.git",
            website: "https://pokemon-battle-k3vf.onrender.com/",
        }
    ])

    let testProject = {
        title: "Routewise",
        dp: "https://i.imgur.com/und3dr5.png",
        title_img: "https://i.imgur.com/oe52kHu.png",
        desc: "This App allows users to catch up to 5 pokemon and battle them against other users",
        text1: "I was tasked with creating this App during my Coding Bootcamp. I used Flask for the Backend, HTML and Jinja for the Frontend and PostgreSQL to organize the databases. User authentication, api calls, conditional rendering on a webpage, database structuring and lots of backend processing are some of the major things I learned and practiced while doing this project.",
        text2: "This App allows users to search for pokemon using the pokedex functionality which also displays the pokemon stats. Users can catch and release pokemon (up to 5 can be caught), look over their pokemon on the 'My Team' page and find other users to battle. These battles update your win stats",
        more_imgs: "https://i.imgur.com/x58F4yh.png*https://i.imgur.com/H1w3kaT.png*https://i.imgur.com/8pUi2Ue.png*https://i.imgur.com/cGX5imp.png*https://i.imgur.com/Qf3kZoO.png*https://i.imgur.com/KtqKI1z.png",
        techs: "HTML, CSS, Javascript, Python, Flask, PostgreSQL, Firebase",
        github: "https://github.com/davidekunno93/Routewise-FrontEnd.git",
        website: "https://routewise-front-end.vercel.app/",
    }

    return (
        <DataContext.Provider value={{ "webProjects": webProjects, "setWebProjects": setWebProjects }}>
            {props.children}
        </DataContext.Provider>
    )

}
export default DataProvider;
export const DataContext = createContext();