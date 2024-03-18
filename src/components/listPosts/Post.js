import Profile from "../../img/bg1.jpg";
import React from "react";
import styles from "./Post.module.css";
import { ChatBubbleOutline, FavoriteBorderOutlined, InsertEmoticonOutlined, MoreHoriz, SendOutlined } from '@mui/icons-material';

const Posts = [
    {
        "_id": {
            "$oid": "65c10a8ee26fdc21e478fb52"
        },
        "userid": "659edb7042bf7e60062efc53",
        "content": "Vitamin sea !",
        "status": "Public",
        "createdAt": "2024-02-05 23:19:26.891042",
        "images": [
            {
                "_id": {
                    "$oid": "65c10a8ee26fdc21e478fb4f"
                },
                "image": "https://firebasestorage.googleapis.com/v0/b/znet-6536d.appspot.com/o/images%2Frubytabi_-2024-02-05%2023%3A19%3A14.093534-post?alt=media&token=c960d7ce-2f14-4bcb-8e07-05e8d9553167",
                "userid": "659edb7042bf7e60062efc53"
            },
            {
                "_id": {
                    "$oid": "65c10a8ee26fdc21e478fb50"
                },
                "image": "https://firebasestorage.googleapis.com/v0/b/znet-6536d.appspot.com/o/images%2Frubytabi_-2024-02-05%2023%3A19%3A18.202339-post?alt=media&token=4c0dfba8-25a6-484f-bd70-d52aa6cd2863",
                "userid": "659edb7042bf7e60062efc53"
            },
            {
                "_id": {
                    "$oid": "65c10a8ee26fdc21e478fb51"
                },
                "image": "https://firebasestorage.googleapis.com/v0/b/znet-6536d.appspot.com/o/images%2Frubytabi_-2024-02-05%2023%3A19%3A22.544471-post?alt=media&token=6454fd66-8e17-411d-8883-1bbba5bf6406",
                "userid": "659edb7042bf7e60062efc53"
            }
        ],
        "type": "POST",
        "location": "Vinpearl Land - Nha Trang City",
    }
]

const Post = () => {
    return (
        <div className={styles.post}>
            <div className={styles.header}>
                <div className={styles.headerWrapper}>
                    <div className={styles.header1}>
                        <img
                            className={styles.avatarCircleIcon}
                            alt=""
                            src={Profile}
                        />
                        <div className={styles.userName}>
                            <div className={styles.userName1}>
                                <div className={styles.nickName}>
                                    VTV24
                                </div>
                            </div>
                        </div>
                        <div className={styles.time}>
                            <div className={styles.time1}>
                                <div className={styles.hourAgo}> • 1 hour ago</div>
                            </div>
                        </div>
                        <div className={styles.moreOptions}>
                            <div className={styles.icon}>
                                <i style={{ cursor: "pointer" }}><MoreHoriz /></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.postImg}>
                <div className={styles.div} />
                <img className={styles.icon1} alt="" src="https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-6/429823817_709524961350963_3086627652769983253_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeE69n9O2HaY1pGC0cw15MzRV9V9ia2LerZX1X2JrYt6tkIli06x4POxJkLtAjO0QvD-I9gUNqfp4GwmUOmqvDpp&_nc_ohc=_WE_UVQDQlcAX9haFYp&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfCGfm1gNUJ6iDw0R6JGb5bYMTwpigMyv9s1xDfp7xn6Xg&oe=65ED050E" />
            </div>
            <div className={styles.footer}>
                <div className={styles.border}>
                    <div className={styles.border1} />
                </div>
                <div className={styles.icons}>
                    <div className={styles.iconLeft}>
                        <div className={styles.con}>
                            <FavoriteBorderOutlined className={styles.iconsmore} />
                        </div>
                        <div className={styles.con1}>
                            <ChatBubbleOutline className={styles.iconsmore} />
                        </div>
                        <div className={styles.con2}>
                            <SendOutlined className={styles.iconsmore} />
                        </div>
                    </div>
                </div>
                <div className={styles.likes}>
                    <div className={styles.nickName}>1.069</div>
                    <div className={styles.likes1}> Likes</div>
                </div>

                <div className={styles.addcomment}>
                    <div className={styles.border2}>
                        <div className={styles.border3} />
                    </div>
                    <div className={styles.addcomment1}>
                        <div className={styles.iconParent}>
                            <div className={styles.icon2}>
                                <InsertEmoticonOutlined className={styles.iconsmore} />
                            </div>
                            <input
                                type='text'
                                className={styles.newComment}
                                placeholder="Add a comment..."
                                required />
                            <div className={styles.postBtn}>
                                <button className={styles.post1}>post</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.border4}>
                        <div className={styles.border3} />
                    </div>
                </div>
                <div className={styles.border6}>
                    <div className={styles.border1} />
                </div>
                <div className={styles.comment}>
                    <div className={styles.userComment}>
                        <div className={styles.frameParent}>
                            <div className={styles.userNameParent}>
                                <div className={styles.userName2}>
                                    <div className={styles.nickName1}>{`vtv post `}</div>
                                </div>
                                <div className={styles.userComment1}>
                                    <div className={styles.imperdietInSit}>
                                        Hai vay xinh xinh, ca vang boi trong be nuoc, ngoi len, lan xuong, ca vang mua tung tang.
                                    </div>
                                </div>
                            </div>
                            <div className={styles.moreIcon}>
                                <i className={styles.imperdietInSit}>
                                    <span>...</span>
                                    <span className={styles.more1}>more</span>
                                </i>
                            </div>
                        </div>
                    </div>
                    <div className={styles.commentHeader}>
                        <i><div className={styles.addAComment}>View all 100 comments</div></i>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Post