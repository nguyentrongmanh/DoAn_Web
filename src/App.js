import React from 'react';
import Login from "./components/auth/Login.js";
import Register from "./components/auth/Register";
import Children from "./components/home/Children";
import PlayGround from "./components/home/PlayGround";
import { BrowserRouter, Route } from "react-router-dom";
import "./styles/index.css";
import 'antd/dist/antd.css';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";	

const cache = new InMemoryCache();
const client = new ApolloClient({
	uri: 'http://localhost:5000/graphql'
});

function App() {
	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<Route exact path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/children" component={Children} />
				<Route path="/playgroud" component={PlayGround} />
			</BrowserRouter>
		</ApolloProvider>
	);
}

export default App;
