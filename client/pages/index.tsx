import {Button} from '@mui/material';
import React from 'react';
import style from './index.module.scss'
import MainLayout from "../layouts/MainLayout";

const Index = () => {

  return (
    <>
      <MainLayout>
        <div className={style.center}>
          <h1>Hello !</h1>
          <h2>it is SpotiFy from BY</h2>
          <Button>random</Button>
        </div>
      </MainLayout>
    </>
  );
};

export default Index
