import { Grid } from "@mui/material/";
import Card from "./Card";
import Chat from "./Chat";
import classes from "./MainPage.module.css";

function MainPage() {
  return (
    <div className={classes.item}>
      <div>
        <Card />
      </div>
      <div>
        <Chat />
      </div>
    </div>
  );
}
export default MainPage;
