import React from 'react'
import {Router,Switch, Route} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import Dashboard from '../Components/DashBoardPage.jsx'
import AddExpensePage from '../Components/AddExpensePage.jsx'
import EditExpensePage from '../Components/EditExpensePage.jsx'
import login from '../Components/LogInPage.jsx'
import NotFoundPage from '../Components/NotFoundPage.jsx'
import PrivateRoute from './privateRoute.jsx'
import PublicRoute from './PublicRoute.jsx'

export const history = createHistory()
const AppRouter = ()=>(
    <Router history = {history}>
    <div>
    <Switch>
    <PublicRoute path = "/" component = {login} exact = {true}/>
    <PrivateRoute path ="/Dashboard" component ={Dashboard}/>
    <PrivateRoute path ="/AddExpense" component ={AddExpensePage} />
    <PrivateRoute path ="/Edit/:id" component ={EditExpensePage} />
    <Route component ={NotFoundPage}/>
    </Switch>
    </div>
    </Router>
)

export default AppRouter