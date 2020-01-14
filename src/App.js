import React from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { compose } from "redux";
import "./App.css";
import Aside from "./components/Aside/Aside";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import MessagesContainer from "./components/Messages/MessagesContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import UsersContainer from "./components/Users/Users.Container";
import { initializeApp } from "./redux/app-reduser";

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return (
        <img
          src="https://www.stickpng.com/assets/images/580b57fcd9996e24bc43c341.png"
          alt="a"
        />
      );
    } else {
      return (
        <BrowserRouter>
          <div className="app">
            <HeaderContainer />
            <div className="main">
              <Aside />
              <div className="change">
                <Switch>
                <Route exact path="/" render={() => <Redirect to={'/Profile'}/>} />
                <Route
                  path="/Profile/:userId?"
                  render={() => <ProfileContainer />}
                />
                <Route path="/Messages" render={() => <MessagesContainer />} />
                <Route path="/Users" render={() => <UsersContainer />} />
                <Route path="/Login" render={() => <Login />} />
                <Route path="*" render={() => <h1 style={{color: '#fff'}}>404 Not Found</h1>} />
                </Switch>
              </div>
            </div>
          </div>
        </BrowserRouter>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    initialized: state.app.initialized
  };
};

export default compose(connect(mapStateToProps, { initializeApp }))(App);
