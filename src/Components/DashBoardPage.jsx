import React from 'react'
import ExpenseList from './ExpenseList.jsx'
import ExpenseListFilter from './ExpenseListFilter.jsx'
import ExpensesSumarry from './ExpensesSumarry.jsx'

const Dashboard = ()=>(
    <div>
    <ExpensesSumarry />
    <ExpenseListFilter/>
    <ExpenseList/>
    </div>
)
export default Dashboard