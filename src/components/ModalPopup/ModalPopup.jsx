import React from 'react'
import closeIco from '../../assets/images/close.svg'

const ModalPopup = ({params, close}) => {

    return (
        <div className="modal">
            <img className="modal__close close" src={closeIco} alt="close" onClick={() => close(false)}/>
            <div className="modal__popup">
                <h1>{params.title}</h1>
                <p>{params.description}</p>
                <form>
                    <input className="text-input" type="text" placeholder="Your email"/>
                    <input className="checkbox" id="first" type="checkbox"/>
                    <label htmlFor="first">I am 18+ and agree with <span>Terms of service</span></label>
                    <br/>
                    <input className="checkbox" id="second" type="checkbox"/>
                    <label htmlFor="second">I agree to receive news</label>
                    <button>Subscribe</button>
                    <div className="cancel" onClick={() => close(false)}>
                        Cancel
                    </div>
                </form>
            </div>

        </div>
    )
}

export default ModalPopup
