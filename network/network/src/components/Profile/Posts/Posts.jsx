import React from "react";
import Post from "./Post/Post";
import s from "./Posts.module.css";
import { Field, reduxForm } from "redux-form";
import { required, maxLength } from "../../../utils/validators";
import { Textarea } from '../../FormsControls/FormsControls';

let maxLength50 = maxLength(50)
const PostsForm = props => {

 
  return (
    <form onSubmit={props.handleSubmit}  style={{marginBottom: 0.5+'em'}}>
      <div>
        <Field
          component={Textarea}
          placeholder="write something"
          name="postNewText"
          validate = {[required, maxLength50]}
          style={{height: 5+'em', resize: 'none', marginBottom: '.5em'}}
        />
      </div>
      <div>
        <button className = 'btn btn-primary'>Add Post</button>
      </div>
    </form>
  );
};

const PostsFormRedux = reduxForm({ form: "PostMessage" })(PostsForm);

function Posts(props) {
  let postsElements = props.posts.map(elem => {
    return <Post message={elem.message} likeCounter={elem.likeCounter} key={elem.id} profile={props.profile}/>;
  });

  let addNewPost = values => {
    props.addPost(values.postNewText);
  };

  return (
    <div>
      <h1 style={{color:'#fff'}}>My posts</h1>
      <PostsFormRedux onSubmit={addNewPost} />
      <div className={s.posts}>{postsElements}</div>
    </div>
  );
}

export default Posts;
