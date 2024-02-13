import { BrowserRouter } from 'react-router-dom';
import Router from './Router/Router';
import { GlobalStyles } from './styles/global-styles';

const App = () => {
	return (
		<BrowserRouter>
			<GlobalStyles />
			<Router />
		</BrowserRouter>
	);
};

export default App;
