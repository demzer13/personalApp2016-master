Meteor.publish("theFriends",
  function(){return Friends.find();})

Meteor.publish("theFriendsAt",
    function(loc){return Friends.find({place:loc});})

Meteor.publish("theComments",
  function(){return Comments.find();})

Meteor.publish("theSettings", function(){
    if(this.userId){
      return Settings.find();
    }else{
      this.ready();
    }
})

Meteor.publish("userData", function(){
  if(this.userId){//only if you log in can you see it
    return Meteor.users.find({_id: this.userId},
                            {fields: {profile:1,
                                      "services.google.email":1}});// everyone sees everything!
    //{fields: {'profile':1, 'things': 1}})
    //return Meteor.users.find({_id: this.userId})
  }else{
    this.ready();
  }
});
