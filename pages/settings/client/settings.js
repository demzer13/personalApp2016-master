Template.settings.onCreated(function(){
  this.state = new ReactiveDict();
  this.state.setDefault({
    meals: 0,
  });
  //console.log("creating the template");
  //console.dir(this.state);
});

Template.settings.helpers({
  usersettings:function(){
    console.log(Settings.findOne({user:Meteor.userId()}));
    return Settings.findOne({user:Meteor.userId()});
  },
  theMeals: function(){
    const instance = Template.instance();
    return instance.state.get("meals");
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
  "click .js-submitnum": function(event,instance){
    const c = instance.$(".js-numbermeals").val();
    //change the meals field of the state object
    instance.state.set("meals",c);//changes instance, so Template helper
    //automatically called, initially called with default number value
  },
})
