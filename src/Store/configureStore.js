
import {createStore, combineReducers,applyMiddleware ,compose} from 'redux'
import thunk from 'redux-thunk'
import expenseReducer from '../Reducers/expensesReducer'
import filterReducer from '../Reducers/filterReducer'
import authReducer from '../Reducers/authReducer'


const composeEn = window.__REDUX_DEVTOOLS_EXTENSIONS_COMPOSE__ || compose

export default ()=>{
    const store = createStore(
        combineReducers({
            expenses : expenseReducer,
            filter : filterReducer,
            auth:authReducer
        }),
        composeEn(applyMiddleware(thunk))
    )
    return store
}
