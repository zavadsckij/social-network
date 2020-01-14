const ADD_MESSAGE = "ADD-MESSAGE";

let initialState = {
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
    { id: 4, message: "Hi" },
    { id: 5, message: "How are you" },
    { id: 6, message: "good thanks" }
  ],
}

const messagesReduser = ( state = initialState, action) => {
     if (action.type === ADD_MESSAGE) {
       return {
         ...state,
         messagesData: [...state.messagesData, {
           id: state.messagesData.length+1,
            message: action.newMessageText,
          }
        ]
       }
       
    }
    return state
  }
  export let addMessageActionCreator = (newMessageText) =>({type : ADD_MESSAGE, newMessageText})


  export default messagesReduser