import styled from 'styled-components'


export const Wrap = styled.div`
	margin-top: 231px;
	margin-left: 79px;
`
export const Wrapper = styled.div`
	display: flex;
`

const Header = styled.div`
	font-family: 'Montserrat';
	font-style: normal;
`

export const StyledItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 100%;
	margin-right: 135px;
`

const StyledHeaderSmall = styled(Header)`
	font-weight: ${({ theme }) =>
		theme.sizes.header.weight[400]};

	font-size: ${({ theme }) =>
		theme.sizes.header.fontSize.small};

	line-height: ${({ theme }) =>
		theme.sizes.header.height.small};
	min-width: 245px;
	width: 390px;
`

const StyledHeaderMedium = styled(Header)`
	font-weight: ${({ theme }) =>
		theme.sizes.header.weight[500]};

	font-size: ${({ theme }) =>
		theme.sizes.header.fontSize.medium};

	line-height: ${({ theme }) =>
		theme.sizes.header.height.medium};
	margin-bottom: 30px;
`

export const StyledHeader = {
	Small: StyledHeaderSmall,
	Medium: StyledHeaderMedium,
}

export const StyledQR = styled.div`
	display: flex;
	gap: 110px;
`

export const Body = styled.div`
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 400;
	font-size: 23px;
`

export const BodyCentered = styled(Body)`
	text-align: center;
`

export const Img = styled.img`
	margin-right: 26px;
`

export const WrapperColumn = styled.div`
	display: flex;
	flex-direction: column;
	gap: 15px;
`