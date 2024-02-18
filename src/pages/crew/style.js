import styled from 'styled-components';
import { FONTS } from '../../styles/fonts';
import { COLORS } from '../../styles/colors';

const StyledContainer = styled.div`
	/* background-color:lightblue; */
	background-image: url('/assets/crew/background-crew-desktop.jpg');
	height: 100vh;
	margin-left:auto;
	margin-right: auto;
	padding-top: 100px;
	padding-inline: 100px;
	display: flex;
	justify-content: space-between;
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
`;


const StyledRight = styled.div`
	position: absolute;
	width: 300px;
	max-width: 400px;
	right: 10%;
	bottom: 0;
	/* margin-left: auto;
	margin-right: auto; */
`;

const StyledLinks = styled.ul`
	/* padding-left: 0; */
	display: flex;
	gap: 2rem;
	margin-left: 2rem;
	list-style: disc;
	

	
`;

const StyledTab = styled.li`
    /* padding-left: 0; */
	font-size: 2rem;
    cursor: pointer;
	color: ${({$active}) => ($active ? '#fff' : 'gray')};

	&:hover {
		color: ${COLORS.HOVER};
	}
	
`;


const StyledTextCrew = styled.p`
	margin-bottom: 2rem;
	/* padding-bottom: 2rem; */
	/* border-bottom: 1px solid ${COLORS.HOVER}; */
	font-size: 1.125rem;
	color: ${COLORS.HOVER};
`;


const StyledCrewPost = styled.p`
margin-bottom: .5rem;
	font-family: ${FONTS.ffPrimary};
	font-size: 2rem;
	opacity: 0.3;
`;

const StyledCrewName = styled.h1`
	margin-bottom: 1rem;
	font-family: ${FONTS.ffPrimary};
	font-size: 2.2rem;
`;

export {
	StyledContainer,
	StyledLeft,
	StyledTitleLeft,
	StyledSpanNumber,
	StyledSpanText,
	StyledImage,
	StyledRight,
	StyledLinks,
	StyledTab,
	StyledTextCrew,
	StyledCrewName,
	StyledCrewPost
};
