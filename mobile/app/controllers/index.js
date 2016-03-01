$.index.open();
Alloy.Collections.webNews.fetch();
Alloy.Collections.venues.fetch();
Alloy.Collections.UserList.fetch();
//Alloy.Collections.RegList.fetch();
Alloy.Collections.department.fetch();
Alloy.Globals.venuesTab = $.venuesTab;
Alloy.Globals.department = $.department;
Alloy.Globals.mapTab = $.mapTab;
Alloy.Globals.logTab = $.logTab;
Alloy.Globals.tabflag;
Alloy.Globals.logename;
Alloy.Globals.tabgroup = $.index;

Alloy.Globals.meid=0;

Map = Alloy.Globals.Map;

if(Alloy.Globals.meid==0||Alloy.Globals.meid==null){
	var eventListController = Alloy.createController('Login');
	$.logTab.open(eventListController.getView());
}
$.logTab.addEventListener('focus',function(e) { 
	if(Alloy.Globals.meid==0||Alloy.Globals.meid==null){
		var eventListController = Alloy.createController('Login');
		$.logTab.open(eventListController.getView());
	}else {
		var eventListController = Alloy.createController('UserInfo');
	 	Alloy.Globals.tabgroup.getActiveTab().open(eventListController.getView());
	}
});


function FacultyClick(e) {
	var eventListController = Alloy.createController('eventList',{
		dept: e.row.dept
	});
	$.department.open(eventListController.getView());
};
function VenueClick(e) {
	var eventListController = Alloy.createController('eventList',{
		VenueID: e.row.VenueID
	});
	$.venuesTab.open(eventListController.getView());
};
function mapTransform(model){
	var transform=model.toJSON();
	transform.title=transform.VenueID;
	transform.subtitle=transform.VenueName;
	transform.rightButton= Titanium.UI.iPhone.SystemButton.DISCLOSURE;
	return transform;
};

function mapClicked(e){
	if(e.clicksource=='rightButton'){

		var eventListController=Alloy.createController('eventList',{VenueID:e.annotation.title});
		$.mapTab.open(eventListController.getView());
	}
};

function eventClick(e) {
	var eventDetailController = Alloy.createController('eventDetail',{
		name: e.row.name
	});

	$.webNews.open(eventDetailController.getView());
};

var lastCampusID;
function campusTransform(model) {
// Need to convert the model to a JSON object
	var transform = model.toJSON();
	if(lastCampusID==transform.CampusID)
		transform.CAMPUS="";
	else transform.CAMPUS=transform.CampusID;

	lastCampusID=transform.CampusID;
	return transform;
}

var lastFaculty;
function deptTransform(model) {
// Need to convert the model to a JSON object
	var transform = model.toJSON();
	if(lastFaculty==transform.faculty)
		transform.FAC="";
	else transform.FAC=transform.faculty;

	lastFaculty=transform.faculty;
	return transform;
}


