import React from 'react';
import '../Profile/Profile.css';
import NavBar from '../../components/navigationBar/NavBar';
import ProfileInfo from '../../components/profileInfo/ProfileInfo';
import SlideBar from '../../components/slideBar/SlideBar';

const Profile = () => {
    return (
        <div className='interface'>
            <NavBar />
            <div className='profile'>
                <div>
                    <SlideBar active={5} />
                </div>
                <div className='profile-border'>
                    <ProfileInfo />
                </div>

            </div>
        </div>
    );
};

export default Profile;