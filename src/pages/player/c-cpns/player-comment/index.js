import React, {
  memo,
  useEffect,
  useState,
  useCallback,
} from 'react'

import { ThemeHeader,SongCommentWrapper, WonderfulWrapper } from './style'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getHotCommentAction,getSongCommentAction } from '../../store/actionCreators'
import HYPagination from '@/components/pagination'
import { getSizeImage} from '@/utils/format-utils.js'
import HYComment from  './c-cpns'

export default memo(function HYPlayerComment() {
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1);
  
  const {
    hotComments,
    SongComments:{
      comments,
      total
    }
  } = useSelector(
    (state) => ({
      hotComments: state.getIn(['player', 'hotComments']),
      SongComments:state.getIn(['player', 'songComments'])
    }),
    shallowEqual
  )
  
  useEffect(()=>{
    dispatch(getHotCommentAction())
    dispatch(getSongCommentAction())
  },[])

  const onPageChange = useCallback((page) => {
    setCurrentPage(page);
    dispatch(getSongCommentAction(20,(page - 1) * 20))
  })
  return (
    <div>
        <ThemeHeader>
            <h3>
                <span>评论</span>
                <span>共{total}条评论</span>
            </h3>
        </ThemeHeader>
        <WonderfulWrapper>
            <h3>精彩评论</h3>
            {hotComments &&
             hotComments.slice(0,10).map((item) => {
                  return(
                      <HYComment 
                        avatar={getSizeImage(item.user.avatarUrl,50)}
                        author={item.user.nickname}
                        content={item.content}
                        time = {item.timeStr}
                        likedCount = {item.likedCount}
                      />
                  )
              })
            }
        </WonderfulWrapper>
        <SongCommentWrapper>
        <h3>最新评论</h3>
            {comments &&
             comments.map((item) => {
                  return(
                      <HYComment 
                        avatar={getSizeImage(item.user.avatarUrl,50)}
                        author={item.user.nickname}
                        content={item.content}
                        time = {item.timeStr}
                        likedCount = {item.likedCount}
                      />
                  )
              })
            }
        </SongCommentWrapper>
        <HYPagination currentPage={currentPage} 
                    total={total} 
                    pageSize={20}
                    onPageChange={onPageChange}/>
    </div>
  )
})
