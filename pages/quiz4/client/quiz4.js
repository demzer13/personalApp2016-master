Template.quiz4.events({
  "click .js-addBio": function(event){
    const name = $(".js-name").val();
    const bio = $(".js-bio").val();
    const biography = {name:name, bio:bio};
    Meteor.call("insertBio",biography);
  },
})

Template.quiz4.helpers({
	biographies: function(){
		return Bios.find();
  },
})
