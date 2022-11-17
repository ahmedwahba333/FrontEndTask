var newElement = document.getElementById("newElement");

var tbodyy = document.getElementById("tbody");

var logoutBtn = document.getElementById("logoutBtn");
logoutBtn.addEventListener("click", () => {
  location.assign("./login.html");
});

console.log(localStorage.getItem("id"));

fetch("https://jsonplaceholder.typicode.com/todos")
  .then((res) => res.json())
  .then((data) => {
    for (i = 0; i < Object.keys(data).length; i++) {
      while (Object.values(data)[i]["userId"] == localStorage.getItem("id")) {
        var tr = document.createElement("tr");
        tr.classList.add("trShow");
        var th = document.createElement("th");
        var tdTitle = document.createElement("td");
        var tdCompleted = document.createElement("td");
        var tdUpdate = document.createElement("td");
        var tdAction = document.createElement("td");

        var tdUpdateTxt = document.createElement("input");
        tdUpdateTxt.setAttribute("type", "text");
        tdUpdateTxt.setAttribute("placeholder", "true or false?");
        tdUpdateTxt.setAttribute("title", "write that it's true or false");

        var tdActionDelete = document.createElement("button");
        tdActionDelete.classList.add("btn", "btn-danger", "btnAction", "p-2");
        tdActionDelete.innerHTML = "delete";

        var tdActionUpdate = document.createElement("button");
        tdActionUpdate.classList.add("btn", "btn-warning", "btnAction", "p-2");
        tdActionUpdate.innerHTML = "update";

        tdUpdate.appendChild(tdUpdateTxt);
        tdAction.appendChild(tdActionDelete);
        tdAction.appendChild(tdActionUpdate);

        tbodyy.appendChild(tr);
        tr.appendChild(th);
        tr.appendChild(tdTitle);
        tr.appendChild(tdCompleted);
        tr.appendChild(tdUpdate);
        tr.appendChild(tdAction);
        var thTxt = document.createTextNode(Object.values(data)[i]["id"]);
        var tdTitleTxt = document.createTextNode(
          Object.values(data)[i]["title"]
        );
        var tdCompletedTxt = document.createTextNode(
          Object.values(data)[i]["completed"]
        );
        console.log(Object.values(data)[i]["completed"]);

        if (Object.values(data)[i]["completed"] == false) {
          tdCompleted.classList.add("falseCompleted");
        }
        if (Object.values(data)[i]["completed"] == true) {
          tdCompleted.classList.add("trueCompleted");
        }

        th.appendChild(thTxt);
        tdTitle.appendChild(tdTitleTxt);
        tdCompleted.appendChild(tdCompletedTxt);
        tdUpdate.appendChild(tdUpdateTxt);
        break;
      }
    }

    newElement.addEventListener("click", () => {
      var inputValueTitle = document.getElementById("myInput").value;
      var tdTitleTxtAdd = document.createTextNode(inputValueTitle);

      var tr = document.createElement("tr");
      tr.classList.add("trShow");
      var th = document.createElement("th");
      var tdTitle = document.createElement("td");
      var tdCompleted = document.createElement("td");
      var tdUpdate = document.createElement("td");
      var tdAction = document.createElement("td");

      var tdUpdateTxt = document.createElement("input");
      tdUpdateTxt.setAttribute("type", "text");
      tdUpdateTxt.setAttribute("placeholder", "true or false?");
      tdUpdateTxt.setAttribute("title", "write that it's true or false");

      var tdActionDelete = document.createElement("button");
      tdActionDelete.classList.add("btn", "btn-danger", "btnAction", "p-2");
      tdActionDelete.innerHTML = "delete";

      var tdActionUpdate = document.createElement("button");
      tdActionUpdate.classList.add("btn", "btn-warning", "btnAction", "p-2");
      tdActionUpdate.innerHTML = "update";

      tdUpdate.appendChild(tdUpdateTxt);
      tdAction.appendChild(tdActionDelete);
      tdAction.appendChild(tdActionUpdate);

      tbodyy.appendChild(tr);
      tr.appendChild(th);
      tr.appendChild(tdTitle);
      tr.appendChild(tdCompleted);
      tr.appendChild(tdUpdate);
      tr.appendChild(tdAction);

      th.appendChild(document.createTextNode("#"));
      tdTitle.appendChild(tdTitleTxtAdd);
      tdCompleted.appendChild(document.createTextNode("false"));
    });
  });
