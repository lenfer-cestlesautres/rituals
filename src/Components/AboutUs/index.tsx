import React from 'react';
import { IconCircle1, IconEmptyCircle } from '../../Icons/';
import {
	StyledHeader,
	StyledBody,
	StyledItem,
	Ul,
	UlLi,
	OlLi,
	Ol,
	EmptyBlock,
	StyledCard,
	Subscript,
	TopWrapper,
	StyledUiIcon,
	OlLiBorder,
	StyledItemBorder,
	Wrapper,
	BottomWrapper,
} from './styles'



//TODO space-between?
//TODO simplify structure eg divide into multiple components

export const AboutUs = () => {
	return (
		<>
			<Wrapper>
				<TopWrapper>
					<StyledHeader.Large>
						МЫ СПРАВИМСЯ <br />
						ВМЕСТЕ
					</StyledHeader.Large>
					<StyledItem>
						<StyledHeader.XSmall>
							Нужно начать с консультации
						</StyledHeader.XSmall>
						<StyledBody.Small>
							Бесплатная консультация в
							удобное для Вас время - на ней
							вы узнаете дальнейший план
							организации похорон по Канонам
							Ислама.
						</StyledBody.Small>
						<button>mock button</button>
					</StyledItem>
				</TopWrapper>
				<BottomWrapper>
					<StyledUiIcon>
						<IconEmptyCircle />
					</StyledUiIcon>
					<StyledItem>
						<StyledItem>
							<StyledHeader.Small>
								Мы понимаем
							</StyledHeader.Small>
							<StyledBody.Small>
								Похороны - нелегкий процесс,
								мы оказываем поддержку на
								протяжении всего пути
							</StyledBody.Small>
						</StyledItem>
					</StyledItem>
					<StyledUiIcon>
						<IconEmptyCircle />
					</StyledUiIcon>
					<StyledItem>
						<StyledHeader.Small>
							Мы понимаем
						</StyledHeader.Small>
						<StyledBody.Small>
							Похороны - нелегкий процесс, мы
							оказываем поддержку на
							протяжении всего пути
						</StyledBody.Small>
					</StyledItem>
				</BottomWrapper>
			</Wrapper>

			<StyledHeader.Medium>
				Наши <br />
				преимущества
			</StyledHeader.Medium>
			<Ul>
				<UlLi>
					<StyledUiIcon>
						<IconCircle1 />
					</StyledUiIcon>
					<StyledItemBorder>
						<StyledHeader.Small>
							Мы понимаем
						</StyledHeader.Small>
						<StyledBody.Small>
							Похороны - нелегкий процесс, мы
							оказываем поддержку на
							протяжении всего пути
						</StyledBody.Small>
					</StyledItemBorder>
				</UlLi>
				<UlLi>
					<StyledUiIcon>
						<IconCircle1 />
					</StyledUiIcon>
					<StyledItemBorder>
						<StyledHeader.Small>
							Бюджет
						</StyledHeader.Small>
						<StyledBody.Small>
							Похороны - нелегкий процесс, мы
							оказываем поддержку на
							протяжении всего пути
						</StyledBody.Small>
					</StyledItemBorder>
				</UlLi>
				<UlLi>
					<StyledUiIcon>
						<IconCircle1 />
					</StyledUiIcon>
					<StyledItemBorder>
						<StyledHeader.Small>
							Канон
						</StyledHeader.Small>
						<StyledBody.Small>
							Весь процесс происходит в
							полном соотвествии с канонами
							Ислама
						</StyledBody.Small>
					</StyledItemBorder>
				</UlLi>
				<UlLi>
					<StyledUiIcon>
						<IconCircle1 />
					</StyledUiIcon>
					<StyledItemBorder>
						<StyledHeader.Small>
							Всегда поможем
						</StyledHeader.Small>
						<StyledBody.Small>
							Всегда поможем и проведем
							консультацию
						</StyledBody.Small>
					</StyledItemBorder>
				</UlLi>
			</Ul>
			<StyledHeader.Medium>
				Процесс
			</StyledHeader.Medium>
			<Ol>
				<OlLiBorder>
					<StyledHeader.Small>
						1.Консультация
					</StyledHeader.Small>
					<StyledBody.Large>
						Что важно во время похорон?
						<br />
						Полное понимание и контроль
						ситуации.Доверие к людям, которые
						знают, что делают.Но главное:
						нужно узнать весь процесс,
						познакомится с ним. Для этого мы
						рядом. Провести бесплатную
						консультацию и дать информацию.
						Дать Вам уверенность и
						спокойствие.
					</StyledBody.Large>
				</OlLiBorder>
				<OlLiBorder>
					<StyledHeader.Small>
						2.Составление плана
					</StyledHeader.Small>
					<StyledBody.Large>
						Провести похороны по канонам
						Ислама. Совершить омовение
						усопшего и его подготовку к
						почве. Мы берем на себя контроль
						всего процесса, который мы будем
						осуществлять с вами. Важно
						выбрать место на кладбище и
						учесть все организационные
						моменты.
					</StyledBody.Large>
				</OlLiBorder>
				<OlLiBorder>
					<StyledHeader.Small>
						3.Подбор требований <br /> и
						услуг
					</StyledHeader.Small>
					<StyledBody.Large>
						Провести похороны по канонам
						Ислама. Совершить омовение
						усопшего и его подготовку к
						почве. Мы берем на себя контроль
						всего процесса, который мы будем
						осуществлять с вами. Важно
						выбрать место на кладбище и
						учесть все организационные
						моменты.
					</StyledBody.Large>
				</OlLiBorder>
				<OlLiBorder>
					<StyledHeader.Small>
						4.Контроль похорон
					</StyledHeader.Small>
					<StyledBody.Large>
						Сам процесс похорон. В день,
						когда тело и земля готовы. Важно
						контролировать множество
						моментов: от транспортировки
						тела, до подготовки растений на
						самой могиле. Во время похорон мы
						будем рядом. Но нам важно узнать,
						какой у вас случай. Чтобы помочь.
					</StyledBody.Large>
				</OlLiBorder>
			</Ol>
			<StyledHeader.Medium>
				Наша команда с опытом организации{' '}
				<br />
				похорон более 10 лет
			</StyledHeader.Medium>
			<Ul>
				<OlLi>
					<EmptyBlock />
					<StyledCard>
						<StyledHeader.Small>
							Ренат Юнисов
						</StyledHeader.Small>
						<Subscript>
							Возглавляет Ритуальную службу
						</Subscript>
						<StyledBody.Medium>
							Помогаю в организации похорон
							12 лет. Все услуги полностью
							проходят одобрение мной на
							соответствие канонам Ислама.
							Затем вместе с командой
							организуют необходимые
							похоронные услуги. Мы
							предоставим несколько вариантов
							бюджета и планирования
							похоронного процесса. Сделаем
							правильно, по канонам Ислама.
						</StyledBody.Medium>
					</StyledCard>
				</OlLi>
				<OlLi>
					<EmptyBlock />
					<StyledCard>
						<StyledHeader.Small>
							Ринат Великеев
						</StyledHeader.Small>
						<Subscript>
							Курирует Организационные
							процессы
						</Subscript>
						<StyledBody.Medium>
							Занимаюсь организацией на самих
							похоронах, отвечаю за связь с
							подрядчиками. Мы полностью
							подберем для Вас необходимый
							перечень услуг, исходя из
							бюджета и пожеланий. А затем мы
							с командой организуем похороны,
							сопровождая на всех этапах: от
							консультации до самого
							процесса.
						</StyledBody.Medium>
					</StyledCard>
				</OlLi>
			</Ul>
		</>
	)
}