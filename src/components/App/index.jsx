import React from 'react'
import { AppUI } from '../AppUI'
import './App.css'
import { FormProvider } from '../FormContext/FormContext'

function App() {
  
  return (
    <>
      <FormProvider>
        <AppUI />
      </FormProvider>
      
    </>
  )
}

export { App }
