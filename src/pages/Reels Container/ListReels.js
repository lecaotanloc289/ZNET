import React from "react";
import NavBar from "../../components/navigationBar/NavBar";
import SlideBar from "../../components/slideBar/SlideBar";
import Reels from "../../components/Reels/Reels";
import './ListReels.css';

const ListReels = () => {
    return (
        <div className='interface'>
            <NavBar />
            <div className='reels'>
                <SlideBar active={2} />
                <div style={{ display: "flex", flexDirection: "column", overflow: "auto" }}>
                    <Reels />
                    <Reels />
                    <Reels />
                </div>
            </div>
        </div>
    );
};

export default ListReels;