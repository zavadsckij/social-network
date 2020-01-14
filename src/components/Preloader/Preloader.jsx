import React from 'react'
import preloader from "./../../assets/images/preloader.gif"
import s from './../Users/Users.module.css'


const Preloader = (props) =>{
    return (<div><img src = {preloader} className = {s.userImg} alt = 'preloader'/></div>)
}

export default Preloader