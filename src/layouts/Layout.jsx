import { Outlet } from 'react-router-dom';
import Header from '../components/header/Header';

const Layout = () => {
	return (
		<>
			<Header />
			{/* Partes que cambian dentro de Outlet. Ver Router */}
			<Outlet />
		</>
	);
};

export default Layout;
