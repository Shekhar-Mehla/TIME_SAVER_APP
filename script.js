let objectList = [];

const submitHandler = (e) => {
  const newForm = new FormData(e);
  const task = newForm.get("task");
  const hour = newForm.get("hours");
  const obj = {
    task,
    hour,
    id: idgenrator(),
  };
  objectList.push(obj);
  display();
};
// this function is responsible to dispaly data in table dynamically.
const display = () => {
  let strToDisplay = "";
  objectList.map((item) => {
    strToDisplay += `

  <td scope="row">${i + 1}</td>
  <td>${item.hour}</td>
  <td>${item.task}</td>
  <td class="text-end">
    <button class="btn btn-danger deletebutton mx-2"  onclick = 'ondelete("${
      item.id
    }")' >
      <i class="fa-solid fa-trash"></i></button
    ><button class="btn btn-success">
      <i class="fa-solid fa-arrow-right"></i>
    </button>
  </td>
  </tr>`;
    const displayentlist = document.querySelector("#entrylist");
    return (displayentlist.innerHTML = strToDisplay);
  });
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
  const newObjectList = objectList.filter((item) => {
    return item.id !== id;
  });
  objectList = newObjectList;
  display();
};
