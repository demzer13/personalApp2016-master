Template.profiles.helpers({
  profiles:function(){
      Meteor.subscribe("theUserProfiles");
      return UserProfiles.find();
  },
})
