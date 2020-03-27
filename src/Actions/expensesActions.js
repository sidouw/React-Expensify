import { v4 as uuidv4 } from 'uuid'
import database from '../firebase/firebase' 


export const addExpense=({
    description , 
    note,
    amount,
    createdAt
})=>({
   type :'ADD_EXPENSE',
    expense:{
    id: uuidv4(),
    description , 
    note,
    amount,
    createdAt}
})

export const startAddExpense = (expenseData = {})=>{
   return (dispatch)=>{
      const {
         description = '' , 
         note = '',
         amount =0,
         createdAt =0
      } = expenseData
      const expense = {description,note,amount,createdAt}
      return database.ref('expenses').push(expense).then((ref)=>{
         dispatch(addExpense({
            id:ref.key,
            ...expense
         }))
      })

   }
}
export const removeExpense = (id)=>({
   type: 'REMOVE_EXPENSE',
   id
})

export const startRemoveExpense = (id)=>{
   return (dispatch)=>{
      return database.ref(`expenses/${id}`).remove().then(()=>{
         dispatch(removeExpense(id))
      })
   }
}

export const editExpense = (id,updates)=>({
   type :'EDIT_EXPENSE',
   id,
  updates 
})
export const startEditExpense = (id,updates)=>{
 return (dispatch)=>{
   return database.ref(`expenses/${id}`).update({
      ...updates
   }).then(()=>{
      dispatch(editExpense(id,updates))
   })
 }
}

export const getExpense =(id) =>( {
   type :'GET_EXPENSE',
   id
})

export const setExpenses = (expenses)=>({
 type:'SET_EXPENSES',
 expenses
})

export const startSetExpenses = ()=>{
   return (dispatch)=>{
     return database.ref('expenses').once('value').then((snapShot)=>{
      const expenses = []
        snapShot.forEach((expense)=>{
           expenses.push({
              id:expense.key,
              ...expense.val()
           })
        })
         dispatch(setExpenses(expenses))
       })
   }
}