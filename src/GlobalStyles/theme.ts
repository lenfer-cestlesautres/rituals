export const theme = {
	colors: {
		primary: '#7986cb',
		secondary: '#2b2b2b',
		success: '#4caf50',
		danger: '#f44336 ',
		body: {
			grey: '#808080',
			darkliver: '#4F4F4F',
			black: '#000000',
		},
		bg: '#E5E4E8',
		font: '#19191B',
	},

	media: {
		
		extraLarge: '(max-width: 1140px)',
		large: '(max-width: 960px)',
		medium: '(max-width: 720px)',
		small: '(max-width: 540px)',
	},

	// in px
	sizes: {
		header: {
			weight: {
				600: '600',
				500: '500',
				400: '400',
			},
			height: {
				xsmall: '31px',
				small: '39px',
				medium: '56px',
				large: '78px',
			},
			fontSize: {
				xsmall: '23px',
				small: '32px',
				medium: '46px',
				large: '64px',
			},
		},
		body: {
			small: '290px',
			medium: '380px',
			large: '580px',
		},
		container: { width: 1200 },
		footer: { height: 128 },
		modal: { width: 540 },
	},

	// in ms
	durations: {
		ms300: 300,
	},

	// z-index
	order: {
		header: 50,
		modal: 100,
	},
}
