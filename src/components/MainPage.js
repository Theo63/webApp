
import {Grid} from '@material-ui/core/'
import Card from './Card';
import Chat from './Chat'
import classes from './MainPage.module.css'

function MainPage() {
  return (
    <div className={classes.item}>
        <Grid container spacing={2}>
            <Grid item xs={9} >
                <Card />
            </Grid>
            <Grid item xs={3}>
                <Chat />
            </Grid>
        </Grid>
    </div>
  );
}
export default MainPage