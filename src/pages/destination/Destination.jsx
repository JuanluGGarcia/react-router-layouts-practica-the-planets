import { useState } from 'react';
import { DESTINATION_INFO } from '../../constants/destinationInfo';
import {
	StyledContainer,
	StyledDistanceNumber,
	StyledDistanceTitle,
	StyledImage,
	StyledLeft,
	StyledLinks,
	StyledMenu,
	StyledNamePlanet,
	StyledRight,
	StyledSpanNumber,
	StyledSpanText,
	StyledStats,
	StyledStatsDistance,
	StyledStatsTravelTime,
	StyledTab,
	StyledTextPlanet,
	StyledTitleLeft,
	StyledTravelNumber,
	StyledTravelTitle
} from './style';

const Destination = () => {
	const [tabActive, setTabActive] = useState(0);

	return (
		
		<>
			
			<StyledContainer>
				<StyledLeft>
					<StyledTitleLeft>
						<StyledSpanNumber>01 </StyledSpanNumber>
						<StyledSpanText>PICK YOUR DESTINATION</StyledSpanText>
					</StyledTitleLeft>

		 			<StyledImage>
						<img src={DESTINATION_INFO[tabActive].image}
						     alt={DESTINATION_INFO[tabActive].name} />
				 	</StyledImage> 
				</StyledLeft>

				<StyledRight>
				 	<StyledMenu>
				 		<nav>
				 			<StyledLinks>
								{DESTINATION_INFO.map((destination, index) => (
									<StyledTab	onClick={() => 
										handleTab(setTabActive, index)}
										key={destination.id}
										$active={index === tabActive}
									>
										{destination.name}
									</StyledTab>
								))}
					 		</StyledLinks>
					 	</nav>
					 </StyledMenu>
					<StyledNamePlanet>{DESTINATION_INFO[tabActive].name}</StyledNamePlanet>
					<StyledTextPlanet>{DESTINATION_INFO[tabActive].text}</StyledTextPlanet>

					 <StyledStats>
					 	<StyledStatsDistance>
					 		<StyledDistanceTitle>
					 			{DESTINATION_INFO[tabActive].stats[0].name}
							</StyledDistanceTitle>
							<StyledDistanceNumber>
								{DESTINATION_INFO[tabActive].stats[0].value}
						 	</StyledDistanceNumber>
						</StyledStatsDistance>

						<StyledStatsTravelTime>
						 	<StyledTravelTitle>
						 		{DESTINATION_INFO[tabActive].stats[1].name}
							</StyledTravelTitle>
							<StyledTravelNumber>
							 	{DESTINATION_INFO[tabActive].stats[1].value}
		 					</StyledTravelNumber>
		 				</StyledStatsTravelTime>
						
		 			</StyledStats>
		 		</StyledRight>
		 	</StyledContainer>
		</>
	);
};

const handleTab = (setTabActive, index) => {
	setTabActive(index);
};

export default Destination;
