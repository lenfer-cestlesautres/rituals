import styled from 'styled-components'

export const Wrapper = styled.div`
	margin-top: 49px;
	margin-left: 57px;
`

const Header = styled.div`
	font-family: 'Montserrat';
	font-style: normal;
`

const StyledHeaderMedium = styled(Header)`
	font-weight: ${({ theme }) =>
		theme.sizes.header.weight[500]};

	font-size: ${({ theme }) =>
		theme.sizes.header.fontSize.medium};

	line-height: ${({ theme }) =>
		theme.sizes.header.height.medium};
`

const StyledHeaderXSmall = styled(Header)`
	font-weight: ${({ theme }) =>
		theme.sizes.header.weight[400]};

	font-size: ${({ theme }) =>
		theme.sizes.header.fontSize.xsmall};

	line-height: ${({ theme }) =>
		theme.sizes.header.height.xsmall};

	color: ${({ theme }) =>
		theme.colors.body.black};
`

export const StyledHeader = {
	Medium: StyledHeaderMedium,
	Xsmall: StyledHeaderXSmall,
}
export const Subscript = styled.div`
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 16px;

	color: #808080;
	margin-bottom: 50px;
`

export const StyledItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
`

export const CardWrapper = styled.div`
	display: flex;
	gap: 30px 80px;
	width: 910px;
	flex-wrap: wrap;
`