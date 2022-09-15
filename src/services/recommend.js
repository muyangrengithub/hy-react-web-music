import request from "./axios";

export function getTopBanner() {
  return request({
    url: "/banner"
  })
}

export function getHotRecommend() {
  return request({
    url: "/personalized"
  })
}

export function getNewAlbum(limit) {
  return request({
    url: '/album/newest'
  })

}

export function getTopList(id) {
  return request({
    url: '/playlist/detail',
    params: {
      id
    }
  })

}

// export function getNewAlbum(limit, offset) {
//   return request({
//     url: "/top/album",
//     params: {
//       limit,
//       offset
//     }
//   })
// }

// export function getTopList(idx) {
//   return request({
//     url: "/top/list",
//     params: {
//       idx
//     }
//   })
// }


export function getArtistList(limit, cat) {
  return request({
    url: "/artist/list",
    params: {
      cat,
      limit
    }
  })
}