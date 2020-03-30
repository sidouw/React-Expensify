import React from 'react'
import {connect} from 'react-redux'
import {startLogin} from '../Actions/auth'

const login = ({startLogin})=>(
    <div className = "boxLayout">
    <div className ="boxLayout__box">
        <h1 className ="boxLayout__title">Expensify App</h1>
        <p>Time to controle your expenses.</p>
        <button className ="Button" onClick = {startLogin}>Login with Google</button>
    </div>
    
    </div>
)

const mapDispatchToProps = (dispatch)=>{
    return {
        startLogin : () => dispatch(startLogin())
    }
}

export default connect(undefined,mapDispatchToProps)(login)
