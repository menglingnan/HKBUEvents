var args = arguments[0] || {};
Alloy.Collections.UserList.fetch();
//Alloy.Collections.RegList.fetch();



function userFilter(collection) {
	var userid=Alloy.Globals.meid;
	console.log("meid"+userid);
	return collection.where({id:userid});
}


function regedEvent(e){
	var eventDetailController = Alloy.createController('MyEvents');
	Alloy.Globals.tabgroup.getActiveTab().open(eventDetailController.getView());
}

function logout(e){
	Alloy.Globals.meid=0;
	var eventDetailController = Alloy.createController('Login');
	Alloy.Globals.tabgroup.getActiveTab().open(eventDetailController.getView());
}