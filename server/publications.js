
Meteor.publish("theUserProfiles",
  function(){return UserProfiles.find();
})
