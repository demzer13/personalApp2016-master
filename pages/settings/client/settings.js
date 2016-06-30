Template.settings.helpers({
  usersettings:function(){
    console.log(Settings.findOne({user:Meteor.userId()}));
    return Settings.findOne({user:Meteor.userId()});
  },
})

Template.settings.events({
  "click .js-addGreeting": function(event){
    const user = Meteor.userId();
    const greeting = $(".js-greeting").val();
    const setting ={user:user, greeting:greeting};
    if((Settings.findOne({user:Meteor.userId()}))==null){//if no greeting associated with current user Id
      Meteor.call("insertSetting",setting);
    }else{
      Meteor.call("updateSetting",setting);
    }
  },
  //"click .js-removeusers":function(event){
    //Meteor.call("removeSettings");
//  },
})
