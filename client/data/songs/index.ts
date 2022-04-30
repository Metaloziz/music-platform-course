import {ITrack} from "../../types/tracks";
import avatar from './images.jpg'

export const songs: ITrack[] = [
  {
    _id: '1',
    artist: "rammstein",
    audio: 'qwe',
    listens: 1,
    name: 'Deutschland',
    text: 'qwe',
    picture: avatar,
    comments: [
      {_id: '1', username: 'Andrew', text: 'coooool'},
      {_id: '2', username: 'Alex', text: 'coooooooool'},
      {_id: '3', username: 'Mixa', text: 'coooooooooooool'}
    ]
  },
  {
    _id: '2',
    artist: "rammstein",
    audio: 'qwe',
    listens: 1,
    name: 'Angel',
    text: 'qwe',
    picture: avatar,
    comments: []
  },
]