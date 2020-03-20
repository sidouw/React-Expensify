import React from 'react' 
import {NavLink} from 'react-router-dom'
const Header = ()=>(
    <header>
    <h1>Epensify</h1>
    <NavLink to="/" activeClassName ="is-active" exact ={true}>Dashboard</NavLink>
    <NavLink to="/AddExpense" activeClassName ="is-active">Create expense</NavLink>
    <NavLink to="/Help" activeClassName ="is-active">Help</NavLink>
    </header>
)

export default Header