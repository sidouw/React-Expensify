import React from 'react'
import ExpenseList from './ExpenseList.jsx'
import ExpenseListFilter from './ExpenseListFilter.jsx'


const Dashboard = ()=>(
    <div>
    <p> dashboard</p>
    <ExpenseListFilter/>
    <ExpenseList/>
    </div>
)
export default Dashboard