var args = arguments[0] || {};
var VenueID = args.VenueID;
var tabflag = Alloy.Globals.tabflag;
if(VenueID!=null){
	$.win.title = VenueID;
}

var dept = args.dept;
var deptName = args.deptName;
if(deptName!=null){
	$.win.title = deptName;
}
Alloy.Collections.webNews.fetch();
$.win.addEventListener("close", function(){ $.destroy();});

function eventClick(e) {
	var eventListController = Alloy.createController('eventDetail',{
		name: e.row.name
	});
	Alloy.Globals.tabgroup.getActiveTab().open(eventListController.getView());
};

function eventFilter(collection) {
	if(VenueID!=null){
		tabflag=1;
		return collection.where({venue:VenueID});
	}
	if(dept!=null){
		tabflag=2;
		return collection.where({organizer:dept});
	}
	
}