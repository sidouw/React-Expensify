import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseFrom.jsx'
import {startEditExpense,startRemoveExpense} from '../Actions/expensesActions'
const EditExpense = (props)=>{
    return (
        <div>
            <ExpenseForm onSubmit = {(expense)=>{
                console.log(expense)
                props.dispatch(startEditExpense(props.match.params.id,expense))
                props.history.push('/')
            }}
            expense = {props.expense}
            />
            <button onClick = {()=>{
                props.dispatch(startRemoveExpense(props.expense.id))
                props.history.push('/')
            }}>Remove</button>
        </div>
    )
}
const MapStateToProps = (state,props)=>{
    return{
        expense: state.expenses.find((expense)=>expense.id === props.match.params.id)
    }
}
export default connect(MapStateToProps)(EditExpense)