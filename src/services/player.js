import request from './axios';

export function getSongDetail(ids) {
  return request({
    url: "/song/detail",
    params: {
      ids
    }
  })
}

export function getLyric(id) {
  return request({
    url: "/lyric",
    params: {
      id
    }
  })
}

export function getSimiPlaylist(id) {
  return request({
    url: "/simi/playlist",
    params: {
      id
    }
  })
}

export function getSimiSong(id) {
  return request({
    url: "/simi/song",
    params: {
      id
    }
  })
}

//热门评论
export function getHotComment(id, type = 0) {
  return request({
    url: '/comment/hot',
    params: {
      id,
      type,
    },
  })
}

// 歌曲评论
export function getSongComment(id, limit = 20, offset) {
  return request({
    url: '/comment/music',
    params: {
      id,
      limit,
      offset,
      // timestamp: new Date().getTime()
    },
  })
}
