
var args = arguments[0] || {};
var name = args.name;
Alloy.Collections.webNews.fetch();
Alloy.Collections.regList.fetch();
Alloy.Globals.eventDetailWin = $.win;
if(name!=null){
	$.win.title = name;
	var eid = Alloy.Collections.webNews.where({name:name})[0].get('id');
	$.regButton.eid = eid;
	
	if(Alloy.Globals.meid==0)
		$.regButton.title="Login";
	else {
		var reg = Alloy.Collections.regList.where({name:name});
		console.log(name);
		if(reg.length==1)
		$.regButton.title="Registered";
		else
		$.regButton.title="Register";
	}
}

$.win.addEventListener("close", function(){ $.destroy();});

function eventFilter(collection) { 
	if(name!=null){
		return collection.where({name:name});
	}
}

function findAddress(e) {
	var eventListController=Alloy.createController('venueMap',{VenueID:e.source.venue});
	console.log(e.source.venue);
	Alloy.Globals.tabgroup.getActiveTab().open(eventListController.getView());
};

function Register(e) {
	if($.regButton.title=="Login"){
		Alloy.Globals.logename=name;
		var eventListController=Alloy.createController('Login');
		Alloy.Globals.tabgroup.getActiveTab().open(eventListController.getView());
	}else if($.regButton.title=="Register"){
		$.regit.title="You will register this event.";
		$.regit.message="Are you sure?";
		$.regit.show();
	}else if($.regButton.title=="Registered"){
		$.regit.title="You will Unregister this event.";
		$.regit.message="Are you sure?";	
		$.regit.show();
	}
	
}

function confirm(e){
	var count;
	if($.regButton.title=="Register"){
		
		// var equota = 20;
		var equota = Alloy.Collections.webNews.where({id:eid})[0].get('quota');
		var xhr = Ti.Network.createHTTPClient();
			xhr.onload = function(e){
				count = this.responseText;
				// //alert(json[json.length-1].name + " " + json.length);
				if(equota == count||equota < count) {
					alert("Quota full");
				}else{
			//register success	
				var xhr = Ti.Network.createHTTPClient();
				xhr.onload = function(e){
				//var json = JSON.parse(this.responseText);
			//alert(json[json.length-1].name + " " + json.length);
				};
				xhr.open('POST','http://localhost:1337/user/addRegister/?pid='+eid);
				xhr.send();
			
				var model = Alloy.createModel('regList',{id:eid,uid:Alloy.Globals.meid});
				Alloy.Collections.regList.add(model);
				model.save();
				$.regButton.title="Registered";
				alert("Successfully Registered");
		 	}
		};
		xhr.open('GET','http://localhost:1337/webNews/showR/'+eid);
		xhr.send();
		
	}else{
			//registered, unreg it
			
			var xhr = Ti.Network.createHTTPClient();
			xhr.onload = function(e){
			//var json = JSON.parse(this.responseText);
			//alert(json[json.length-1].name + " " + json.length);
			};
			xhr.open('POST','http://localhost:1337/user/removeRegister/?pid='+eid);
			xhr.send();
			
			var model = Alloy.Collections.regList.where({id:eid})[0];
			var rest = Alloy.Collections.regList.where({id:eid});
			console.log("before"+rest.length);
			Alloy.Collections.regList.remove(model);
			rest = Alloy.Collections.regList.where({id:eid});
		
			model.destroy();
			$.regButton.title="Register";
			alert("You have Unregisterer it");
	}
}

