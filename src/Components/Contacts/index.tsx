import React from 'react'
import {
	Body,
	Img,
	StyledHeader,
	StyledItem,
	StyledQR,
	Wrapper,
	WrapperColumn,
	BodyCentered,
	Wrap,
} from './styles'
import QRTg from './img/QR2.png'
import QR from './img/QR1.png'
import vk from './img/vk.png'
import tg from './img/tg.png'
import forbiddenOrganization from './img/forbiddenorganization.png'


//TODO links for icons
export const Contacts = () => (
	<Wrap>
		<Wrapper>
			<StyledItem>
				<StyledHeader.Medium>
					Контакты
				</StyledHeader.Medium>
				<StyledHeader.Small>
					+7 (929) 682-11-45
					<br />
					hello@dummo.com
				</StyledHeader.Small>
			</StyledItem>
			<StyledItem>
				<StyledQR>
					<img
						src={QRTg}
						alt='QRTg'
					/>
					<img
						src={QR}
						alt='QR'
					/>
				</StyledQR>
				<BodyCentered>
					Отканируйте QR код, чтобы с нами
					связаться
				</BodyCentered>
			</StyledItem>
		</Wrapper>
		<WrapperColumn>
			<Body>Наши соц. сети</Body>
			<Wrapper>
				<Img
					src={vk}
					alt='vk'
				/>
				<Img
					src={tg}
					alt='tg'
				/>
				<Img
					src={forbiddenOrganization}
					alt='forbiddenOrganization'
				/>
			</Wrapper>
		</WrapperColumn>
	</Wrap>
)
