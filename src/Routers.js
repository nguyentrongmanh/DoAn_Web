import React from 'react';
import Login from "./components/auth/Login.js";
import Register from "./components/auth/Register";
import Children from "./components/home/Children";
import PlayGround from "./components/home/PlayGround";
import Parent from "./components/home/Parent";
import { BrowserRouter, Route } from "react-router-dom";
import Detail from './components/home/Detail.js';
const Routers = ({ users }) => {
	return (
		<BrowserRouter>
			<Route exact path="/login" component={Login} />
			<Route path="/register" component={Register} />
			<Route path="/children" component={Children} />
			<Route path="/play" render={() => (<PlayGround users={users}></PlayGround>)} />
			<Route path="/detail" component={Detail} />
			<Route path="/parent" component={Parent} />
		</BrowserRouter>
	);
}
export default Routers;
