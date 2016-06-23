Template.showFriends.helpers({
  friends:function(){
    //const diningPlace = $(".js-place").val();
    return Friends.find();
  },
  specifiedFriends:function(){
    return Friends.find({time: "11:00 A.M.", place: "Usdan"});
  },
})

Template.showFriends.events({
  "click .js-addFriend": function(event){
    console.log("clicked button!");
    //read the input values stored in the input fields
    const name = $(".js-name").val();
    const time = $(".js-time").val();
    const place = $(".js-place").val();
    //const usdan = $(".js-usdan").val();
    //const upper = $(".js-upper").val();
    //const sherman = $(".js-sherman").val();
    //const faculty = $(".js-faculty").val();
    const friend = {name:name, time:time, place:place};
    console.dir(friend);
    Friends.insert(friend);
  }
})
