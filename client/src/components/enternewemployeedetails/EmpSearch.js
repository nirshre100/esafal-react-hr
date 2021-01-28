import React, { Component } from 'react';

class EmpSearch extends Component {
	constructor(props) {
		super(props);
		this.state = {
			statusList: ["PUBLISHED", "DRAFT", "BLOCKED", "APPROVED"],
			selectedStatus: ["PUBLISHED", "DRAFT", "BLOCKED", "APPROVED"],
			firstName: "",
			lastName: "",
			email: "",
			status: ""
		}

	}

	handleChange = (event) => {
		const target = event.target
		const name = target.name
		const value = target.type === 'checkbox' ? target.checked : target.value;
		var obj = {};
		obj[name] = value;
		this.setState(obj);
	}

	handleSelectChange = (event) => {
		//console.log("e:",event.target.value);
		const name = event.target.name;
		const value = event.target.value;
		var obj = [];
		if (name === "user-status") {
			(value.length) ? obj.push(value) : obj = this.state.statusList;

		}
		this.setState({
			status: value,
			selectedStatus: obj
		})

	}

	getSearchJson = () => {
		return {
			firstName: this.state.firstName ? this.state.firstName : null,
			lastName: this.state.lastName ? this.state.lastName : null,
			email: this.state.email ? this.state.email : null,
			statusList: this.state.selectedStatus
		}
	}
	cancelSearchJson = () => {
		this.setState({
			firstName: "",
			lastName: "",
			email: ""
		})
		return {
			firstName: "",
			lastName: "",
			email: ""
		}
	}

	searchEmp = () => {
		var json = this.getSearchJson();
		this.props.searchEmp(json);
	}

	cancelEmp = () => {
		var json = this.cancelSearchJson();
		this.props.cancelEmp(json);
	}


	render() {
		var statusList = this.state.statusList;
		var user = this.state;

		return (
			<div className="well">
				<fieldset>
					<div className="form-search form-group">
						<div className="col-md-12">
							<div id="legend">
								<legend>Employee Details Search</legend>
							</div>
							<div className="row">
								<div className="col-md-4">
									<div className="input-group svX3">
										<label className="input-group-addon imagetype-width" id="firstName-addon">Employee Id</label>
										<input className="form-control" type="number" id="firstName" name="firstName" value={user.firstName} onChange={this.handleChange} />
									</div>
								</div>
								<div className="col-md-4">
									<div className="input-group svX3">
										<label className="input-group-addon imagetype-width" id="lastName-addon">Employee Name</label>
										<input className="form-control" type="text" id="lastName" name="lastName" value={user.lastName} onChange={this.handleChange} />
									</div>
								</div>

							</div>
							<div className="row"></div>
							{/*<div className="row">
						<div className="col-md-4">
							<div className="input-group svX3">
								<label className="input-group-addon imagetype-width" id="status-addon">Status</label> 
								<select className="form-control" name="user-status" id="status" value={user.status} onChange={this.handleSelectChange}>
									<option value=""></option>
									{
										statusList.map((item, idx)=>{return(
											<option key={idx} value={item}>{item}</option>
										)})	
									}	
									
								</select>
							</div>
						</div>
						<div className="col-md-4">
						</div>
						<div className="col-md-4">
						</div>
					</div>*/}
						</div>
					</div>

					<div className="form-group">
						<div className="col-md-12">
							<div className="panel panel-default" />
							<button id="submit" onClick={() => this.searchEmp()}
								className="btn btn-primary">Search</button>&nbsp; &nbsp;&nbsp;
							{/* <button id="cancel" className="btn btn-primary" onClick={() => this.cancelEmp()}>Cancel</button> */}
							<a class="btn btn-primary" href="http://localhost:3000/">
								<span class="glyphicon btn-glyphicon glyphicon"></span>CLOSE</a>

						</div>
					</div>
				</fieldset >

			</div >
		);
	}

}

export default EmpSearch;
