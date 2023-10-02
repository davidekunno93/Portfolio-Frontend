import { useState } from "react"
import { CarouselItem } from "./CarouselItem"

export const Carousel = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const items = [
        {
            img: "https://i.imgur.com/CcqXa3L.png",
            title: "Github",
            description: "My latest projects and mini projects are uploaded here.",
            shape: "https://i.imgur.com/TOKLnsA.png",
            link: "https://github.com/davidekunno93"
        },
        {
            img: "https://i.imgur.com/USR2glB.png",
            title: "LinkedIn",
            description: "Connect with me here. I post about my accomplishments.",
            shape: "https://i.imgur.com/8chvzdD.png",
            link: "https://www.linkedin.com/in/david-ekunno-794619a3/"
        },
        {
            img: "https://i.imgur.com/5Jb7ZqB.png",
            title: "Coming soon...",
            description: "I'm looking at other social media apps to document my journey as a programmer.",
            shape: "https://i.imgur.com/2Ut6LC1.png"
        }
    ]

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0
        } else if (newIndex >= items.length) {
            newIndex = items.length - 1
        };
        setActiveIndex(newIndex);
    }

    return (
        <>
            <div className="carousel">
                <div className="inner" style={{ transform: `translate(-${activeIndex * 100}%)` }}>
                    {items.map((item) => {
                        return <CarouselItem item={item} />
                    })}
                </div>
            </div>
            <div className="carousel-btns flx-r just-ce">

                <button onClick={() => updateIndex(activeIndex - 1)} className='arrow-left seethru'>
                    <span className="material-symbols-outlined black-text">
                        arrow_back_ios
                    </span>
                </button>

                <div className="indicators">
                    {items.map((item, index) => {
                        return <button className='seethru' onClick={() => updateIndex(index)}><span className="material-symbols-outlined black-text">
                            {activeIndex === index ? "radio_button_checked" : "radio_button_unchecked"}
                        </span></button>
                    })}
                </div>

                <button onClick={() => updateIndex(activeIndex + 1)} className='arrow-right seethru'>
                    <span className="material-symbols-outlined black-text">
                        arrow_forward_ios
                    </span>
                </button>

            </div>
        </>
    )
}