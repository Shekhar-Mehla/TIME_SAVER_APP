const totalelem = document.querySelector(".totalhrs ");
const displaybadtlist = document.querySelector("#badlist");
let objectList = [];
const displayentlist = document.querySelector("#entrylist");

const submitHandler = (e) => {
  const newForm = new FormData(e);
  let task = newForm.get("task");
  let hour = +newForm.get("hours");

  const obj = {
    task,
    hour,
    id: idgenrator(),
    type: "good",
  };

  const hr = document.querySelector("#hours");
  const tsk = document.querySelector("#task");
  // add the validation for the empty filled
  if (task === "" || hour == 0) {
    alert("you must provide the Activity Name and Hours ");
  } else if (total(objectList) >= 168) {
    alert(
      "sorry you have used total weekly allocated hours.You cannot have more than 168 hours weekly"
    );
  } else {
    console.log("hello");
    objectList.push(obj);
    totalelem.innerText = total(objectList);
    hr.value = "";
    tsk.value = "";
    displayGoodList();
  }
};
// this function is responsible to dispaly data in entry  table dynamically.
const displayGoodList = () => {
  let strToDisplay = "";
  const goodList = objectList.filter((item) => {
    return item.type === "good";
  });

  // handle the total hours when activities deleted

  goodList.map((item, i) => {
    const str = `
    
    <td scope="row">${i + 1}.</td>
    <td>${item.task} </td>
    <td>${item.hour} hrs</td>
    <td class="text-end">
    <button class="btn btn-danger deletebutton mx-2"  onclick = 'ondelete("${
      item.id
    }")' >
    <i class="fa-solid fa-trash"></i></button
    >
    <button class="btn btn-success " onclick = 'switchTask("${item.id}","bad")';
    ">
    <i class="fa-solid fa-arrow-right"></i>
    </button>
    </td>
    </tr>`;
    strToDisplay += str;
  });
  displayentlist.innerHTML = strToDisplay;
};
// this function is responsible to dispaly data in bad  table dynamically.
const displayBadList = () => {
  let strToDisplay = "";
  const badList = objectList.filter((item) => {
    return item.type == "bad";
  });
  const totalbedelem = document.querySelector(".badlist_hours");
  totalbedelem.innerText = total(badList);
  badList.map((item, i) => {
    const str = `
    
    <td scope="row">${i + 1}.</td>
    <td>${item.task}</td>
    <td>${item.hour} hrs</td>
    <td class="text-end">
   
    <button class="btn btn-warning " onclick = 'switchTask("${
      item.id
    }","good")';
    ">
    <i class="fa-solid fa-arrow-left"></i>
    </button>
    <button class="btn btn-danger deletebutton mx-2"  onclick = 'ondelete("${
      item.id
    }")' >
    <i class="fa-solid fa-trash"></i></button
    >
    </td>
    </tr>`;
    strToDisplay += str;
  });
  displaybadtlist.innerHTML = strToDisplay;
};

// id gentrator
function idgenrator() {
  const str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM1234567890";
  let genrated_id = "";
  for (i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * str.length);
    genrated_id += str[index];
  }
  return genrated_id;
}

// // handle the deletebutton
const ondelete = (id) => {
  objectList = objectList.filter((item) => {
    return item.id !== id;
  });
  displayGoodList();
  displayBadList();
};
const switchTask = (id, type) => {
  objectList = objectList.map((item) => {
    if (item.id == id) {
      item.type = type;
    }
    return item;
  });
  displayBadList();
  displayGoodList();
};
const total = (list) => {
  const totalHours = list.reduce((acc, item) => {
    return acc + item.hour;
  }, 0);
  return totalHours;
};
