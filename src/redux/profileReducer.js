const ADD_POST = 'ADD-POST';
const ON_POST_TEXT_CHANGE = 'ON-POST-TEXT-CHANGE';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            state.postsData.push({
                post_id: 5,
                post_date: (new Date()).toString(),
                post_image: "https://via.placeholder.com/1920x1080",
                post_author: "Камиль Г.",
                post_message: state.newPostText
            });
            state.newPostText = '';
            break;
        case ON_POST_TEXT_CHANGE:
            state.newPostText = action.text;
            break;
        default: break;
    }

    return state;
};

export default profileReducer;

export const addPostActionCreator = () => {
    return { type: ADD_POST };
};

export const onPostTextChangeActionCreator = (text) => {
    return { type: ON_POST_TEXT_CHANGE, text: text };
};