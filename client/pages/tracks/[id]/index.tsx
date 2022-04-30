import React from 'react';
import MainLayout from "../../../layouts/MainLayout";
import style from './index.module.scss'
import {ITrack} from "../../../types/tracks";
import {songs} from "../../../data/songs";
import {useRouter} from "next/router";
import {Button, Card, TextField} from "@mui/material";
import {Path} from "../../../enums/enums";
import Image from 'next/image'

const TrackID = () => {

  const track: ITrack = songs[0]
  const router = useRouter()

  return (
    <MainLayout>
      <div className={style.container}>
        <Button
          variant={"outlined"}
          onClick={() => router.push(Path.TRACKS)}>
          Back to the list
        </Button>
        <Card className={style.card}>
          <Image alt={'ava'} src={track.picture.src}
                 width={200}
                 height={200}/>
          <div>
            <h2>name track - {track.name}</h2>
            <h3>artist - {track.artist}</h3>
            <h3>listens - {track.listens}</h3>
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
        <Card className={style.inputs}>
          <TextField label={'your name'} fullWidth multiline rows={1}/>
          <TextField label={'your comment'} fullWidth multiline rows={4}/>
        </Card>
        <Button>Send</Button>
        <Card className={style.comments}>
          {track.comments.map(
            (track) => {
              return (
                <div key={track._id}>
                  <div>{track.username} - {track.text}</div>
                </div>
              )
            }
          )}
        </Card>
      </div>
    </MainLayout>
  );
};

export default TrackID
