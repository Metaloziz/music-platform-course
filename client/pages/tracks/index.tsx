import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import style from './index.module.scss'

const Tracks = () => {
  return (
    <>
      <MainLayout>
        <h1 className={style.title}>Tracks</h1>
      </MainLayout>
    </>
  );
};

export default Tracks
