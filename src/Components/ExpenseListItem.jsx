import React from 'react'
import {Link} from 'react-router-dom'


const ExpenseListItem = (props)=>(
<div>
    <Link to = {`/Edit/${props.expense.id}`}><h3>{props.expense.description}</h3></Link>
    <p>amount : {props.expense.amount}</p>
    <p>createdAt : {props.expense.createdAt}</p>
</div>

)

export default ExpenseListItem