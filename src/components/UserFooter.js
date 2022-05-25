import React from "react";
import classes from "./UserFooter.module.css";

const UserFooter = () => {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.user}>
          <a>16:52</a>
          <div className={classes.hl}></div>
          <div className={classes.content}>
            <h2>USER 1 AREA</h2>
          </div>
        </div>
        <div className={classes.vl}></div>
        <div className={classes.user}>
          <a>16:02</a>
          <div className={classes.hl}></div>
          <div className={classes.content}>
            <h2>USER 2 AREA</h2>
          </div>
        </div>
        <div className={classes.vl}></div>

        <div className={classes.user}>
          <a>15:26</a>
          <div className={classes.hl}></div>
          <div className={classes.content}>
            <h2>USER 3 AREA</h2>
          </div>
        </div>
        <div className={classes.vl}></div>

        <div className={classes.user}>
          <a>11:07</a>
          <div className={classes.hl}></div>
          <div className={classes.content}>
            <h2>USER 4 AREA</h2>
          </div>
        </div>
      </div>
      <div className={classes.hl}></div>
    </>
  );
};

export default UserFooter;
