let objectList = [];

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
  objectList.push(obj);
  displayGoodList();
  total();
};
// this function is responsible to dispaly data in entry  table dynamically.
const displayGoodList = () => {
  const displayentlist = document.querySelector("#entrylist");

  let strToDisplay = "";
  const goodList = objectList.filter((item) => {
    return item.type === "good";
  });

  goodList.map((item, i) => {
    const str = `
    
    <td scope="row">${i + 1}</td>
    <td>${item.hour}</td>
    <td>${item.task}</td>
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
// this function is responsible to dispaly data in entry  table dynamically.
const displayBadList = () => {
  const displaybadtlist = document.querySelector("#badlist");

  let strToDisplay = "";
  const badList = objectList.filter((item) => {
    return item.type == "bad";
  });
  badList.map((item, i) => {
    const str = `
    
    <td scope="row">${i + 1}</td>
    <td>${item.hour}</td>
    <td>${item.task}</td>
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
const total = () => {
  const totalHours = objectList.reduce((acc, item) => {
    return acc + item.hr;
  }, 0);
  return totalHours;
};
console.log(total());
