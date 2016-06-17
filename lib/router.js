Router.configure({
	layoutTemplate: 'layout',
});

Router.route('/',{name:"home"});
Router.route('about');
Router.route('comments');
Router.route('showFriends');
Router.route('table');
