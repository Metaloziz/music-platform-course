import React from 'react';
import MainLayout from "./../../../layouts/MainLayout";
import style from './index.module.scss'
import StepWrapper from "../../../components/StepWrapper/StepWrapper";

const Create = () => {
  return (
    <MainLayout>
      <div>

        <StepWrapper activeStep={1}>
          <h1>Created</h1>
        </StepWrapper>

      </div>
    </MainLayout>
  );
};

export default Create
