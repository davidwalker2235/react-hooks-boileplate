import React, {FC, useEffect} from 'react';
import styles from './styles'
import {MainProps} from "../../interfaces/appInterfaces";

const Main: FC<MainProps> = ({history, mainData, isLogged}) => {
  const classes = styles();

  useEffect(() => {
    !isLogged && history.push("/");
  }, [isLogged]);

  return (
    <div className={classes.mainContainer}>
      {mainData.map((data: any) => data?.name)}
    </div>
  )
}
export default Main;
