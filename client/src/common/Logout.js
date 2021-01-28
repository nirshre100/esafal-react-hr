import React, {Component} from 'react';

class Logout extends Component {
	constructor(props){
		super(props);
		
		this.state ={
		}
	}
	
	componentDidMount(){
		this.doLogout();

	}
	
	doLogout = () => {
		//const url = window.baseApiUrl + '/logout';
		//var ajaxCall = window.ajaxCall;
		
		//const onSuccessMethod = data => {
			//console.log("success");
			window.location.href = "/admin/app/login";
			
		//}
		
		//const onFailMethod = err => {
			//console.log(err.responseText)
		//}
		
		//ajaxCall(url, 'DELETE', null, onSuccessMethod, onFailMethod)
	}
	
	render(){
		return(<div></div>)
	}
}
	
export default Logout;
