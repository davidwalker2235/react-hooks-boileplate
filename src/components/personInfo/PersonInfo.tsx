import React, { FC, useEffect } from 'react';
import { State, BrastlewarkProp, FriendsData, PersonInfoProps } from '../../interfaces/appInterfaces';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import locale from '../../shared/locale';
import Avatar from '@material-ui/core/Avatar';
import { useSelector, useDispatch } from 'react-redux';
import { getFriendsListData } from '../../actions/listActions';
import { PersonEnum } from '../../shared/enums';

const PersonInfo: FC<PersonInfoProps> = ({onClickFriend}) => {
  const classes = styles();
  const dispatch = useDispatch();
  const globalData = useSelector((state: State) => state.home.globalData);
  const friendsListData = useSelector((state: State) => state.list.friendsListData);
  const personData: BrastlewarkProp = useSelector((state: State) => state.person.personData);
  const friendData: BrastlewarkProp = useSelector((state: State) => state.person.friendData);

  useEffect(() => {
    onClickFriend && dispatch(getFriendsListData(personData?.friends || [], globalData));
  },[]);

  const getProfessions = (data: BrastlewarkProp) => (
    data.professions?.length ? data.professions?.map((profession: string) => (
      <Typography variant="subtitle1" color="textSecondary">
        {profession}
      </Typography>
    )) :
    <Typography variant="subtitle1" color="textSecondary">
      No works (Citizen stopped)
    </Typography>
  );

  const getPersonInfo = (infoType: PersonEnum) => {
    if (onClickFriend) return personData[infoType];
    return friendData[infoType];

  }

  const handleClickFriend = (friendId: number) => {
    onClickFriend && onClickFriend(friendId)
  }

  const getFriends = () => (
    friendsListData.length ? friendsListData?.map((friend: FriendsData) => (
      <IconButton onClick={() => handleClickFriend(friend.id)}>
        <Avatar alt={`panel-${friend.id}-avatar`} src={friend.thumbnail} />
      </IconButton>
    )) :
    <Typography  style={{paddingLeft: 10}} variant="subtitle1" color="textSecondary">
      {locale.NoFriends}
    </Typography>
  )

  return (
    <Card className={classes.root}>
      <Grid container justify="flex-start">
        <Grid item xs={12} sm={12} md={3} lg={3}>
          <div className={classes.imageContainer}>
            <img className={classes.cover} alt="complex" src={getPersonInfo(PersonEnum.THUMBNAIL) as string} />
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={9}>
          <div className={classes.details}>
            <Grid justify="space-between" container direction='column'>
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <CardContent className={classes.content}>
                  <Typography component="h5" variant="h5">
                    {getPersonInfo(PersonEnum.NAME)}
                  </Typography>
                </CardContent>
              </Grid>
              <Grid container direction='row'>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <CardContent className={classes.content}>
                    <Typography variant="subtitle1" color="textSecondary">
                      {`${locale.Age}: ${getPersonInfo(PersonEnum.AGE)} ${locale.YearsOld}`}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {`${locale.Weight}: ${Math.round(getPersonInfo(PersonEnum.WEIGHT) as number || 0)}`}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {`${locale.Height}: ${Math.round(getPersonInfo(PersonEnum.HEIGHT) as number || 0)}`}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                      {`${locale.HairColor}: `}
                      <Avatar alt={`hair-color-id-${getPersonInfo(PersonEnum.ID)}-${getPersonInfo(PersonEnum.HAIR_COLOR)}`} style={{backgroundColor: getPersonInfo(PersonEnum.HAIR_COLOR) as string}}> </Avatar>
                    </Typography>
                  </CardContent>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>  
                  <CardContent className={classes.content}>
                    <Typography style={{textDecoration: 'underline'}} variant="subtitle1" color="textSecondary">
                      {`${locale.Professions}:`}
                    </Typography>
                    {getProfessions(onClickFriend ? personData : friendData)}
                  </CardContent>
                </Grid>
              </Grid>
            </Grid>
            {onClickFriend && <CardContent className={classes.content}>
              <div className={classes.friendsThubnails}>
                <Typography component="h5" variant="h5">
                  {`${locale.Friends}: `}
                </Typography>
                {getFriends()}
              </div>
            </CardContent>}
          </div>
        </Grid>
      </Grid>
    </Card>
  )
}

export default PersonInfo;