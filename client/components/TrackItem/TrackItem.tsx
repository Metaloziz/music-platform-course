import React, {FC} from 'react';
import {ITrack} from "../../types/tracks";
import {Card, IconButton} from "@mui/material";
import style from './TrackItem.module.scss'
import {Delete, Pause, PlayArrow} from "@mui/icons-material";
import Image from 'next/image'
import {useRouter} from "next/router";
import {Path} from "../../enums/enums";

type TrackItemProps = {
  track: ITrack
  active?: boolean
}

const TrackItem: FC<TrackItemProps> = ({track, active = false}) => {

  const route = useRouter()

  return (
    <Card className={style.track}>
      <IconButton>
        {active ? <Pause/> : <PlayArrow/>}
      </IconButton>
      <Image alt={'ava'}
             onClick={() => route.push(Path.TRACKS + "/" + track._id)}
             className={style.avatar}
             src={track.picture.src}
             width={100}
             height={100}/>
      <div>
        <div>{track.name}</div>
        <div className={style.artist}>{track.artist}</div>
      </div>
      <div className={style.time}>
        {true && "2:33/1:34"}
      </div>
      <IconButton>
        <Delete/>
      </IconButton>
    </Card>
  );
};

export default TrackItem
