import React from "react";
import { useState } from "react";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

function useFormEmail(serviceId, templateId, apiKey) {

    const [loading, setLoading] = useState(false);
    const [errorEmail, setErrorEmail] = useState(false);
    const [enviado, setEnviado] = useState(false);
    const [inicialForm, setInicialForm] = useState(true);

    const refForm = useRef();
    const refName = useRef();
    const refCorreo = useRef();
    const refMensaje = useRef();

    const handleSubmint = (event) => {
            event.preventDefault();

            const verificarCorreo = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;

            console.log(refCorreo.current.value)
            if(verificarCorreo.test(refCorreo.current.value)) {
                setLoading(true);
                emailjs.sendForm(serviceId, templateId, refForm.current, apiKey)
                .then(res => {
                    console.log(res.status)
                    refName.current.value = '';
                    refCorreo.current.value = '';
                    refMensaje.current.value = '';
                    setLoading(false);
                    setInicialForm(false);
                    setEnviado(true);
                })
                .catch(error => 
                    {
                    console.error(error.status)
                    setInicialForm(false);
                    setLoading(false);
                    setErrorEmail(true);
                })
            }else {
                alert('Correo invalido');
            }
        }
    return {
        refForm,
        refName,
        handleSubmint,
        refCorreo,
        refMensaje,
        loading,
        errorEmail,
        enviado,
        inicialForm,
        setEnviado,
        setInicialForm,
        setErrorEmail,
        }
};

export { useFormEmail }