import React, { Component } from 'react';

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: "",
			password: "",
			isAdminPage: "",
			displayErr: false,
			disabled: false
		}

		this.doLogin.bind(this);
		this.handleChange.bind(this);
	}

	handleChange = (event) => {
		var obj = {};
		obj[event.target.name] = event.target.value;
		this.setState(obj);
	}

	doLogin = () => {
		this.setState({
			disabled: true
		});

		// const url = window.baseApiUrl + '/login';
		// var ajaxCall = window.ajaxCall;

		// var data = {
		// 	email: this.state.email,
		// 	password: this.state.password,
		// 	isAdminPage: true
		// };

		// const onSuccessMethod = data => {
		//console.log("success");

		if (this.state.email === 'admin' && this.state.password === 'admin') {
			window.location.href = "/admin/app/pages/user";
		} else {
			this.setState({
				disabled: false,
				displayErr: true
			});

		}
		//}

		// const onFailMethod = err => {
		// 	this.setState({
		// 		disabled:false,
		//         displayErr:true
		// 	});
		// 	console.log(err.responseText)
		// }

		// ajaxCall(url, 'POST', data, onSuccessMethod, onFailMethod)
	}


	render() {
		return (
			<div>
				<div className="container">
					<fieldset>
						<div className="form-group"></div>
					</fieldset>
				</div>
				<div className="container">
					<fieldset>
						<div className="form-group"></div>
					</fieldset>
				</div>
				<div className="container">
					<div className="form-narrow form-horizontal">
						<fieldset>
							<div className="well">
								<div className="form-group">
									<div className="col-md-12">
										<div id="success-message" className="alert alert-danger" style={(this.state.displayErr) ? { "display": "block" } : { "display": "none" }}>
											Invalid user name and/or password
</div>

										<legend>
											<center><span className="glyphicon glyphicon-cog"></span>Administrator Login</center>
										</legend>
										<div className="row" align="center">
											<div className="col-md-4">

											</div>
											<div className="col-md-4">
												<div className="input-group svX3">
													<label className="input-group-addon imagetype-width" id="email-addon">Username</label>
													<input className="form-control" type="text" name="email" value={this.state.email} onChange={this.handleChange} />
												</div>
											</div>
											<div className="col-md-4">

											</div>
										</div>
										<div className="row" align="center">
											<div className="col-md-4">

											</div>
											<div className="col-md-4">
												<div className="input-group svX3">
													<label className="input-group-addon imagetype-width" id="password-addon">Password</label>
													<input className="form-control" type="password" name="password" value={this.state.password} onChange={this.handleChange} />
												</div>
											</div>
											<div className="col-md-4">

											</div>
										</div>
									</div>
								</div>
								<div className="form-group">
									<div className="col-md-4">
									</div>
									<div className="col-md-4" align="center">
										<button id="submit" type="submit" value="Submit"
											className="btn btn-primary" disabled={this.state.disabled} onClick={this.doLogin}>Login</button>
										{/*<button id="cancel" className="btn cancel">Cancel</button>*/}
									</div>
									<div className="col-md-4">
									</div>
								</div>
							</div>
						</fieldset>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;