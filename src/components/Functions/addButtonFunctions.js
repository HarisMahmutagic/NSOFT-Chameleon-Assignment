const addButtonFunctions = {
  //Function for adding new label in to "To-Do list"
  //One added label will be one object in to the array
  // example:
  // {
  //   id:1,
  //   text:"Some text",
  //   image:false,      default image = false. If user upload some file(image), image will become true.
  //   editMenu:false,   default editMenu = false. If user click to 3 dots, editMenu will become true.
  // }

  addNewLabel(id, toDoDatas) {
    if (toDoDatas.length === 0) {
      toDoDatas.push({
        id: id,
        text: "",
        image: false,
        editMenu: false,
      });
    }
    // It's not allowed to add more then one label. It means if user already have empty label. He needs to fill it before adding new one.
    if (toDoDatas[toDoDatas.length - 1].text !== "") {
      toDoDatas.push({
        id: id,
        text: "",
        image: false,
        editMenu: false,
      });
    }
  },
};

export default addButtonFunctions;
