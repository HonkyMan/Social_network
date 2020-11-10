import React from 'react';
import { connect } from 'react-redux';
import { onMessageTextChangeCreator, sendMessageCreator } from '../../redux/messagesReducer';
import ChatMessage from './ChatMessage';
import ChatsList from './ChatsList';
import Dialogs from './Dislogs';

let mapStateToProps = (state) => {
    state = state.messagesPage;

    return {
        newText:            state.newMessageText,
        allChatMessages:    state.chatMessagesData.map(mess => {
            return <ChatMessage message_id={mess.message_id} user_photo={mess.user_photo} user_name={mess.user_name} message={mess.message} />
        }),
        allChats:           state.сhatsListData.map(chat => {
            return <ChatsList chat_id={chat.chat_id} user_photo={chat.user_photo} user_name={chat.user_name} user_lastmessage={chat.user_lastmessage} />
        })
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        changeMessage: (text) => {
            debugger;
            dispatch(onMessageTextChangeCreator(text));
        },
        sendMessage: () => {
            dispatch(sendMessageCreator());
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
