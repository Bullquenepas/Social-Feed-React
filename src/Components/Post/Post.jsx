import React from 'react';
import LikeDislike from '../LikeDislike/LikeDislike';
import PostDate from '../PostDate/PostDate';




const Post = (props) => {

    const now = Date()

    return ( 
        <div>
            <strong>{props.userName}</strong>
            <p>{props.postBody}</p>
            <LikeDislike />
            <PostDate date={now}/>
            <span></span>
        </div>
     );
}
export default Post;