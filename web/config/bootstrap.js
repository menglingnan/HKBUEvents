/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.bootstrap.html
 */

module.exports.bootstrap = function(cb) {

	// var user = {"username": "Sally", "password":"123456", "role":"admin","id":1};
 //    User.create(user).exec( function (err, model)  {});

	// user = {"username": "Martin", "password":"123456", "role":"staff","dept":"Computer Science","id":2};
 //    User.create(user).exec( function (err, model)  {});

	// user = {"username": "Bob", "password":"123456", "role":"staff","dept":"Music Society","id":3};
 //    User.create(user).exec( function (err, model)  {});

	// user = {"username": "Alice", "password":"123456", "role":"staff","dept":"Government and International Studies","id":4};
 //    User.create(user).exec( function (err, model)  {});

 //    user = {"username": "May", "password":"123456", "role":"staff","dept":"Academic of Film","id":5};
 //    User.create(user).exec( function (err, model)  {});

	// user = {"username": "Emma", "password":"123456", "role":"student","dept":"Music Society","id":6};
 //    User.create(user).exec( function (err, model)  {});

	// user = {"username": "Greenie", "password":"123456", "role":"student","dept":"Government and International Studies","id":7};
 //    User.create(user).exec( function (err, model)  {});

 //    user = {"username": "Robert", "password":"123456", "role":"student","dept":"Academic of Film","id":8};
 //    User.create(user).exec( function (err, model)  {});

	// var webNews ={
 //    "name": "Singing Contest",
 //    "shortDes": "一年一度既HKBU Singing Contest又到喇！身為浸大人既你點可能錯過！？無論你係咩系、Bachelor/AD Promgramme，我地都歡迎你報名！身邊有唱得之人就梗係要推薦佢黎喇！",
 //    "fullDes": "一年一度既HKBU Singing Contest又到喇！身為浸大人既你點可能錯過！？無論你係咩系、Bachelor/AD Promgramme，我地都歡迎你報名！身邊有唱得之人就梗係要推薦佢黎喇！ 主辦單位：音樂學會 報名日期：4/2-8/2 (12-6pm) 報名地點：Main Podium 詳情可閱Poster 或去到報名Counter查詢",
 //    "image": "https://scontent-hkg3-1.xx.fbcdn.net/hphotos-xfa1/v/t1.0-9/537765_488319141230614_2037745642_n.jpg?oh=7aa48d32b25169e36c8a131255123ebe&oe=56645008",
 //    "venue": "AC Hall",
 //    "organizer": "Music Society",
 //    "date": "2015-12-12",
 //    "startTime": "19:30",
 //    "endTime": "23:30",
 //    "quota": "10",
 //    "highlighted": "checked",
 //    "id": 1
 //  	};
	// WebNews.create(webNews).exec( function (err, model)  {});
 //  	webNews ={
 //    "name": "Culture and Politics in European Cinema",
 //    "shortDes": "Michael Balcon and Twentieth Century British Cinema: Art, Industry and National Culture",
 //    "fullDes": "Michael Balcon and Twentieth Century British Cinema: Art, Industry and National Culture. Dr. Mark Hampton.",
 //    "image": "http://gis.hkbu.edu.hk/events/20150925-1023.jpg",
 //    "venue": "SWT501",
 //    "organizer": "Government and International Studies",
 //    "date": "2015-11-11",
 //    "startTime": "19:00",
 //    "endTime": "21:00",
 //    "quota": "5",
 //    "highlighted": "checked",
 //    "id": 2
 //  	};
 //  	WebNews.create(webNews).exec( function (err, model)  {});
 //  	webNews ={
 //    "name": "Workshop on Design for Sustainability",
 //    "shortDes": "Design green partnership agreement between Kyoto and Hong Kong",
 //    "fullDes": "Aspects to focus on Design green partnership agreement between Kyoto and Hong Kong Ex. Low-carbon society, waste management, etc. Discover cultural differences Forcibly ideate green solutions using the cultural differences Extend the ideas by combining participants’ research topics",
 //    "image": "http://www.comp.hkbu.edu.hk/fieldinformatics/images/2015/poster.png",
 //    "venue": "RRS638",
 //    "organizer": "Computer Science",
 //    "date": "2016-05-12",
 //    "startTime": "14:30",
 //    "endTime": "17:30",
 //    "quota": "20",
 //    "id": 3
 //  	};
 //  	WebNews.create(webNews).exec( function (err, model)  {});
 //  	webNews ={
 //    "name": "FWD Challenge Award 2015 (Winter Challenge",
 //    "shortDes": "In alignment of the theme of “Smarter Hong Kong, Smarter Living” from the Government’s 2014-2015 Budget and the Digital 21 Strategy, one of the initiatives is the release of government information for public consumption. Thus, Open Data access and its usage become important and crucial issues for driving Hong Kong to be a Smart City.",
 //    "fullDes": "In alignment of the theme of “Smarter Hong Kong, Smarter Living” from the Government’s 2014-2015 Budget and the Digital 21 Strategy, one of the initiatives is the release of government information for public consumption. Thus, Open Data access and its usage become important and crucial issues for driving Hong Kong to be a Smart City. Currently, Public Sector Information available for free access covers real-time data such as road traffic information, geo-referenced public facility data, property market statistics, population census statistics, etc. Making good use of these available data should provide more opportunities for different sectors to improve their competitiveness. And thus, we pick the “Open Data Challenge” as the next challenge for the FWD Challenge Award 2015.",
 //    "image": "https://www.comp.hkbu.edu.hk/v1/pic/news/655.jpg",
 //    "venue": "RRS638",
 //    "organizer": "Computer Science",
 //    "date": "2015-12-19",
 //    "startTime": "14:30",
 //    "endTime": "17:30",
 //    "quota": "15",
 //    "createdAt": "2015-11-25T02:27:38.583Z",
 //    "updatedAt": "2015-11-25T02:27:38.583Z",
 //    "id": 4
 //  	};
 //  	WebNews.create(webNews).exec( function (err, model)  {});
 //  	webNews ={
 //    "name": "Public Lecture by Claudia Terstappen: After Life",
 //    "shortDes": "Over the past 20 years my research has concentrated on knowledge systems and how knowledge is communicated in different times, countries and cultures. I have focused on beliefs, forms of worship and rituals as they are part of our daily experience in both our local and global environments.",
 //    "fullDes": "In order to visit religious sites, interview people and experience rituals in regional and remote areas, I have lived, worked and travelled in Brazil, Columbia, Iceland, Spain, France, Japan, North America and Australia. The range of cultural differences and similarities I encountered were often surprising.\r\n\r\nThese experiences have manifested themselves in large-scale photographic works, sculptures, installations and more recently videos. By applying different media and materials to my works, I offer different temporalities and suggest alternative ways of experiencing time, culture and place. Between 2010 and 2014 I focused on death rituals including those that involve live animals. In addition to traditional bullfights in Spain, I also looked at animals that were sacrificed for science, and animals killed on our roads as a result of our daily work rituals, like the cockatoo on this poster.” — Claudia Terstappen",
 //    "image": "http://kaitak.hkbu.edu.hk/wp-content/kaitakuploads/kaitakuploads/2015/11/web-banner-kaitak.jpg",
 //    "venue": "SWT501",
 //    "organizer": "Academic of Film",
 //    "date": "2016-02-12",
 //    "startTime": "09:30",
 //    "endTime": "11:30",
 //    "quota": "12",
 //    "createdAt": "2015-11-25T02:32:38.469Z",
 //    "updatedAt": "2015-11-25T02:32:38.469Z",
 //    "id": 5
 //  	};
 //  	WebNews.create(webNews).exec( function (err, model)  {});





  // It's very important to trigger this callback method when you are finished
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)
  cb();
};
