import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import getVisibleExpanses from '../Selectors/expenses'
import getExpensesTotal from '../Selectors/expensesTotal'
import numeral from 'numeral'


const ExpensesSumarry = (props)=>(
    <div className ="page-header">
    <div className ="content-container">
    <div className ="page-header__title">
     <p>Viewing <span> {props.expensesNum} </span> expenses,Totaling <span>{numeral(props.expensesTotal/100).format('$0,0.00')}</span></p>
     <Link to ='/AddExpense' className ="Button">Add Expense</Link>

    </div>
    </div>
    
    </div>    
)

const MatchSatetToProps = (state)=>{
    const visexp = getVisibleExpanses(state.expenses,state.filter)
    const expensesTotal = getExpensesTotal(visexp)
    return {
        expensesNum : visexp.length,
        expensesTotal
    }
}



export default connect(MatchSatetToProps)(ExpensesSumarry)