import React, { Component } from 'react';
import base64 from 'base-64';
import utf8 from 'utf8';
import EmpList from './EmpList';
import EmpSearch from './EmpSearch';
import { getParams } from '../../common/CommonFunctions';
import { intialSize } from '../../common/infiniteScrollInitialSize';

class EnterNewEmp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			empDetailPage: false,
			empPage: false,
			empObject: {},
			users: [],
			isLoading: false,
			isDone: false,
			sizeAll: intialSize,
			searchSize: intialSize,
			cancelSize: intialSize,
			type: 'ALL',
		}
		this.searchEmp.bind(this);
		this.getAllEmp.bind(this);
	}

	componentDidMount() {
		var params = getParams();
		//console.log("params: ", params);
		if (params && params.id) {
			this.getEmpById(params.id);
		} else {
			this.getAllEmp();
		}
	}

	getEmpById = (id) => {
		const url = window.baseApiUrl + '/user/' + id;
		const self = this;

		const onSuccessMethod = data => {
			//console.log("success");
			self.setState({
				empObject: data,
				empDetailPage: true
			});
		}

		const onFailMethod = err => {
			console.log(err.responseText)
		}

		window.ajaxCall(url, 'GET', null, onSuccessMethod, onFailMethod)
	}

	getAllEmp = () => {
		const self = this;
		self.setState({ isLoading: true, type: 'ALL' });
		let sizeAll = self.state.sizeAll;
		const url = window.baseApiUrl + `/api/users`;

		var ajaxCall = window.ajaxCall;

		const onSuccessMethod = data => {
			console.log(data);
			self.setState({
				users: data,
				empPage: true,
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



	cancelEmp = (json) => {
		const self = this;
		self.setState({ isLoading: true });
		let cancelSize = json === undefined ? self.state.cancelSize : intialSize;
		const url = window.baseApiUrl + `/user?offset=0&size=${cancelSize}`;
		var ajaxCall = window.ajaxCall;
		const onSuccessMethod = data => {
			//console.log("success");
			self.setState({
				users: data.items,
				empPage: true,
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

	searchEmp(json) {
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
				this.getAllEmp();
			}

			if (type == 'search') {
				this.searchEmp(json);
			}

			if (type == 'cancel') {
				this.cancelEmp(json);
			}

		}
		else {

			if (json.firstName == '' && json.lastName == '' && json.email == '') {

				this.cancelEmp(json);
				this.setState({ sizeAll: intialSize, searchSize: intialSize, type: 'cancel' });
			}
			else {

				this.searchEmp(json);
				this.setState({ sizeAll: intialSize, cancelSize: intialSize, type: 'search' });
			}
		}
	}

	render() {

		return (
			<div className="container" >
				<EmpSearch searchEmp={this.handleEvent.bind(this)}
					cancelEmp={this.handleEvent.bind(this)} />
				<EmpList
					users={this.state.users}
					isLoading={this.state.isLoading}
					isDone={this.state.isDone}
					loadMoreItems={this.handleEvent.bind(this)} />
			</div>
		)

	}
}

export default EnterNewEmp;