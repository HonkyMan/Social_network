import React from 'react';
import { onMessageTextChangeCreator, sendMessageCreator } from '../../redux/messagesReducer';
import ChatMessage from './ChatMessage';
import ChatsList from './ChatsList';

const Dialogs = (props) => {
    
    let allChats = props.state.сhatsListData.map(chat => {
        return <ChatsList chat_id={chat.chat_id} user_photo={chat.user_photo} user_name={chat.user_name} user_lastmessage={chat.user_lastmessage} />
    });

    let allChatMessages = props.state.chatMessagesData.map(mess => {
        return <ChatMessage message_id={mess.message_id} user_photo={mess.user_photo} user_name={mess.user_name} message={mess.message} />
    });
    
    let onChangeMessageTextarea = (e) => {
        debugger;
        let text = e.target.value;
        props.dispatch(onMessageTextChangeCreator(text))
    };

    let onSendMessageClick = (e) => {
        e.preventDefault();
        props.dispatch(sendMessageCreator());
    };
    return (
        <main class="container">
            <div className="wrapper dialogs">
                <ul className="dialogs__users">
                    {allChats}
                </ul>
                <div className="dialogs__correspondence">
                    <div className="correspondence_history">
                        {allChatMessages}
                    </div>
                    <form action="#">
                        <textarea name="message" id="new_dialog_message" onChange={ onChangeMessageTextarea } value={props.state.newMessageText} placeholder="Введите сообщение"></textarea>
                        <input type="submit" className="btn btn-action" onClick={ onSendMessageClick } value="Отправить" />
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Dialogs;
