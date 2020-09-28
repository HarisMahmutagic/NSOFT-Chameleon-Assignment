<template>
  <div class="WorkBody">
    <div id="toDoList">
      <div id="title">To-do list</div>

      <div title="Add new label" id="plusButton">
        <div v-on:click="add(increasedId, toDoListDatas)" id="Plus">+</div>
      </div>

      <draggable
        :list="toDoListDatas"
        group="datas"
        :move="closeAndCheck"
        id="content"
      >
        <div class="datas" v-for="data in toDoListDatas" :key="data.id">
          <img
            id="checkboxInactive"
            src="../assets/checkbox.png"
            v-on:click="moveToDone(toDoListDatas, data.id, doneListDatas)"
          />
          <input
            class="inputText"
            v-model="data.text"
            v-if="data.image === false"
          />
          <img
            class="imageInList"
            :src="data.text"
            v-if="data.image === true"
          />
          <img
            title="Edit"
            id="editToDoList"
            src="../assets/dots.png"
            v-on:click="
              openOrCloseEditMenu(toDoListDatas, data.id, doneListDatas)
            "
          />
          <div
            v-bind:class="{
              openToDoMenu: data.editMenu,
              closeToDoMenu: !data.editMenu,
            }"
          >
            <label title="Add new Image" id="addPicture">
              <img id="smallImage" src="../assets/picture.png" />
              <a id="textImage">Image</a>
              <input
                type="file"
                id="inputForPicture"
                accept="image/*"
                @change="
                  uploadImages($event, data.id, toDoListDatas, imageFile)
                "
              />
            </label>
            <label
              id="delete1"
              v-on:click="deleteOneFromToDoList(toDoListDatas, data.id)"
            >
              <img title="Delete" id="deleteLabel1" src="../assets/trash.png" />
              <a id="textDelete">Delete</a>
            </label>
          </div>
        </div>
      </draggable>
    </div>

    <div id="doneList">
      <div id="doneTitle">
        <a id="doneT">Done</a>
      </div>

      <div title="Delete all from Done List" id="recycle">
        <img
          src="../assets/trashcan.png"
          id="symbol"
          v-on:click="deleteAllLabels(doneListDatas)"
        />
      </div>

      <draggable
        :list="doneListDatas"
        group="datas"
        :move="closeAndCheck"
        class="doneData"
      >
        <div id="doneFinalList" v-for="data in doneListDatas" :key="data.id">
          <img
            id="checkboxActive"
            src="../assets/checkbox active.png"
            v-on:click="moveFromDone(doneListDatas, data.id, toDoListDatas)"
          />
          <div id="doneLabels" v-if="data.image === false">{{ data.text }}</div>
          <img
            class="imageInList"
            :src="data.text"
            v-if="data.image === true"
          />
          <img
            id="editDoneList"
            src="../assets/dots.png"
            v-on:click="
              openOrCloseEditMenu(toDoListDatas, data.id, doneListDatas)
            "
          />
          <div
            v-on:click="deleteOneFromToDoList(doneListDatas, data.id)"
            v-bind:class="{
              openDoneMenu: data.editMenu,
              closeDoneMenu: !data.editMenu,
            }"
          >
            <img id="deleteLabel" src="../assets/trash.png" />
            <a id="textDelete1">Delete</a>
          </div>
        </div>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";

import addButtonFunctions from "../components/Functions/addButtonFunctions";
import editMenuFunctions from "../components/Functions/editMenuFunctions";
import moveFunctions from "../components/Functions/moveFunctions";
import deleteFunctions from "../components/Functions/deleteFunctions";
import uploadImage from "../components/Functions/uploadImage";
import { mapGetters } from "vuex";

export default {
  name: "WorkBody",
  components: {
    draggable,
  },
  data() {
    return {
      toDoListDatas: [],
      doneListDatas: [],
      increasedId: 1,
      imageFile: [],
    };
  },
  computed: mapGetters(["LogedIn"]),
  created() {
    // In local storage(vuex) we have const "LogedIn". Default it's false.
    // When user click to Login, it will become true.
    // Since this is SPA application. There wont be any loading.
    // In that case, user also wont be able to reload page.
    // By clicking reload in "Workspace" will be automaticaly loged out.

    if (this.LogedIn === false) {
      this.$router.push("/");
    }
  },

  methods: {
    add(id, toDoDatas) {
      this.increasedId++;
      editMenuFunctions.close(this.toDoListDatas, this.doneListDatas);
      addButtonFunctions.addNewLabel(id, toDoDatas);
    },
    moveToDone(array1, id, array2) {
      editMenuFunctions.close(this.toDoListDatas, this.doneListDatas);
      moveFunctions.moveToDone(array1, id, array2);
    },

    moveFromDone(array1, id, array2) {
      editMenuFunctions.close(this.toDoListDatas, this.doneListDatas);
      moveFunctions.moveFromDone(array1, id, array2);
    },

    deleteAllLabels(array) {
      editMenuFunctions.close(this.toDoListDatas, this.doneListDatas);
      deleteFunctions.deleteAll(array);
    },

    deleteOneFromToDoList(array, id) {
      deleteFunctions.deleteOneLabel(array, id);
    },

    openOrCloseEditMenu(array, id, array2) {
      editMenuFunctions.editMenuOpenOrClose(array, id, array2);
    },

    uploadImages(e, id, array, imageFile) {
      uploadImage.onInputChange(e, id, array, imageFile);
      editMenuFunctions.close(this.toDoListDatas, this.doneListDatas);
    },

    close() {
      editMenuFunctions.close(this.toDoListDatas, this.doneListDatas);
    },
    closeAndCheck(evt) {
      editMenuFunctions.close(this.toDoListDatas, this.doneListDatas);
      // Next will check if user are trying to move one empty label by dragging.
      // If yes, dragging wont work. Label needs to have at least one character.
      return evt.draggedContext.element.text.length > 0;
    },
  },
};
</script>

<style scoped>
.WorkBody {
  width: 100%;
  min-height: 76%;
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
  width: 70%;
  min-height: 98%;
  margin-left: 20%;
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-rows: 10vh 90%;
  border-radius: 2%;
  background-color: #f3f3fb;
}

input:focus {
  outline: none;
}

#doneList {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  width: 73%;
  min-height: 98%;
  margin-left: 5%;
  border-radius: 2%;
  background-color: #f3f3fb;
  display: grid;
  grid-template-columns: 80% 20%;
  grid-template-rows: 10vh 90%;
}

.doneData {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  margin-left: 10%;
  width: 115%;
}

#editDoneList {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  margin: auto;
  height: 3vh;
  width: 4vh;
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
  margin-left: 6%;
  margin-top: 4%;
}

#plusButton {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  margin-top: 15%;
  margin-left: 25%;
  color: grey;
}

#Plus {
  background-color: #e8ecec;
  font-size: 5vh;
  border-radius: 50%;
  text-align: center;
  width: 4.5vh;
  height: 4.5vh;
  line-height: 80%;
}

#Plus:hover {
  cursor: pointer;
}

#content {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 2;
  grid-row-end: 3;
  border-top: 1px solid rgb(220, 220, 220);
}

.datas {
  width: 90%;
  background-color: white;
  min-height: 8vh;
  max-height: 500px;
  margin-left: 4%;
  border: none;
  margin-top: 5%;
  border-radius: 7%;
  display: grid;
  grid-template-columns: 10% 78% 10% 2%;
  grid-template-rows: 100%;
}

#checkboxInactive {
  width: 2.2vh;
  height: 2.2vh;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  margin: auto;
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
  background-color: rgb(255, 255, 255);
  height: 100%;
  width: 100%;
}

.inputText:hover {
  cursor: grab;
}

#editToDoList {
  grid-column-start: 3;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 2;
  margin: auto;
  height: 3vh;
  width: 4vh;
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
  margin-top: 4%;
  border-bottom: 1px solid rgb(220, 220, 220);
}
#doneT {
  margin-left: 10%;
}
#recycle {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  text-align: center;
  line-height: 8vh;
  border-bottom: 1px solid rgb(220, 220, 220);
}

#symbol {
  height: 4vh;
  width: 4vh;
}

#symbol:hover {
  cursor: pointer;
}

#doneFinalList {
  width: 92%;
  min-height: 8vh;
  max-height: 500px;
  margin-top: 5%;
  display: grid;
  grid-template-columns: 10% 78% 10% 2%;
  grid-template-rows: 100%;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  border-radius: 7%;
  background-color: white;
}

#checkboxActive {
  width: 2vh;
  height: 2vh;
  margin-left: 2%;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  margin: auto;
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
  background-color: rgb(255, 255, 255);
}

#doneLabels:hover {
  cursor: grab;
}

#doneImage {
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
  overflow: auto;
}

.openDoneMenu {
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 2;
  align-content: center;
  position: relative;
  right: 2200%;
  bottom: -100%;
  background-color: white;
  width: 20vh;
  height: 4.5vh;
  box-shadow: 0px 5px 5px 3px rgb(200, 200, 200);
  animation: scale-in-ver-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.openDoneMenu:hover {
  cursor: pointer;
  background-color: rgb(230, 230, 230);
}

.closeDoneMenu {
  display: none;
}

#deleteLabel {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  position: fixed;
  margin-top: 4%;
  width: 2.5vh;
  height: 2.5vh;
  animation: scale-in-ver-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
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
}

.openToDoMenu {
  grid-column-start: 4;
  grid-column-end: 5;
  grid-row-start: 1;
  grid-row-end: 2;
  position: relative;
  align-content: center;
  right: 2200%;
  bottom: -100%;
  background-color: white;
  width: 20vh;
  height: 8vh;
  box-shadow: 0px 5px 5px 3px rgb(200, 200, 200);
  animation: scale-in-ver-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 55% 45%;
}

.closeToDoMenu {
  display: none;
}

#addPicture {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
  background-color: white;
  margin-bottom: 2%;
  display: grid;
  border-bottom: 1px solid rgb(220, 220, 220);
  grid-template-columns: 20% 40% 40%;
  grid-template-rows: 100%;
}

#addPicture:hover {
  cursor: pointer;
  background-color: rgb(230, 230, 230);
}

#inputForPicture {
  display: none;
}

.imageInList {
  max-width: 100%;
  margin: auto;
  max-height: 500px;
}

.imageInList:hover {
  cursor: grab;
}

#over {
  overflow: auto;
}

#smallImage {
  width: 3vh;
  height: 2.5vh;
  margin-left: 2%;
  margin: auto;
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 2;
}

#textImage {
  font-size: 1.7vh;
  margin: auto;
  margin-left: 5%;
  margin-top: 11%;
  grid-column-start: 2;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 2;
}

#delete1 {
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  height: 100%;
}

#delete1:hover {
  cursor: pointer;
  background-color: rgb(230, 230, 230);
}

#deleteLabel1 {
  width: 2.5vh;
  height: 2.5vh;
  position: fixed;
  margin-left: 3%;
}

#textDelete {
  font-size: 1.7vh;
  margin: auto;
  margin-left: 21%;
  position: fixed;
  margin-top: 2%;
}

#textDelete1 {
  font-size: 1.7vh;
  margin-left: 18%;
  position: fixed;
  margin-top: 5%;
}

@media screen and (max-width: 600px) and (orientation: portrait) {
  .WorkBody {
    width: 100%;
    min-height: 75%;
    flex-direction: column;
    overflow: auto;
    display: flex;
    margin: auto;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
  }

  #toDoList {
    grid-auto-rows: 100%;
    width: 95%;
    left: 0;
    right: 0;
    min-height: 100%;
    margin: auto;
    display: grid;
    grid-row-gap: 10px;
    grid-template-columns: 80% 20%;
    grid-template-rows: 10vw 90%;
    border-radius: 2%;
    background-color: #f3f3fb;
  }

  input:focus {
    outline: none;
  }

  #doneList {
    width: 95%;
    min-height: 100%;
    border-radius: 2%;
    margin: auto;
    margin-top: 5%;
    background-color: #f3f3fb;
    display: grid;
    grid-template-columns: 80% 20%;
    grid-template-rows: 13vw 90%;
  }
  #title {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    font-size: 4vw;
    font-weight: bolder;
    margin-left: 10%;
    margin-top: 5%;
  }

  #plusButton {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    font-size: 6vw;
    font-weight: bolder;
    margin-top: 15%;
    color: grey;
  }

  #Plus {
    background-color: rgb(221, 221, 221);
    font-size: 6vw;
    font-weight: bolder;
    border-radius: 50%;
    text-align: center;
    width: 7vw;
    height: 7vw;
    line-height: 110%;
    text-align: center;
  }
  #content {
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 3;
    border-top: 1px solid rgb(220, 220, 220);
  }

  .datas {
    width: 90%;
    background-color: white;
    min-height: 8vw;
    max-height: 500px;
    margin-left: 4%;
    border: none;
    margin-top: 5%;
    border-radius: 7%;
    display: grid;
    grid-template-columns: 10% 78% 10% 2%;
    grid-template-rows: 100%;
  }

  #checkboxInactive {
    width: 3vw;
    height: 3vw;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    margin: auto;
    top: 0;
    bottom: 0;
  }

  .inputText {
    margin-left: 2%;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    font-size: 3vw;
    overflow: auto;
    border: none;
    background-color: rgb(255, 255, 255);
    height: 100%;
    width: 100%;
  }

  #editToDoList {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
    margin: auto;
    height: 4vw;
    width: 5vw;
  }

  .doneData {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
    margin-left: 10%;
    width: 115%;
  }

  #editDoneList {
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 2;
    margin: auto;
    height: 4vw;
    width: 5vw;
  }

  #editToDoList:hover {
    cursor: pointer;
  }

  #doneTitle {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    font-size: 4vw;
    font-weight: bolder;
    margin-top: 5%;
    border-bottom: 1px solid rgb(220, 220, 220);
  }
  #doneT {
    margin-left: 10%;
  }
  #recycle {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    line-height: 150%;
    border-bottom: 1px solid rgb(220, 220, 220);
    text-align: start;
    margin-top: 15%;
    margin-left: 30%;
  }

  #symbol {
    height: 4vw;
    width: 4vw;
  }

  #symbol:hover {
    cursor: pointer;
  }

  #doneFinalList {
    width: 92%;
    min-height: 8vw;
    max-height: 300px;
    margin-top: 5%;
    display: grid;
    grid-template-columns: 10% 78% 10% 2%;
    grid-template-rows: 100%;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    border-radius: 7%;
    background-color: white;
  }

  #checkboxActive {
    width: 3vw;
    height: 3vw;
    margin-left: 2%;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    margin: auto;
    top: 0;
    bottom: 0;
  }

  #doneLabels {
    font-size: 3vw;
    margin-left: 2%;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    overflow: auto;
    width: 100%;
    line-height: 250%;
    background-color: rgb(255, 255, 255);
  }

  #doneImage {
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
    overflow: auto;
  }

  .openDoneMenu {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 2;
    align-content: center;
    margin-left: 17%;
    background-color: white;
    width: 20vw;
    height: 5vw;
    box-shadow: 0px 5px 5px 3px rgb(200, 200, 200);
    animation: scale-in-ver-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
  }

  .closeDoneMenu {
    display: none;
  }

  #deleteLabel {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
    position: fixed;
    margin-top: 5%;
    width: 3.5vw;
    height: 3.5vw;
    animation: scale-in-ver-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
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

  .openToDoMenu {
    grid-column-start: 4;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 2;
    align-content: center;
    margin-left: 50%;
    margin-top: 0%;
    background-color: white;
    width: 20vw;
    height: 8vw;
    box-shadow: 0px 5px 5px 3px rgb(200, 200, 200);
    animation: scale-in-ver-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
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
    background-color: white;
    display: grid;
    border-bottom: 1px solid rgb(220, 220, 220);
    grid-template-columns: 20% 40% 40%;
    grid-template-rows: 100%;
  }

  #inputForPicture {
    display: none;
  }

  .imageInList {
    max-width: 100%;
    margin: auto;
    max-height: 300px;
  }

  #over {
    overflow: auto;
  }

  #smallImage {
    width: 3vw;
    height: 3vw;
    margin-left: 2%;
    margin: auto;
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  #textImage {
    font-size: 3vw;
    line-height: 100%;
    margin: auto;
    margin-left: 5%;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }

  #delete1 {
    grid-column-start: 1;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 3;
    height: 100%;
  }

  #deleteLabel1 {
    position: fixed;
    width: 3.5vw;
    height: 3.5vw;
    left: -2%;
    top: 50%;
  }

  #textDelete {
    font-size: 3vw;
    position: absolute;
    margin-left: 22%;
    margin-top: -2%;
  }

  #textDelete1 {
    font-size: 3vw;
    position: fixed;
    left: 5%;
    top: -5%;
  }
}
</style>
