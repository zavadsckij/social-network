
import profileReduser from './profileReduser';
import messagesReduser from './messagesReduser';
import sidebarReduser from './sidebarReduser';


let store = {
  _state : {
    profilePage: {
      postsData: [
        { id: 1, message: "Hi, how are you?", likeCounter: "12" },
        { id: 2, message: "It is react babe", likeCounter: "11" },
        { id: 3, message: "Yo", likeCounter: "11" },
        { id: 4, message: "It is react babe", likeCounter: "11" },
        { id: 5, message: "It is react babe", likeCounter: "11" }
      ],
      newPostText: "write something",
    },
    messagesPage: {
      dialogsData: [
        { id: 1, name: "Ann", url:"https://previews.123rf.com/images/juliasart/juliasart1704/juliasart170400022/75406270-vector-girl-icon-woman-avatar-face-icon-cartoon-style-.jpg" },
        { id: 2, name: "Max", url:"https://i.pinimg.com/originals/bc/6a/e9/bc6ae9149c28836a79905397599004ad.jpg"},
        { id: 3, name: "Sanya", url:"https://cdn3.vectorstock.com/i/1000x1000/26/07/girl-icon-woman-avatar-face-icon-cartoon-style-vector-24742607.jpg" },
        { id: 4, name: "Olya", url:"https://st3.depositphotos.com/7303196/14487/v/1600/depositphotos_144870447-stock-illustration-girl-icon-woman-avatar-face.jpg" },
        { id: 5, name: "Igor", url:"https://cdn.pixabay.com/photo/2013/07/13/10/07/man-156584_960_720.png" }
      ],
      messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you" },
        { id: 3, message: "good thanks" },
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you" },
        { id: 3, message: "good thanks" }
      ],
      newMessage : ""
    },
    sidebar: {}
  },
  _callSubscriber () {
    console.log("change")
  },


  getState(){
    return this._state
  },
  subscribe (observer) {
    this._callSubscriber = observer
  },
  dispatch(action){
    this._state.profilePage = profileReduser(this._state.profilePage, action)
    this._state.messagesPage = messagesReduser(this._state.messagesPage, action)
    this._state.sidebar = sidebarReduser(this._state.sidebar, action)

    this._callSubscriber(this._state)
  }
}




window.state = store.getState()


export default store;
