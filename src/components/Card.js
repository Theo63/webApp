import ReactPlayer from "react-player";

import classes from "./Card.module.css";
import MainPage from "./MainPage";

function Card(props) {
  let width = window.innerWidth;
  console.log(width);

  return (
    <div className={classes.item}>
      <div className={classes.title}>Presentation Window</div>
      <div className={classes.image}>
        <ReactPlayer
          controls
          url="https://www.youtube.com/watch?v=L1ung0wil9Y"
          width={width < 768 ? 300 : 1080}
          height={width < 768 ? 175 : 640}
        />
      </div>
    </div>
  );
}

export default Card;
