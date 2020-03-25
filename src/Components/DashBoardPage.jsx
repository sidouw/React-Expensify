import React from 'react'
import ExpenseList from './ExpenseList.jsx'
import ExpenseListFilter from './ExpenseListFilter.jsx'
import ExpensesSumarry from './ExpensesSumarry.jsx'

const Dashboard = ()=>(
    <div>
    <p> dashboard</p>
    <ExpenseListFilter/>
    <ExpensesSumarry />
    <ExpenseList/>
    </div>
)
export default Dashboard