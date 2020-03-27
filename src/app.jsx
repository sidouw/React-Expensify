import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter from'./Routers/AppRouter.jsx'
import configureStore from './Store/configureStore'
import {startSetExpenses} from './Actions/expensesActions'
import {firebase} from './firebase/firebase'
import 'normalize.css/normalize.css'
import './styles/style.scss'


const store = configureStore()


const jsx = (
    <Provider store = {store}>
    <AppRouter/>
    </Provider>
)
ReactDOM.render(<p>Loading .. .. . .</p>,document.getElementById('app'))

store.dispatch(startSetExpenses()).then(()=>{

    ReactDOM.render(jsx,document.getElementById('app'))
})

firebase.auth().onAuthStateChanged((user)=>{
    if (user){
        console.log('fuck');
        
    }else
    {
        console.log('sep');
        
    }
})