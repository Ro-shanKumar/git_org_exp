import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './page/Home/home';
import Fetch from './page/Home/components/fetch';
import Hero from './components/hero';
import Footer from './components/footer';
function App() {
	return (
		<BrowserRouter>
			<Hero />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/:org/:repo/:old' element={<Fetch />} />

			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;