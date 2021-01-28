import React, { Component } from 'react';

class UserAddModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
		}
	}

	render() {

		return (
			<div
				className="modal fade bs-example-modal-lg"
				tabIndex="-1"
				id="ModalForm"
				role="dialog"
				aria-labelledby="myLargeModalLabel">
				<div className="modal-dialog modal-lg" role="document">
					<form onSubmit={this.props.add}>
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
												onChange={this.props.handleChange}
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
												onChange={this.props.handleChange}
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
												onChange={this.props.handleChange}
											/>								</div>

										<div className="form-group col-md-8">
											<h5>Password</h5>
											<input
												type="password"
												name="userPassword"
												className="form-control"
												id="userPassword"
												value={this.state.userPassword}
												onChange={this.props.handleChange}
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
			</div>

		);
	}

}

export default UserAddModal;