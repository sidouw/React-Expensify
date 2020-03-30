import React from 'react'
import {connect} from 'react-redux'
import Header from '../Components/Header.jsx'
import {Route,Redirect} from 'react-router-dom'

const privateRoute = ({isAuth,component:Component,...rest})=>(

    <Route {...rest} component ={(props)=>(
        isAuth ?
        <div>
        <Header/>
         <Component {...props}/>
         </div> 
         : 
          <Redirect to = "/"/>
    )} />
  
)


const mapStateToProps = (state)=>({
 isAuth : !!state.auth.uid
})
export default connect(mapStateToProps)(privateRoute)