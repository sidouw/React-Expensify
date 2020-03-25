

const getExpensesTotal = (expenses)=>{
    const sum = 23
    return expenses.reduce((accumulated,expense)=>accumulated+expense.amount,0)
}

export default getExpensesTotal