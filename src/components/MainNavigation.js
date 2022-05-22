import React, { useContext, useState, useEffect } from 'react'


import classes from './MainNavigation.module.css'



function MainNavigation(props) {
	const [showCalSelPopup, setShowCalSelPopup] = useState(false)


	function showPopup() {
		setShowCalSelPopup(true)
	}

	function hidePopup() {
		setShowCalSelPopup(false)
	}



	return (
		<header className={classes.header}>

			<div className={classes.search}>

			</div>
            
		</header>
	)
}

export default MainNavigation