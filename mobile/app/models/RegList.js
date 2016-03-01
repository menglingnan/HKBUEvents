exports.definition = {
	config: {
		"columns": {
			"id":"INTEGER PRIMARY KEY",
			"name":"text",
			"venue":"text",
			"date":"text",
			"startTime":"text",
			"endTime":"text",
			"organizer":"text",
			"quota":"text",
			"shortDes":"text",
			"fullDes":"text",
			"image":"text",
			"createdAt":"text", 
			"updatedAt":"text"
		},
		"URL": "http://localhost:1337/user/showR",
		"debug": 1, //debug mode enabled
		"adapter" : {
			"type" : "sqlrest",
			"collection_name" : "regList",
			"idAttribute" : "id"
			// optimise the amount of data transfer from remote server to app "addModifedToUrl": true,

		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here

			// For Backbone v1.1.2, uncomment the following to override the
			// fetch method to account for a breaking change in Backbone.
			/*
			fetch: function(options) {
				options = options ? _.clone(options) : {};
				options.reset = true;
				return Backbone.Collection.prototype.fetch.call(this, options);
			}
			*/
		});

		return Collection;
	}
};