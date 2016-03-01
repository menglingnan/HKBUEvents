/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    json: function(req, res) {
        User.find().sort('highlighted desc').exec( function(err, User) {
            return res.json(User);
        });
    },

	create: function(req, res) {
		if (req.method == "POST") {

 			User.count().where({username:req.body.User.username}).exec( function(err, value) {

 				if (value != 0)

 					return res.view("user/create",{'err':"name"});

 				else 

	 				User.create(req.body.User).exec( function(err, model) {

 						return res.view('user/login',{'err':"reg"});

 					});
	 		});
 		}

 		else {

 			return res.view('User/create',{'err':""});
 		}
 	},
  

	login: function (req, res) {
        if (req.method == "GET")
            return res.view('user/login',{'err':""});
        else {

            User.findOne({username:req.body.username})
            .exec( function (err, user) {

                if (user == null) 
                    return res.view("user/login",{'err':"name"});
                
                if (user.password != req.body.password) 
                    return res.view("user/login",{'err':"pwd"});
                
                req.session.userInfo = user;   
                return res.redirect("/");
            });
            
        }
    },
    logout: function (req, res) {
        req.session.userInfo=null;
        return res.redirect("/");

    },

	showRegister: function (req, res) {

    	User.findOne(req.session.userInfo.id).populateAll().exec( function (err, model) {

        	return res.view('user/regEvent',{'User':model});

        })
    },



	showR:  function( req, res) {

    	User.findOne(req.session.userInfo.id).populateAll().exec( function (err, model) {

            return res.json(model.register);

        })
  	},

  	addRegister: function (req, res) {

        User.findOne(req.session.userInfo.id).exec( function (err, model) {

            if (model !== null) {
                model.register.add(req.query.pid)
                model.save( function (err, model) {

                    if (err) return res.send("Already added");

                    return res.redirect("/User/showRegister/");

                });
            }
            else {
                return res.send("User not found!");
            }
        })
    },

    removeRegister: function (req, res) {

        User.findOne(req.session.userInfo.id).exec( function (err, model) {

            if (model !== null) {
                model.register.remove(req.query.pid);
                model.save();
                // User.findOne(req.params.id).populateAll().exec( function (err, eve) {

                //     return res.view('user/regEvent',{'WebNews':eve});
                // });

                return res.redirect("/User/showRegister/");
            }
            else {
                return res.send("User not found!");
            }
        })
    
    },
    showCookie: function (req, res){
        console.log(req.cookies.rememberme);
        res.cookies('rememberme', req.cookies.rememberme * 1 + 1, {
            expires: new Date(Date.now() + 9000),
            httpOnly:true
        });
        return res.json(req.cookies);
    }


	
};

