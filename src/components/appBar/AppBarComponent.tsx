import React, { FC, useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import {FilterComponent} from '../../components';
import styles from './styles';
import locale from '../../shared/locale';
import logo from '../../shared/images/logo.png';
import { useDispatch, useSelector } from 'react-redux';
import { State, SelectedFilterData } from '../../interfaces/appInterfaces';
import { getPersonByNameListData, getListDataFromFilter, removeClearFilters } from '../../actions/filterActions';
import { Button } from '@material-ui/core';
import { PersonEnum } from '../../shared/enums';

const AppBarComponent: FC<any> = ({children}) => {
  const dispatch = useDispatch();
  const filterData = useSelector((state: State) => state.filter.filterData);
  const globalData = useSelector((state: State) => state.home.globalData);
  const isFiltered = useSelector((state: State) => state.filter.isFiltered);
  const classes = styles();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (anchor: any, open: boolean) => (event: any) => {
    setIsOpen(open);
  };

  const onChange = (data: any) => {
    dispatch(getPersonByNameListData(data.target.value, globalData));
  }

  const onClickClearFilter = () => {
    const resetSlidersData = {
      [PersonEnum.AGE]: [filterData?.ranges.ageMinValue || 0, filterData?.ranges.ageMaxValue || 100],
      [PersonEnum.WEIGHT]: [filterData?.ranges.weightMinValue || 0, filterData?.ranges.weightMaxValue || 100],
      [PersonEnum.HEIGHT]: [filterData?.ranges.heightMinValue || 0, filterData?.ranges.heightMaxValue || 100]
    }
    dispatch(getListDataFromFilter({
      [PersonEnum.NAME]: '',
      [PersonEnum.HAIR_COLOR]: [],
      [PersonEnum.PROFESSION]: [],
      ranges: resetSlidersData
    } as SelectedFilterData, globalData));
    dispatch(removeClearFilters());
  }

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer('left', true)}
            onKeyDown={toggleDrawer('left', true)}>
              <Typography className={classes.title} variant="h6" noWrap>
                {locale.Filter}
              </Typography>
            <SearchIcon className={classes.filterIcon} />
          </IconButton>
          <div className={classes.title}>
            <img className={classes.logoImageTitle} alt='CoverImage' src={logo} />
          </div>
          {isFiltered && <Button variant="contained" color="secondary" onClick={onClickClearFilter}>
            {locale.ClearFilters}
          </Button>}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder={locale.SearchByPersonsName}
              onChange={onChange}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar>
      <Drawer anchor='left' open={isOpen} onClose={toggleDrawer('left', false)}>
        <FilterComponent />
      </Drawer>
      {children}
    </div>
  );
}

export default AppBarComponent;