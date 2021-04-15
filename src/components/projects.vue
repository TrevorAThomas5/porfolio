<template>
  <div>
    <div onclick="window.location.href='/#/';" class="backContainer">
      <img src="/left-arrow.svg" />
    </div>

    <div class="projectsContainer">
      <div class="FFT">
        <FFTcard v-bind:isBlurred="this.FFTblur" v-bind:touchFunction="hover" v-bind:off="off"
          v-bind:clickFunction="openProjects">
          <h1 slot="header">Food For Thought</h1>
          <div
            slot="content"
          >Plan your meals. Manage your ingredients. Get new recommendations.</div>
        </FFTcard>
      </div>
      <div class="triContainer">
        <div class="DS">
          <DScard v-bind:clickFunction="openCatinal" v-bind:isBlurred="this.DSblur" v-bind:touchFunction="hover" v-bind:off="off">
            <h1 slot="header">Catinal.io</h1>
            <div
              slot="content"
            >Take care of your own digital pet cat. Return every day to see how he's doing.</div>
          </DScard>
        </div>
        <div class="smallDoubleContainer">
          <div class="LG">
            <LGcard v-bind:clickFunction="openLG" v-bind:isBlurred="this.LGblur" v-bind:touchFunction="hover" v-bind:off="off">
              <h1 slot="header">Level Generator</h1>
              <div slot="content">Create randomized dungeon layouts to fight and explore through.</div>
            </LGcard>
          </div>
          <div class="OT">
            <OTcard v-bind:clickFunction='openAnn' v-bind:isBlurred="this.OTblur" v-bind:touchFunction="hover" v-bind:off="off">
              <h1 slot="header">Anniversary Website</h1>
              <div slot="content">See my html/css design skills put to task in this website I built for my girlfriend.</div>
            </OTcard>
          </div>
        </div>
      </div>
      <div class="bigDoubleContainer">
        <div class="GH">
          <GHcard v-bind:isBlurred="this.GHblur" v-bind:touchFunction="hover" v-bind:off="off"
            v-bind:clickFunction="openGH">
            <h1 slot="header">Ghost Engine</h1>
            <div
              slot="content"
            >First person, 3D rendering engine based off the Doom engine.</div>
          </GHcard>
        </div>
        <div class="B9">
          <B9card v-bind:isBlurred="this.B9blur" v-bind:touchFunction="hover" v-bind:off="off"
            v-bind:clickFunction="openTodo">
            <h1 slot="header">Todo App</h1>
            <div slot="content">Track your daily tasks.</div>
          </B9card>
        </div>
      </div>
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
import FFTcard from "./FFTcard.vue";
import DScard from "./DScard.vue";
import LGcard from "./LGcard.vue";
import OTcard from "./OTcard.vue";
import GHcard from "./GHcard.vue";
import B9card from "./B9card.vue";

export default {
  name: "projects",
  components: {
    FFTcard,
    DScard,
    LGcard,
    OTcard,
    GHcard,
    B9card,
  },
  data: () => {
    return {
      FFTblur: false,
      DSblur: false,
      LGblur: false,
      OTblur: false,
      GHblur: false,
      B9blur: false,
    };
  },
  methods: {
    hover(id) {
      switch (id) {
        case "FFT":
          this.FFTblur = false;
          this.DSblur = true;
          this.LGblur = true;
          this.OTblur = true;
          this.GHblur = true;
          this.B9blur = true;
          break;
        case "DS":
          this.FFTblur = true;
          this.DSblur = false;
          this.LGblur = true;
          this.OTblur = true;
          this.GHblur = true;
          this.B9blur = true;
          break;
        case "LG":
          this.FFTblur = true;
          this.DSblur = true;
          this.LGblur = false;
          this.OTblur = true;
          this.GHblur = true;
          this.B9blur = true;
          break;
        case "OT":
          this.FFTblur = true;
          this.DSblur = true;
          this.LGblur = true;
          this.OTblur = false;
          this.GHblur = true;
          this.B9blur = true;
          break;
        case "GH":
          this.FFTblur = true;
          this.DSblur = true;
          this.LGblur = true;
          this.OTblur = true;
          this.GHblur = false;
          this.B9blur = true;
          break;
        case "B9":
          this.FFTblur = true;
          this.DSblur = true;
          this.LGblur = true;
          this.OTblur = true;
          this.GHblur = true;
          this.B9blur = false;
          break;
      }
    },

    off() {
      this.FFTblur = false;
      this.DSblur = false;
      this.LGblur = false;
      this.OTblur = false;
      this.GHblur = false;
      this.B9blur = false;
    },

    openProjects() {
      window.location.href = "/#/FFT";
    },

    openGH() {
        window.location.href = "/#/GH";
    },

    openTodo() {
      window.location.href = 'http://trevor.hanaroenterprise.com/todo';
    },

    openCatinal() {
      window.location.href = 'http://tina.hanaroenterprise.com'
    },

    openLG() {
      window.location.href = '/#/LG';
    },

    openAnn() {
        window.location.href = 'http://trevor.hanaroenterprise.com/anniversary/';
    },
  },
};
</script>

<style scoped>
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
  font-size: 14px;
}

.contactE { 
 text-align: left;
 font-weight: 100;
  font-family: "Playfair Display";
  font-size: 12px;
}

.icon1,
.icon2 {
  height: 14px;
  cursor: pointer;
}

.icon1 {
  margin-left: 7px;
}

.icon2 {
  margin-left: 7px;
}

.mailWrapper {
  height: 14px;
  width: 14px;
}

.contactInfo {
    display: flex;
    flex-direction: row;
}

.backContainer {
  position: fixed;
  top: 35px;
  left: 25px;
  width: 30px;
  z-index: 10;
  cursor: pointer;
}

.projectsContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20vh;
}

.triContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.smallDoubleContainer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.bigDoubleContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>

