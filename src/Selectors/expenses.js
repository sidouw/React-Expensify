import moment from "moment"


const getVisibleExpenses = (expenses , {text,sortBy,startDate,endDate})=>{

    return expenses.filter((expense)=>{

        const DateMatch =  startDate ? moment(expense.createdAt).isBetween(startDate,endDate) :true
        // const endtDateMatch =  endDate !== 'number' || expense.createdAt<=endDate
        const textMath = expense.description.toLowerCase().includes(text.toLowerCase())
        return DateMatch & textMath

    }).sort((a,b)=>{

        if (sortBy === 'date'){
            return a.createdAt < b.createdAt ? 1 :-1
        }else {
            return a.amount < b.amount ? 1 :-1
        }
    })
    
}

export default getVisibleExpenses