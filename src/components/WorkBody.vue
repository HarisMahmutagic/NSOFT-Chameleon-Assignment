<template>

  <div class="WorkBody">
    <div id="toDoList">

      <div id="title">To-do list</div>

      <div title="Add new label" id="plusButton" v-on:click="add(increasedId,toDoListDatas)">+</div>

      <div id="content">  
        <div class="datas" v-for="data in toDoListDatas" :key="data.id">
          <img id="checkboxInactive" src="../assets/checkbox.png" v-on:click="moveToDone(toDoListDatas, data.id, doneListDatas)">
          <input  class="inputText" v-model="data.text" v-if="data.image === false">
          <img class="imageInList" :src="data.text" v-if="data.image === true" >
          <img title="Edit" id="editToDoList" src="../assets/dots.png" v-on:click="openOrCloseEditMenu(toDoListDatas, data.id, doneListDatas)">
            <div v-bind:class="{openToDoMenu:data.editMenu , closeToDoMenu:!data.editMenu}">
              <label title="Add new Image"  id="addPicture">
                <input type="file" id="inputForPicture" accept="image/*" @change="uploadImages($event, data.id, toDoListDatas, imageFile)">
              </label>
              <img title="Delete" id="deleteLabel1" src="../assets/trash.png" v-on:click="deleteOneFromToDoList(toDoListDatas, data.id)">     
            </div>
        </div>
      </div>
    </div>

    <div id="doneList"  >

      <div id="doneTitle">Done</div>

      <div title="Delete all from Done List" id="recycle"><a id="symbol" v-on:click="deleteAllLabels(doneListDatas)">&#128465;</a></div>

      <div class="doneData"  >
        <div id="doneFinalList" v-for="data in doneListDatas" :key="data.id">   
            <img id="checkboxActive" src="../assets/checkbox active.png" v-on:click="moveFromDone(doneListDatas, data.id, toDoListDatas)">
            <div id="doneLabels" v-if="data.image === false">{{data.text}}</div>
            <img class="imageInList" :src="data.text" v-if="data.image === true">
            <img id="editDoneList" src="../assets/dots.png" v-on:click="openOrCloseEditMenu(toDoListDatas, data.id, doneListDatas)">
            <div v-bind:class="{openToDoMenu:data.editMenu , closeToDoMenu:!data.editMenu}">
              <img id="deleteLabel" src="../assets/trash.png" v-on:click="deleteOneFromToDoList(doneListDatas, data.id)">
            </div>
        </div>
      </div>       

    </div> 

<p>{{toDoListDatas}}</p>

  </div>

</template>

<script>
import addButtonFunctions from '../components/Functions/addButtonFunctions';
import editMenuFunctions from '../components/Functions/editMenuFunctions';
import moveFunctions from '../components/Functions/moveFunctions';
import deleteFunctions from '../components/Functions/deleteFunctions';
import uploadImage from '../components/Functions/uploadImage';

export default {
  name: 'WorkBody',
  
  data() {
    return {
     toDoListDatas: [],
     doneListDatas: [],
     increasedId:1,
     imageFile: [],
    }
  },
  methods: {
    add(id, toDoDatas) {
      this.increasedId++;
      editMenuFunctions.close(this.toDoListDatas, this.doneListDatas);
      addButtonFunctions.addNewLabel(id, toDoDatas)
    },

    moveToDone(array1, id, array2) {
      editMenuFunctions.close(this.toDoListDatas, this.doneListDatas);
      moveFunctions.moveToDone(array1, id, array2);
    },

    moveFromDone(array1, id, array2) {
      editMenuFunctions.close(this.toDoListDatas, this.doneListDatas);
      moveFunctions.moveFromDone(array1, id, array2)
    },

    deleteAllLabels(array) {
      deleteFunctions.deleteAll(array);
    },

    deleteOneFromToDoList(array, id) {
      deleteFunctions.deleteOneLabel(array, id);
    },

    openOrCloseEditMenu(array, id, array2) {
      editMenuFunctions.editMenuOpenOrClose(array, id, array2)
    },

    uploadImages(e, id, array, imageFile){
      uploadImage.onInputChange(e, id, array, imageFile);
      editMenuFunctions.close(this.toDoListDatas, this.doneListDatas);
    }
  }
}

</script>

<style scoped>

.WorkBody {
  width: 100%;
  height: 80%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 100%;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

#toDoList {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  height: 95%;
  width: 100%;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-rows: 13% 87%;
  border-radius: 2%;
}

input:focus{
    outline: none;
}

#doneList {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  height: 95%;
  width: 90%;
  overflow:auto;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 2%;
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-rows: 13% 87%;
}

.doneData {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  width: 95%;
  margin-left: 10%;
  height: 6vh;
  line-height: 350%;
}

.doneDatas:hover {
  cursor: pointer;
}

#editDoneList {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  margin: auto;
  height: 4vh;
  width: 5vh;
}

#editDoneList:hover {
  cursor: pointer;
}

#title {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  font-size: 2.5vh;
  font-weight: bolder;
  margin-left: 10%;
  margin-top: 2%;
}

#plusButton {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  font-size: 4vh;
  font-weight: bolder;
  margin-top: 10%;
  color: grey;
}

#plusButton:hover {
  cursor: pointer;
}
#content {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  overflow: auto;

}

.datas {
  border-radius: 5%;
  width: 80%;
  height: 10vh;
  margin-left: 10%;
  border: none;
  margin-top: 5%;
  display: grid;
  grid-template-columns: 10% 65% 10% 15% ;
  grid-template-rows: 100%;
}

#checkboxInactive {
  width: 2.2vh;
  height: 2.2vh;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  margin:auto;
  top: 0;
  bottom: 0;
}

#checkboxInactive {
  cursor: pointer;
}

.inputText {
  margin-left: 2%;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  font-size: 2vh;
  overflow: auto;
  border: none;
  font-family: 'Nunito Sans';
  background-color: rgb(250, 250, 250);
  height: 100%;
  width: 100%;
}

.inputText {
  cursor:pointer; 
}

#editToDoList {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  margin: auto;
  height: 4vh;
  width: 5vh;
}

#editToDoList:hover {
  cursor: pointer;
}

#doneTitle {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  font-size: 2.5vh;
  font-weight: bolder;
  margin-left: 10%;
  margin-top: 2%;
}

#recycle {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  text-align: center;
  line-height: 300%;
}

#symbol {
  font-size: 4vh;
}

#symbol:hover {
  cursor: pointer;
}

#doneFinalList {
  width: 30vh;
  height: 8vh;
  background-color: none;
  margin-top:5%;
  width: 110%;
  display: grid;
  grid-template-columns: 10% 65% 10% 15%;
  grid-template-rows: 100%;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;  
  border-radius: 5%;
}

#checkboxActive {
  width: 2vh;
  height: 2vh;
  margin-left: 2%;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;  
  margin:auto;
  top: 0;
  bottom: 0;
}

#checkboxActive:hover {
  cursor: pointer;
}

#doneLabels {
  font-size: 2vh;
  margin-left: 2%;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  overflow: auto;
  width: 100%;
  line-height: 400%;
}

#doneLabels:hover {
  cursor: pointer;
}

#doneImage {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  overflow: auto;
}

#openMenu {
  width: 7vh;
  height: 6vh;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 50% 50%;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}

.openDoneMenu {
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 2;
  width: 7vh;
  height: 7vh;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 100%;
}

.closeDoneMenu {
  display: none;
}

#deleteLabel {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  margin: auto;
  width: 50%;
  height: 50%;
  animation: scale-in-ver-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@keyframes scale-in-ver-bottom {
  0% {
    -webkit-transform: scaleY(0);
            transform: scaleY(0);
    -webkit-transform-origin: 0% 100%;
            transform-origin: 0% 100%;
    opacity: 1;
  }
  100% {
    -webkit-transform: scaleY(1);
            transform: scaleY(1);
    -webkit-transform-origin: 0% 100%;
            transform-origin: 0% 100%;
    opacity: 1;
  }
}

#deleteLabel:hover {
  cursor: pointer;
  background-color: rgb(123, 185, 255);
}

.openToDoMenu {
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 2;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 50% 50%;
}

.closeToDoMenu {
  display: none;
}

#addPicture {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  animation: scale-in-ver-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  margin: auto;
  width: 40%;
  height: 70%;
  background-image: url('../assets/picture.png');
  background-repeat: no-repeat;
}

#addPicture:hover {
  cursor: pointer;
  background-color: rgb(123, 185, 255);
}

#deleteLabel1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  animation: scale-in-ver-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
  margin: auto;
  width: 35%;
  height: 35%;
}

#deleteLabel1:hover {
  cursor: pointer;
  background-color: rgb(123, 185, 255);
}

#inputForPicture {
  display: none;
}

.imageInList {
 max-width: 100%;

}

#over {
  overflow: auto;
}

</style>