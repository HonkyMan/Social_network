const ON_MESSAGE_TEXT_CHANGE = 'ON-MESSAGE-TEXT-CHANGE';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    /*Dialogs*/
    сhatsListData: [
        { chat_id: 1, user_photo: "https://via.placeholder.com/1920x1080", user_name: "Избранное", user_lastmessage: "<p>Привет, как твои дела? Чем сего...</p>" },
        { chat_id: 2, user_photo: "https://via.placeholder.com/1920x1080", user_name: "Галицкий Александр", user_lastmessage: "<p>Привет, как твои дела? Чем сего...</p>" },
        { chat_id: 3, user_photo: "https://via.placeholder.com/1920x1080", user_name: "Степняк Юрий", user_lastmessage: "<p>Привет, как твои дела? Чем сего...</p>" },
        { chat_id: 4, user_photo: "https://via.placeholder.com/1920x1080", user_name: "Гайнуллин Камиль", user_lastmessage: "<p>Привет, как твои дела? Чем сего...</p>" },
        { chat_id: 5, user_photo: "https://via.placeholder.com/1920x1080", user_name: "Пермяков Юрий", user_lastmessage: "<p>Привет, как твои дела? Чем сего...</p>" },
        { chat_id: 6, user_photo: "https://via.placeholder.com/1920x1080", user_name: "Галиев Рафкат", user_lastmessage: "<p>Привет, как твои дела? Чем сего...</p>" },
        { chat_id: 7, user_photo: "https://via.placeholder.com/1920x1080", user_name: "Курочкин Степан", user_lastmessage: "<p>Привет, как твои дела? Чем сего...</p>" },
    ],
    chatMessagesData: [
        { message_id: 1, user_photo: "https://via.placeholder.com/1920x1080", user_name: "Галицкий Александр", message: "<p>Привет, как твои дела? Чем сегодня будешь заниматься вечером?Привет, как твои дела? Чем сегодня будешь заниматься вечером?</p>" },
        { message_id: 2, user_photo: "https://via.placeholder.com/1920x1080", user_name: "Галицкий Александр", message: "<p>2 Привет, как твои дела? Чем сегодня будешь заниматься вечером?Привет, как твои дела? Чем сегодня будешь заниматься вечером?</p>" },
    ],
    messageText: '',
    get newMessageText() {
        return this.messageText;
    },
    set newMessageText(text) {
        this.messageText = text.replace(/<\/?[^>]+(>|$)/g, "");
    }
    /* END Dialogs*/
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_MESSAGE_TEXT_CHANGE: {
            return {
                ...state,
                newMessageText: action.text
            };
        }
        case SEND_MESSAGE: {
            let body = {
                message_id: 8,
                user_name: 'Собеседник',
                user_photo: 'https://via.placeholder.com/1920x1080',
                message: state.newMessageText
            };

            return {
                ...state,
                chatMessagesData: [ ...state.chatMessagesData, body ],
                newMessageText: ''      
            };
        }
        default:
            return state;;
    }
};

export const sendMessageCreator = () => {
    return { type: SEND_MESSAGE };
};
export const onMessageTextChangeCreator = (text) => {
    return { type: ON_MESSAGE_TEXT_CHANGE, text: text };
};

export default messagesReducer;