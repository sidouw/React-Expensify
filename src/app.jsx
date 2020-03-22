import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter from'./Routers/AppRouter.jsx'
import configureStore from './Store/configureStore'
import 'normalize.css/normalize.css'
import './styles/style.scss'

console.log('seeepiiiiiiiiii')
const store = configureStore()
const jsx = (
    <Provider store = {store}>
    <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('app'))
