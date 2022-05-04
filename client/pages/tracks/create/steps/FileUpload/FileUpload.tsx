import React, {ChangeEvent, FC, ReactNode, useRef} from 'react';
import {Card} from "@material-ui/core";
import style from './FileUpload.module.scss'


type FileUploadPropsType = {
  setFile: Function
  accept: string
  children?: ReactNode
}


const FileUpload: FC<FileUploadPropsType> = ({ setFile, accept, children}) => {

  const ref = useRef<HTMLInputElement>(null)

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFile(e.target.files)
  }

  return (
    <Card className={style.container} onClick={() => ref.current?.click()}>
      <h1>add file</h1>
      <input
        type={"file"}
        accept={accept}
        ref={ref}
        onChange={onChange}
      />
      {children}
    </Card>
  );
};
export default FileUpload