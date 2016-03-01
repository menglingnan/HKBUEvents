/**
 * WebNewsController
 *
 * @description :: Server-side logic for managing WebNews
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	create: function(req, res) {
 		if (req.method == "POST") {
 			WebNews.create(req.body.WebNews).exec( function(err, model) {
 				WebNews.find().sort('highlighted desc').exec( function(err, WebNews) {
          return res.view('WebNews/admin', {'WebNews': WebNews});
        });
 			});
 		}
 		else {
 			return res.view('WebNews/create');
 		}
 	},

 	json: function(req, res) {
 		WebNews.find().sort('highlighted desc').exec( function(err, WebNews) {
 			return res.json(WebNews);
 		});
 	},

 // index function

 	index: function(req, res) {
 		WebNews.find().sort('highlighted desc').exec( function(err, WebNews) {
 			return res.view('WebNews/index', {'WebNews': WebNews});
 		});
 	},

 	admin: function(req, res) {
    if(req.session.userInfo.role=="admin"){
      WebNews.find().sort('highlighted desc').exec( function(err, WebNews) {
        return res.view('WebNews/admin', {'WebNews': WebNews});
      });
    }
    else{
      WebNews.find().sort('highlighted desc')
      .where({organizer: req.session.userInfo.dept})
      .exec( function(err, WebNews) {
        return res.view('WebNews/admin', {'WebNews': WebNews});
      });
    }
 		
 	},
 // delete function 
 
 	delete: function(req, res) {
 		WebNews.findOne(req.params.id).exec( function(err, model) {
 			if (model != null) {
 				model.destroy();
 				WebNews.find().sort('highlighted desc').exec( function(err, WebNews) {
          return res.view('WebNews/admin', {'WebNews': WebNews});
        });
 			} else {		
 				return res.send("Event not found");
 			}
 		});
 	},
 	// view function

	view: function (req, res) {
    
    
 		WebNews.findOne(req.params.id).exec( function(err, mod) {
 			if (mod != null){

        var reg="";
          if(req.session.userInfo==null){
            WebNews.findOne(req.params.id).populateAll().exec(function (err, m) {
            
              mod.cquota = mod.quota - m.registeredBy.length;
              
              return res.view('WebNews/view', {'WebNews': mod,'reg':"Reg"});
          });
        }
        else {
          WebNews.findOne(req.params.id).populateAll({id:req.session.userInfo.id}).exec( function (err, model) {
          WebNews.findOne(req.params.id).populateAll().exec(function (err, m) {

            model.cquota = model.quota - m.registeredBy.length;
              if(model.registeredBy.length!=0)
              reg = "UnReg";
                else reg = "Reg";
              return res.view('WebNews/view', {'WebNews': model,'reg':reg});
            });
          });
        } 
        
      }
 				
 			else
 				return res.send("No such Event");

 		});

 	},

  goSearch: function (req, res) {
      var str = "&name=" + req.query.name
              + "&organizer=" + req.query.organizer
              + "&venue=" + req.query.venue
              + "&date=" + req.query.date;
      WebNews.find().paginate({page: req.query.page, limit: 2})
      .where({name: {contains: req.query.name}})
      .where({organizer: {contains: req.query.organizer}})
      .where({venue: {contains: req.query.venue}})
      .where({date: {contains: req.query.date}})
      .sort('name desc')
      .exec( function (err, webNews) {
        WebNews.count()
          .where({name: {contains: req.query.name}})
          .where({organizer: {contains: req.query.organizer}})
          .where({venue: {contains: req.query.venue}})
          .where({date: {contains: req.query.date}})
          .exec( function(err, value) {
            var pages = Math.ceil(value / 2 );
            
           
            return res.view('WebNews/goSearch', 
              {'WebNews': webNews, 'str': str, 'count':pages, 'current':req.query.page});
          });
      })
    

  },
	update: function(req, res) {
 		if (req.method == "GET") {
 			WebNews.findOne(req.params.id).exec( function(err, model) {
 				if (model == null) 
 					return res.send("No such Event!");
 				else
 					return res.view('WebNews/update', {'WebNews': model});
 			});
 		} else {
 			WebNews.findOne(req.params.id).exec( function(err, model) {
 				model.name = req.body.WebNews.name;
 				model.shortDes = req.body.WebNews.shortDesame;
				model.fullDes = req.body.WebNews.fullDes;
 				model.image = req.body.WebNews.image;
 				model.venue = req.body.WebNews.venue;
 				model.organizer = req.body.WebNews.organizer;
 				model.date = req.body.WebNews.date;
 				model.startTime = req.body.WebNews.startTime;
 				model.endTime = req.body.WebNews.endTime;
 				model.quota = req.body.WebNews.quota;
 				if(req.body.WebNews.highlighted!="checked"){
 					model.highlighted="";
 				}
 				else model.highlighted = "checked";
 				model.save();	
 				
 			});
 			WebNews.find().sort('highlighted desc').exec( function(err, WebNews) {
 				return res.view('WebNews/admin', {'WebNews': WebNews});
 			});
 		}
 		
 	},

 	search: function (req, res) {
 		WebNews.find().sort('highlighted desc').paginate({page: req.query.page, limit: 2})
 			.exec( function(err, webNews) {
      		WebNews.count().exec( function(err, value) {
        		var pages = Math.ceil(value / 2 );
        		return res.view('WebNews/search', 
        			{'WebNews': webNews, 'count':pages, 'current':req.query.page});
      		});
    	});
 	},

  showRegisteredBy: function (req, res) {
    WebNews.findOne(req.params.id).populateAll().exec( function (err, model) {

          return res.view('webNews/regUser',{'WebNews':model});

        })
  },

  showR:  function( req, res) {

    WebNews.findOne(req.params.id).populateAll().exec(function (err, model) {
        return res.json(model.registeredBy.length);

    })
  }
};

