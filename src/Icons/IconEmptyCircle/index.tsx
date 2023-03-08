import React from 'react'

export const IconEmptyCircle = ({
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
				cx='40'
				cy='40'
				r='38.5'
				stroke='#2F5A47'
				stroke-width='3'
			/>
		</svg>
	)
}
