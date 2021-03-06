const editMenuFunctions = {
  // Clicking on three dots, user will open or close extra field for import image or delete one specific.
  editMenuOpenOrClose(array, id, array2) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        array[i].editMenu = !array[i].editMenu;
      } else array[i].editMenu = false;
    }

    for (let i = 0; i < array2.length; i++) {
      if (array2[i].id === id) {
        array2[i].editMenu = !array2[i].editMenu;
      } else array2[i].editMenu = false;
    }
  },

  // If we have extra field opened for one label. Clicking somewhere else, that extra field will close it self.
  close(array1, array2) {
    if (array1.length > 0) {
      for (let i = 0; i < array1.length; i++) {
        array1[i].editMenu = false;
      }
    }
    if (array2.length > 0) {
      for (let i = 0; i < array2.length; i++) {
        array2[i].editMenu = false;
      }
    }
  },
};

export default editMenuFunctions;
