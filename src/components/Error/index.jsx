import React, { useContext } from "react";
import { IconSend } from "../FormContext/IconSend";
import { FormContext } from "../FormContext/FormContext";
import './error.css'

function Error() {

    const { sendBack } = React.useContext(FormContext)

    return(
        <>
            <div className="div--error">
                <h1 className="div--error__h1">¡Tu mensaje NO se pudo enviar!</h1>
                <div className="div--error__div--line"></div>
                <p className="div--error__p">Intenta de nuevo</p>
                <div className="section--form__form__div--button">
                    <p className="section--form__form__div--button__p">Volver</p>
                    <button onClick={sendBack}
                    className="section--form__form__div--button__button--error"><IconSend /></button>
                </div>
            </div>
        </>
    )
}

export { Error }