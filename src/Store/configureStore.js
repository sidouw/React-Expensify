
import {createStore, combineReducers} from 'redux'
import expenseReducer from '../Reducers/expensesReducer'
import filterReducer from '../Reducers/filterReducer'


export default ()=>{
    const store = createStore(
        combineReducers({
            expenses : expenseReducer,
            filter : filterReducer
        })
    )
    return store
}
