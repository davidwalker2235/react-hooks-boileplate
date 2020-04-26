import React, { FC, useState, useEffect } from 'react';
import styles from './styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import ListItemText from '@material-ui/core/ListItemText';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import locale from '../../shared/locale';
import { useSelector, useDispatch } from 'react-redux';
import { State, FilterData, Brastlewark, SelectedFilterData, FilterRanges, MultiSelectValues, FilterState } from '../../interfaces/appInterfaces';
import { getFilterData, getListDataFromFilter, setFilterDataFromFilter, removeClearFilters } from '../../actions/filterActions';
import { PersonEnum } from '../../shared/enums';

interface MultiselectData {
  [key: string]: string[];
};

const emptySliderData: FilterRanges = {
  [PersonEnum.AGE]: [],
  [PersonEnum.WEIGHT]: [],
  [PersonEnum.HEIGHT]: []
}

const emptyMultiSelectValue: MultiselectData = {
  [PersonEnum.HAIR_COLOR]: [],
  [PersonEnum.PROFESSION]: []
}

const FilterComponent: FC<{}> = () => {
  const dispatch = useDispatch();
  const [mounted, setMounted] = useState<boolean>(false); 
  const filterData: FilterData | undefined = useSelector((state: State) => state.filter.filterData);
  const globalData: Brastlewark[] = useSelector((state: State) => state.home.globalData);
  const sliderData: FilterRanges = useSelector((state: State) => state.filter.slidersData);
  const multiSelectValue: MultiSelectValues = useSelector((state: State) => state.filter.multiSelectValue);
  const personName: string = useSelector((state: State) => state.filter.personName);
  const isFiltered: boolean | undefined = useSelector((state: State) => state.filter.isFiltered);
  const [stateSlidersData, setStateSlidersData] = useState<FilterRanges>(emptySliderData);
  const [stateMultiSelectValue, setStateMultiSelectValue] = useState<MultiselectData>(emptyMultiSelectValue);
  const [statePersonName, setStatePersonName] = useState<string>('');
  const classes = styles();
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;

  useEffect(() => {
    !filterData && dispatch(getFilterData(globalData));
    if (!mounted && filterData &&
       !statePersonName.length &&
       !stateSlidersData[PersonEnum.AGE].length &&
       !stateSlidersData[PersonEnum.WEIGHT].length &&
       !stateSlidersData[PersonEnum.HEIGHT].length &&
       !stateMultiSelectValue[PersonEnum.HAIR_COLOR].length &&
       !stateMultiSelectValue[PersonEnum.PROFESSION].length)
      {
        setStateSlidersData(sliderData);
        setStateMultiSelectValue(multiSelectValue);
        setStatePersonName(personName);
        setMounted(true);
      }
    }
  );

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const handleChanges = (event: any, newValue: number | number[], sliderType: PersonEnum) => {
    setStateSlidersData({...stateSlidersData, [sliderType]: newValue as number[]});
  };

  const renderSlider = (sliderType: PersonEnum) => (
    <div className={classes.root}>
      <Typography id={`range-slider-title-${sliderType}`} gutterBottom>
        {locale[sliderType]}
      </Typography>
      <Slider
        name={sliderType}
        value={stateSlidersData[sliderType]}
        onChange={(event, value) => handleChanges(event, value, sliderType)}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        max={filterData?.ranges[`${sliderType}MaxValue`]}
        min={filterData?.ranges[`${sliderType}MinValue`]}
      />
    </div>
  );

  const handleSelectMultipleChange = (event: React.ChangeEvent<{ value: unknown }>, multiSelectOption: PersonEnum) => {
    setStateMultiSelectValue({...stateMultiSelectValue, [multiSelectOption]: event.target.value as string[]});
  };

  const renderMultiselect = (dataOption: PersonEnum) => (
    <FormControl className={classes.formControl}>
      <InputLabel id={`mutiple-input-label-${dataOption}`}>{locale[dataOption]}</InputLabel>
      <Select
        labelId={`mutiple-checkbox-label-${dataOption}`}
        id={`mutiple-checkbox-${dataOption}`}
        multiple
        value={stateMultiSelectValue[dataOption]}
        onChange={(event) => handleSelectMultipleChange(event, dataOption)}
        input={<Input />}
        renderValue={(selected) => (selected as string[]).join(', ')}
        MenuProps={MenuProps}
      >
        {filterData && filterData[dataOption].map((name: any) => (
          <MenuItem key={name} value={name}>
            <Checkbox checked={stateMultiSelectValue[dataOption].indexOf(name) > -1} />
            <ListItemText primary={name} />
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )

  const onChangeName = (event: any) => {
    setStatePersonName(event.target.value)
  }

  const onClickFilter = () => {
    dispatch(setFilterDataFromFilter(
      {
        personName: statePersonName,
        slidersData: stateSlidersData,
        multiSelectValue: stateMultiSelectValue
      } as FilterState
    ));
    dispatch(getListDataFromFilter({
      [PersonEnum.NAME]: statePersonName,
      [PersonEnum.HAIR_COLOR]: stateMultiSelectValue[PersonEnum.HAIR_COLOR],
      [PersonEnum.PROFESSION]: stateMultiSelectValue[PersonEnum.PROFESSION],
      ranges: stateSlidersData
    } as SelectedFilterData, globalData));
  }

  const onClickClearFilter = () => {
    const resetSlidersData = {
      [PersonEnum.AGE]: [filterData?.ranges.ageMinValue || 0, filterData?.ranges.ageMaxValue || 100],
      [PersonEnum.WEIGHT]: [filterData?.ranges.weightMinValue || 0, filterData?.ranges.weightMaxValue || 100],
      [PersonEnum.HEIGHT]: [filterData?.ranges.heightMinValue || 0, filterData?.ranges.heightMaxValue || 100]
    }
    setStatePersonName('');
    setStateSlidersData(resetSlidersData);
    setStateMultiSelectValue(emptyMultiSelectValue);
    dispatch(getListDataFromFilter({
      [PersonEnum.NAME]: '',
      [PersonEnum.HAIR_COLOR]: [],
      [PersonEnum.PROFESSION]: [],
      ranges: resetSlidersData
    } as SelectedFilterData, globalData));
    dispatch(removeClearFilters());
  }

  return (
    <div
      className={classes.list}
      role="presentation"
    >
      <List>
        <ListItem key="filterTitle">
          <ListItemText primary={locale.SelectToFilter} />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem key={PersonEnum.NAME}>
          <TextField
            className={classes.nameImput}
            id="standard-basic"
            label={locale.Name}
            onChange={onChangeName}
            value={statePersonName} />
        </ListItem>
        <ListItem key={PersonEnum.AGE}>
          {renderSlider(PersonEnum.AGE)}
        </ListItem>
        <ListItem key={PersonEnum.WEIGHT}>
          {renderSlider(PersonEnum.WEIGHT)}
        </ListItem>
        <ListItem key={PersonEnum.HEIGHT}>
          {renderSlider(PersonEnum.HEIGHT)}
        </ListItem>
        <ListItem key={PersonEnum.HAIR_COLOR}>
          {renderMultiselect(PersonEnum.HAIR_COLOR)}
        </ListItem>
        <ListItem key={PersonEnum.PROFESSION}>
          {renderMultiselect(PersonEnum.PROFESSION)}
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem className={classes.filterButton} button key="filterButton" onClick={onClickFilter}>
          <ListItemText className={classes.buttonText} primary={locale.Filter} />
        </ListItem>
      </List>
      <Divider />
      {isFiltered && <List>
        <ListItem className={classes.clearFilterButton} button key="filterButton" onClick={onClickClearFilter}>
          <ListItemText className={classes.buttonText} primary={locale.ClearFilters} />
        </ListItem>
      </List>}
    </div>
  );
}

export default FilterComponent;