import React, { Component } from 'react';

class EmpAddModal extends Component {
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
									<h3>Enter New Employee Details</h3>
									<div className="panel panel-default" />
								</center>

								<div class='panel-body'>

									<div className="row line-1">

										<div className="form-group col-md-3">
											<h5>Employee Id</h5>
											<input
												type="number"
												name="EmpId"
												className="form-control"
												id="EmpId"
												value={this.state.EmpId}
												onChange={this.props.handleChange}
											/>
										</div>

										<div className="form-group col-md-3">
											<h5>Employee Name</h5>
											<input
												type="text"
												name="EmpName"
												pattern="[A-Za-z ]+"
												title="JPT nagar bake input"
												className="form-control"
												id="EmpName"
												value={this.state.EmpName}
												onChange={this.props.handleChange}
											/>
										</div>


										<div className="form-group col-md-3">
											<h5>Gender</h5>
											<input
												type="text"
												name="Gender"
												className="form-control"
												id="Gender"
												value={this.state.Gender}
												onChange={this.props.handleChange}
											/>
										</div>


<div>
<input type ="file"
name="photo"
className="form-control"
id="photo"
/>
</div>



										

										<div className="form-group col-md-3">
											<h5>Marital Status</h5>
											<input
												type="text"
												name="MaritalStatus"
												className="form-control"
												id="MaritalStatus"
												value={this.state.MaritalStatus}
												onChange={this.props.handleChange}
											/>
										</div>

										<div className="form-group col-md-3">
											<h5>Permanent Address</h5>
											<input
												type="text"
												name="PerAddress"
												className="form-control"
												id="PerAddress"
												value={this.state.PerAddress}
												onChange={this.props.handleChange}
											/>
										</div>

										<div className="form-group col-md-3">
											<h5>Current Address</h5>
											<input
												type="text"
												name="CurAddress"
												className="form-control"
												id="CurAddress"
												value={this.state.CurAddress}
												onChange={this.props.handleChange}
											/>
										</div>

										<div className="form-group col-md-3">
											<h5>Personal Contact No.</h5>
											<input
												type="text"
												name="PerContactNo"
												className="form-control"
												id="PerContactNo"
												value={this.state.PerContactNo}
												onChange={this.props.handleChange}
											/>
										</div>

										<div className="form-group col-md-3">
											<h5>Residence Contact No.</h5>
											<input
												type="text"
												name="ResContNo"
												className="form-control"
												id="ResContNo"
												value={this.state.ResContNo}
												onChange={this.props.handleChange}
											/>
										</div>

										<div className="form-group col-md-3">
											<h5>Date of Birth AD</h5>
											<input
												type="text"
												name="DOBad"
												className="form-control"
												id="DOBad"
												value={this.state.DOBad}
												onChange={this.props.handleChange}
											/>
										</div>

										<div className="form-group col-md-3">
											<h5>Date of Birth BS</h5>
											<input
												type="text"
												name="DOBbs"
												className="form-control"
												id="DOBbs"
												value={this.state.DOBbs}
												onChange={this.props.handleChange}
											/>
										</div>

										<div className="form-group col-md-3">
											<h5>Office email</h5>
											<input
												type="email"
												name="OffEmail"
												className="form-control"
												id="OffEmail"
												//required="required"
												value={this.state.OffEmail}
												onChange={this.props.handleChange}
											/>
										</div>

										<div className="form-group col-md-3">
											<h5>Personal email</h5>
											<input
												type="email"
												name="PerEmail"
												className="form-control"
												id="PerEmail"
												//required="required"
												value={this.state.PerEmail}
												onChange={this.props.handleChange}
											/>
										</div>


										<div className="form-group col-md-3">
											<h5>Employee Qualification</h5>
											<input
												type="text"
												name="EmpQualification"
												className="form-control"
												id="EmpQualification"
												value={this.state.EmpQualification}
												onChange={this.props.handleChange}
											/>
										</div>

										<div className="form-group col-md-3">
											<h5>Citizenship No.</h5>
											<input
												type="text"
												name="CitizenNo"
												className="form-control"
												id="CitizenNo"
												value={this.state.CitizenNo}
												onChange={this.props.handleChange}
											/>
										</div>

										<div className="form-group col-md-3">
											<h5>Citizenship District</h5>
											<input
												type="text"
												name="CitizenDistrict"
												className="form-control"
												id="CitizenDistrict"
												value={this.state.CitizenDistrict}
												onChange={this.props.handleChange}
											/>
										</div>


										<div className="form-group col-md-3">
											<h5>Father's Name</h5>
											<input
												type="text"
												name="FatherName"
												className="form-control"
												id="FatherName"
												value={this.state.FatherName}
												onChange={this.props.handleChange}
											/>
										</div>


										<div className="form-group col-md-3">
											<h5>Grand Father Name</h5>
											<input
												type="text"
												name="GrandFatherName"
												className="form-control"
												id="GrandFatherName"
												value={this.state.GrandFatherName}
												onChange={this.props.handleChange}
											/>
										</div>


										<div className="form-group col-md-3">
											<h5>Spouce Name</h5>
											<input
												type="text"
												name="SpouceName"
												className="form-control"
												id="SpouceName"
												value={this.state.SpouceName}
												onChange={this.props.handleChange}
											/>
										</div>

										<div className="form-group col-md-3">
											<h5>Spouce Relation</h5>
											<input
												type="text"
												name="SpouceRelation"
												className="form-control"
												id="SpouceRelation"
												value={this.state.SpouceRelation}
												onChange={this.props.handleChange}
											/>
										</div>
									</div>

									<div className="center">
										<button
											type="submit"
											className="btn btn-primary"
										>
											Submit
                        </button>&nbsp; &nbsp; &nbsp; &nbsp;
										<button
											type="button"
											className="btn btn-primary"
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

export default EmpAddModal;