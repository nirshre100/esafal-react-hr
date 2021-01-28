import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import { InfiniteScroll } from '../../common/InfiniteScroll';
import UserChild from './UserChild';
import UserAddModal from './UserAddModal';


class UserList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			users: this.props.users,
			page: 1,
			pageNum: 0,
			isLoading: this.props.isLoading,
			isDone: this.props.isDone,
			firstName: undefined,
			email: undefined
		}
	}

	componentWillReceiveProps(nextProps) {
		this.setState({
			users: nextProps.users,
			page: 1,
			pageNum: 0,
			isLoading: nextProps.isLoading,
			isDone: nextProps.isDone
		})
	}

	handleChange(e) {
		this.setState({ [e.target.name]: e.target.value });
	}

	getUsersJson() {
		return {
			emailId: this.state.email,
			firstName: this.state.firstName,
			lastName: this.state.lastName,
			userPassword: this.state.userPassword,


		}
	}

	add(e) {
		e.preventDefault();
		const url = window.baseApiUrl + `/api/users`;

		const self = this;
		var ajaxCall = window.ajaxCall;

		var data = this.getUsersJson();
		const onSuccessMethod = data => {

			const arr = this.state.users;
			arr.push(data)
			console.log(arr);
			self.setState({ users: arr })
			self.setState({ aemil: "", firstName: "" });
			window.$('#ModalForm').modal('hide');
		}

		const onFailMethod = err => {
			console.log(err.responseText)
		}

		ajaxCall(url, 'POST', data, onSuccessMethod, onFailMethod)

	}

	updateUser(id, firstName, lastName, emailId, userPassword, i) {
		const arr = this.state.users;
		arr[i] = {
			id,
			firstName: firstName,
			emailId: emailId,
			lastName: lastName,
			userPassword: userPassword,
		}

		this.setState({ users: arr })
		this.setState({ msgEdit: [' Record ' + i + ' Updated  successfully '] });
		this.setState({ typeEdit: false });
	}

	removeUser(i) {
		const arr = this.state.users;
		arr.splice(i, 1)
		this.setState({ users: arr })
	}

	updateError(errArr) {
		window.scrollTo(0, 0);
		this.setState({ typeEdit: true });
		this.setState({ msgEdit: errArr });
	}

	changePage(page) {
		let page1 = page.selected + 1;
		this.setState({ page: page1, pageNum: page.selected });
	}

	render() {
		var newData = this.state.users;
		//console.log(data);
		var baseAppUrl = window.baseAppUrl;
		//var newData = data && data.length && this.state.users.concat([data]);
		//console.log(newData);

		let per_page = 50; //window.per_page;
		const pages = newData && newData.length && Math.ceil(this.state.users.length / per_page);
		const current_page = this.state.page;
		const start_offset = (current_page - 1) * per_page;
		let start_count = 0;
		return (

			<div className="well">
				<InfiniteScroll
					loadMoreItems={this.props.loadMoreItems.bind(this)}
					isLoading={this.state.isLoading}>
					<div style={{ width: '100%', margin: '0 auto' }}>
						<button
							type="button"
							className="btn btn-primary mt-10 pull-right"
							data-toggle="modal"
							data-target=".bs-example-modal-lg">
							Add New

							
                  </button>
					</div>


					{/*<input type="text" className="search" placeholder="Search for..."></input>*/}
					<table id="userTable" className="table table-bordered table-stripped results">
						<thead>
							<tr>
								<th>ID</th>
								<th>Name</th>
								<th>Last Name</th>
								<th>Email</th>
								<th>Password</th>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{newData && newData.length > 0 ? newData.map((item, idx) => {
								console.log('7')
								if (idx >= start_offset && start_count < per_page) {
									start_count++;
									return (
										<UserChild
											key={idx}
											index={idx}
											id={item.id}
											firstName={item.firstName}
											emailId={item.emailId}
											lastName={item.lastName}
											userPassword={item.userPassword}

											deleteUserBoard={this.removeUser.bind(this)}
											updateUserText={this.updateUser.bind(this)}
											updateError={this.updateError.bind(this)}
										/>
									)
								}
							})
								: null}
						</tbody>
					</table>
				</InfiniteScroll>
				<UserAddModal add ={this.add.bind(this)}
				handleChange={this.handleChange.bind(this)}
				/>
				{/* <div
					className="modal fade bs-example-modal-lg"
					tabIndex="-1"
					id="ModalForm"
					role="dialog"
					aria-labelledby="myLargeModalLabel">
					<div className="modal-dialog modal-lg" role="document">
						<form onSubmit={this.add.bind(this)}>
							<fieldset>
								<div className="modal-content panel panel-default">
									<center>
										<h3>Add New</h3>
									</center>

									<div class='panel-body'>

										<div className="row line-1">
											<div className="form-group col-md-4">
												<h5>First Name</h5>
												<input
													type="text"
													name="firstName"
													pattern="[A-Za-z ]+"
													title="JPT nagar bake input"
													className="form-control"
													id="firstName"
													value={this.state.firstName}
													onChange={this.handleChange.bind(this)}
												/>
											</div>

											<div className="form-group col-md-8">
												<h5>Last Name</h5>
												<input
													type="text"
													name="lastName"
													className="form-control"
													id="lastName"
													value={this.state.lastName}
													onChange={this.handleChange.bind(this)}
												/>
											</div>

											<div className="form-group col-md-8">
												<h5>Email</h5>
												<input
													type="email"
													name="email"
													className="form-control"
													id="email"
													required="required"
													value={this.state.email}
													onChange={this.handleChange.bind(this)}
												/>								</div>

											<div className="form-group col-md-8">
												<h5>Password</h5>
												<input
													type="password"
													name="userPassword"
													className="form-control"
													id="userPassword"
													value={this.state.userPassword}
													onChange={this.handleChange.bind(this)}
												/>
											</div>
										</div>

										<div className="center">
											<button
												type="submit"
												className="btn btn-lg button-medium"
											>
												Submit
                        </button>
											<button
												type="button"
												className="btn btn-lg button-medium second"
												data-dismiss="modal"
											>
												Close
                        </button>
										</div>
									</div>
								</div>
							</fieldset>
						</form>
					</div>
				</div> */}
			</div >
		);
	}

}

export default UserList;