import styled from 'styled-components';
import { FONTS } from '../../styles/fonts';
import { COLORS } from '../../styles/colors';

const StyledContainer = styled.div`
	/* background-color:lightblue; */
	background-image: url('/assets/destination/background-destination-desktop.jpg');
	height: 100vh;
	margin-left:auto;
	margin-right: auto;
	display: flex;
	justify-content: space-around;
	align-items: center;
	font-family: ${FONTS.ffSecundary};
	color: ${COLORS.WHITE};
`;



const StyledLeft = styled.div`
	width: 40%;
`;

const StyledTitleLeft = styled.div`
	font-weight: 1.75rem;
`;

const StyledSpanNumber = styled.h2`
	color: ${COLORS.DARK};
`;

const StyledSpanText = styled.h2`
	color: ${COLORS.WHITE};
`;

const StyledImage = styled.div``;


const StyledRight = styled.div`
	width: 50%;
`;

const StyledMenu = styled.div``;

const StyledLinks = styled.ul``;

const StyledTab = styled.li`
    width: 100%;
    padding: 1rem;
    border: 1px solid black;
    /* Si $active es true le ponemos el color lightcoral a la pestaña si no le ponemos gray */
    border-bottom: ${({$active}) => ($active ? '#fff' : 'transparent')};
    /* color: ${({$active}) => ($active ? '#FFF' : 'darkgray')}; */
    cursor: pointer;

	&:hover {
		border-bottom: ${({$active}) => ($active ? '#D0D6F9' : 'transparent')};
	}
`;

const StyledNamePlanet = styled.h1`
	font-size: 6.25rem;
`;

const StyledTextPlanet = styled.p`
	font-size: 1.125rem;
	color: ${COLORS.HOVER};
`;

const StyledStats = styled.div``;
const StyledStatsDistance = styled.div``;
const StyledDistanceTitle = styled.p`
	font-size: 14px;
`;
const StyledDistanceNumber = styled.p`
	font-family: ${FONTS.ffPrimary};
	font-size: 1.75rem;
`;
const StyledStatsTravelTime = styled.div``;
const StyledTravelTitle = styled(StyledDistanceTitle);
const StyledTravelNumber = styled(StyledDistanceNumber);


export {
	StyledContainer,
	StyledLeft,
	StyledTitleLeft,
	StyledSpanNumber,
	StyledSpanText,
	StyledImage,
	StyledRight,
	StyledMenu,
	StyledLinks,
	StyledTab,
	StyledNamePlanet,
	StyledTextPlanet,
	StyledStats,
	StyledStatsDistance,
	StyledDistanceTitle,
	StyledDistanceNumber,
	StyledStatsTravelTime,
	StyledTravelTitle,
	StyledTravelNumber
};
