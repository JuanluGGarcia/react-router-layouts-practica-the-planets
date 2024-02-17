import {
	StyledExplore,
	StyledContainer,
	StyledLeft,
	StyledRight,
	StyledSubtitle,
	StyledText,
	StyledTitle
} from './style';

const Crew = () => {
	return (
		<>
			<StyledContainer>
				<StyledLeft>
					<StyledSubtitle>SO, YOU WANT TO TRAVEL TO</StyledSubtitle>
					<StyledTitle>SPACE</StyledTitle>

					<StyledText>
						Let’s face it: if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we’ll give you a truly out of this
						world experience!
					</StyledText>
				</StyledLeft>

				<StyledRight>
					<StyledExplore>EXPLORE</StyledExplore>
				</StyledRight>
			</StyledContainer>
		</>
	);
};
export default Crew;
