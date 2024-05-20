var form = document.getElementById("form");

var error = [];

var success = "";

form.addEventListener("submit", function (e) {
  e.preventDefault();

  var username = document.getElementById("username");
  var email = document.getElementById("email");

  if (username.value == "" || email.value == "") {
    error.push("Input field cannot be empty");
  }

  alert("Form sent Successfull");

  var message = document.getElementById("message");

  message.innerText = error;
});
