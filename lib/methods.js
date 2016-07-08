Meteor.methods({
  insertFriend:function(friend){
    check(friend, {
      name:String,
      time:String,
      place:String,
    });
    Friends.insert(friend);
  },
  insertTime:function(time){
    check(time,String);
    Times.insert(time);
  },
  insertPlace:function(place){
    check(place,String);
    Places.insert(place);
  },
  sayhilib: function(){
    console.log("hi!");
  },
  insertComment:function(comment){
    check(comment, {
      text:String,
      rating:String,
      createdAt:Date,
      createdBy:String,
      userEmail:String,
    });
    Comments.insert(comment);
  },

  removeComment:function(commentId){
    check(commentId,String);
    Comments.remove(commentId);
  },
  /*removeAll:function(password){
    check(password,String);
    //check to see if password == "zz9911"
    if(password=="zz9911"){
      console.log("removed all friends requesting meal buddies");
      Friends.remove({});
    }
  },*/
  insertSetting:function(setting){
    check(setting, {
      user:String,
      greeting:String,
    });
    Settings.insert(setting);
  },
  insertBio:function(biography){
    check(biography, {
      name:String,
      bio:String,
    });
    Bios.insert(biography);
  },
  updateSetting:function(setting){
    check(setting, {
      user:String,
      greeting:String,
    });
    Settings.update({_id:Settings.findOne({user:Meteor.userId()})._id},
     {
      $set:{greeting:setting.greeting},
    });
  },
  //removeSettings:function(){
    //Settings.remove({});
  //},
})

Meteor.users.deny({
  update() { return true; }
});
