Template.table.helpers({
	places:function(){
		return Places.find();
	},
	times:function(){
		return Times.find();
	},
	people(t,p){
		return Friends.find({time:t},{place:p});
	},
})

///Handlebars.registerHelper('people', function(t, p){
	//	return Friends.find({time: t},{place: p});
//	});

//	usdanFriends:function(){
  //  var usdanfriend = Friends.findOne({time: "11:00 A.M.", place: "Usdan"});
    //console.log(usdanfriend);
    //return usdanfriend.name;
//})
