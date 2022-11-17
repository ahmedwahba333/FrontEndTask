//              variables
var myEmail = document.getElementById("email");
var fName = document.getElementById("fName");
var lName = document.getElementById("lName");

var myEmailLabel = document.getElementById("emailLabel");
var fNameLabel = document.getElementById("fNameLabel");
var lNameLabel = document.getElementById("lNameLabel");

var myBtn = document.getElementById("btn");
var myBtnLabel = document.getElementById("btnLabel");

fetch("https://reqres.in/api/users")
  .then((res) => res.json())
  .then((data) => {
    /*            login button          */
    myBtn.addEventListener("click", () => {
      var x;
      for (i = 0; i < Object.keys(data).length; i++) {
        if (
          myEmail.value == Object.values(data)[4][i]["email"] &&
          fName.value == Object.values(data)[4][i]["first_name"] &&
          lName.value == Object.values(data)[4][i]["last_name"]
        ) {
          x = 1;
        }
      }
      if (x == 1) {
        location.assign("./todoList.html");
        localStorage.setItem("id", i);
      } else {
        myBtnLabel.innerHTML =
          "<p style=color:red;>please enter the correct data <i class='fa-solid fa-triangle-exclamation'></i></p>";
      }
    });

    /*            first name check          */
    fName.addEventListener("keyup", () => {
      var x;
      for (i = 0; i < Object.keys(data).length; i++) {
        if (fName.value == Object.values(data)[4][i]["first_name"]) {
          x = 1;
        }
      }
      if (x == 1) {
        fNameLabel.innerHTML =
          "<p style=color:green;>it's right.. <i class='fa-solid fa-check'></i></p>";
      } else {
        fNameLabel.innerHTML =
          "<p style=color:red;>it's wrong.. <i class='fa-solid fa-circle-xmark'></i></p>";
      }
    });

    /*            last name check          */
    lName.addEventListener("keyup", () => {
      var x;
      for (i = 0; i < Object.keys(data).length; i++) {
        if (lName.value == Object.values(data)[4][i]["last_name"]) {
          x = 1;
        }
      }
      if (x == 1) {
        lNameLabel.innerHTML =
          "<p style=color:green;>it's right.. <i class='fa-solid fa-check'></i></p>";
      } else {
        lNameLabel.innerHTML =
          "<p style=color:red;>it's wrong.. <i class='fa-solid fa-circle-xmark'></i></p>";
      }
    });

    /*            email check          */
    myEmail.addEventListener("keyup", () => {
      var x;
      for (i = 0; i < Object.keys(data).length; i++) {
        if (myEmail.value == Object.values(data)[4][i]["email"]) {
          x = 1;
        }
      }
      if (x == 1) {
        myEmailLabel.innerHTML =
          "<p style=color:green;>it's right.. <i class='fa-solid fa-check'></i></p>";
      } else {
        myEmailLabel.innerHTML =
          "<p style=color:red;>it's wrong.. <i class='fa-solid fa-circle-xmark'></i></p>";
      }
    });
  });
