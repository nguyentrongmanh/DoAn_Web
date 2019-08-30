import React from 'react';
import Login from "./components/auth/Login.js";
import Register from "./components/auth/Register";
import Children from "./components/home/Children";
import PlayGround from "./components/home/PlayGround";
import { BrowserRouter, Route } from "react-router-dom";
import "./styles/index.css";
import 'antd/dist/antd.css';
import ApolloClient from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { InMemoryCache } from "apollo-cache-inmemory";
import { getMainDefinition } from 'apollo-utilities';
import { split, from } from "apollo-link";
import { setContext } from "apollo-link-context";
import Detail from './components/home/Detail.js';

const cache = new InMemoryCache();

const httpLink = new HttpLink({
	uri: "http://localhost:4000",
	options: {
		reconnect: true
	}
});

const wsLink = new WebSocketLink({
	uri: "ws://localhost:4000/graphql",
	options: {
		reconnect: true
	}
});

const link = split(
	// split based on operation type
	({ query }) => {
		const definition = getMainDefinition(query);
		return (
			definition.kind === 'OperationDefinition' &&
			definition.operation === 'subscription'
		);
	},
	wsLink,
	httpLink,
);



const client = new ApolloClient({
	link,
	cache,
});
function App() {
	console.log(client);
	console.log(httpLink);
	return (
		<ApolloProvider client={client}>
			<BrowserRouter>
				<Route exact path="/login" component={Login} />
				<Route path="/register" component={Register} />
				<Route path="/children" component={Children} />
				<Route path="/playgroud" component={PlayGround} />
				<Route path="/detail" component={Detail} />
			</BrowserRouter>
		</ApolloProvider>
	);
}

export default App;
