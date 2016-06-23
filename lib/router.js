Router.configure({
	layoutTemplate: 'layout',
});

Router.route('/',{name:"home"});
Router.route('about');
Router.route('comments');
Router.route('showFriends');
Router.route('table');

Router.route('/showFriend/:_id',
	{name:"showFriend",
		data: function(){
			const c = Friends.findOne({_id:this.params._id});
			console.dir(c);
			return c;
	  }
	}
);
