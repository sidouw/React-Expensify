import moment from 'moment'


const filterReducerDefault ={
    text:'',
    sortBy:'date',
    startDate : moment().startOf('M'),
    endDate : moment().endOf('M')
}



const filterReducer= (state = filterReducerDefault,action)=>{
    switch(action.type){
        case 'SET_TEXT':
            return {...state,text:action.text}
        case 'SORT':
            return {...state,sortBy:action.sortBy}
        case 'SET_START_DATE':
            return {...state,startDate:action.date}
        case 'SET_END_DATE':
            return {...state,endDate:action.date}            
        default:
            return state  
    }
}

export default filterReducer