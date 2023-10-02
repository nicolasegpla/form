import React from "react";
import { Form } from "../Form";
import { Loading } from "../Loading";
import { Error } from "../Error";
import { Enviado } from "../Enviado";
import { FormContext } from "../FormContext/FormContext";
import './appUi.css'


function AppUI() {

    const {
        loading, errorEmail, enviado, inicialForm,
    } = React.useContext(FormContext);
    
    
    return(
        <>
            <div className="board">
                {inicialForm && <Form />}      
                {loading && <Loading />}
                {errorEmail && <Error />}
                {enviado && <Enviado/>}  
            </div>
        </>
    )
}

export { AppUI }