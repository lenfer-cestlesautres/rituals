import React from 'react'

export const IconCircle1 = ({
	size = 84, // or any default size of your choice
	// color = 'black', // or any color of your choice
}) => {
	return (
		<svg
			width={size}
			height={size}
			viewBox='0 0 84 84'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
		>
			<circle
				cx='42'
				cy='42'
				r='42'
				fill='#2F5A47'
			/>
			<path
				d='M42.136 57V26.64L44.114 28.802H34.868V24.8H46.69V57H42.136Z'
				fill='white'
			/>
		</svg>
	)
}
