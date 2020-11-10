import React from 'react';
import { NavLink } from 'react-router-dom';

const ChatsList = (props) => {
    return (
        <li>
            <div className="user_photo">
                <img src={props.user_photo} alt="" />
            </div>
            <div className="user_name">
                <h2 className="heading">{props.user_name}</h2>
            </div>
            <div className="user_lastmessage">
                <NavLink to={"/dialogs/" + props.chat_id}>{props.user_lastmessage}</NavLink>
            </div>
        </li>
    )
}

export default ChatsList