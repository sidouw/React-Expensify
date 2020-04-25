

const getExpensesTotal = (expenses)=>{
    return expenses.reduce((accumulated,expense)=>accumulated+expense.amount,0)
}

export default getExpensesTotal