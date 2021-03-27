<template>
  <div class="top">

 

    <div class="cardContainer">
      <aboutCard
        v-bind:clickFunction="this.expandAbout"
        v-bind:offAny="offAny"
        v-bind:touchFunction="on1"
        v-bind:isBlurred="card1Blur"
        id="card"
        image="/headshot.png"
      >
        <h1 slot="header" :style="headerStyle">About Me</h1>
        <div
          slot="content"
          :style="contentStyle"
          v-html="description"
        >Programming, web development, computer science.</div>
      </aboutCard>
      <card
        v-bind:clickFunction="openProjects"
        v-bind:offAny="offAny"
        v-bind:touchFunction="on2"
        v-bind:isBlurred="card2Blur"
        id="card"
        image="/mash.png"
      >
        <h1 slot="header">Projects</h1>
        <div slot="content">See some stuff that I'm working on.</div>
      </card>
      <card
        v-bind:clickFunction="openPDF"
        v-bind:offAny="offAny"
        v-bind:touchFunction="on3"
        v-bind:isBlurred="card3Blur"
        id="card"
        image="/blog2.png"
      >
        <h1 slot="header">Resume</h1>
        <div slot="content">Find out if I'm the right fit for you.</div>
      </card>
    </div>

    <div class="contactContainer">
            <p class="contactE">tathomas@ucsd.edu</p>
            <p class="contactE">TrevorAThomas5@gmail.com</p>
            <div class="contactInfo">
                <p class="contact">contact me ——</p>
                <img
                class="icon2"
                onclick="window.location.href='https://github.com/TrevorAThomas5'"
                src="/github-brands.svg"
                />
                <div class="mailWrapper">
                    <img
                    class="icon1"
                    onclick="window.location.href='https://www.linkedin.com/in/trevor-thomas-67988b1b6/'"
                    src="/envelope-regular.svg"
                    />
                </div>
            </div>
        </div>
  </div>
</template>

<script>
import card from "./card";
import aboutCard from "./aboutCard";

export default {
  name: "home",
  components: {
    card,
    aboutCard,
  },
  data: () => {
    return {
      card1Blur: false,
      card2Blur: false,
      card3Blur: false,
      notExpanded: true,
      description: "Programming, web development, computer science.",
    };
  },
  computed: {
    headerStyle() {
      if (this.notExpanded === false) {
        return {
          fontSize: "0px",
        };
      } else {
        return {};
      }
    },
    contentStyle() {
      if (this.notExpanded === false) {
        return {
          textShadow: "none",
          color: "black",
          opacity: "1",
          fontSize: "20px",
          textAlign: "center",
          margin: "0px",
        };
      } else {
        return {};
      }
    },
  },
  methods: {
    openPDF() {
      window.open("/resume.pdf");
    },
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
    expandAbout() {
      if (this.notExpanded === false) {
        this.description = "Programming, web development, computer science.";

        this.notExpanded = true;
      } else {
        this.description =
          "<h3><b>Trevor Thomas</b></h3><p>Software Developer/Web designer<div><img src='/loc.svg' /><b> San Diego, California</b><p style='text-align:left; margin-top: 20px; font-size: 18px; color: hsl(0, 0%, 29%); font-weight: 100;'> I love working on creative, practical, and elegant solutions to computational problems. I'm currently majoring in Computer Science at UCSD.</p><div>";
        this.notExpanded = false;
      }
    },
    openProjects() {
      window.location.href = "/#/projects";
    },
  },
};
</script>

<style scoped>
.sqr1 {
  background: black;
  height: 50%;
  width: 50%;
  animation: rotate infinite linear;
  mix-blend-mode: multiply;
  margin: 0 -8%;
  animation-duration: 2s;
}

.sqr2 {
  background: black;
  height: 40%;
  width: 50%;
  animation: rotate infinite linear;
  mix-blend-mode: multiply;
  margin: 0 -8%;
  animation-direction: reverse;
  animation-duration: 4s;
}

.sqr3 {
    background: black;
  height: 55%;
  width: 50%;
  animation: rotate infinite linear;
  mix-blend-mode: multiply;
  margin: 0 -8%;
  animation-duration: 6s;
}

.sqr4 {
    background: black;
  width: 50%;
  height: 60%;
  animation: rotate infinite linear;
  mix-blend-mode: multiply;
  animation-direction: reverse;
  margin: 0 -8%;
  animation-duration: 3s;
}


.trevorContainer {
    height: 500px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    mix-blend-mode: difference;
}

@keyframes rotate {
  100%{transform: rotate(360deg)}
}

.top {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.trevor {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    text-align: center;
    animation: text 1.5s infinite;
    letter-spacing: .3em;
    font-size: 200px;
}

@keyframes text {
  0% {text-shadow: 5px 0px 0px white;}
  10%{text-shadow: -5px -5px 0px gray;}
  20% {text-shadow: 5px 0px 0px DarkGray;}
  30% {text-shadow: 5px 0px 0px DarkSlateGrey;}
  40% {text-shadow: 5px 5px 0px DimGrey;}
  50%{text-shadow:  0px -5px 0px FloralWhite;}
  60% {text-shadow: 0px 5px 0px Gainsboro;}
  70% {text-shadow: 5px 0px 0px GhostWhite;}
  80% {text-shadow: 5px -10px 0px LightGray;}
  90%{text-shadow: 5px 5px 0px LightSteelBlue;}
  100% {text-shadow: 5px 0px 0px LightSlateGrey;}
}

.blah {
  text-align: left;
}

.cardContainer {
  margin-top: 30vh;
  display: flex;
}
#card {
  transition: 0.6s;
}

.contactContainer {
  text-align: left;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: left;
  position: fixed;
  bottom: 50px;
  left: 50vw;
  transform: translateX(-50%);
  z-index: -10;
}

.contact { 
 text-align: left;
 font-weight: 100;
  font-family: "Playfair Display";
  font-size: 20px;
}

.contactE { 
 text-align: left;
 font-weight: 100;
  font-family: "Playfair Display";
  font-size: 15px;
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

.contactInfo {
    display: flex;
    flex-direction: row;
}
</style>
