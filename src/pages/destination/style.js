import styled from 'styled-components';
import { FONTS } from '../../styles/fonts';
import { COLORS } from '../../styles/colors';

const StyledContainer = styled.div`
	/* background-color:lightblue; */
	background-image: url('/assets/destination/background-destination-desktop.jpg');
	height: 100vh;
	margin-left:auto;
	margin-right: auto;
	padding-top: 100px;
	padding-inline: 100px;
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
	font-size: 1.75rem;
	margin-bottom: 1.5rem;
`;

const StyledSpanNumber = styled.span`
	color: ${COLORS.HOVER};
	opacity: 0.3;
`;

const StyledSpanText = styled.span`
	color: ${COLORS.WHITE};
`;

const StyledImage = styled.div`
	width: 350px;
`;


const StyledRight = styled.div`
	width: 40%;
`;

const StyledMenu = styled.div`
	font-size: 1.125rem;
`;

const StyledLinks = styled.ul`
	display: flex;
	gap: 2rem;
	margin-bottom: 2rem;
`;

const StyledTab = styled.li`
    padding: 1rem;
    border-bottom: 2px solid ${({$active}) => ($active ? '#fff' : 'transparent')};
    cursor: pointer;
	

	&:hover {
		border-bottom: 2px solid ${COLORS.HOVER};
	}
`;

const StyledNamePlanet = styled.h1`
	font-size: 6.25rem;
`;

const StyledTextPlanet = styled.p`
	margin-bottom: 2rem;
	padding-bottom: 2rem;
	border-bottom: 1px solid ${COLORS.HOVER};
	font-size: 1.125rem;
	color: ${COLORS.HOVER};
`;

const StyledStats = styled.div`
	display: flex;
	gap: 3rem;
`;
const StyledStatsDistance = styled.div``;
const StyledDistanceTitle = styled.p`
	font-size: 14px;
	margin-bottom: 5px;
`;
const StyledDistanceNumber = styled.p`
	font-family: ${FONTS.ffPrimary};
	font-size: 1.5rem;
`;
const StyledStatsTravelTime = styled.div``;
const StyledTravelTitle = styled.p`
	font-size: 14px;
	margin-bottom: 5px;
`;
const StyledTravelNumber = styled.p`
	font-family: ${FONTS.ffPrimary};
	font-size: 1.5rem;
`;


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
