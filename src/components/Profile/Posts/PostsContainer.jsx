import Posts from "./Posts"
import { addPost} from './../../../redux/profileReduser';
import { connect } from "react-redux";


let mapStateToProps = (state) => {
  return{
    posts: state.profilePage.postsData,
    profile: state.profilePage.profile
  }
}


let PostsContainer = connect(mapStateToProps,{addPost})(Posts)

export default PostsContainer;
