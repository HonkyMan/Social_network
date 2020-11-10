const ON_MESSAGE_TEXT_CHANGE = 'ON-MESSAGE-TEXT-CHANGE';
const SEND_MESSAGE = 'SEND-MESSAGE';

const messagesReducer = (state, action) => {
    switch (action.type) {
        case ON_MESSAGE_TEXT_CHANGE:
            state.newMessageText = action.text;
            break;
        case SEND_MESSAGE:
            let body = {
                message_id: 8,
                user_name: 'Собеседник',
                user_photo: 'https://via.placeholder.com/1920x1080',
                message: state.newMessageText
            };
            state.chatMessagesData.push(body);
            state.newMessageText = '';
            break;
        default:
            break;
    }

    return state;
};

export const sendMessageCreator = () => {
    return { type: SEND_MESSAGE };
};
export const onMessageTextChangeCreator = (text) => {
    return { type: ON_MESSAGE_TEXT_CHANGE, text: text };
};

export default messagesReducer;