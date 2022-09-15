import React, { memo, useEffect } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getSimiSongAction } from '../../store/actionCreators';
import { getSongDetailAction } from '@/pages/player/store';

import {NavLink} from 'react-router-dom'
import HYThemeHeaderPlayer from '@/components/theme-header-player';
import { RelevantWrapper } from './style';

export default memo(function HYRelevant() {
  const { simiSongs } = useSelector(state => ({
    simiSongs: state.getIn(["player", "simiSongs"])
  }), shallowEqual);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSimiSongAction());
  }, [dispatch]);

  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id));
  }
  return (
    <RelevantWrapper>
      <HYThemeHeaderPlayer title="相似歌曲" />
      <div className="songs">
        {
          simiSongs.map((item, index) => {
            return (
              <div className="song-item" key={item.id}>
                <div className="info">
                  <div className="title">
                    <NavLink to='/discover/song' onClick={e => playMusic(item)}>{item.name}</NavLink>
                  </div>
                  <div className="artist">
                    <a href="javascript:;">{item.artists[0].name}</a>
                  </div>
                </div>
                <div className="operate">
                  <button className="item btn sprite_icon3 play"  onClick={e => playMusic(item)}></button>
                  <button className="item sprite_icon3 add"></button>
                </div>
              </div>
            )
          })
        }
      </div>
    </RelevantWrapper>
  )
})
