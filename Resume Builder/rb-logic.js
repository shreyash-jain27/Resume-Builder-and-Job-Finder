function addNewWEfield() {
  //   console.log("Yes");
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("wesfield");
  newNode.classList.add("mt-2");
  //   newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Here");

  let weOb = document.getElementById("we");
  let weAddButton = document.getElementById("weaddbutton");

  weOb.insertBefore(newNode, weAddButton);
}

function addNewAQfield() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("aqfield");
  newNode.classList.add("mt-2");
  //   newNode.setAttribute("rows", 3);
  newNode.setAttribute("placeholder", "Enter Here");

  let aqOb = document.getElementById("AQ");
  let weAddButton = document.getElementById("aqaddbutton");

  aqOb.insertBefore(newNode, weAddButton);
}

// Generatign CV

function generateCV() {
  link = document.getElementById("linkedfield").value;
  document.getElementById("linkedT").setAttribute("href", link);

  link1 = document.getElementById("gitfield").value;
  document.getElementById("gitT").setAttribute("href", link1);

  link2 = document.getElementById("fbfield").value;
  document.getElementById("fbfield").setAttribute("href", link2);

  let namefield = document.getElementById("namefield").value;
  let nameT1 = document.getElementById("nameT1");
  nameT1.innerHTML = namefield;

  //   name
  document.getElementById("nameT2").innerHTML = namefield;

  //   contact
  document.getElementById("contactT").innerHTML =
    document.getElementById("contactfield").value;

  // address
  document.getElementById("addressT").innerHTML =
    document.getElementById("addressfield").value;

  // important links
  document.getElementById("linkedT").innerHTML =
    document.getElementById("linkedfield").value;

  document.getElementById("gitT").innerHTML =
    document.getElementById("gitfield").value;

  document.getElementById("fbT").innerHTML =
    document.getElementById("fbfield").value;

  // Objective
  document.getElementById("objectiveT").innerHTML =
    document.getElementById("Objectivefield").value;

  // work experience

  let wes = document.getElementsByClassName("wesfield");
  let str = "";
  for (let e of wes) {
    str = str + `<li> ${e.value} </li>`;
  }
  document.getElementById("weT").innerHTML = str;

  // academic qualifications

  let aqs = document.getElementsByClassName("aqfield");
  let str1 = "";
  for (let j of aqs) {
    str1 = str1 + `<li> ${j.value} </li>`;
  }

  document.getElementById("aqT").innerHTML = str1;

  // To set image
  let file = document.getElementById("imgfield").files[0];
  let reader = new FileReader();
  reader.readAsDataURL(file);

  reader.onloadend = function () {
    document.getElementById("imgtemplate").src = reader.result;
  };

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
  document.getElementById("body").style.backgroundColor = "antiquewhite";
}

// print

function printCV() {
  window.print();
}
