import React from 'react';
import ApolloClient from "apollo-client";
import { ApolloProvider } from "@apollo/react-hooks";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { InMemoryCache } from "apollo-cache-inmemory";
import { getMainDefinition } from 'apollo-utilities';
import { split } from "apollo-link";
const cache = new InMemoryCache();

var serverLink = process.env.SERVER_LINK || "https://iot-vantay-server.herokuapp.com:27949/";
var serverWSLink = process.env.SERVER_WS_LINK || "ws://localhost:5000/graphql";

const httpLink = new HttpLink({
	uri: serverLink,
	options: {
		reconnect: true
	}
});

const wsLink = new WebSocketLink({
	uri: serverWSLink,
	options: {
		reconnect: true
	}
});

const link = split(
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
const ApolloComponent = ({ children }) => {
	return (
		<ApolloProvider client={client}>
			{children}
		</ApolloProvider>
	);
}

export default ApolloComponent;
