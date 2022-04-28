import {FC, ReactNode} from "react";
import Navigation from "../components/Navigation";

type Children = {
  children?: ReactNode
}

const MainLayout: FC<Children> = ({children}) => {
  return (
    <>
      <Navigation/>
      {children}
    </>
  );
};

export default MainLayout
