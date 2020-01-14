import profileReduser, { deletePost } from './profileReduser';
import { addPostActionCreator } from './profileReduser';

let state = {
  postsData: [
    { id: 1, message: "Hi, how are you?", likeCounter: "12" },
    { id: 2, message: "It is react babe", likeCounter: "11" },
    { id: 3, message: "Yo", likeCounter: "11" },
    { id: 4, message: "It is react babe", likeCounter: "11" },
    { id: 5, message: "It is react babe", likeCounter: "11" }
  ]}

it('new post should be added', ()=>{
  let action = addPostActionCreator("react")
let newState = profileReduser(state, action)
expect(newState.postsData.length).toBe(6);
});

it('new post message should be correct', ()=>{
  let action = addPostActionCreator("react")
let newState = profileReduser(state, action)

expect(newState.postsData[0].message).toBe('react');
});

it(' post should be deleted', ()=>{
  let action = deletePost(0)
let newState = profileReduser(state, action)
expect(newState.postsData.length).toBe(5);
});

it(' post with unliquid id should`nt be deleted', ()=>{
  let action = deletePost(9)
let newState = profileReduser(state, action)
expect(newState.postsData.length).toBe(5);
});
