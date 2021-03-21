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
          >Plan your meals. Manage your ingredients. Get new recipe reccommendations.</div>
        </FFTcard>
      </div>
      <div class="triContainer">
        <div class="DS">
          <DScard v-bind:isBlurred="this.DSblur" v-bind:touchFunction="hover" v-bind:off="off">
            <h1 slot="header">Dream Sweeper</h1>
            <div
              slot="content"
            >Fight your way through a long lost kingdom, while also trying to keep up on your assignments.</div>
          </DScard>
        </div>
        <div class="smallDoubleContainer">
          <div class="LG">
            <LGcard v-bind:isBlurred="this.LGblur" v-bind:touchFunction="hover" v-bind:off="off">
              <h1 slot="header">Level Generator</h1>
              <div slot="content">Create randomized dungeon layouts to fight and explore through.</div>
            </LGcard>
          </div>
          <div class="OT">
            <OTcard v-bind:isBlurred="this.OTblur" v-bind:touchFunction="hover" v-bind:off="off">
              <h1 slot="header">OpenGL Tinkering</h1>
              <div slot="content">See some of the graphical 3D rendering algorithms I have written.</div>
            </OTcard>
          </div>
        </div>
      </div>
      <div class="bigDoubleContainer">
        <div class="GH">
          <GHcard v-bind:isBlurred="this.GHblur" v-bind:touchFunction="hover" v-bind:off="off">
            <h1 slot="header">Ghost Hunter</h1>
            <div
              slot="content"
            >Shoot ghosts in this faced-paced FPS that uses my own custom software renderer.</div>
          </GHcard>
        </div>
        <div class="B9">
          <B9card v-bind:isBlurred="this.B9blur" v-bind:touchFunction="hover" v-bind:off="off"
            v-bind:clickFunction="openTodo">
            <h1 slot="header">Todo App</h1>
            <div slot="content">Keep track of your daily tasks and monitor your progress.</div>
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

    openTodo() {
      window.location.href = 'http://tina.hanaroenterprise.com/todo';
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

.backContainer {
  position: fixed;
  top: 35px;
  left: 25px;
  width: 50px;
  z-index: 10;
  cursor: pointer;
}

.projectsContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 15vh;
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

