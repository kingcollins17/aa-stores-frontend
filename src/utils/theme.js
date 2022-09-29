const theme = {
	colors: {
		primary: '#f63750',
		subTone: '#f62b45',
		light: '#fff',
		bg: '#343a40',
	},
	fonts: {
		body: 'rubik, system-ui, sans-serif',
		heading: 'inherit',
	},
	fontWeights: {
		body: 400,
		heading: 700,
		bold: 700,
	},
	shadows: {
		small: '0 0 4px grey',
		large: '0 0 10px #dfdfdf',
	},
	variants: {
		card: {},
		badge: {},
		innerBox: {
			minWidth: 'auto',
			margin: '0 auto',
		},
	},
	text: {},
	buttons: {
		primary: {
			display: 'inline-block',
			px: 1,
			py: '12px',
			my: 2,
			borderRadius: '15px',
			fontFamily: 'rubik',
			textAlign: 'center',
			bg: '#f93761',
		},
		secondary: {},
	},
	link: {
		primary: {
			textDecoration: 'none',
			fontWeight: '1.1rem',
		},
	},
};
export default theme;
