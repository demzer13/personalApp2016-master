Template.table.helpers({
	places:function(){
		return ["Usdan", "Upper Usdan", "Sherman", "Faculty Club"];
	},
	times:function(){
		return ["11:00 A.M.", "11:30 A.M.", "12:00 P.M.", "12:30 P.M.", "1:00 P.M.", "1:30 P.M.",
		"5:00 P.M.", "5:30 P.M.","6:00 P.M", "6:30 P.M."];
	},
	people:function(t,p){
		console.dir([t,p]);
		return Friends.find({time:t,place:p});
	},
	friends:function(){
    //const diningPlace = $(".js-place").val();
    return Friends.find();
  },
})

Template.table.events({
	"click .js-desired": function(event){
    Meteor.subscribe("theFriendsAt",$(".js-desired").val());
  }
})

///Handlebars.registerHelper('people', function(t, p){
	//	return Friends.find({time: t},{place: p});
//	});

//	usdanFriends:function(){
  //  var usdanfriend = Friends.findOne({time: "11:00 A.M.", place: "Usdan"});
    //console.log(usdanfriend);
    //return usdanfriend.name;
//})
