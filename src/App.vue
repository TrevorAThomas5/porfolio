<template>
  <div id="app">
    <div class="cardContainer">
      <card
        v-bind:offAny="offAny"
        v-bind:touchFunction="on1"
        v-bind:isBlurred="card1Blur"
        id="card"
        image="/headshot.png"
      >
        <h1 slot="header">About Me</h1>
        <p slot="content">Programming, web development, computer science.</p>
      </card>
      <card
        v-bind:offAny="offAny"
        v-bind:touchFunction="on2"
        v-bind:isBlurred="card2Blur"
        id="card"
        image="/mash.png"
      >
        <h1 slot="header">Projects</h1>
        <p slot="content">See some stuff that I'm working on.</p>
      </card>
      <card
        v-bind:offAny="offAny"
        v-bind:touchFunction="on3"
        v-bind:isBlurred="card3Blur"
        id="card"
        image="/blog2.png"
      >
        <h1 slot="header">Resume</h1>
        <p slot="content">Find out if I'm the right fit for you.</p>
      </card>
    </div>
    <div class="contactContainer">
      <p class="contact">contact me ——</p>
      <img
        class="icon2"
        onclick="window.location.href='https://github.com/TrevorAThomas5'"
        src="/github-brands.svg"
      />
      <div class="mailWrapper">
        <img class="icon1" src="/envelope-regular.svg" />
      </div>
    </div>
  </div>
</template>

<script>
import card from "./components/card";

export default {
  name: "App",
  components: {
    card,
  },
  data: () => {
    return {
      card1Blur: false,
      card2Blur: false,
      card3Blur: false,
    };
  },
  methods: {
    on1() {
      this.card1Blur = false;
      this.card2Blur = true;
      this.card3Blur = true;
    },
    on2() {
      this.card1Blur = true;
      this.card2Blur = false;
      this.card3Blur = true;
    },
    on3() {
      this.card1Blur = true;
      this.card2Blur = true;
      this.card3Blur = false;
    },
    offAny() {
      this.card1Blur = false;
      this.card2Blur = false;
      this.card3Blur = false;
    },
  },
};
</script>

<style>
@font-face {
  font-family: "Fonti";
  src: url(/VVF.ttf) format("truetype");
}

body {
  font-family: "Fonti";
  font-size: 14px;
  font-weight: 500;
  background-color: #fff1e6;
  -webkit-font-smoothing: antialiased;
}

p {
  line-height: 1.5em;
}

h1 + p,
p + p {
  margin-top: 10px;
  width: 100%;
}

#app {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.cardContainer {
  margin-top: 30vh;
  display: flex;
}
#card {
  transition: 0.6s;
}
#card:hover {
  transform: scale(1.1);
}

.contactContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 25vh;
}

.contact {
  font-family: "Playfair Display";
  font-size: 20px;
}

.icon1,
.icon2 {
  height: 20px;
  cursor: pointer;
}

.icon1 {
  margin-left: 7px;
}
.icon2 {
  margin-left: 7px;
}
.mailWrapper {
  height: 20px;
  width: 20px;
}
.mailWrapper::after {
  content: "tathomas@ucsd.edu TrevorAThomas5@gmail.com";
  display: block;
  position: relative;
  top: -65px;
  right: 158px;
  transition: 0.1s;
}
</style>
