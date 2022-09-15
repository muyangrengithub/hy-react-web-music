import React, { memo } from 'react';
import { useSelector, shallowEqual,useDispatch } from "react-redux";

import {
  getSizeImage,
  formatMinuteSecond
} from "@/utils/format-utils.js"

import { getSongDetailAction } from '@/pages/player/store';
import HYThemeHeaderSong from '@/components/theme-header-song';
import {NavLink} from 'react-router-dom'
import {
  RankingListWrapper
} from './style';

export default memo(function HYRankingList() {
  const state = useSelector(state => ({
    playList: state.getIn(["ranking", "playList"])
  }), shallowEqual);
  const tracks = state.playList.tracks || [];

  const dispatch = useDispatch();

  // other handle
  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id));
  }
  return (
    <RankingListWrapper>
      <HYThemeHeaderSong />
      <div className="play-list">
        <table>
          <thead>
            <tr className="header">
              <th className="ranking"></th>
              <th className="title">标题</th>
              <th className="duration">时长</th>
              <th className="singer">歌手</th>
            </tr>
          </thead>
          <tbody>
            {
              tracks&&tracks.map((item, index) => {
                return (
                  <tr className="" key={item.id}>
                    <td>
                      <div className="rank-num">
                        <span className="num">{index + 1}</span>
                        <span className="new sprite_icon2"></span>
                      </div>
                    </td>
                    <td>
                      <div className="song-name">
                        {
                          index < 3 ?
                            (<img src={getSizeImage(item.al.picUrl, 50)} onClick={e =>playMusic(item)} alt="" />) : null
                        }
                        <button className="btn play sprite_table"  onClick={e => playMusic(item)}></button>
                        <NavLink className="name text-nowrap" to='/discover/song' onClick={e => playMusic(item)}>{item.name}</NavLink>
                      </div>
                    </td>
                    <td>{formatMinuteSecond(item.dt)}</td>
                    <td>{item.ar[0].name}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </RankingListWrapper>
  )
})

