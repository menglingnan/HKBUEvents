var args = arguments[0] || {};
var VenueID=args.VenueID||{};

Alloy.Collections.venues.fetch();

$.win.addEventListener("close",function(){$.destroy();});
function VenueFilter(collection){	
	return collection.where({VenueID:VenueID});
}

function mapTransform(model){
	var transform=model.toJSON();
	transform.title=transform.VenueID;
	transform.subtitle=transform.VenueName;
	return transform;
};