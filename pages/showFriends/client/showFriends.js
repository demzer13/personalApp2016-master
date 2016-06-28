Template.showFriends.helpers({
  friends:function(){
    //const diningPlace = $(".js-place").val();
    return Friends.find();
  },
})

Template.showFriends.events({
  "click .js-addFriend": function(event){
    console.log("clicked button!");
    //read the input values stored in the input fields
    const name = $(".js-name").val();
    const time = $(".js-time").val();
    const place = $(".js-place").val();
    const friend = {name:name, time:time, place:place};
    console.dir(friend);
    //Friends.insert(friend);
    //Times.insert(time);//new
    //Places.insert(place);//new
    Meteor.call("insertFriend",friend);
    Meteor.call("insertTime",time);
    Meteor.call("insertPlace",place);
  },

  "click .js-removeall":function(event){
    console.log("removed all");
    const password= $(".js-password").val();
    Meteor.call("removeAll",password);
  },
  "click .js-desired": function(event){

    Meteor.subscribe("theFriendsAt",$(".js-desired").val());
  }

})
