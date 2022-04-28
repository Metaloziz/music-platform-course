import React, {FC} from 'react';
import {ITrack} from "../types/tracks";
import {Card, Grid, IconButton} from "@mui/material";
import style from './TrackItem.module.scss'
import {Pause, PlayArrow} from "@mui/icons-material";
import Image from 'next/image'

type TrackItemProps = {
  track: ITrack
  active?: boolean
}

const TrackItem: FC<TrackItemProps> = ({track, active = false}) => {
  return (
    <Card className={style.track}>
      <IconButton>
        {active ? <Pause/> : <PlayArrow/>}
      </IconButton>
      <Image alt={'ava'}
             className={style.avatar}
             src={track.picture.src}
             width={100}
             height={100}/>
      <div>{track.name}</div>
      <div>{track.artist}</div>
    </Card>
  );
};

export default TrackItem
