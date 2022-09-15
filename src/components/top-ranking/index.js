import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import { getSizeImage } from '@/utils/format-utils';
import { getSongDetailAction } from '@/pages/player/store';
import {changeCurrentIndex} from "@/pages/discover/c-pages/ranking/store/actionCreators"

import {NavLink} from 'react-router-dom'
import { TopRankingWrapper } from './style';

export default memo(function HYTopRanking(props) {
  // props and state
  const { info,index,history} = props;
  const { tracks = [] } = info;

  // redux hooks
  const dispatch = useDispatch();

  // other handle
  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id));
  }
  const goRankingDetail=(e)=>{
    e.preventDefault()
    dispatch(changeCurrentIndex(index));
    history.push("/discover/ranking")
  }
  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl)} alt="" />
          <a href='javascript:;' onClick={(e)=>goRankingDetail(e)} className="image_cover">ranking</a>
        </div>
        <div className="info">
          <a  href='javascript:;' onClick={(e)=>goRankingDetail(e)} >{info.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {
          tracks.slice(0, 10).map((item, index) => {
            return (
              <div key={item.id} className="list-item">
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <NavLink className="name text-nowrap" to='/discover/song' onClick={e => playMusic(item)}>{item.name}</NavLink>
                  <div className="operate">
                    <button className="btn sprite_02 play" 
                            onClick={e => playMusic(item)}></button>
                    <button className="btn sprite_icon2 addto"></button>
                    <button className="btn sprite_02 favor"></button>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      <div className="footer">
        <a  href='javascript:;' onClick={(e)=>goRankingDetail(e)}>查看全部 &gt;</a>
      </div>
    </TopRankingWrapper>
  )
})
