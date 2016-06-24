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
  removeComment:function(comment){
    Comments.remove(comment);
  },
  removeAll:function(password){
    //check to see if password == "zz9911"
    if(password=="zz9911"){
      console.log("removed all friends requesting meal buddies");
      Friends.remove({});
    }
  },
})
