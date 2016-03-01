var args = arguments[0] || {};

Alloy.Collections.UserList.fetch();
Alloy.Collections.regList.fetch();
Alloy.Collections.webNews.fetch();

//$.win.addEventListener("close", function(){ $.destroy();});

function eventClick(e) {
	var eventListController = Alloy.createController('eventDetail',{
		name: e.row.name
	});
	Alloy.Globals.tabgroup.getActiveTab().open(eventListController.getView());
};

function myEventFilter(collection) {
	console.log(Alloy.Globals.meid);
	
	var reglist = Alloy.Collections.regList.fetch();
	
	// var l = reglist.length;
	// console.log(reglist[0].get('eid'));
	// var regevent=[];
	// for(var i = 0; i < l; i++){
		// regevent = regevent.concat(collection.where({id:reglist[i].get('eid')}));
	// }
	// console.log(JSON.stringify(regevent));
	return reglist;
}