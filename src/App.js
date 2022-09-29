import React from "react";
import "./stylesheets/config.scss";
import Navigation from "./components/Navigation";
import Landing from "./components/Landing";
import ContactPage from "./components/ContactPage";
import Blog from "./components/Blog";
import Login, { LogOut, SignUp } from "./components/Auth";
import { Routes, Route } from "react-router-dom";
import Private from "./components/PrivateRoute";
import { useDispatch } from "react-redux";
import { loadUser } from "./redux/actions";
import Footer from "./components/Footer";
import Admin from "./components/Admin";
import { useEffect } from "react";

const Home = () => (
	<React.Fragment>
		<Landing />
		<Blog />
		<ContactPage show={false} />
	</React.Fragment>
);

function App() {
	const dispatch = useDispatch();
	React.useEffect(() => {
		dispatch(loadUser());
	}, []);
	return (
		<div className='App'>
			<Navigation />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route path='/blogs' element={<Blog />} />
				<Route path='/contact' element={<ContactPage show={true} />} />
				<Route path='/auth/login' element={<Login />} />
				<Route path='/auth/logout' element={<LogOut />} />
				<Route path='/auth/admin' element={<Admin />} />
			</Routes>
			<br />
			<br />
			<Footer />
		</div>
	);
}

export default App;
