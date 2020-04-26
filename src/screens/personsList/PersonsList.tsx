import React, { FC, useState, useEffect } from 'react';
import {useDispatch, useSelector, connect} from 'react-redux';
import { ListProps, Brastlewark } from '../../interfaces/appInterfaces';
import Container from '@material-ui/core/Container';
import {AppBarComponent, PersonInfo} from '../../components';
import {State} from '../../interfaces/appInterfaces';
import styles from './styles';
import { getGlobalData } from '../../actions/homeActions';
import {ExpansionPanelComponent} from '../../components';
import backgroundFog from '../../shared/images/backgroundFog.jpg';
import { getPersonData, getFriendData } from '../../actions/personActions';
import InfiniteScroll from 'react-infinite-scroll-component';
import { showModal } from '../../actions/modalActions';
import Typography from '@material-ui/core/Typography';

const PersonsList: FC<ListProps> = ({personListData}) => {
  const classes = styles();
  const dispatch = useDispatch();
  const globalData = useSelector((state: State) => state.home.globalData);
  const [expandedPanel, setExpandedPanel] = useState<string | boolean>(false);
  const [listData, setListData] = useState<Brastlewark[]>([]);
  let listIndex: number = 20;

  useEffect(() => {
    if (!globalData?.length) {
      dispatch(getGlobalData());
    }
    setListData(personListData.slice(0, listIndex))
  },[personListData]);

  const handleChange = (personId: number, panelId: string | boolean) => {
    dispatch(getPersonData(personId, globalData));
    setExpandedPanel(panelId);
  };

  const fetchMoreData = () => {
    let newListData: Brastlewark[] = listData;
    newListData = newListData.concat(personListData.slice(listIndex, listIndex + 20));
    listIndex = listIndex + 20;
    setListData(newListData);
  };

  const onClickFriend = (friendId: number | undefined) => {
    dispatch(getFriendData(friendId, globalData));
    dispatch(showModal(
      <PersonInfo />
    ));
  }

  return (
    <div>
      <img alt='personListBGImage' className={classes.psBackground} src={backgroundFog} />
      <AppBarComponent>
        <Container className={classes.container}>
          <div className={classes.root}>
          {listData.length ? <InfiniteScroll
            dataLength={listData.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}>
            {listData.map((person: Brastlewark, index: number) => (
              <ExpansionPanelComponent
                data={person}
                key={`person${index}`}
                panelId={index}
                panelExpanded={expandedPanel}
                handleChange={handleChange}
                onClickFriend={onClickFriend}
              />
            ))}
            </InfiniteScroll> :
            <Typography variant="subtitle1" color='primary'>
              There aren't citizens on the city
            </Typography>}
          </div>
        </Container>
      </ AppBarComponent>
    </div>
	)
}

const mapStateToProps = (state: State) => ({
  personListData: state.list.personListData
})

export default connect(mapStateToProps, null)(PersonsList);