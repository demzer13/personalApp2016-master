Meteor.methods({
  insertProfile:function(profile){
    UserProfiles.insert(profile);
  },
})
