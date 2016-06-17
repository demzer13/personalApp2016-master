Meteor.startup(function(){
  if (Friends.find().count()==0){
    //create these fixtures...
    Friends.insert({name:"Demi Zhang", time:"18:30", place:"Usdan"});
    Friends.insert({name:"Victoria Walker", time:"17:30", place:"Usdan"});
    Friends.insert({name:"Caroline Liu", time:"18:00", place:"Sherman"});
    Friends.insert({name:"Brite Chuang", time:"18:30", place:"Usdan"});
    Friends.insert({name:"Arianna Padron-Mendez", time:"17:00", place:"Upper Usdan"});
    Friends.insert({name:"Anandita Kumar", time:"17:00", place:"Sherman"});
    Friends.insert({name:"Xiaomei Chen", time:"18:00", place:"Sherman"});
  }
})
