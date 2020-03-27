
import {createStore, combineReducers,applyMiddleware ,compose} from 'redux'
import expenseReducer from '../Reducers/expensesReducer'
import filterReducer from '../Reducers/filterReducer'
import thunk from 'redux-thunk'

const composeEn = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose

export default ()=>{
    const store = createStore(
        combineReducers({
            expenses : expenseReducer,
            filter : filterReducer
        }),
        composeEn(applyMiddleware(thunk))
    )
    return store
}
