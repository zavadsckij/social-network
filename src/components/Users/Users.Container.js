import { connect } from 'react-redux';
import Users from './Users';
import { follow, unfollow,  getUsers, onPageChange } from './../../redux/usersReduser';
import React from "react";
import {withAuthRedirect} from './../../HOC/withAuthRedirect';
import { compose } from 'redux';






class UsersComponent extends React.Component {
    componentDidMount() {
      this.props.getUsers(this.props.currentPage, this.props.count)
    }
    render() {
        return(
     <>
     <Users 
     users= {this.props.users}
     count= {this.props.count}
     totalUsersCount= {this.props.totalUsersCount}
     currentPage= {this.props.currentPage}
     follow= {this.props.follow}
     unfollow = {this.props.unfollow}
     onPageChange = {this.props.onPageChange}
     isFetching = {this.props.isFetching}
     followingProgressId= {this.props.followingProgressId}
     />
     </>
        )}
  }
  
let mapStateToProps = (state) => {
   return {
       users: state.usersPage.users, 
       count: state.usersPage.count,
       totalUsersCount: state.usersPage.totalUsersCount,
       currentPage: state.usersPage.currentPage,
       isFetching: state.usersPage.isFetching,
       followingProgressId: state.usersPage.followingProgressId,
    } 
}
export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {follow, unfollow, getUsers, onPageChange})
    )(UsersComponent);
