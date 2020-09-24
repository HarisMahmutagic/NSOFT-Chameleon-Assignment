const moveFunctions = {
  moveToDone(array1, id, array2) {
    let index = -1;
    for (let i = 0; i < array1.length; i++) {
      if (array1[i].id === id) {
        index = i;
      }
    }
    array2.push(array1[index]);
    array1.splice(index, 1);
  },

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
