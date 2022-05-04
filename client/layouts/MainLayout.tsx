import {FC, ReactNode} from "react";
import Navigation from "../components/Navigation/Navigation";
import style from './MainLayout.module.scss'

type Children = {
  children?: ReactNode
}

const MainLayout: FC<Children> = ({children}) => {
  return (
    <div>
      <Navigation/>
      <div className={style.children}>{children}</div>
    </div>
  );
};

export default MainLayout
