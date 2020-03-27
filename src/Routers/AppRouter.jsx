import React from 'react'
import {BrowserRouter,Switch, Route} from 'react-router-dom'
import Header from '../Components/Header.jsx'
import Dashboard from '../Components/DashBoardPage.jsx'
import AddExpensePage from '../Components/AddExpensePage.jsx'
import EditExpensePage from '../Components/EditExpensePage.jsx'
import HelpPage from '../Components/HelpPage.jsx'
import login from '../Components/LogInPage.jsx'
import NotFoundPage from '../Components/NotFoundPage.jsx'

// <Header/>

const AppRouter = ()=>(
    <BrowserRouter>
    <div>
    
    <Switch>
    <Route path = "/" component = {login} exact = {true}/>
    <Route path ="/Dashboard" component ={Dashboard}/>
    <Route path ="/AddExpense" component ={AddExpensePage} />
    <Route path ="/Edit/:id" component ={EditExpensePage} />
    <Route path ="/Help" component ={HelpPage} />
    <Route component ={NotFoundPage}/>
    </Switch>
    </div>
    </BrowserRouter>
)

export default AppRouter