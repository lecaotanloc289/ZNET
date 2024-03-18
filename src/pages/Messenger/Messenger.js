import React from 'react';
import SlideBar from '../../components/slideBar/SlideBar';
import ChatFriend from '../../components/chatFriend/ChatFriend';
import NavBar from '../../components/navigationBar/NavBar';
import '../Messenger/Messenger.css'

const Messenger = () => {
    return (
        <div className='interface'>
            <NavBar />
            <div className='mess'>
                <ChatFriend />
            </div>
        </div>
    );
};

export default Messenger;