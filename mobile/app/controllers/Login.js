var args = arguments[0] || {};

Alloy.Collections.UserList.fetch();
Alloy.Globals.logbutton=$.logBt;



function login(e) {
		var username = $.username.value;
		var password = $.password.value;
		var thisuser = Alloy.Collections.UserList.where({username:username,password:password});
		console.log(JSON.stringify(thisuser));
		if(JSON.stringify(thisuser)!="[]"){
			var userid = thisuser[0].get("id");//at(0).get("uid");
			Alloy.Globals.meid = userid;
			
			var xhr = Ti.Network.createHTTPClient();
			xhr.onload = function(e){
			//var json = JSON.parse(this.responseText);
			//alert(json[json.length-1].name + " " + json.length);
			};
			xhr.open('POST','http://localhost:1337/user/login');
			xhr.send({
				"username":username,
				"password":password
			});
		}
		if(Alloy.Globals.meid!=0) {
			var eventListController = Alloy.createController('UserInfo');
			if(Alloy.Globals.tabgroup.getActiveTab()==Alloy.Globals.logTab){
				Alloy.Globals.tabgroup.getActiveTab().open(eventListController.getView());
			}else {
				$.win.close();
				Alloy.Globals.eventDetailWin.close();
				var eventListController = Alloy.createController('eventDetail',{
					name: Alloy.Globals.logename
				});
				Alloy.Globals.tabgroup.getActiveTab().open(eventListController.getView());
			}
		}
}

function logout(e) {
	var xhr = Ti.Network.createHTTPClient();
	xhr.onload = function(e){
			//var json = JSON.parse(this.responseText);
			//alert(json[json.length-1].name + " " + json.length);
	};
	xhr.open('POST','http://localhost:1337/user/logout');
	xhr.send();
	Alloy.Globals.meid=0;
}
