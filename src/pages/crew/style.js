import styled from 'styled-components';
import { FONTS } from '../../styles/fonts';
import { COLORS } from '../../styles/colors';

const StyledContainer = styled.div`
	/* background-color:lightblue; */
	background-image: url('/assets/crew/background-crew-desktop.jpg');
	height: 100vh;
	margin-left:auto;
	margin-right: auto;
	display: flex;
	justify-content: space-around;
	align-items: center;
	/* font-family: ${FONTS.ffPrimary}; */
`;

const StyledLeft = styled.div`
	width: 37%;
`;
const StyledSubtitle = styled.h1`
	font-size: 1.5rem;
`;
const StyledTitle = styled.h1`
	font-size: 8rem;
	font-weight: 100;
`;
const StyledText = styled.p`
	font-family: ${FONTS.ffPrimary};
	font-size: 1rem;
`;
const StyledRight = styled.div``;

const StyledExplore = styled.h2`
	font-size: 3rem;
	font-weight: 100;
	padding: 90px 40px;
	background-color: ${COLORS.WHITE};
	border-radius: 80%;
	color: ${COLORS.DARK};
	cursor: pointer;

	&:hover{

	}
`;

export {
	StyledContainer,
	StyledLeft,
	StyledSubtitle,
	StyledTitle,
	StyledText,
	StyledRight,
	StyledExplore
};
