<template>
  <div class="Workspace">
    <Header />
    <WorkBody />
  </div>
</template>

<script>
import Header from "../components/Header";
import WorkBody from "../components/WorkBody";

export default {
  name: "Workspace",

  components: {
    Header,
    WorkBody,
  },
};
</script>

<style scoped>
.Workspace {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  position: absolute;
}
</style>