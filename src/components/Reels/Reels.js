import React from "react";
import styles from '../Reels/Reels.module.css';
import Video from '../../img/short-video.mp4';
import { FavoriteBorder, ChatBubbleOutline, Send } from '@mui/icons-material';
import { ControlBar, Player } from "video-react";
import "../../../node_modules/video-react/dist/video-react.css"
const Reels = () => {
    return (
        <div className={styles.reelsContainer}>
            <div className={styles.reels}>

                <div >
                    <Player autoPlay={true} loop >
                        <ControlBar disableCompletely />
                        <source src={Video} />
                    </Player>
                </div>
                <div className={styles.postContent}>
                    <div className={styles.nameBar}>
                        <img className={styles.avatarIcon} alt="" src={Video} />
                        <b className={styles.pageName}>Page name</b>
                    </div>
                    <div className={styles.description}>
                        <div className={styles.loremIpsumDolorContainer}>
                            <span>{`Lời bài hát Waiting For You của MONO được Menback tổng hợp từ album 22 phát hành chính thức của em trai Sơn Tùng M-TP...`}</span>
                            <span className={styles.more}>more</span>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ position: "absolute", right: 50, top: 350 }}>
                <div className={styles.icon}>
                    <div className={styles.iconHeart}>
                        <FavoriteBorder className={styles.heartIcon} />
                        <div className={styles.div}>234</div>
                    </div>
                    <div className={styles.iconComment}>
                        <ChatBubbleOutline className={styles.commentIcon} />
                        <div className={styles.div}>45</div>
                    </div>
                    <div className={styles.iconShare}>
                        <Send className={styles.heartIcon} />
                    </div>

                    <img className={styles.iconAudio} alt="" src={Video} />

                </div>
            </div>
        </div>
    );
};

export default Reels;