import styled from 'styled-components';
import { FONTS } from '../../styles/fonts';
import { COLORS } from '../../styles/colors';

const StyledHomeContainer = styled.div`
	/* background-color:lightblue; */
	background-image: url('/assets/home/background-home-desktop.jpg');
	height: 100vh;
	/* width: 100%; */
	margin-left:auto;
	margin-right: auto;
	padding-top: 100px;
	padding-inline: 100px;
	display: flex;
	justify-content: space-around;
	align-items: center;
	/* font-family: ${FONTS.ffPrimary}; */
`;

const StyledHomeLeft = styled.div`
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
const StyledHomeRight = styled.div`
	/* width: 50%; */
`;

const StyledExplore = styled.h2`
	font-size: 3rem;
	font-weight: 100;
	padding: 90px 40px;
	background-color: ${COLORS.WHITE};
	border-radius: 80%;
	color: ${COLORS.DARK};
	cursor: pointer;
	transition: box-shadow 0.3s ease;
	&:hover{
		box-shadow: 0px 0px 0px 60px rgba(255, 255, 255, 0.1);
	}
`;

export {
	StyledHomeContainer,
	StyledHomeLeft,
	StyledSubtitle,
	StyledTitle,
	StyledText,
	StyledHomeRight,
	StyledExplore
};
