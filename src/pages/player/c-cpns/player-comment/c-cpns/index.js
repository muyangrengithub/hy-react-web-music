import React, { memo } from 'react';

import {
    Wrapper
} from "./style";

export default memo(function HYComment(props) {
    const { author, avatar,content,time,likedCount} = props;

    return (
        <Wrapper>
            <div className='comment'>
                <div className='comment_img'>
                    <img src={avatar}/>
                </div>
                <div className='comment_content'>
                    <div>
                        <a href='javascript:;'>{author}</a> : {content}   
                    </div>
                    <div>
                        <div className='time'>{time}</div>
                        <div className='like'>
                            <a></a>
                            <span>（{likedCount}）</span>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
})
