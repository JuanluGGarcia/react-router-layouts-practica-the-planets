import {
	StyledExplore,
	StyledHomeContainer,
	StyledHomeLeft,
	StyledHomeRight,
	StyledSubtitle,
	StyledText,
	StyledTitle
} from './styles';

const Home = () => {
	return (
		<>
			<StyledHomeContainer>
				<StyledHomeLeft>
					<StyledSubtitle>SO, YOU WANT TO TRAVEL TO</StyledSubtitle>
					<StyledTitle>SPACE</StyledTitle>

					<StyledText>
						Let’s face it: if you want to go to space, you might as well
						genuinely go to outer space and not hover kind of on the edge of it.
						Well sit back, and relax because we’ll give you a truly out of this
						world experience!
					</StyledText>
				</StyledHomeLeft>

				<StyledHomeRight>
					<StyledExplore>EXPLORE</StyledExplore>
				</StyledHomeRight>
			</StyledHomeContainer>
		</>
	);
};
export default Home;
