Template.showFriends.onCreated(function(){
  this.state = new ReactiveDict();
  this.state.setDefault({
    clicked: "No request sent",
  });
});

Template.showFriends.helpers({
  ifSubmitted: function(){
    const instance = Template.instance();
    return instance.state.get("clicked");
  },
})

Template.showFriends.events({
  "click .js-addFriend": function(event,instance){
    instance.state.set("clicked","Request sent!");//notify clicked submit
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
/*
  "click .js-removeall":function(event){
    console.log("removed all");
    const password= $(".js-password").val();
    Meteor.call("removeAll",password);
  },
  */
})
