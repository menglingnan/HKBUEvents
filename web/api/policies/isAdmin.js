// isAdmin.js
module.exports = function(req, res, next) {
	if(req.session.userInfo==null)
		return res.view('user/login',{'err':""});
	User.findOne({id:req.session.userInfo.id})
    .exec( function (err, user) {
  		if (user.role != "student") {
    		return next(); //proceed to the next policy,
  		}
  		else return res.redirect('/');
	});
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  	
};