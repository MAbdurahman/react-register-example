import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(theme => ({
	registerForm: {
		marginTop: '10vh',
		// textAlign: 'center',
	},
	registerForm__buttonStyle: {
		margin: '1em 0',
		marginBottom: '.5em',
		fontSize: '1.3rem',
		fontWeight: 500,
		letterSpacing: '2px',
		textTransform: 'capitalize',
		backgroundColor: '#423E37',
		color: '#EDEBD7',
		transition: 'all .5s cubic-bezier(0.25, 0.45, 0.45, 0.95)',
		'&:hover': {
			backgroundColor: '#3F51B5',
			color: '#FDEBD3',
			textTransform: 'uppercase',
		},
	},
	registerForm__caption: {
		fontSize: '1rem',
		textAlign: 'center',
	},
	registerForm__errorMessage: {
		display: 'block',
		width: '100%',
		height: '15px',
		marginBottom: '.5em',
		color: 'rgb(245, 41, 41)',
		fontSize: '.75rem',
		fontWeight: '800',
	},
	registerForm__heading: {
		marginBottom: '.7em',
		textAlign: 'center',
	},
	registerForm__headingTitle: {
		fontSize: '1.2rem',
		fontWeight: '800',
		textTransform: 'uppercase',
	},
	registerForm__link: {
		fontSize: '.8rem',
		textDecoration: 'none',
		textTransform: 'capitalize',
		color: '#423E37',
		transition: 'all .5s cubic-bezier(0.25, 0.45, 0.45, 0.95)',
		'&:hover': {
			color: '#3F51B5',
			textDecoration: 'none',
			fontWeight: '900',
			textTransform: 'uppercase',
			letterSpacing: '1px',
		},
	},
	registerForm__linkStyle: {
		textAlign: 'center',
		textDecoration: 'none',
	},
	registerForm__paperStyle: {
		maxWidth: '420px',
		maxHeight: '550px',
		margin: '2em auto',
		padding: '2.5em 1.25em',
		paddingBottom: '1em',
	},
	registerForm__textFieldContainer: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'nowrap',
		alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1em',
	},
	registerForm__textFieldIcon: {
      marginRight: '5px',
      alignSelf: 'center',
	},
	registerForm__textFieldStyle: {
		width: '80%',
		marginBottom: '1em',
	},
}));
