import { v4 as uuidv4 } from 'uuid'



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

export const removeExpense = (id)=>({
   type: 'REMOVE_EXPENSE',
   id
})

export const editExpense = (id,updates)=>({
   type :'EDIT_EXPENSE',
   id,
  updates 
})

export const getExpense =(id) => {
   type :'GET_EXPENSE',
   id
}