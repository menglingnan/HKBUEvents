// hasLogged.js
module.exports = function(req, res, next) {
  	if (req.session.userInfo != null) {
    	return next(); //proceed to the next policy,
  	}
  // (default res.forbidden() behavior can be overridden in `config/403.js`)
  	return res.view('user/login',{'err':""});
};