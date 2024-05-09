const submitHandler = (e) => {
  const newForm = new FormData(e);
  const task = newForm.get("task");
  const hours = newForm.get("hours");
  const clickHnadler = () => {
    console.log(task);
    console.log(hours);
    console.log("clicked");
  };
};
