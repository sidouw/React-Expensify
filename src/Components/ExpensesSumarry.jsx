import React from 'react'
import {connect} from 'react-redux'
import getTotalExpenses from '../Selectors/expensesTotal'
import getVisibleExpanses from '../Selectors/expenses'
import getExpensesTotal from '../Selectors/expensesTotal'
import numeral from 'numeral'
const ExpensesSumarry = (props)=>(
    <div>
    <p>Viewing {props.expensesNum} expenses,Totaling  {numeral(props.expensesTotal/100).format('$0,0.00')}</p>
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