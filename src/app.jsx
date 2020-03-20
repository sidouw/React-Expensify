import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import AppRouter from'./Routers/AppRouter.jsx'
import 'normalize.css/normalize.css'
import './styles/style.scss'
import configureStore from './Store/configureStore'
import {addExpense,removeExpense,editExpense} from './Actions/expensesActions'
import {setEndDate,setStartDate,setFilterText,sortByAmount,sortByDate} from './Actions/filterActions'
import getExpenses from './Selectors/expenses'







const store = configureStore()
const exp1=store.dispatch(addExpense({description:'fuck yea bill',note:'fml :\')',amount:15300,createdAt:180}))
const exp2=store.dispatch(addExpense({description:'fuck no',note:'lml :)',amount:1500,createdAt:1800}))
const jsx = (
    <Provider store = {store}>
    <AppRouter/>
    </Provider>
)

ReactDOM.render(jsx,document.getElementById('app'))
