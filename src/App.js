import React, { useState } from 'react'
import './styles.scss'
import Slider from "./components/Slider/Slider"
import first from "./assets/images/pluses/1.svg"
import second from "./assets/images/pluses/2.svg"
import third from "./assets/images/pluses/3.svg"
import ModalPopup from "./components/ModalPopup/ModalPopup"

function App() {
    const [openModal, setOpenModal] = useState(false)
    const [params, setParams] = useState({title: "", description: ""})

    function handleClick (title, description) {
        setOpenModal(true)
        setParams({title: title, description: description})
    }
    return (
        <div className="app">
            <Slider/>
            <div className="main__block">
                <h3 className="main__block__tittle">
                    Hey, I am Marce. You can find my work in a lot of places, but the only <span
                    className="main__block__tittle-orange">Premium Shows</span> I have is right here on FanCentro
                </h3>
                <div className="main__block__pluses">
                    <div className="main__block__pluses__item">
                        <img src={first} alt="first"/>
                        <p>
                            Huge <br/> variety of <br/> content!
                        </p>
                    </div>
                    <div className="main__block__pluses__item">
                        <img src={second} alt="second"/>
                        <p>
                            Posted <br/> 24hrs a day <br/> 7 days a week!
                        </p>
                    </div>
                    <div className="main__block__pluses__item">
                        <img src={third} alt="third"/>
                        <p>
                            Most intimate <br/> moments of <br/> my life!
                        </p>
                    </div>
                </div>
                <div className="main__block__start">
                    <div className="main__block__start__item">
                        <h4>30$ <div>per month</div></h4>
                        <p>Free trial 2 days <br/> Whole content</p>
                        <button onClick={() => handleClick('Free trial 2 days', '30$ per month / whole content')}>
                            Start now
                        </button>
                    </div>
                    <div className="main__block__start__item">
                        <h4>10$ <div>per month</div></h4>
                        <p>Free trial 1 day <br/> Solo shows</p>
                        <button onClick={() => handleClick('Free trial 1 day', '10$ per month / whole content')}>
                            Start now
                        </button>
                    </div>
                    <div className="main__block__start__item">
                        <h4>5$ <div>per month</div></h4>
                        <p>Premium <br/> shows</p>
                        <button onClick={() => handleClick('Premium shows', '5$ per month / whole content')}>
                            Start now
                        </button>
                    </div>
                </div>
            </div>
            <div className="rights">
                2257 – All models featured herein were at least <br/> 18 years of age at the time of photography.
            </div>
            {openModal ? <ModalPopup params={params} close={setOpenModal}/> : null}
        </div>
    );
}

export default App;
