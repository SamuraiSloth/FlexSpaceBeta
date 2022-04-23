var ggluser;
var ggluserid;
function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  ggluser = googleUser;
  document.getElementById("content").innerHTML =
    "Hello " + profile.getGivenName() + "!";
  ggluserid = profile.getId();
}
function signOut() {
  gapi.auth2
    .getAuthInstance()
    .signOut()
    .then(function () {
      document.getElementById("content").innerHTML = "You have signed out";
    });
}
