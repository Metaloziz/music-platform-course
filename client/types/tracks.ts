import {StaticImageData} from "next/image"

export type IComment = {
  _id: string
  username: string
  text: string
}


export type ITrack = {
  _id: string
  name: string
  artist: string
  text: string
  listens: number
  picture: StaticImageData
  audio: string
  comment: IComment[]
}