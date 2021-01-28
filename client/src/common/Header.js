import React from 'react';

const Header = () => (
	<header>
		<nav className="navbar navbar-inverse" role="navigation">
			<div className="container-fluid">
				<div className="navbar-header">
					<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbarCollapse">

						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
						<span className="icon-bar"></span>
					</button>

				</div>
				<div className="collapse navbar-collapse" id="navbarCollapse">
					<ul className="nav navbar-nav">
						<li className="nav-item"><a className="navbar-brand" href="/admin/app/pages/user"><span className="glyphicon glyphicon-user"></span> <strong>User</strong></a></li>
						<li className="nav-item dropdown">

							<a className="navbar-brand dropdown-toggle" data-toggle="dropdown" href="#"><span className="glyphicon glyphicon-user"></span><strong>ENTRIES</strong>
								<span className="caret"></span></a>
							<ul className="nav dropdown-menu" aria-labelledby="navbarDropdownMenuLink">

								{/*  ------  */}
								<li class="dropdown-submenu">
									<a class="dropdown-item dropdown-toggle" data-toggle="dropdown" href="#"><span className=""></span><strong>NEW EMPLOYEE REGISTRATION</strong> <span className="caret-right"></span> </a>

									<ul class="dropdown-menu">
										<li className="nav-item"><a className="navbar-brand" href="/admin/app/pages/newemployeeregistration"><span className=""></span><strong>REGULAR STAFF</strong></a></li>
										<li className="nav-item"><a className="navbar-brand" href="/admin/app/pages/othernewempregistration"><span className=""></span><strong>OTHER</strong></a></li>
									</ul>
								</li>


								<li class="dropdown-submenu">
									<a class="dropdown-item dropdown-toggle" data-toggle="dropdown" href="#"><span className=""></span><strong>ATTENDENCE ENTRY</strong> <span className="caret-right"></span> </a>

									<ul class="dropdown-menu">
										<li className="nav-item"><a className="navbar-brand" href="/admin/app/pages/groupattendance"><span className=""></span><strong>Group Attendance</strong></a></li>
										<li className="nav-item"><a className="navbar-brand" href="/admin/app/pages/singleattendance"><span className=""></span><strong>Single Attendance</strong></a></li>
									</ul>
								</li>



								<li class="dropdown-submenu">
									<a class="dropdown-item dropdown-toggle" data-toggle="dropdown" href="#"><span className=""></span><strong>SALARY ENTRY</strong> <span className="caret-right"></span> </a>

									<ul class="dropdown-menu">
										<li className="nav-item"><a className="navbar-brand" href="/admin/app/pages/regularsalary"><span className=""></span><strong>REGULAR EMPLOYEE</strong></a></li>
										<li className="nav-item"><a className="navbar-brand" href="/admin/app/pages/othersalary"><span className=""></span><strong>OTHERS</strong></a></li>
										<li className="nav-item"><a className="navbar-brand" href="/admin/app/pages/singleattendance"><span className=""></span><strong>SINGLE PAYMENT ENTRY</strong></a></li>
									</ul>
								</li>
								<li><a className="navbar-brand dropdown-item" href="/admin/app/pages/leaveentry"><span className="glyphicon glyphicon-list-alt"></span><strong> LEAVE ENTRY</strong></a></li>
								<li><a className="navbar-brand dropdown-item" href="/admin/app/pages/travelentry"><span className="glyphicon glyphicon-plane"></span><strong>TRAVEL ENTRY</strong></a></li>
								<li><a className="navbar-brand dropdown-item" href="/admin/app/pages/trainingentry"><span className="glyphicon glyphicon-th-large"></span><strong>TRAINING DETAILS</strong></a></li>


								<li><a className="navbar-brand dropdown-item" href="/admin/app/pages/dashainallowance"><span className=""></span><strong>DASHAIN ALLOWANCE ENTRY</strong></a></li>
								<li><a className="navbar-brand dropdown-item" href="/admin/app/pages/leaveencashmententry"><span className=""></span><strong>LEAVE ENCASHMENT ENTRY</strong></a></li>
								<li><a className="navbar-brand dropdown-item" href="/admin/app/pages/bonuspaymentsheet"><span className=""></span><strong>BONUS PAYMENT ENTRY</strong></a></li>
								<li><a className="navbar-brand dropdown-item" href="/admin/app/pages/language"><span className=""></span><strong>RESIGNED ENTRY</strong></a></li>
								<li><a className="navbar-brand dropdown-item" href="/admin/app/pages/language"><span className=""></span><strong>CONTRACT TERMINATE/EXTENSION ENTRY</strong></a></li>
								<li><a className="navbar-brand dropdown-item" href="/admin/app/pages/language"><span className=""></span><strong>PROMOTION/TRANSFER ENTRY</strong></a></li>
								<li><a className="navbar-brand dropdown-item" href="/admin/app/pages/language"><span className=""></span><strong>UNREGISTERED EMPLOYEE</strong></a></li>

							</ul>
						</li>

						<li className="nav-item dropdown">
							<a className="navbar-brand dropdown-toggle" data-toggle="dropdown" href="#"><span className="glyphicon glyphicon-equalizer"></span><strong>SET UP</strong>
								<span className="caret"></span></a>
							<ul className="nav dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								<li><a className="navbar-brand dropdown-item" href="/admin/app/pages/area"><span className="glyphicon glyphicon-list-alt"></span><strong>NEW AREA NAME</strong></a></li>
								<li><a className="navbar-brand dropdown-item" href="/admin/app/pages/branchname"><span className="glyphicon glyphicon-asterisk"></span><strong>NEW BRANCH NAME</strong></a></li>
								<li><a className="navbar-brand dropdown-item" href="/admin/app/pages/department"><span className="glyphicon glyphicon-lamp"></span><strong>NEW DEPARTMENT</strong></a></li>
								<li><a className="navbar-brand dropdown-item" href="/admin/app/pages/designation"><span className="glyphicon glyphicon-picture"></span><strong>NEW DESIGNATION</strong></a></li>
								<li><a className="navbar-brand dropdown-item" href="/admin/app/pages/createlevel"><span className="glyphicon glyphicon-globe"></span><strong>NEW LEVEL</strong></a></li>
								<li><a className="navbar-brand dropdown-item" href="/admin/app/pages/createleavetyp"><span className="glyphicon glyphicon-list-alt"></span><strong>NEW LEAVE TYPE</strong></a></li>
								<li><a className="navbar-brand dropdown-item" href="/admin/app/pages/enternewemployeedetails"><span className="glyphicon glyphicon-list-alt"></span><strong>NEW EMPLOYEE INFORMATION</strong></a></li>
								<li><a className="navbar-brand dropdown-item" href="/admin/app/pages/remunerationtaxparameter"><span className="glyphicon glyphicon-list-alt"></span><strong>SET TAX PARAMETER</strong></a></li>

							</ul>
						</li>

						<li className="nav-item dropdown">
							<a className="navbar-brand dropdown-toggle" data-toggle="dropdown" href="#"><span className="glyphicon glyphicon-edit"></span><strong>EDIT/CHANGES</strong>
								<span className="caret"></span></a>
							<ul className="nav dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								<li><a className="navbar-brand dropdown-item" href="/admin/app/pages/popularCity"><span className="glyphicon glyphicon-list-alt"></span><strong> Popular City</strong></a></li>
								<li><a className="navbar-brand dropdown-item" href="/admin/app/pages/badge"><span className="glyphicon glyphicon-asterisk"></span><strong> Badge</strong></a></li>
								<li><a className="navbar-brand dropdown-item" href="/admin/app/pages/amenity"><span className="glyphicon glyphicon-lamp"></span><strong> Amenity</strong></a></li>
								<li><a className="navbar-brand dropdown-item" href="/admin/app/pages/propertyType"><span className="glyphicon glyphicon-picture"></span><strong> Property Type</strong></a></li>
								<li><a className="navbar-brand dropdown-item" href="/admin/app/pages/country"><span className="glyphicon glyphicon-globe"></span><strong> Country</strong></a></li>
								<li><a className="navbar-brand dropdown-item" href="/admin/app/pages/language"><span className="glyphicon glyphicon-list-alt"></span><strong> Language</strong></a></li>
							</ul>
						</li>

						<li className="nav-item dropdown">
							<a className="navbar-brand dropdown-toggle" data-toggle="dropdown" href="#"><span className="glyphicon glyphicon-tasks"></span><strong>REPORTS</strong>
								<span className="caret"></span></a>
							<ul className="nav dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								<li><a className="navbar-brand dropdown-item" href="/admin/app/pages/popularCity"><span className="glyphicon glyphicon-list-alt"></span><strong> Popular City</strong></a></li>
								<li><a className="navbar-brand dropdown-item" href="/admin/app/pages/badge"><span className="glyphicon glyphicon-asterisk"></span><strong> Badge</strong></a></li>
								<li><a className="navbar-brand dropdown-item" href="/admin/app/pages/amenity"><span className="glyphicon glyphicon-lamp"></span><strong> Amenity</strong></a></li>
								<li><a className="navbar-brand dropdown-item" href="/admin/app/pages/propertyType"><span className="glyphicon glyphicon-picture"></span><strong> Property Type</strong></a></li>
								<li><a className="navbar-brand dropdown-item" href="/admin/app/pages/country"><span className="glyphicon glyphicon-globe"></span><strong> Country</strong></a></li>
								<li><a className="navbar-brand dropdown-item" href="/admin/app/pages/language"><span className="glyphicon glyphicon-list-alt"></span><strong> Language</strong></a></li>
							</ul>
						</li>

						<li className="nav-item dropdown">
							<a className="navbar-brand dropdown-toggle" data-toggle="dropdown" href="#"><span className="glyphicon glyphicon-wrench"></span><strong>UTILITIES</strong>
								<span className="caret"></span></a>
							<ul className="nav dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								<li><a className="navbar-brand dropdown-item" href="/admin/app/pages/popularCity"><span className="glyphicon glyphicon-list-alt"></span><strong> Popular City</strong></a></li>
								<li><a className="navbar-brand dropdown-item" href="/admin/app/pages/badge"><span className="glyphicon glyphicon-asterisk"></span><strong> Badge</strong></a></li>
								<li><a className="navbar-brand dropdown-item" href="/admin/app/pages/amenity"><span className="glyphicon glyphicon-lamp"></span><strong> Amenity</strong></a></li>
								<li><a className="navbar-brand dropdown-item" href="/admin/app/pages/propertyType"><span className="glyphicon glyphicon-picture"></span><strong> Property Type</strong></a></li>
								<li><a className="navbar-brand dropdown-item" href="/admin/app/pages/country"><span className="glyphicon glyphicon-globe"></span><strong> Country</strong></a></li>
								<li><a className="navbar-brand dropdown-item" href="/admin/app/pages/leavestatusview"><span className="glyphicon glyphicon-list-alt"></span><strong>Leave Status View</strong></a></li>
							</ul>
						</li>
					</ul>
					<ul className="nav navbar-nav navbar-right">
						<a className="navbar-brand" href="/admin/app/pages/logout"><span className="glyphicon glyphicon-off"></span> Logout</a>
					</ul>
				</div>
			</div>
		</nav>
	</header>
)

export default Header;