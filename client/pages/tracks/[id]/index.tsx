import React from 'react';
import MainLayout from "../../../layouts/MainLayout";
import style from './index.module.scss'
import {ITrack} from "../../../types/tracks";
import {songs} from "../../../data/songs";
import {useRouter} from "next/router";
import {Box, Button, Card, Grid} from "@mui/material";
import {Path} from "../../../enums/enums";
import Image from 'next/image'

const TrackID = () => {

  const track: ITrack = songs[1]
  const router = useRouter()


  return (
    <MainLayout>
      <div className={style.container}>
        <Button
          variant={"outlined"}
          onClick={() => router.push(Path.TRACKS)}>
          Back to the list
        </Button>
        <Grid>
          <Card className={style.card}>
            <Image alt={'ava'} src={track.picture.src} width={100}
                   height={100}/>
            <div>
              <div>{track.name}</div>
              <div>{track.artist}</div>
              <div>{track.listens}</div>
            </div>
          </Card>
          <Card className={style.description}>
            <h3>Title</h3>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae dicta
              enim esse est explicabo ipsam magni, minus nulla sunt! Aperiam beatae
              laboriosam molestiae natus numquam quod quos repudiandae vero
              voluptatum?
            </div>

          </Card>


        </Grid>


      </div>
    </MainLayout>
  );
};

export default TrackID
