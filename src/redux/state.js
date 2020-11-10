import messagesReducer from "./messagesReducer";
import profileReducer from "./profileReducer";

let store = {
    _state: {
        messagesPage: {
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
                { message_id: 1, user_photo: "https://via.placeholder.com/1920x1080", user_name: "Галицкий Александр", message: "" },
                { message_id: 2, user_photo: "https://via.placeholder.com/1920x1080", user_name: "Галицкий Александр", message: "" },
            ],
            messageText: '',
            get newMessageText() {
                return this.messageText;
            },
            set newMessageText(text) {
                this.messageText = text.replace(/<\/?[^>]+(>|$)/g, "");
            }
            /* END Dialogs*/
        },
        profilePage: {
            postsData: [
                { post_id: 1, post_date: "22.09.2020", post_image: "https://via.placeholder.com/1920x1080", post_author: "Дима К.", post_message: "<p>Привет, как твои дела? Чем сего...</p>" },
                { post_id: 2, post_date: "23.09.2020", post_image: "https://via.placeholder.com/1920x1080", post_author: "Мария Ю.", post_message: "<p>Привет, как твои дела? Чем сего...</p>" },
                { post_id: 3, post_date: "24.09.2020", post_image: "https://via.placeholder.com/1920x1080", post_author: "Костя К.", post_message: "<p>Привет, как твои дела? Чем сего...</p>" },
                { post_id: 4, post_date: "25.09.2020", post_image: "https://via.placeholder.com/1920x1080", post_author: "Алексей К.", post_message: "<p>Привет, как твои дела? Чем сего...</p>" },
            ],
            _postText: '',

            get newPostText() {
                return this._postText;
            },
            set newPostText(text) {
                this._postText = text.replace(/<\/?[^>]+(>|$)/g, "");
            },
        }
    },
    _callSubscriber() {
        console.log('No renderers');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    get state() {
        return this._state;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);

        this._callSubscriber(this.state)
    }
};

export default store;