import { Map } from 'immutable';

import * as actionTypes from './constants';

const defaultState = Map({
  playList: [
    {
      "name": "平凡之路 (Live)",
      "id": 500665346,
      "pst": 0,
      "t": 0,
      "ar": [
        {
          "id": 4721,
          "name": "朴树",
          "tns": [],
          "alias": []
        }
      ],
      "alia": [],
      "pop": 100,
      "st": 0,
      "rt": null,
      "fee": 8,
      "v": 47,
      "crbt": null,
      "cf": "",
      "al": {
        "id": 35934902,
        "name": "乐人・Live：朴树“好好地II”巡回演唱会上海站(Live)",
        "picUrl": "https://p1.music.126.net/IwEI0tFPh4w9OjY6RM2IJQ==/109951163009071893.jpg",
        "tns": [],
        "pic_str": "109951163009071893",
        "pic": 109951163009071890
      },
      "dt": 304680,
      "h": {
        "br": 320000,
        "fid": 0,
        "size": 12189823,
        "vd": 3472,
        "sr": 44100
      },
      "m": {
        "br": 192000,
        "fid": 0,
        "size": 7313911,
        "vd": 3472,
        "sr": 44100
      },
      "l": {
        "br": 128000,
        "fid": 0,
        "size": 4875955,
        "vd": 3472,
        "sr": 44100
      },
      "sq": {
        "br": 856062,
        "fid": 0,
        "size": 32603135,
        "vd": 3472,
        "sr": 44100
      },
      "hr": null,
      "a": null,
      "cd": "1",
      "no": 19,
      "rtUrl": null,
      "ftype": 0,
      "rtUrls": [],
      "djId": 0,
      "copyright": 2,
      "s_id": 0,
      "mark": 73728,
      "originCoverType": 1,
      "originSongSimpleData": null,
      "tagPicList": null,
      "resourceState": true,
      "version": 47,
      "songJumpInfo": null,
      "entertainmentTags": null,
      "single": 0,
      "noCopyrightRcmd": null,
      "mst": 9,
      "cp": 1416614,
      "rtype": 0,
      "rurl": null,
      "mv": 0,
      "publishTime": 1503417600000
    }
  ],
  playSequence: 0, // 0 顺序播放 1 随机播放 2 单曲循环
  currentSongIndex: 0,
  currentSong:
  {
    "name": "平凡之路 (Live)",
    "id": 500665346,
    "pst": 0,
    "t": 0,
    "ar": [
      {
        "id": 4721,
        "name": "朴树",
        "tns": [],
        "alias": []
      }
    ],
    "alia": [],
    "pop": 100,
    "st": 0,
    "rt": null,
    "fee": 8,
    "v": 47,
    "crbt": null,
    "cf": "",
    "al": {
      "id": 35934902,
      "name": "乐人・Live：朴树“好好地II”巡回演唱会上海站(Live)",
      "picUrl": "https://p1.music.126.net/IwEI0tFPh4w9OjY6RM2IJQ==/109951163009071893.jpg",
      "tns": [],
      "pic_str": "109951163009071893",
      "pic": 109951163009071890
    },
    "dt": 304680,
    "h": {
      "br": 320000,
      "fid": 0,
      "size": 12189823,
      "vd": 3472,
      "sr": 44100
    },
    "m": {
      "br": 192000,
      "fid": 0,
      "size": 7313911,
      "vd": 3472,
      "sr": 44100
    },
    "l": {
      "br": 128000,
      "fid": 0,
      "size": 4875955,
      "vd": 3472,
      "sr": 44100
    },
    "sq": {
      "br": 856062,
      "fid": 0,
      "size": 32603135,
      "vd": 3472,
      "sr": 44100
    },
    "hr": null,
    "a": null,
    "cd": "1",
    "no": 19,
    "rtUrl": null,
    "ftype": 0,
    "rtUrls": [],
    "djId": 0,
    "copyright": 2,
    "s_id": 0,
    "mark": 73728,
    "originCoverType": 1,
    "originSongSimpleData": null,
    "tagPicList": null,
    "resourceState": true,
    "version": 47,
    "songJumpInfo": null,
    "entertainmentTags": null,
    "single": 0,
    "noCopyrightRcmd": null,
    "mst": 9,
    "cp": 1416614,
    "rtype": 0,
    "rurl": null,
    "mv": 0,
    "publishTime": 1503417600000
  },

  currentLyrics: [],
  simiPlaylist: [],
  simiSongs: [],
  currentLyricIndex: -1,
  hotComments: [],
  songComments: []
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.song);
    case actionTypes.CHANGE_LYRICS:
      return state.set("currentLyrics", action.lyrics);
    case actionTypes.CHANGE_SIMI_PLAYLIST:
      return state.set("simiPlaylist", action.simiPlaylist);
    case actionTypes.CHANGE_SIMI_SONGS:
      return state.set("simiSongs", action.simiSongs);
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList);
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.index);
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set("currentLyricIndex", action.index);
    case actionTypes.CHANGE_PLAY_SEQUENCE:
      return state.set("playSequence", action.sequence);
    case actionTypes.CHANGE_Hot_Comment:
      return state.set("hotComments", action.comment)
    case actionTypes.CHANGE_Song_Comment:
      return state.set("songComments", action.comment)
    default:
      return state;
  }
}

export default reducer;
