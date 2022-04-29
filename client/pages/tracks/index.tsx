import {Button, Card, Grid} from '@mui/material';
import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import style from './index.module.scss'
import {useRouter} from "next/router";
import TrackList from "../../components/TrackList/TrackList";
import {songs} from "../../data/songs";
import {Path} from "../../enums/enums";

const Tracks = () => {

  const router = useRouter()

  return (
    <>
      <MainLayout>
        <Grid container className={style.container}>
          <Card>
            <Grid className={style.track}>
              <h1>Track</h1>
              <Button
                onClick={() => router.push(Path.TRACKS + Path.CREATE)}>create</Button>
            </Grid>
            <TrackList tracks={songs}/>
          </Card>
        </Grid>
      </MainLayout>
    </>
  );
};

export default Tracks
