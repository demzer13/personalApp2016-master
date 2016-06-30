
Meteor.publish("theUserProfiles",
  function(){return UserProfiles.find();
})

/*Meteor.publish("userData", function(){
  if(this.userId){//only if you log in can you see it
    return Meteor.users.find({_id: this.userId},
                            {fields: {profile:1,
                                      "services.google.email":1}});// everyone sees everything!
    //{fields: {'profile':1, 'things': 1}})
    //return Meteor.users.find({_id: this.userId})
  }else{
    this.ready();
  }
});*/
