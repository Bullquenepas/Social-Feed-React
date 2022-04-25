import React, { useState } from 'react';
import "./LikeDislike.css"
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';


const LikeDislike = (props) => {
    const [likeButtonClass, setLikeButtonClass] = useState("gray")
    const [dislikeButtonClass, setDislikeButtonClass] = useState("gray")

    const handleLikeClick = () => {
        if(likeButtonClass === "gray"){
            setLikeButtonClass("green")
            setDislikeButtonClass("grey")
        }
        else{
            setLikeButtonClass("gray")
        }
    }
    const handleDislikeClick = () => {
        if(dislikeButtonClass === "gray"){
            setDislikeButtonClass("red")
            setLikeButtonClass("gray")
        }
        else{
            setDislikeButtonClass("gray")
        }
    }
    return (
        <div>
            <button className={likeButtonClass} onClick={handleLikeClick}><ThumbUpIcon /></button>
            <button className={dislikeButtonClass} onClick={handleDislikeClick}><ThumbDownIcon /></button>
        </div>
     );
}

export default LikeDislike; 