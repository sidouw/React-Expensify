import database from '../firebase/firebase' 


export const addExpense=({
   id,
    description , 
    note,
    amount,
    createdAt
})=>({
   type :'ADD_EXPENSE',
    expense:{
    id,
    description , 
    note,
    amount,
    createdAt}
})

export const startAddExpense = (expenseData = {})=>{
   return (dispatch, getState)=>{
      const uid = getState().auth.uid
      const {
         description = '' , 
         note = '',
         amount =0,
         createdAt =0
      } = expenseData
      const expense = {description,note,amount,createdAt}
      return database.ref(`users/${uid}/expenses`).push(expense).then((ref)=>{
         dispatch(addExpense({
            
            ...expense,
            id:ref.key
         }))
      })

   }
}
export const removeExpense = (id)=>({
   type: 'REMOVE_EXPENSE',
   id
})

export const startRemoveExpense = (id)=>{
   return (dispatch, getState)=>{
      const uid = getState().auth.uid
      return database.ref(`users/${uid}/expenses/${id}`).remove().then(()=>{
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
  
 return (dispatch, getState)=>{
   const uid = getState().auth.uid
   return database.ref(`users/${uid}/expenses/${id}`).update({
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
  
   return (dispatch, getState)=>{
      const uid = getState().auth.uid
     return database.ref(`users/${uid}/expenses`).once('value').then((snapShot)=>{
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