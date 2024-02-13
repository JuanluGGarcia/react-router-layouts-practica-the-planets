import { PRINCIPAL_MENU } from '../../constants/menu';
import {
	StyledLinks,
	StyledLogo,
	StyledMenu,
	StyledNavLink,
	StyledWraper,
	StyledHr,
	StyledOptionNumber,
	StyledOptionText
} from './style';

const Header = () => {
	return (
		<>
			<StyledWraper>
				<StyledLogo>
					<img src='/assets/shared/logo.svg' alt='Logo' />
				</StyledLogo>
				<StyledHr />
				<StyledMenu>
					<nav>
						<StyledLinks>
							{PRINCIPAL_MENU.map(menuItem => (
								<li key={menuItem.id}>
									<StyledNavLink to={menuItem.path}>
										<StyledOptionNumber>{menuItem.optionNumber}</StyledOptionNumber> <StyledOptionText>{menuItem.optionText}</StyledOptionText>
									</StyledNavLink>
								</li>
							))}
						</StyledLinks>
					</nav>
				</StyledMenu>
			</StyledWraper>
		</>
	);
};

export default Header;
