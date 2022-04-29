import React, {FC} from 'react';
import {ITrack} from "../../types/tracks";
import {Box, Grid} from "@mui/material";
import TrackItem from "../TrackItem/TrackItem";
import style from './TrackList.module.scss'

type TrackListProps = {
  tracks: ITrack[]
}


const TrackList: FC<TrackListProps> = ({tracks}) => {
  return (
    <>
      <Grid container direction={'column'}>
        <Box p={2} className={style.container}>
          {tracks.map((el) =>
            <TrackItem key={el._id} track={el}/>
          )}
        </Box>
      </Grid>
    </>
  );
};
export default TrackList
