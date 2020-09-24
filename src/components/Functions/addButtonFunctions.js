const addButtonFunctions = {
  addNewLabel(id, toDoDatas) {
    if (toDoDatas.length === 0) {
      toDoDatas.push({
        id: id,
        text: "",
        image: false,
        editMenu: false,
      });
    }
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
