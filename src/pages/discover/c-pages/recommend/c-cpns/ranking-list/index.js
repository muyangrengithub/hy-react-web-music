import React, { useEffect, memo } from 'react';
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import {
  getTopData
} from "../../store/actionCreators";

import HYThemeHeaderRCM from '@/components/theme-header-rcm';
import HYTopRanking from "@/components/top-ranking";
import {
  RankingWrapper
} from "./style";

export default memo(function HYRankingList({history}) {
  // redux
  const dispatch = useDispatch();
  const state = useSelector((state) => ({
    topUpList: state.getIn(["recommend", "topUpList"]),
    topNewList: state.getIn(["recommend", "topNewList"]),
    topOriginList: state.getIn(["recommend", "topOriginList"])
  }), shallowEqual);

  // hooks
  useEffect(() => {
    dispatch(getTopData(19723756));
    dispatch(getTopData(3779629));
    dispatch(getTopData(2884035));    
  }, [dispatch])

  return (
    <RankingWrapper>
      <HYThemeHeaderRCM title="榜单" moreLink="/discover/ranking"/>
      <div className="tops">
        <HYTopRanking info={state.topUpList} index='0' history={history}/>
        <HYTopRanking info={state.topNewList} index='1' history={history}/>
        <HYTopRanking info={state.topOriginList} index="2" history={history}/>
      </div>
    </RankingWrapper>
  )
})
