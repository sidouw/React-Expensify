import React from 'react'
import ExpenseForm from './ExpenseFrom.jsx'
import {connect} from 'react-redux'
import {startAddExpense} from '../Actions/expensesActions'


const CreateExpense = (props)=>(

    <div >
    <div className ="page-header">
    <div className ="content-container">
    <h1>Create Expense</h1>
    </div>
    </div>
    
    <div className = "content-container">
        <ExpenseForm onSubmit ={(expense)=>{
        props.dispatch(startAddExpense(expense))
        props.history.push('/')
    }}/>
    </div>
    </div>
)
export default connect()(CreateExpense)