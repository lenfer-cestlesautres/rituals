import styled from 'styled-components'



export const Ul = styled.ul`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	background: #ffffff;
	box-shadow: 0px 20px 30px
		rgba(0, 0, 0, 0.07);
	min-height: 155px;
`

export const Li = styled.li`
	text-indent: none;
	list-style: none;
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 140%;
	color: #000000;
	&:first-child {
		&:before {
			position: absolute;
			content: url('img/icon.png');
			width: 100px;
			height: 100px;
		}
		position: relative;
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 400;
		font-size: 16px;
		line-height: 20px;
		color: #2f5a47;
	}
	font-family: 'Inter';
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 19px;
	text-decoration: underline;
	&:last-child {
		&:before {
			position: absolute;
			content: url('img/время/clockclock.png');
			width: 28px;
			height: 28px;
			background: url('img/время/clockclock.png')
				no-repeat;
		}
		margin-right: 73px;
		position: relative;
	}
`