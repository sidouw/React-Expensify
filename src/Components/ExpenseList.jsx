import React from 'react'
import {connect} from 'react-redux'
import ExpenseListITem from './ExpenseListItem.jsx'
import SelectExpenses from '../Selectors/expenses' 

const ExpenseList = (props)=>(
    <div>
    {
        props.expenses.length === 0 ? (
            <p>No Expenses</p>
        ):(
            props.expenses.map((expense)=>{
                return <ExpenseListITem key={expense.id} expense = {expense}/>   
               })
        )
    }
    </div>
)

const mapStateToProps = (state)=>{

 return {
     expenses:SelectExpenses(state.expenses,state.filter)
 }
}

export default connect(mapStateToProps)(ExpenseList)