import styled from 'styled-components'
import { IconCircle1 } from '../../Icons/IconCircle1'


//TODO unifying font export
//TODO Wrapper reformat
export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 141px;
	margin-top: 79px;
	margin-left: 132.5px;
`

export const TopWrapper = styled.div`
	display: flex;
	gap: 120px;
`

export const BottomWrapper = styled.div`
	display: flex;
	gap: 40px;
`

const Body = styled.div`
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 400;
	font-size: 18px;
	line-height: 140%;
	margin-bottom: 30px;
`

const StyledBodySmallContainer = styled(Body)`
	width: ${({ theme }) =>
		theme.sizes.body.small};

	color: ${({ theme }) =>
		theme.colors.body.grey};
`

const StyledBodyMediumContainer = styled(Body)`
	width: ${({ theme }) =>
		theme.sizes.body.medium};

	color: ${({ theme }) =>
		theme.colors.body.black};
`

const StyledBodyLargeContainer = styled(Body)`
	width: ${({ theme }) =>
		theme.sizes.body.large};

	color: ${({ theme }) =>
		theme.colors.body.darkliver};
`

export const StyledBody = {
	Small: StyledBodySmallContainer,
	Medium: StyledBodyMediumContainer,
	Large: StyledBodyLargeContainer,
}

const Header = styled.div`
	font-family: 'Montserrat';
	font-style: normal;
`

const StyledHeaderLarge = styled(Header)`
	min-width: 679px;
	font-weight: ${({ theme }) =>
		theme.sizes.header.weight[600]};

	font-size: ${({ theme }) =>
		theme.sizes.header.fontSize.large};

	line-height: ${({ theme }) =>
		theme.sizes.header.height.large};

	color: ${({ theme }) =>
		theme.colors.body.black};
`

const StyledHeaderMedium = styled(Header)`
	font-weight: ${({ theme }) =>
		theme.sizes.header.weight[500]};

	font-size: ${({ theme }) =>
		theme.sizes.header.fontSize.medium};

	
	line-height: ${({ theme }) =>
		theme.sizes.header.height.medium};
	margin-top: 200px;
	margin-bottom: 58px;
	margin-left: 132.5px;
`

const StyledHeaderSmall = styled(Header)`
	font-weight: ${({ theme }) =>
		theme.sizes.header.weight[500]};
	
	font-size: ${({ theme }) =>
		theme.sizes.header.fontSize.small};
	
	line-height: ${({ theme }) =>
		theme.sizes.header.height.small};
	min-width: 245px;
	width: 390px;
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
	XSmall: StyledHeaderXSmall,
	Small: StyledHeaderSmall,
	Medium: StyledHeaderMedium,
	Large: StyledHeaderLarge,
}

export const StyledItem = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 100%;
	margin-right: 135px;
`

export const StyledItemBorder = styled(StyledItem)`

	border-bottom: 1px solid #000;
`

export const Ul = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 36px;
	margin-left: 132.5px;
	padding-left: 0px;
`

export const UlLi = styled.li`
	display: flex;
	gap: 116px;
	text-align: left;
`


export const Ol = styled.ol`
	display: flex;
	flex-direction: column;
	gap: 36px;
	margin-left: 132.5px;
	padding-left: 0px;
`

export const OlLi = styled.li`
	display: flex;
	gap: 116px;
	justify-content: space-between;

	margin-right: 135px;
	text-align: left;
`

export const OlLiBorder = styled(OlLi)`
	border-bottom: 1px solid #000;
`

export const EmptyBlock = styled.div`
	width: 682px;
	height: 462px;

	background: #d9d9d9;
`

export const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
`
export const Subscript = styled.div`
	font-family: 'Manrope';
	font-style: normal;
	font-weight: 400;
	font-size: 12px;
	line-height: 16px;

	color: #808080;
	margin-bottom: 80px;
`

export const StyledUiIcon = styled.div`
	min-width: 84px;
	min-height: 84px;
	width: 84px;
	height: 84px;
`