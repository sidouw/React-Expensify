import getTotalExpenses from '../../src/Selectors/expensesTotal'

const expenses = [{
    amount :1
},{
    amount :8
},{
    amount :1
},{
    amount :1
},{
    amount :-1
},]

test('sould get total expenses',()=>{
    
    expect(getTotalExpenses(expenses)).toBe(10)
})