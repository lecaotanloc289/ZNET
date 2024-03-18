import React from 'react';
import '../createPost/CreatePost.css';
import bg1 from '../../img/bg1.jpg';
import { CloseRounded, EmojiEmotionsOutlined, Face, Face2, Face3, Face4, Face5, Face6, KeyboardVoiceOutlined, PhotoLibraryOutlined, PlayCircleFilled, PlayCircleFilledOutlined, PlayCircleOutline, SentimentSatisfiedOutlined, VoiceChatOutlined } from '@mui/icons-material';

const CreatePost = ({ images, setImages }) => {
    return (
        <div className='form-border'>
            <form>
                <div className='input-box'>
                    {/* <img className='i-img' src={bg1} /> */}
                    <input
                        type='text'
                        id='i-input'
                        placeholder="What's in your mind?"
                        required />
                </div>
                <div className='file-upload'>
                    <div className='file-icons'>
                        <label htmlFor='file' className='pv-upload'>
                            <PhotoLibraryOutlined className='input-svg' />
                            <span className='photo-dis'>Photo</span>
                        </label>
                        <div className='pv-upload'>
                            <PlayCircleFilledOutlined className='input-svg' />
                            <span className='photo-dis'>Video</span>
                        </div>
                        <div className='pv-upload'>
                            <SentimentSatisfiedOutlined className='input-svg' />
                            <span className='photo-dis'>Feeings/Activity</span>
                        </div>
                    </div>
                    <button type='submit'><span>Share</span></button>
                </div>
                <div style={{ display: "none" }}>
                    <input type='file'
                        id='file'
                        accept=".png,.jpeg,.jpg"
                    // onChange={}
                    />
                </div>
                {images && (
                    <div className="displayImg">
                        <CloseRounded onClick={() => setImages(null)} />
                        <img src={URL.createObjectURL(images)} alt="" />
                    </div>
                )}
            </form>
        </div>
    );
};

export default CreatePost;