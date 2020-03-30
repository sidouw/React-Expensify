import React from 'react'
import {connect} from 'react-redux'
import ExpenseListITem from './ExpenseListItem.jsx'
import SelectExpenses from '../Selectors/expenses' 

const ExpenseList = (props)=>(
    <div className = "content-container">   
    <div className = "list-header">
    <div className = "show-on-mobile"> Expenses</div>
    <div className = "show-on-desktop" > Expenses</div>
    <div className = "show-on-desktop"> Amount</div>
    </div>
    <div className = "list-body">
    {
        props.expenses.length === 0 ? (
            <div className = "list-item list-item--message">
            <span>No Expenses</span>
            </div>
            
        ):(
            props.expenses.map((expense)=>{
                return <ExpenseListITem key={expense.id} expense = {expense}/>   
               })
        )
    }
    </div>
    </div>
)

const mapStateToProps = (state)=>{

 return {
     expenses:SelectExpenses(state.expenses,state.filter)
 }
}

export default connect(mapStateToProps)(ExpenseList)