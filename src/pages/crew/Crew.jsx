import { useState } from 'react';
import { CREW_INFO } from '../../constants/CrewInfo';
import {
	StyledContainer,
	StyledImage,
	StyledLeft,
	StyledLinks,
	StyledRight,
	StyledSpanNumber,
	StyledSpanText,
	StyledCrewPost,
	StyledCrewName,
	StyledTab,
	StyledTextCrew,
	StyledTitleLeft
} from './style';

const Crew = () => {
	const [tabActive, setTabActive] = useState(0);

	return (
		<>
			<StyledContainer>
				<StyledLeft>
					<StyledTitleLeft>
						<StyledSpanNumber>02 </StyledSpanNumber>
						<StyledSpanText>MEET YOUR CREW</StyledSpanText>
					</StyledTitleLeft>

					<StyledCrewPost>{CREW_INFO[tabActive].post}</StyledCrewPost>
					<StyledCrewName>{CREW_INFO[tabActive].name}</StyledCrewName>

					<StyledTextCrew>{CREW_INFO[tabActive].text}</StyledTextCrew>

					<nav>
						<StyledLinks>
							{CREW_INFO.map((crew, index) => (
								<StyledTab
									onClick={() => handleTab(setTabActive, index)}
									key={crew.id}
									$active={index === tabActive}
									$width={crew.width}
								></StyledTab>
							))}
						</StyledLinks>
					</nav>
				</StyledLeft>

				<StyledRight>
					<StyledImage>
						<img
							src={CREW_INFO[tabActive].image}
							alt={CREW_INFO[tabActive].name}
						/>
					</StyledImage>
				</StyledRight>
			</StyledContainer>
		</>
	);
};

const handleTab = (setTabActive, index) => {
	setTabActive(index);
};
export default Crew;
