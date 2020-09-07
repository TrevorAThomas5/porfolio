<template>
  <div>
    <div class="cardContainer">
      <aboutCard
        :style="card1Style"
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
          "<h3>Trevor Thomas</h3><p>Software Developer/Web designer<div><img src='/loc.svg' /><b> San Diego, California</b><p style='text-align:left; margin-top: 20px; font-size: 18px;'> I love working on creative, practical, and elegant solutions to computational problems. I'm currently majoring in Computer Science at UCSD.</p><div>";
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
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 50px;
  left: 50vw;
  transform: translateX(-50%);
  z-index: -10;
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