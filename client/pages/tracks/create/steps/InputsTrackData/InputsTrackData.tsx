import React from 'react';
import {Card, Grid, TextField} from "@material-ui/core";
import style from './InputsTrackData.module.scss'

const InputsTrackData = () => {
  return (
    // <Grid container>
    <Card className={style.container}>
      <TextField label={'track name'}/>
      <TextField label={'artist name'}/>
      <TextField label={'track text'} multiline={true} rows={3}/>
    </Card>
    // {/*</Grid>*/}
  );
};
export default InputsTrackData
