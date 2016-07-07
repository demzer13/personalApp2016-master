Router.configure({
	layoutTemplate: 'layout',
});

Router.route('/',{name:"home"});
Router.route('about');
Router.route('comments');
Router.route('showFriends');
Router.route('table');
Router.route('draw');
Router.route('settings');

/*Router.map(function(){
	this.route('mealFile', {
		path:'dump',
		where:'server',

		action: function () {
      console.log("storing Response");
			const theBuddies = Friends.find().fetch();
      this.response.writeHead(200, {'Content-Type':
                                    'application/json; charset=utf-8'});
      this.response.end(JSON.stringify(theBuddies)+"\n");
	}
});
});*/
Router.route('/showFriend/:_id',
	{name:"showFriend",
		data: function(){
			const c = Friends.findOne({_id:this.params._id});
			console.dir(c);
			return c;
	  }
	}
);
