import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter ,{history} from'./Routers/AppRouter.jsx'
import configureStore from './Store/configureStore'
import {startSetExpenses} from './Actions/expensesActions'
import {login,logout} from './Actions/auth'
import {firebase} from './firebase/firebase'
import 'normalize.css/normalize.css'
import './styles/style.scss'


const store = configureStore()


const jsx = (
    <Provider store = {store}>
    <AppRouter/>
    </Provider>
)
let hasRendered = false

const renderApp = ()=>{
    if (!hasRendered) {
        ReactDOM.render(jsx,document.getElementById('app'))
        hasRendered = true
    }
}


// ReactDOM.render(<p>Loading .. .. . .</p>,document.getElementById('app'))
renderApp()



firebase.auth().onAuthStateChanged((user)=>{
    
    
    if (user){
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(()=>{
            renderApp()
        })
        if(history.location.pathname === '/'){
            history.push('/dashboard')
        }
    }else
    {
        renderApp()
        store.dispatch(logout())
        history.push('/')
        console.log('sep');
        
    }
    console.log(store.getState());
})