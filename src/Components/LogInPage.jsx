import React from 'react'
import {connect} from 'react-redux'
import startLogin from '../Actions/auth'

const login = ({startLogin})=>(
    <div>
    <p>sep</p>
    <button onClick = {startLogin}>Login</button>
    </div>
)

const mapDispatchToProps = (dispatch)=>{
    return {
        startLogin : () => dispatch(startLogin())
    }
}

export default connect(undefined,mapDispatchToProps)(login)
