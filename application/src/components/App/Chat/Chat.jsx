import React, { Component } from 'react';
import Posts from './Posts/Posts.jsx';
import MyPosts from './MyPosts/MyPosts.jsx';
import styles from './Chat.css';

class Chat extends Component {
  render() {
    return (
      <div className='chat'>
        <div className="post-box">
            <Posts />
            <MyPosts />
            <Posts />
            <MyPosts />
            <Posts />
            <MyPosts />
            <Posts />
            <MyPosts />
            <MyPosts />
            <Posts />
            <Posts />
            <MyPosts />
            <Posts />
            <Posts />
        </div>
        <div className="chat-input">
            <input type="textbox" placeholder="write message here" />
            <button>Submit</button>
        </div>
      </div>
    );
  }
}

export default Chat;
