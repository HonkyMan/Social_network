import React from 'react';

const Dialogs = (props) => {
    
    let onChangeMessageTextarea = (e) => {
        let text = e.target.value;
        props.changeMessage(text);
    };

    let onSendMessageClick = (e) => {
        e.preventDefault();
        props.sendMessage();
    };
    return (
        <main class="container">
            <div className="wrapper dialogs">
                <ul className="dialogs__users">
                    {props.allChats}
                </ul>
                <div className="dialogs__correspondence">
                    <div className="correspondence_history">
                        {props.allChatMessages}
                    </div>
                    <form action="#">
                        <textarea name="message" id="new_dialog_message" onChange={ onChangeMessageTextarea } value={props.newText} placeholder="Введите сообщение"></textarea>
                        <input type="submit" className="btn btn-action" onClick={ onSendMessageClick } value="Отправить" />
                    </form>
                </div>
            </div>
        </main>
    );
}

export default Dialogs;
