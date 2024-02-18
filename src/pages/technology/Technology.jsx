import { useState } from 'react';
import {
	StyledContainer,
	StyledImageContainer,
	StyledImage,
	StyledLeft,
	// StyledLinks,
	StyledRight,
	StyledSpanNumber,
	StyledSpanText,
	StyledTechSubTitle,
	StyledTechTitle,
	StyledTechText,
	StyledTab,
	StyledUp,
	StyledDown,
	StyledCenter,
	StyledNav
} from './style';
import { TECHNOLOGY_INFO } from '../../constants/technologyInfo';

const Technology = () => {
	const [tabActive, setTabActive] = useState(0);

	return (
		<>
			<StyledContainer>
				<StyledUp>
					<StyledSpanNumber>03 </StyledSpanNumber>
					<StyledSpanText>SPACE LAUNCH 101</StyledSpanText>
				</StyledUp>

				<StyledDown>
					<StyledLeft>
						<StyledNav>
							{/* <StyledLinks> */}
								{TECHNOLOGY_INFO.map((tech, index) => (
									<StyledTab
										onClick={() => handleTab(setTabActive, index)}
										key={tech.id}
										$active={index === tabActive}
									>
										{index + 1}
									</StyledTab>
								))}
							{/* </StyledLinks> */}
						</StyledNav>
					</StyledLeft>
					<StyledCenter>
						<StyledTechSubTitle>THE TECHNOLOGY...</StyledTechSubTitle>
						<StyledTechTitle>
							{TECHNOLOGY_INFO[tabActive].title}
						</StyledTechTitle>
						<StyledTechText>{TECHNOLOGY_INFO[tabActive].text}</StyledTechText>
					</StyledCenter>

					<StyledRight>
						<StyledImageContainer>
							<StyledImage
								src={TECHNOLOGY_INFO[tabActive].image}
								alt={TECHNOLOGY_INFO[tabActive].title}
							/>
						</StyledImageContainer>
					</StyledRight>
				</StyledDown>
			</StyledContainer>
		</>
	);
};

const handleTab = (setTabActive, index) => {
	setTabActive(index);
};

export default Technology;
