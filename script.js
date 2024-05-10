const submitHandler = (e) => {
  const newForm = new FormData(e);
  const task = newForm.get("task");
  const hour = newForm.get("hours");
  makeObjlist(task, hour);
};

let objectList = [];

// this function make an object and push the object in the objectList
function makeObjlist(task, hour) {
  const obj = {
    task,
    hour,
    id: idgenrator(),
  };
  objectList.push(obj);
  let displaytstr = "";
  const list = objectList.map((item, i) => {
    displaytstr += `
    <tr>
                  <td scope="row">${i + 1}</td>
                  <td>${item.hour}</td>
                  <td>${item.task}</td>
                  <td class="text-end">
                    <button class="btn btn-danger onclick="ondelete()" deletebutton" mx-2">
                      <i class="fa-solid fa-trash"></i></button
                    ><button class="btn btn-success">
                      <i class="fa-solid fa-arrow-right"></i>
                    </button>
                  </td>
                </tr>`;

    display(displaytstr);
  });
}

const display = (displaytstr) => {
  const entryList = document.querySelector("#entrylist");
  entryList.innerHTML = displaytstr;
};
function idgenrator() {
  const str = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM1234567890";
  let genrated_id = "";
  for (i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * str.length);
    genrated_id += str[index];
  }
  return genrated_id;
}
