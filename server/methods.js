Meteor.methods({
  sayhiserver: function(){
    console.log("hi!");
  },
})

Meteor.users.deny({
  update() { return true; }
});
