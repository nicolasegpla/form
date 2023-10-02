import React from "react";
import { useFormEmail } from "./useFormEmail";
const FormContext = React.createContext();

function FormProvider({ children }) {

    const { refForm, refName, refCorreo, refMensaje, handleSubmint, loading, errorEmail, enviado, inicialForm, setEnviado, setInicialForm, setErrorEmail } = useFormEmail('service_9pvyvc7', 'template_sawc83e', 'OYoO3RrvfP-KakjKc');

    const sendBack = () => {
        setEnviado(false);
        setInicialForm(true);
        setErrorEmail(false);
    }
    
    return(
        <FormContext.Provider value={{
            refForm, refName, refCorreo, refMensaje, handleSubmint, loading, errorEmail, enviado, inicialForm, sendBack,
        }}>
            {children}
        </FormContext.Provider>
    )
}



export { FormContext, FormProvider }