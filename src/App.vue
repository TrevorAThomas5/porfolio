<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
@font-face {
  font-family: "Fonti";
  src: url("/VVF.ttf") format("truetype");
}

body {
  font-family: "Fonti";
  font-size: 14px;
  font-weight: 500;
  background-color: #fff1e6;
  -webkit-font-smoothing: antialiased;
}

h3 {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 40px;
  font-weight: 1000;
}

p {
  margin-top: 0px;
  margin-bottom: 3px;
}

#app {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
