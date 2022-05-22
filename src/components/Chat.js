import React from 'react';
import classes from './Chat.module.css';

function Chat  () {
        return (
            <div className={classes.right_form}>
                <div className={classes.content}>
                    Events | Chat:
                    </div>
                <input
                    placeholder='Chat is shown here'
                    id={classes.info}
                    type='text'
                />
				</div>
            
        );
    }
  
  
  export default Chat;
