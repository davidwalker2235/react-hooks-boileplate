import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

const styles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(50),
        height: theme.spacing(50),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      },
    },
    textInputContainer: {
      padding: 50
    },
    textInput: {
      width: '100%',
      marginBottom: 30
    },
    margin: {
      margin: theme.spacing(1),
    },
  }),);

export default styles;