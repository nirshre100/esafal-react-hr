import React, { Component } from 'react';
import base64 from 'base-64';
import utf8 from 'utf8';
import UserList from './UserList';
import UserSearch from './UserSearch';
import { getParams } from '../../common/CommonFunctions';
import { intialSize } from '../../common/infiniteScrollInitialSize';

class User extends Component {
	constructor(props) {
		super(props);
		this.state = {
			userDetailPage: false,
			userPage: false,
			userObject: {},
			users: [],
			isLoading: false,
			isDone: false,
			sizeAll: intialSize,
			searchSize: intialSize,
			cancelSize: intialSize,
			type: 'ALL',
		}
		this.searchUsers.bind(this);
		this.getAllUsers.bind(this);
	}

	componentDidMount() {
		var params = getParams();
		//console.log("params: ", params);
		if (params && params.id) {
			this.getUserById(params.id);
		} else {
			this.getAllUsers();
		}
	}

	getUserById = (id) => {
		const url = window.baseApiUrl + '/user/' + id;
		const self = this;

		const onSuccessMethod = data => {
			//console.log("success");
			self.setState({
				userObject: data,
				userDetailPage: true
			});
		}

		const onFailMethod = err => {
			console.log(err.responseText)
		}

		window.ajaxCall(url, 'GET', null, onSuccessMethod, onFailMethod)
	}

	getAllUsers = () => {
		const self = this;
		self.setState({ isLoading: true, type: 'ALL' });
		let sizeAll = self.state.sizeAll;
		const url = window.baseApiUrl + `/api/users`;

		var ajaxCall = window.ajaxCall;

		const onSuccessMethod = data => {
			console.log(data);
			self.setState({
				users: data,
				userPage: true,
				sizeAll: data.total >= data.length ? data.length + intialSize : data.total,
				isLoading: data.total === data.length ? true : false,
				isDone: data.total === data.length ? true : false
			});
		}

		const onFailMethod = err => {
			console.log(err.responseText)
		}

		ajaxCall(url, 'GET', null, onSuccessMethod, onFailMethod)
	}



	cancelUser = (json) => {
		const self = this;
		self.setState({ isLoading: true });
		let cancelSize = json === undefined ? self.state.cancelSize : intialSize;
		const url = window.baseApiUrl + `/user?offset=0&size=${cancelSize}`;
		var ajaxCall = window.ajaxCall;
		const onSuccessMethod = data => {
			//console.log("success");
			self.setState({
				users: data.items,
				userPage: true,
				cancelSize: data.total >= data.length ? data.length + intialSize : data.total,
				isLoading: data.total === data.length ? true : false,
				isDone: data.total === data.length ? true : false
			});
		}

		const onFailMethod = err => {
			console.log(err.responseText)
		}

		ajaxCall(url, 'GET', null, onSuccessMethod, onFailMethod)
	}

	searchUsers(json) {
		const self = this;
		self.setState({ isLoading: true });
		let searchSize = json === undefined ? self.state.searchSize : intialSize;
		const bytes = utf8.encode(JSON.stringify(json));
		const encoded = base64.encode(bytes);
		const url = window.baseApiUrl + `/user?offset=0&size=${searchSize}&selector=` + encoded;

		var ajaxCall = window.ajaxCall;

		const onSuccessMethod1 = data => {
			//console.log("success");
			self.setState({
				users: data.items,
				searchSize: data.total >= data.length ? data.length + intialSize : data.total,
				isLoading: data.total === data.length ? true : false,
				isDone: data.total === data.length ? true : false
			});
		}

		const onFailMethod1 = err => {
			console.log(err.responseText)
		}

		ajaxCall(url, 'GET', null, onSuccessMethod1, onFailMethod1);
	}

	handleEvent(json) {

		if (json === undefined) {
			const type = this.state.type;
			if (type == 'ALL') {
				this.getAllUsers();
			}

			if (type == 'search') {
				this.searchUsers(json);
			}

			if (type == 'cancel') {
				this.cancelUser(json);
			}

		}
		else {

			if (json.firstName == '' && json.lastName == '' && json.email == '') {

				this.cancelUser(json);
				this.setState({ sizeAll: intialSize, searchSize: intialSize, type: 'cancel' });
			}
			else {

				this.searchUsers(json);
				this.setState({ sizeAll: intialSize, cancelSize: intialSize, type: 'search' });
			}
		}
	}

	render() {

		return (
			<div className="container" >
				<UserSearch searchUsers={this.handleEvent.bind(this)}
					cancelUser={this.handleEvent.bind(this)} />
				<UserList
					users={this.state.users}
					isLoading={this.state.isLoading}
					isDone={this.state.isDone}
					loadMoreItems={this.handleEvent.bind(this)} />
			</div>
		)

	}
}

export default User;