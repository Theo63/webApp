import classes from './Layout.module.css'

function Footer() {
	return (
		<footer className={classes.footer}>
			<div className={classes.footerText}> Healthy Meals © 2022 </div>
			<a href='/contact'>Contact Us</a>
		</footer>
	)
}

export default Footer
