import React from 'react'
import ExpenseForm from './ExpenseFrom.jsx'
import {connect} from 'react-redux'
import {startAddExpense} from '../Actions/expensesActions'
const CreateExpense = (props)=>(
    <div>
    <h1>Create Expense</h1>
    <ExpenseForm onSubmit ={(expense)=>{
        props.dispatch(startAddExpense(expense))
        props.history.push('/')
    }}/>
    </div>
)
export default connect()(CreateExpense)