import React, { useContext, useState } from "react";
import { FormContext } from "../FormContext/FormContext";
import { IconForm } from "./IconForm";
import './form.css'


function Form() {

    const {
        refForm, refName, refCorreo, refMensaje, handleSubmint,
    } = React.useContext(FormContext);

        

    return(
        <>
            <section className="section--form">
                <form className="section--form__form" ref={refForm} action="" onSubmit={handleSubmint}>
                    <div className="section--form__form__div--inputs">
                        <h2 className="section--form__form__div--inputs__h2">Hablemos</h2>
                        <fieldset className="section--form__form__div--inputs__fieldset">
                            <label className="section--form__form__div--inputs__fieldset__label" htmlFor="nombreId">Nombre</label>
                            <input className="section--form__form__div--inputs__fieldset__input" ref={refName} id="nombreId" name="nombre" type="text" placeholder="Ej: nicolas garcia" required/>
                        </fieldset>
                        <fieldset className="section--form__form__div--inputs__fieldset">
                            <label className="section--form__form__div--inputs__fieldset__label" htmlFor="correoId">Correo</label>
                            <input className="section--form__form__div--inputs__fieldset__input" ref={refCorreo} id="correoId" name="correo" type="text" placeholder="Ej: nicolas@nicolas.com" required/>
                        </fieldset>
                        <fieldset className="section--form__form__div--inputs__fieldset">
                            <label className="section--form__form__div--inputs__fieldset__label" htmlFor="textareaId">Mensaje</label>
                            <textarea className="section--form__form__div--inputs__fieldset__textarea" ref={refMensaje} name="mensaje" id="textareaId" placeholder="Como podemos ayudarte?"></textarea>
                        </fieldset>
                    </div>
                    <div className="section--form__form__div--button">
                        <p className="section--form__form__div--button__p">Enviar</p>
                        <button className="section--form__form__div--button__button"><IconForm/></button>
                    </div>
                </form>
            </section>
        </>
    )
}

export { Form }