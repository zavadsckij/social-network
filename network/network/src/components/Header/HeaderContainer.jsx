import React from "react";
import  {connect}  from 'react-redux';
import Header from './Header';
import { logout } from './../../redux/Auth-reduser';

class HeaderContainer extends React.Component{
    render(){
        return (<Header {...this.props} />)
        
    }
}


let mapStateToProps = (state) =>{
    return {login: state.auth.login, isAuth: state.auth.isAuth}
}



export default connect(mapStateToProps, {logout})(HeaderContainer)