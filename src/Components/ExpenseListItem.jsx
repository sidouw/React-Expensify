import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'
const ExpenseListItem = (props)=>(
<div>
    <Link to = {`/Edit/${props.expense.id}`}><h3>{props.expense.description}</h3></Link>
    <p>amount : {numeral(props.expense.amount/100).format('$0,0.00') }</p>
    <p>createdAt : {moment(props.expense.createdAt).format('MMMM Do , YYYY')}</p>
</div>

)

export default ExpenseListItem