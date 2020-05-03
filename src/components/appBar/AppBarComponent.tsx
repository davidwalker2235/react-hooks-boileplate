import React, {FC} from 'react';
import {useDispatch, useSelector} from "react-redux";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { useTranslation } from 'react-i18next';
import styles from './styles';
import {State} from "../../interfaces/appInterfaces";
import {logout} from "../../actions/loginActions";

const AppBarComponent: FC<any> = ({children}) => {
  const [t] = useTranslation();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const isLogged: boolean | undefined = useSelector((state: State) => state.login.isLogged);
  const classes = styles();

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onClickLogout = () => {
    setAnchorEl(null);
    dispatch(logout())
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {t('ABBLogs')}
          </Typography>
          {isLogged && (
            <div>
              <IconButton
                aria-controls="menu-appbar-icon"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={onClickLogout}>{t('Logout')}</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
      {children}
    </div>
  );
}

export default AppBarComponent;