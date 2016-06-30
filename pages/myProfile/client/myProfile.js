Template.myProfile.events({
  "click .js-submit-form": function(event){
    Meteor.subscribe("theUserProfiles");
    const firstName = $(".js-first-name").val();
    const lastName = $(".js-last-name").val();
    const nickName = $(".js-nickname").val();
    const email = $(".js-email").val();
    const birthYear = $(".js-birth-year").val();
    const userId = Meteor.userId();
    const profile = {firstName:firstName,
                      lastName:lastName,
                      nickName:nickName,
                      email:email,
                      birthYear:birthYear,
                      userId:userId
                      };
    Meteor.call("insertProfile", profile);
    event.preventDefault();
    Router.go('/profiles');
  }
})
