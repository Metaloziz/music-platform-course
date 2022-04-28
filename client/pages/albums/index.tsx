import React from 'react';
import MainLayout from "../../layouts/MainLayout";
import style from './index.module.scss'


const Albums = () => {
  return (
    <>
      <MainLayout>
        <h1 className={style.title}>Albums</h1>
      </MainLayout>
    </>
  );
};

export default Albums