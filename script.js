var form = document.getElementById("form");

var error = [];

var success = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var username = document.getElementById("username");
  var password = document.getElementById("password");

  if (username.value == "" || password.value == "") {
    error.push("Input field cannot be empty");
  }

  alert("Login Successfull");

  var message = document.getElementById("message");

  message.innerText = error;
});
