const moveFunctions = {
  // Function for moving one specific label from To-Do list to Done list.
  moveToDone(array1, id, array2) {
    let index = -1;
    for (let i = 0; i < array1.length; i++) {
      if (array1[i].id === id) {
        index = i;
      }
    }
    // Next will check if user want to move empty label. If text.length = 0, wont be able to move to Done.
    if (array1[index].text.length > 0) {
      array2.push(array1[index]);
      array1.splice(index, 1);
    }
  },

  // Function for moving one specific label from Done list to To-Do list
  moveFromDone(array1, id, array2) {
    let index = -1;
    for (let i = 0; i < array1.length; i++) {
      if (array1[i].id === id) {
        index = i;
      }
    }
    array2.push(array1[index]);
    array1.splice(index, 1);
  },
};

export default moveFunctions;
