
export const getParams = () => {
	var params={};
	window.location.search
	  .replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str,key,value) {
	    params[key] = value;
	  }
	);
	//console.log("params1: ",params)
	return params;
}

export const getMedia = (id) => {
	if(id){
		return window.baseApiUrl+'/media/'+id+'/data';
	}else{
		return window.baseApiUrl+'/media/dummy.png';
	}
}

export const getReactSelectOption = (list) => {
	var options = [];
	list.map(
		(item, idx) => {
			var obj ={};
			obj.value = item;
			obj.label = item;
			return options.push(obj);
		}
	);
	return options;
}

export const validData = (value) => {
	if(value){
		if(value.constructor === Object){
			if(Object.keys(value).length) {
				return true;
			} else {
				return false;
			}
		}
		if(value.constructor === Array){
			if(value.length) { 
				return true;
			} else {
				return false;
			}
		}
		return true;
	}else{
		return false;
	}
}
