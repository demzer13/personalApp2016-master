Template.showFriends.helpers({
  friends:function(){
    //const diningPlace = $(".js-place").val();
    return Friends.find();
  }
})

Template.showFriends.events({
  "click .js-addFriend": function(event){
    console.log("clicked button!");
    //read the input values stored in the input fields
    const name = $(".js-name").val();
    const time = $(".js-time").val();
    const usdan = $(".js-usdan").val();
    const upper = $(".js-upper").val();
    const sherman = $(".js-sherman").val();
    const faculty = $(".js-faculty").val();
    const friend = {name:name, time:time, place:[usdan,upper,sherman,faculty]};
    console.dir(friend);
    Friends.insert(friend);
  }
})
