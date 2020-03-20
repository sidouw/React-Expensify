import React from 'react'
import moment from 'moment'
import {  SingleDatePicker} from 'react-dates'
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css'
export default class ExpenseFrom extends React.Component {
    constructor (props){
        super(props)
        this.state = {
            decription: props.expense ? props.expense.description: '',
            amount :props.expense ? (props.expense.amount/100).toString(): '',
            note :props.expense ? props.expense.note: '',
            createdAt : props.expense ? moment(props.expense.createdAt): moment(),
            calandarFocused : false
        }
    }
    onDescCgange = (e)=>{
        const decription = e.target.value
        this.setState(()=>({decription}))
    } 
    onNoteChange = (e)=>{
        const note = e.target.value
        this.setState(()=>({note}))
    }
    onAmountChange = (e)=>{
        const amount = e.target.value
        console.log()
        if(!!amount.match(/^\d*(\.\d{0,2})?$/)){
        this.setState(()=>({amount}))
        }
    }
    onDateChange = (createdAt)=>{
        this.setState(()=>({createdAt}))
    }
    onFocusChanged = ({focused})=>{
        this.setState(()=>({calandarFocused:focused}))
    }
    onFormSubmit = (e)=>{
        e.preventDefault()
        this.props.onSubmit({
            description : this.state.decription,
            amount :parseFloat(this.state.amount) * 100,
            createdAt : this.state.createdAt.valueOf(),
            note : this.state.note
        })
    }
    render(){
        return (
            <div>
            <form onSubmit = {this.onFormSubmit}>
            <input type ="text" placeholder ="decription" autoFocus required value ={this.state.decription} onChange ={this.onDescCgange}/>
            <input type = "text" placeholder ="Amount" value = {this.state.amount} onChange = {this.onAmountChange} required/>
            <SingleDatePicker
            date = {this.state.createdAt}
            onDateChange = {this.onDateChange}
            onFocusChange = {this.onFocusChanged}
            focused = {this.state.calandarFocused}
            numberOfMonths ={1}
            isOutsideRange ={(day)=>false}
            />
            <textarea placeholder ="Add a note for your expense (optional)" value = {this.state.note} onChange = {this.onNoteChange}></textarea>
            <button>{this.props.expense ?'Edit Expense' :  'Add Expense'}</button>
            </form>
            </div>
        )
    }
}