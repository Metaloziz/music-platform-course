import React from 'react';
import {Card, TextField} from "@material-ui/core";
import style from './InputsTrackData.module.scss'

const InputsTrackData = () => {
  return (
    <Card className={style.container}>
      <TextField label={'track name'}/>
      <TextField label={'artist name'}/>
      <TextField label={'track text'} multiline={true} rows={3}/>
    </Card>
  );
};
export default InputsTrackData
