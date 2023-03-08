import React from 'react'
import {
	StyledHeader,
	Wrapper,
	Subscript,
	StyledItem,
	CardWrapper,
} from './styles'
import border from './img/border.png'
import coffin from './img/coffin.png'
import rip from './img/rip.png'
import savan from './img/savan.png'
import table from './img/table.png'

export const Rituals = () => (
	<Wrapper>
		<StyledItem>
			<StyledHeader.Medium>
				Ритуальные<br/> принадлежности
			</StyledHeader.Medium>
			<Subscript>
				Цена по договоренности
			</Subscript>
		</StyledItem>
		<CardWrapper>
			<StyledItem>
				<img
					src={border}
					alt='border'
				/>
				<StyledHeader.Xsmall>
					Ограждение
				</StyledHeader.Xsmall>
			</StyledItem>
			<StyledItem>
				<img
					src={coffin}
					alt='coffin'
				/>
				<StyledHeader.Xsmall>
					Табличка
				</StyledHeader.Xsmall>
			</StyledItem>
			<StyledItem>
				<img
					src={rip}
					alt='rip'
				/>
				<StyledHeader.Xsmall>
					Надгробие
				</StyledHeader.Xsmall>
			</StyledItem>
			<StyledItem>
				<img
					src={savan}
					alt='savan'
				/>
				<StyledHeader.Xsmall>Саван</StyledHeader.Xsmall>
			</StyledItem>
			<StyledItem>
				<img
					src={table}
					alt='table'
				/>
				<StyledHeader.Xsmall>Ящик</StyledHeader.Xsmall>
			</StyledItem>
		</CardWrapper>
	</Wrapper>
)