import React from 'react';

const ChatMessage = (props) => {
    return (
        <div className="correspondence_message">
            <div className="user_photo">
                <img src={props.user_photo} alt="#" />
            </div>
            <div className="user_content">
                <div className="user_name">
                    <h2 className="heading">{props.user_name}</h2>
                </div>
                <div className="user_message">
                    {props.message}
                </div>
            </div>
        </div>
    );
}

export default ChatMessage