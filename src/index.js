import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'
import './styles/global.scss'
import { SnackbarProvider } from 'notistack'
import StyledMaterialDesignContent from '../src/components/Snackbar/style'

import CustomVariantSnackbar from '../src/components/Snackbar/Snackbar'

const root = ReactDOM.createRoot(document.getElementById('root'))
const themeSnackbar = {
    customVariant: CustomVariantSnackbar,
    warning: StyledMaterialDesignContent,
    info: StyledMaterialDesignContent,
    success: StyledMaterialDesignContent,
    error: StyledMaterialDesignContent,
}

root.render(
    <SnackbarProvider
        // TransitionComponent={Zoom}
        Components={themeSnackbar}
        maxSnack={10}
        persist={false}
    >
        <App />
    </SnackbarProvider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
