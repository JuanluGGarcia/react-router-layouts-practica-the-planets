import styled from 'styled-components';
import { FONTS } from '../../styles/fonts';
import { COLORS } from '../../styles/colors';

const StyledHomeContainer = styled.div`
	width: 80%;
	margin-left:auto;
	margin-right: auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-family: ${FONTS.ffPrimary};
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
	font-family: ${FONTS.ffSecundary};
	font-size: 1rem;
`;
const StyledHomeRight = styled.div``;

const StyledExplore = styled.h2`
	font-size: 3rem;
	font-weight: 100;
	padding: 90px 20px;
	background-color: ${COLORS.WHITE};
	border-radius: 80%;
	color: ${COLORS.DARK};

	&:hover{

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
