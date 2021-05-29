import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className='sidebar__recentItem'>
      <span className='sidebar__hash'>#</span>
      <p>{topic}</p>
    </div>
  );
  return (
    <div className='sidebar'>
      <div className='sidebar__top'>
        <img
          src='https://images.unsplash.com/photo-1529641484336-ef35148bab06?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
          alt=''
        />
        <Avatar className='sidebar__avatar' />
        <h2>{user.displayName}</h2>
        <h4> {user.email} </h4>
      </div>
      <div className='sidebar__stats'>
        <div className='sidebar__stat'>
          <p>Who viewed your profile</p>
          <p className='sidebar__statNumber'>1057</p>
        </div>
        <div className='sidebar__stat'>
          <p>Views on posts</p>
          <p className='sidebar__statNumber'>1923</p>
        </div>
        <div className='sidebar__bottom'>
          <p>Recent</p>
          {recentItem("react")}
          {recentItem("redux")}
          {recentItem("fronEnd")}
          {recentItem("javaScript")}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
