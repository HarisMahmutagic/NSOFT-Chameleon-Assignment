const deleteFunctions = {
  deleteOneLabel(array, id) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        array.splice(i, 1);
      }
    }
  },

  deleteAll(array) {
    array.splice(0, array.length);
  },
};

export default deleteFunctions;
