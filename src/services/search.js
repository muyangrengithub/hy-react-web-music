import request from './axios';

export function getSearchSongData(keywords, limit = 6, type = 1) {
    console.log(keywords)
  return request({
    url: '/search',
    params: {
      keywords,
      limit,
      type,
    },
  });
}
