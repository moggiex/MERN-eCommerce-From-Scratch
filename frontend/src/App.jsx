// Routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';

// React Bootstrap Components
import { Container } from 'react-bootstrap';

// Extra CSS
import './index.css';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Error404 from './screens/Error404';

const App = () => {
	return (
		<Router>
			<Header />
			<Container>
				<main className='py-3'>
					<Routes>
						<Route path='/' element={<HomeScreen />} />
						<Route path='product/:id' element={<ProductScreen />} />
						<Route path='/*' element={<Error404 />} />
					</Routes>
				</main>
			</Container>
			<Footer />
		</Router>
	);
};

export default App;
