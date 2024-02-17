import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FONTS } from '../../styles/fonts';
import { COLORS } from '../../styles/colors';

const StyledNavLink = styled(NavLink)`

	text-decoration: none;
	padding-bottom: 1.5rem;

	&.active {
		border-bottom: 2px solid ${COLORS.WHITE};
	}
	&:hover {
		border-bottom: 2px solid ${COLORS.HOVER};
	}
`;

const StyledWraper = styled.div`
/* background-color: lightcoral; */
	position: absolute;
	padding: 1rem 0 1rem 2rem;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
    font-family: ${FONTS.ffPrimary};
    color: ${COLORS.WHITE};
`;

const StyledLogo = styled.div``;

const StyledHr = styled.hr`
	position: absolute;
    height: 1px;
    width: 40%;
    left: 11rem;
    background-color: #fff;
	z-index: 1;
`;

const StyledMenu = styled.div`
	padding: 1.5rem 1.5rem 1.5rem 2.5rem;
	background: rgba(255, 255, 255, 0.04);
	backdrop-filter: blur(40.774227142333984px);
`;

const StyledLinks = styled.ul`
	display: flex;
	gap: 2rem;
	
`;

const StyledOptionNumber = styled.span`
    color: ${COLORS.WHITE};
    font-weight: bold;
	letter-spacing: 2px;
`;

const StyledOptionText = styled.span`
    color: ${COLORS.WHITE};
	letter-spacing: 2px;
    /* opacity: .8; */

`;

export {
	StyledNavLink,
	StyledWraper,
	StyledLogo,
	StyledMenu,
    StyledOptionNumber,
    StyledOptionText,
	StyledLinks,
	StyledHr
};
