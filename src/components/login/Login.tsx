import React, { FC, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import styles from './styles'
import {LoginProps, LoginState} from "../../interfaces/appInterfaces";
import {useTranslation} from "react-i18next";

const Login: FC<LoginProps> = ({ history,
                                 login,
                                 isLogged}) => {
  const classes = styles();
  const dispatch = useDispatch();
  const [t] = useTranslation();
  const [values, setValues] = useState<LoginState>({
    user: '',
    password: '',
    hasuserLabelError: false,
    haspasswordLabelError: false,
    showPassword: false,
  });

  useEffect(() => {
    isLogged && history.push("/main");
  }, [isLogged]);

  const handleBlur = (prop: keyof LoginState) => {
    setValues({...values, [`has${prop}LabelError`]: values[prop] ? false : true})
  }
  const handleFocus = (prop: keyof LoginState) => {
    setValues({...values, [`has${prop}LabelError`]: false})
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  }

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }

  const handleChange = (prop: keyof LoginState) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const onClickLogin = () => {
    login && dispatch(login(values))
  }

  return     (
    <div className={classes.root}>
      <Paper elevation={3}>
        <div className={classes.textInputContainer}>
          <TextField
            className={classes.textInput}
            error={values.hasuserLabelError}
            id="login-field"
            onBlur={() => handleBlur('user')}
            onFocus={() => handleFocus('user')}
            helperText={values.hasuserLabelError && t('ThisFieldIsRequired')}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PersonIcon />
                </InputAdornment>
              )
            }}
            onChange={handleChange('user')}
          />
          <TextField
            className={classes.textInput}
            error={values.haspasswordLabelError}
            id="password-field"
            onBlur={() => handleBlur('password')}
            onFocus={() => handleFocus('password')}
            helperText={values.haspasswordLabelError && t('ThisFieldIsRequired')}
            type={values.showPassword ? 'text' : 'password'}
            onChange={handleChange('password')}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <VpnKeyIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
        </div>
        <Button
          variant="outlined"
          size="large"
          color="primary"
          className={classes.margin}
          onClick={onClickLogin}
          disabled={values.user.length === 0 || values.password.length === 0}
        >
          {t('Login')}
        </Button>
      </Paper>
    </div>)
}

export default Login;