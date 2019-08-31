import React from 'react';
import "./styles/index.css";
import 'antd/dist/antd.css';
import Apollo from './ApolloClient';
import WithSubscription from './WithSubscription';
function App() {
	return (
		<Apollo>
			<WithSubscription></WithSubscription>
		</Apollo>
	);
}

export default App;
