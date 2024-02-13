import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FONTS } from '../../styles/fonts';
import { COLORS } from '../../styles/colors';

const StyledNavLink = styled(NavLink)`
	text-decoration: none;
	padding-bottom: 1rem;

	/* con active podemos hacer destacar la parte del nav que está activa. Active es una propiedad de NavLink */
	&.active {
		/* color: green; */
		border-bottom: 2px solid ${COLORS.WHITE};
	}
`;

const StyledWraper = styled.div`
	padding: 2rem 0 3rem 2rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
    font-family: ${FONTS.ffPrimary};
    color: ${COLORS.WHITE};
`;

const StyledLogo = styled.div``;

const StyledHr = styled.hr`
    height: 1px;
    width: 40%;
    margin-left: 2rem;
    background-color: #fff;
`;

const StyledMenu = styled.div`
	padding: 1rem 5rem;
	/* background-color: ${COLORS.HOVER}; */
    opacity: .9;
`;

const StyledLinks = styled.ul`
	display: flex;
	gap: 2rem;
	/* justify-content: center;
    align-items: center; */
`;

const StyledOptionNumber = styled.span`
    color: ${COLORS.WHITE};
    font-weight: bold;
`;

const StyledOptionText = styled.span`
    color: ${COLORS.WHITE};
    opacity: .5;

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
