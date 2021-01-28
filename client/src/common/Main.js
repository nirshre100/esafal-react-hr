import React from 'react';
import { Switch, Route } from 'react-router-dom';
import User from '../components/user/User';
import NewMemberEntry from '../components/newmember/NewMemberEntry';
import MemberEditfrom from '../components/memberEdit/MemberEditfrom';
import BranchName from '../components/branchname/BranchName';
import NewArea from '../components/newarea/NewArea';
import NewDepartment from '../components/department/NewDepartment';
import CreateDesignation from '../components/designation/CreateDesignation';
import CreateNewLevel from '../components/createlevel/CreateNewLevel';
import CreateNewLeavetyp from '../components/createleavetyp/CreateNewLeavetype';

import EnterNewEmp from '../components/enternewemployeedetails/EnterNewEmp';





import RemunerationTaxParameter from '../components/remunerationtaxparameter/RemunerationTaxParameter';
import NewEmployeeRegistration from '../components/newemployeeregistration/NewEmployeeRegistration';
import OtherNewRegistration from '../components/othernewempregistration/OtherNewRegistration';
import GroupAttendance from '../components/attendance/GroupAttendance';
import SingleAttendance from '../components/attendance/SingleAttendance';
import LeaveEntry from '../components/leaveentry/LeaveEntry';
import LeaveStatusView from '../components/leaveentry/LeaveStatusView';
import TravelEntry from '../components/travelentry/TravelEntry';
import TrainingEntry from '../components/trainingentry/TrainingEntry';
import RegularSalary from '../components/salary/RegularSalary';
import OtherSalary from '../components/salary/OtherSalary';
import DashainAllowanceEntry from '../components/dashainallowance/DashainAllowanceEntry';
import LeaveEnCashMententry from '../components/leaveencashmententry/LeaveEnCashMententry';
import BonusPaymentSheet from '../components/bonuspaymentsheet/BonusPaymentSheet';











import Logout from './Logout';


const Main = () => (
	<main>
		<Switch>
			<Route path='/admin/app/pages/logout' component={Logout} />
			<Route path='/admin/app/pages/user' component={User} />
			<Route path='/admin/app/pages/popularCity' component={User} />
			<Route path='/admin/app/pages/niraj' component={NewMemberEntry} />
			<Route path='/admin/app/pages/ram' component={MemberEditfrom} />
			<Route path='/admin/app/pages/area' component={NewArea} />
			<Route path='/admin/app/pages/branchname' component={BranchName} />
			<Route path='/admin/app/pages/department' component={NewDepartment} />
			<Route path='/admin/app/pages/designation' component={CreateDesignation} />
			<Route path='/admin/app/pages/createlevel' component={CreateNewLevel} />
			<Route path='/admin/app/pages/createleavetyp' component={CreateNewLeavetyp} />

			<Route path='/admin/app/pages/enternewemployeedetails' component={EnterNewEmp} />


			<Route path='/admin/app/pages/remunerationtaxparameter' component={RemunerationTaxParameter} />
			<Route path='/admin/app/pages/newemployeeregistration' component={NewEmployeeRegistration} />
			<Route path='/admin/app/pages/othernewempregistration' component={OtherNewRegistration} />
			<Route path='/admin/app/pages/groupattendance' component={GroupAttendance} />
			<Route path='/admin/app/pages/singleattendance' component={SingleAttendance} />
			<Route path='/admin/app/pages/leaveentry' component={LeaveEntry} />
			<Route path='/admin/app/pages/leavestatusview' component={LeaveStatusView} />
			<Route path='/admin/app/pages/travelentry' component={TravelEntry} />
			<Route path='/admin/app/pages/trainingentry' component={TrainingEntry} />
			<Route path='/admin/app/pages/regularsalary' component={RegularSalary} />
			<Route path='/admin/app/pages/othersalary' component={OtherSalary} />
			<Route path='/admin/app/pages/dashainallowance' component={DashainAllowanceEntry} />
			<Route path='/admin/app/pages/leaveencashmententry' component={LeaveEnCashMententry} />
			<Route path='/admin/app/pages/bonuspaymentsheet' component={BonusPaymentSheet} />

		</Switch>
	</main>
)

export default Main;
