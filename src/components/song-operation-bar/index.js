import React, { memo } from 'react';

import { OperationBarWrapper } from './style';

export default memo(function HYSongOperationBar(props) {
  const { favorTitle, shareTitle, downloadTitle, commentTitle,singer } = props;

  function play(){
    if(singer){

    }
  }
  return (
    <OperationBarWrapper>
      <span className="play">
        <a href='javascript:;' onClick={play}  className="play-icon sprite_button">
          <span className="play sprite_button">
            <i className="sprite_button"></i>
            <span>播放</span>
          </span>
        </a>
        <a href="javascript:;" className="add-icon sprite_button">+</a>
      </span>
      <a href="javascript:;" className="item sprite_button">
        <i className="icon favor-icon sprite_button">{favorTitle}</i>
      </a>
      <a href="javascript:;" className="item sprite_button">
        <i className="icon share-icon sprite_button">{shareTitle}</i>
      </a>
      <a href="javascript:;" className="item sprite_button">
        <i className="icon download-icon sprite_button">{downloadTitle}</i>
      </a>
      <a href="javascript:;" className="item sprite_button">
        <i className="icon comment-icon sprite_button">{commentTitle}</i>
      </a>
    </OperationBarWrapper>
  )
})
