import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { compose } from "redux";
import { withRouter} from "react-router-dom";
import { getUser, getStatus, updateStatus, savePhoto, saveProfile } from "./../../redux/profileReduser";
import {withAuthRedirect} from './../../HOC/withAuthRedirect'

class ProfileContainer extends React.Component {

refreshProfile(){
  let userId = this.props.match.params.userId;
    if(!userId){userId = this.props.authUserId}
    this.props.getUser(userId);
    this.props.getStatus(userId)
}

  componentDidMount() {
    this.refreshProfile()
  }
  componentDidUpdate(prevProps, prevState){
  if (this.props.match.params.userId !== prevProps.match.params.userId){
    this.refreshProfile()
  }}
  render() {
    return <Profile {...this.props}
     profile={this.props.profile}
     status={this.props.status}
     updateStatus={this.props.updateStatus}
     isOwner= {!this.props.match.params.userId}
     savePhoto={this.props.savePhoto}
     saveProfile = {this.props.saveProfile}
    />;
  }
}

let mapStateToProps = state => {
  return { profile: state.profilePage.profile,
     status: state.profilePage.status,
      isAuth: state.auth.isAuth,
       authUserId: state.auth.id,
       };
};


export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {getUser, getStatus, updateStatus, savePhoto, saveProfile}),
  withRouter,
    )(ProfileContainer);
