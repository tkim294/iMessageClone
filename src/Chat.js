import { IconButton } from '@material-ui/core';
import MicNoneIcon from "@material-ui/icons/MicNone";
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Chat.css';
import { selectChatName } from './features/chatSlice';
import Message from './Message';

const Chat = () => {
    const [input, setInput] = useState("");
    const chatName = useSelector(selectChatName);

    const [messages, setMessages] = useState([]);



    const sendMessage = (e) => {
        e.preventDefault();

        // Firebase Magic...

        setInput("")
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <h4>
                    To: <span className="chat__name">{chatName}</span>
                </h4>
                <strong>Details</strong>
            </div>

            {/* chat messages */}
            <div className="chat__messages">
                <Message />
                <Message />
                <Message />
            </div>

            <div className="chat__input">
                <form>
                    <input 
                        value={input} 
                        onChange={(e) => setInput(e.target.value) } 
                        placeholder="iMessage" 
                        type="text" 
                    />
                    <button onClick={sendMessage}>Send Message</button>
                </form>

                <IconButton>
                    <MicNoneIcon className="chat__mic" />
                </IconButton>

            </div>
        </div>
    )
}

export default Chat
