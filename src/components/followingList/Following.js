import React from 'react';
import '../followingList/Following.css';

const FollowingSuggest = () => {
    return (
        <div className='right-side'>
            <div className='following-suggest'>
                <div className='define'>
                    <span><b>Suggestion for you</b></span>
                </div>
                <div className='suggest-person'>
                    <div className='info'>
                        <img />
                        <span>Cong Hau</span>
                    </div>
                    <div className='btn'>
                        <button>Follow</button>
                        <button>Dimiss</button>
                    </div>
                </div>
            </div>
            <div className='following-list'>
                <div className='define'>
                    <span><b>Following</b></span>
                </div>
                <div className='following-person'>
                    <div className='info'>
                        <img />
                        <span>Cong Hau</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FollowingSuggest;