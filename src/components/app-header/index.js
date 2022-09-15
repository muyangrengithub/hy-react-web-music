import React, { memo,useState} from 'react';
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import { getSongDetailAction } from '@/pages/player/store';
import { headerLinks } from "@/services/local-data";
import debounce from "@/utils/debounce"
import { Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import {getSearchSongData} from '@/services/search' 

import {
  AppHeaderWrapper,
  HeaderLeft,
  HeaderRight
} from "./style";

export default memo(function HYAppHeader({history}) {
  const [songsList,setSongsList] = useState([])
  const [flag,setFlag] = useState(false)
  const search=debounce(function(value){
    value = value.trim();
    if (value.length < 1) return;
    setFlag(true)
    getSearchSongData(value).then(res=>{
      res&&res.result&&setSongsList(res.result.songs)
    })
  },400)
  const dispatch =useDispatch()
  const playMusic = (item) => {
    setFlag(false)
    dispatch(getSongDetailAction(item.id));
  }

  const showItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
    }
  }
  window.addEventListener('click',(e)=>{
      setFlag(false)
  })
  return (
    <AppHeaderWrapper>
      <div className="wrap-v1 content">
        <HeaderLeft>
          <a className="logo sprite_01" href="#/">网易云音乐</a>
          <div className="select-list">
            {
              headerLinks.map((item, index) => {
                return (
                  <div className={classnames("select-item")} key={item.title}>
                    {showItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input  
            className="search" 
            placeholder="音乐/视频/电台/用户" 
            prefix={<SearchOutlined />}
            onInput ={e=>search(e.target.value)}
           />
           {flag&&<ul className='searchPanel'>
            {songsList&&
              songsList.map(item=>{
                return <NavLink key={item.id} to='/discover/song' onClick={e=>playMusic(item)}>{item.name}</NavLink>
              })
            }
           </ul>}
          <div className="center">创作者中心</div>
          <div className="">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </AppHeaderWrapper>
  )
})
