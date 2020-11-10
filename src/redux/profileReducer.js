const ADD_POST = 'ADD-POST';
const ON_POST_TEXT_CHANGE = 'ON-POST-TEXT-CHANGE';

let initialState = {
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
    }
};

const profileReducer = (state = initialState, action) => {
    debugger;
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                post_id: 5,
                post_date: (new Date()).toString(),
                post_image: "https://via.placeholder.com/1920x1080",
                post_author: "Камиль Г.",
                post_message: state.newPostText
            }

            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: ''
            };
        }
        case ON_POST_TEXT_CHANGE: {
            return {
                ...state,
                newPostText: action.text
            };
        }
        default: 
            return state;
    }
};

export default profileReducer;

export const addPostActionCreator = () => {
    return { type: ADD_POST };
};

export const onPostTextChangeActionCreator = (text) => {
    return { type: ON_POST_TEXT_CHANGE, text: text };
};