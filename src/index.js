import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import {CartContextProvider} from './components/store/CartContext'
import App from './App'
import './index.css'

ReactDOM.render(
<CartContextProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</CartContextProvider>
, document.getElementById('root'))