import React from "react";
import { IconSend } from "../FormContext/IconSend";
import { FormContext } from "../FormContext/FormContext";
import './send.css'

function Enviado() {

    const {sendBack} = React.useContext(FormContext);
    return(
        <>
            <div className="div--send">
                <h1 className="div--send__h1">¡Gracias!</h1>
                <div className="div--send__div--line"></div>
                <p className="div--send__p">Pronto nos comunicaremos contigo.</p>
                <div className="section--form__form__div--button">
                    <p className="section--form__form__div--button__p">Volver</p>
                    <button 
                    onClick={sendBack} className="section--form__form__div--button__button"><IconSend/></button>
                </div>
            </div>
        </>
    )
}

export { Enviado }