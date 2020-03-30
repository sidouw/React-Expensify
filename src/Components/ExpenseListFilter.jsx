import React from 'react'
import {connect} from 'react-redux'
import {setFilterText,sortByAmount,sortByDate,setStartDate,setEndDate} from '../Actions/filterActions'
import {DateRangePicker} from 'react-dates'


class ExpenseListFilter extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            focusedInput : null
        }
    }

    onDateChange = (date)=>{
        this.props.dispatch(setStartDate(date.startDate))
        this.props.dispatch(setEndDate(date.endDate))
    }
    onFocusChange=(focusedInput)=>{
        this.setState(()=>({focusedInput}))
    }
    render (){
        
    return(
        <div className ="content-container">

        <div className ="input-group">

        <div className ="input-group__item">
        <input className ="text-input" type ="text" value = {this.props.filters.text} onChange = {(e)=>{
            this.props.dispatch(setFilterText(e.target.value))
        }}/>
        </div>
        <div className ="input-group__item">
        <select className ="select" placeholder ="search expense" value = {this.props.filters.sortBy} onChange = {(e)=>{
            if(e.target.value === 'amount'){
                this.props.dispatch(sortByAmount())
            }else{
                this.props.dispatch(sortByDate())
            }
        }}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
        </select>
        </div>
        <div className ="input-group__item">

        <DateRangePicker
        startDate = {this.props.filters.startDate}
        startDateId ='myunique'
        endDate = {this.props.filters.endDate}
        endDateId = 'uniqueend'
        onDatesChange = {this.onDateChange}
        onFocusChange = {this.onFocusChange}
        focusedInput = {this.state.focusedInput}
        isOutsideRange = {()=>false}
        numberOfMonths = {1}
        showClearDates ={true}
    />

        </div>
        </div>



    </div>
)
    }
}
const MapStateToProps = (state)=>({
    filters:state.filter   
})

export default connect(MapStateToProps)(ExpenseListFilter)