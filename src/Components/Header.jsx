import React from 'react' 
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startLogout} from '../Actions/auth'


const Header = ({startLogout})=>(

    <header className = "header">
    
    <div className ="content-container">

    <div className = "header__content">
    
    <Link to="/dashboard" className ="header__title"> 
       <h1>Epensify</h1>
       </Link>
    <button className ="Button Button--link " onClick = {startLogout}>Logout</button>
     </div>
    </div>
    </header>

    )

const mapDispatchToProps = (dispatch)=>{
    return {
        startLogout : ()=> dispatch(startLogout())
    }
}

export default connect(undefined,mapDispatchToProps)(Header)