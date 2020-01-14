import Messages from "./Messages";
import {addMessageActionCreator} from "../../redux/messagesReduser";
import { connect } from "react-redux";
import {withAuthRedirect} from './../../HOC/withAuthRedirect'
import { compose } from 'redux';


  let mapStateToProps = (state) => {
    return{
      messagesPage: state.messagesPage
    }
  }
  let mapDispatchToProps = (dispatch) => {
    return {
      sendMessage: (newMessageText)=>{
        dispatch(addMessageActionCreator(newMessageText))
      }
    }
  }



export default compose(
  withAuthRedirect,
  connect(mapStateToProps, mapDispatchToProps)
)(Messages);
