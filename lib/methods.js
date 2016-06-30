Meteor.methods({
  insertFriend:function(friend){
    Friends.insert(friend);
  },
  insertTime:function(time){
    Times.insert(time);
  },
  insertPlace:function(place){
    Places.insert(place);
  },
  sayhilib: function(){
    console.log("hi!");
  },
  insertComment:function(comment){
    Comments.insert(comment);
  },
<<<<<<< HEAD
  removeComment:function(commentid){
    Comments.remove(commentid);
=======
  removeComment:function(commentId){
    Comments.remove(commentId);
>>>>>>> pa3
  },
  removeAll:function(password){
    //check to see if password == "zz9911"
    if(password=="zz9911"){
      console.log("removed all friends requesting meal buddies");
      Friends.remove({});
    }
  },
  insertSetting:function(setting){
    Settings.insert(setting);
  },
  updateSetting:function(setting){
    Settings.update({_id:Settings.findOne({user:Meteor.userId()})._id},
     {
      $set:{greeting:setting.greeting},
    });
  },
  //removeSettings:function(){
    //Settings.remove({});
  //},
})
