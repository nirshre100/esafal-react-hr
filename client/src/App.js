import React, { Component } from 'react';
import Header from './common/Header';
import Main from './common/Main';
import Footer from './common/Footer';
import Login from './common/Login';

const LoggedInApp = () => (
	<div>
		<Header />
		<Main />
		<Footer />
	</div>
)

const LoggedOutApp = () => (
	<div>
		<Login />
	</div>
)

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			login: null
		}

		this.getScope.bind(this);
	}

	componentDidMount() {
		this.getScope();

	}

	getScope = () => {
		const lastSegment = window.location.pathname.split("/").pop();
		if (lastSegment === 'login') {
			this.setState({
				login: false
			});
		} else {
			this.setState({
				login: true
			});
		}


	}

	render() {
		console.log(this.state.login);
		if (this.state.login === true) {
			return (
				<LoggedInApp />
			);
		} else if (this.state.login === false) {
			return (
				<LoggedOutApp />
			);
		} else {
			return (null);
		}

	}
}

export default App;
