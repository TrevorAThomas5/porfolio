<template>
  <div class="bar">
    <h1>Home</h1>
    <h1>About</h1>
    <h1>Projects</h1>
    <h1>Resume</h1>
  </div>
</template>

<script>
export default {
  name: "navbar",
  props: {},
  data: () => {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bar {
  display: flex;
  flex-direction: row;
  list-style: none;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
}
.bar::after {
  content: "";
  height: 40px;
  width: 50vw;
  background: black;
  top: 0;

  margin-left: 50px;

  z-index: -1;
}
.bar::before {
  content: "";
  height: 40px;
  width: 50vw;
  background: black;
  top: 0;
  margin-right: 50px;
  z-index: -1;
}

.bar h1 {
  font-family: "Playfair Display";
  position: relative;
  text-align: center;
  margin-left: 50px;
  margin-right: 50px;
}
</style>