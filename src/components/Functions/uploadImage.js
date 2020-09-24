const uploadImage = {
  onInputChange(e, id, array, imageFile) {
    const files = e.target.files;

    Array.from(files).forEach((file) =>
      this.addImage(file, id, array, imageFile)
    );
  },

  addImage(file, id, array, imageFile) {
    if (!file.type.match("image.*")) {
      return;
    }
    imageFile.push(file);
    const reader = new FileReader();
    let index = -1;
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        index = i;
      }
    }
    reader.onload = (e) => (array[index].text = e.target.result);
    array[index].image = true;

    reader.readAsDataURL(file);
  },
};
export default uploadImage;
