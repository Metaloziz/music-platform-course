import React, {FC} from 'react';
import {Card} from "@material-ui/core";


type FileUploadPropsType = {
  file: any
  setFile: Function
}


const FileUpload: FC<FileUploadPropsType> = ({file, setFile}) => {
  return (
    <Card>
      <h1>add file</h1>
      <input type={"file"}/>
    </Card>
  );
};
export default FileUpload