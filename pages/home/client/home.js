Template.home.onCreated(function(){
  this.state = new ReactiveDict();
  this.state.setDefault({
    color: "big-info",
    counter: 0,
  });
  console.log("creating the template");
  console.dir(this.state);
});

Template.home.helpers({
  theColor: function(){
    const instance = Template.instance();
    return instance.state.get("color");
  },

  theCounter: function(){
    const instance = Template.instance();
    return instance.state.get("counter");
  },
});

Template.home.events({
  "change .js-color": function(event,instance){
    const c = instance.$(".js-color").val();
    //change the color ield of the state object
    instance.state.set("color",c);//changes instance, so Template helper
    //automatically called, initially called with default color value
  },

  "click .js-pusher": function(event,instance){
    const c = instance.state.get("counter");
    instance.state.set("counter",c+1);
  }
})
