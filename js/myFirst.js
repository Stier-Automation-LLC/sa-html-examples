function loginButtonClicked() {
  //outputs to the console which the user will not see
  console.log("login button clicked");
  //outputs to an alert box that the user will see
  alert("you clicked on the login button");
  //Returns an element from page
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  // 	//if using jquery
  //var username = $("#username").val();
  //var password = $("#password").val();
  if (username.length < 4) {
    alert("You have entered a username that this too short");
  }
  if (password.length < 8) {
    alert("You have entered a password that this too short");
  }
  console.log("Username=" + username);
  console.log("Password=" + password);
}
function displayDate() {
  document.getElementById("currentTime").innerHTML = Date();
}