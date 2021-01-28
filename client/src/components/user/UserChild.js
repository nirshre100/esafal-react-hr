import React, { Component } from 'react';

class UserChild extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: this.props.users,
			type: false,
			msg: [],
			emailId: "",
			firstName: "",
			editing: false
		}
	}

	deleteUser() {
		this.setState({ type: false, msg: [] });
		const url = window.baseApiUrl + '/api/users/' + this.props.id;
		const self = this;
		var ajaxCall = window.ajaxCall;
		var data = { "id": this.props.id };
		window.bootbox.confirm({
			title: 'Delete ',
			message: 'Do you want to delete  ',
			buttons: {
				cancel: {
					label: '<i className="fa fa-times"></i>' + 'Cancel'
				},
				confirm: {
					label: '<i className="fa fa-check"></i>' + 'Confirm'
				}
			},
			callback(result) {
				if (result) {
					const onSuccessMethod = data => {
						self.props.deleteUserBoard(self.props.index);

					}

					let onFailMethod = (err) => {
						window.scrollTo(0, 0);
						var errArr = [];
						if (err.responseJSON && err.responseJSON.details) {
							err.responseJSON.details.forEach(function (item) {
								errArr.push(item.message);
							});
						} else if (err.responseJSON) {
							errArr.push(err.responseJSON.message);
						} else {
							errArr.push(err.responseText);
						}

						self.setState({ type: true });
						self.setState({ msg: errArr });
					}
					ajaxCall(url, 'DELETE', data, onSuccessMethod, onFailMethod)
				}
			}
		})
	}

	edit() {
		this.setState({ type: false, msg: [] })
		if (this.state.editing) {
			this.setState({ editing: false })
		} else {
			this.setState({ editing: true })
		}
	}

	renderNormal() {
		const ind = this.props.index + 1;
		//console.log(this.props.firstName);
		return (

			<tr key={ind}>
				<td>{this.props.id}</td>
				<td>{this.props.firstName}</td>
				<td>{this.props.lastName}</td>
				<td>{this.props.emailId}</td>
				<td>{this.props.userPassword}</td>
				<td>
					<a
						href="javascript:void(0)" onClick={this.edit.bind(this)}>
						Edit </a></td>
				<td>
					<a href="javascript:void(0)" onClick={this.deleteUser.bind(this)}>
						Delete
					 	</a>
				</td>
			</tr>

		)
	}

	changeStatus() {
		this.setState({ type: false, msg: [] })
		if (this.state.editing) {
			this.setState({ editing: false })
		} else {
			this.setState({ editing: true })
		}
	}

	renderForm() {
		const ind = this.props.index + 1;
		return (<tr key={ind}>
			<td>{ind}</td>
			<td>
				<input
					type="text"
					ref="firstName"
					className="form-control"
					defaultValue={this.props.firstName}
				/></td>
			<td>
				<input
					type="text"
					ref="lastName"
					className="form-control"
					defaultValue={this.props.lastName}
				/>
			</td>

			<td>
				<input
					type="text"
					ref="emailId"
					className="form-control"
					defaultValue={this.props.emailId}
				/>
			</td>



			<td>
				<input
					type="text"
					ref="userPassword"
					className="form-control"
					defaultValue={this.props.userPassword}
				/>
			</td>

			<td>
				<a
					href="javascript:void(0)" onClick={this.save.bind(this)}>
					Save </a>
			</td>
			<td>
				<a href="javascript:void(0)" onClick={this.changeStatus.bind(this)}>
					Delete
		 	</a>
			</td>
		</tr>)
	}
	getUserJson() {
		return {
			//	id: this.props.id,
			firstName: this.refs.firstName.value,
			emailId: this.refs.emailId.value,
			lastName: this.refs.lastName.value,
			userPassword: this.refs.userPassword.value,
		}
	}
	save(e) {
		e.preventDefault();
		this.setState({ type: false, msg: [] });
		const url = window.baseApiUrl + `/api/users/` + this.props.id;
		const firstName = this.refs.firstName.value;
		const emailId = this.refs.emailId.value;
		const lastName = this.refs.lastName.value;
		const userPassword = this.refs.userPassword.value;

		const self = this;
		var ajaxCall = window.ajaxCall;
		//var data = {"id":this.props.id,"title":title,"description":description};
		var data = this.getUserJson();
		const onSuccessMethod = data => {
			window.scrollTo(0, 0);
			this.setState({ editing: false });
			self.props.updateUserText(
				self.props.id,
				firstName,
				lastName,
				emailId,
				userPassword,
				self.props.index
			)
		}


		let onFailMethod = (err) => {
			window.scrollTo(0, 0);
			const errArr = []
			if (err.responseJSON && err.responseJSON.details) {
				err.responseJSON.details.forEach(item => {
					errArr.push(item.message)
				})
			} else if (err.responseJSON) {
				errArr.push(err.responseJSON.message)
			} else {
				errArr.push(err.responseText)
			}
			self.props.updateError(errArr)
		}
		ajaxCall(url, 'PUT', data, onSuccessMethod, onFailMethod)

	}
	render() {
		if (this.state.editing) {
			return this.renderForm()
		}
		return this.renderNormal()


	}

}

export default UserChild;