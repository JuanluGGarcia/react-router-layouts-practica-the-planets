import styled from 'styled-components';
import { FONTS } from '../../styles/fonts';
import { COLORS } from '../../styles/colors';

const StyledContainer = styled.div`
	/* background-color:lightblue; */
	background-image: url('/assets/technology/background-technology-desktop.jpg');
	height: 100vh;
	margin-left: auto;
	margin-right: auto;
	padding-top: 120px;
	padding-left: 200px;
	display: flex;
	flex-direction: column;
	/* justify-content: center;
	align-items: center; */
	font-family: ${FONTS.ffSecundary};
	color: ${COLORS.WHITE};
`;

const StyledUp = styled.div`
	margin-bottom: 2rem;
	align-self: flex-start;
	font-size: 1.75rem;
`;
const StyledDown = styled.div`
	/* padding-block: 2rem; */
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	gap: 2rem;
`;

const StyledLeft = styled.div`
	width: 20%;
`;

const StyledSpanNumber = styled.span`
	color: ${COLORS.HOVER};
	opacity: 0.3;
`;

const StyledSpanText = styled.span`
	color: ${COLORS.WHITE};
`;

const StyledCenter = styled.div`
	width: 30%;
`;

const StyledRight = styled.div`
	display: flex;
	flex-direction: column;
	flex-grow: 2;
	width: 40%;
`;

const StyledImageContainer = styled.div`
	height: 100%;
`;

const StyledImage = styled.img``;

const StyledNav = styled.div`
	display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
	gap: 2rem;
`;


const StyledTab = styled.button`
	border-radius: 50%;
  	padding: 1em 1.3em;
  	border: none;
  	background-color: ${({ $active }) => ($active ? '#fff' : 'transparent')};
	color: ${({ $active }) => ($active ? '#0B0D17' : '#fff')};
	border: 1px solid ${({ $active }) => ($active ? '#fff' : 'gray')};
    
	
	cursor: pointer;
	&:hover {
		border: 1px solid ${COLORS.WHITE};
	}
`;

const StyledTechSubTitle = styled.p`
	margin-bottom: 0.5rem;
	font-size: 1rem;
	color: ${COLORS.HOVER};
`;

const StyledTechTitle = styled.h1`
	margin-bottom: 2rem;
	font-family: ${FONTS.ffPrimary};
	font-size: 2.2rem;
`;

const StyledTechText = styled.p`
	/* padding-bottom: 2rem; */
	/* border-bottom: 1px solid ${COLORS.HOVER}; */
	font-size: 1.125rem;
	color: ${COLORS.HOVER};
`;

export {
	StyledContainer,
	StyledLeft,
	StyledSpanNumber,
	StyledSpanText,
	StyledImageContainer,
	StyledImage,
	StyledRight,
	StyledTab,
	StyledTechText,
	StyledTechTitle,
	StyledCenter,
	StyledUp,
	StyledDown,
	StyledTechSubTitle,
	StyledNav
};
