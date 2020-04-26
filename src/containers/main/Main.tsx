import React, { FC } from 'react';
import { withRouter } from 'react-router-dom'
import { CoverProps } from '../../interfaces/appInterfaces';
import styles from './styles';
import Button from '@material-ui/core/Button';
import locale from '../../shared/locale';

const Main: FC<CoverProps> = ({ history }) => {
  const classes = styles();

  const onClickEnterCity = () => {
    history.push("/list");
  }

  return (
    <div className={classes.coverContainer}>
      <Button onClick={onClickEnterCity} className={classes.buttonStyle} variant="contained">{locale.EnterToCity}</Button>
    </div>
  )
}

export default withRouter(Main);