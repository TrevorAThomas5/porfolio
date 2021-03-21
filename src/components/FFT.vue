<template>
    <div>
        <div onclick="window.location.href='/#/projects';" class="backContainer">
            <img src="/left-arrow.svg" />
        </div>
        
        <div class="screen">
            <div class="selector">
                <h1 @mouseenter="slide1" :style="[h1style]">Home<hr :style="[h1stylel]"> </h1>
                <h1 @mouseenter="slide2" :style="[h2style]">Design<hr :style="[h2stylel]"> </h1>
                <h1 @mouseenter="slide3" :style="[h3style]">Database<hr :style="[h3stylel]"> </h1>
                <h1 @mouseenter="slide4" :style="[h4style]">Teamwork<hr :style="[h4stylel]"> </h1>
                <h1 @mouseenter="slide5" :style="[h5style]">Usability<hr :style="[h5stylel]"> </h1>
            </div>

            <div class="slideContainer">
                <projectCard v-bind:position="slide1Pos"></projectCard>
                <projectCard v-bind:position="slide2Pos"></projectCard>
                <projectCard v-bind:position="slide3Pos"></projectCard>
                <projectCard v-bind:position="slide4Pos"></projectCard>
                <projectCard v-bind:position="slide5Pos"></projectCard>
            </div>
        </div>

        <div class="contactContainer">
            <p class="contactE">https://github.com/jo32pilot/Food-for-Thought</p>
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
import projectCard from "./projectCard";

export default {
  name: "FFT",
  components: {
    projectCard,
  },
  data: () => {
    return {
        slide1Pos: 0,
        slide2Pos: 1,
        slide3Pos: 2,
        slide4Pos: 3,
        slide5Pos: 4,
    };
  },
  computed: {
    h1style() {
        var scale = 1
        if(this.slide1Pos == 0)
            scale = 1.1
        
        return {
            transform: `scale(${scale})`,
        }
    },
    h2style() {
        var scale = 1
        if(this.slide2Pos == 0)
            scale = 1.1
        
        return {
            transform: `scale(${scale})`,
        }
    },
    h3style() {
        var scale = 1
        if(this.slide3Pos == 0)
            scale = 1.1
        
        return {
            transform: `scale(${scale})`,
        }
    },
    h4style() {
        var scale = 1
        if(this.slide4Pos == 0)
            scale = 1.1
        
        return {
            transform: `scale(${scale})`,
        }
    },
    h5style() {
        var scale = 1
        if(this.slide5Pos == 0)
            scale = 1.1
        
        return {
            transform: `scale(${scale})`,
        }
    },
  h1stylel() {
        var scale = 0
        if(this.slide1Pos == 0)
            scale = 3.0
        
        return {
            transform: `scaleX(${scale})`,
        }
    },
    h2stylel() {
        var scale = 0
        if(this.slide2Pos == 0)
            scale = 3.0
        
        return {
            transform: `scaleX(${scale})`,
        }
    },
    h3stylel() {
        var scale = 0
        if(this.slide3Pos == 0)
            scale = 3.0
        
        return {
            transform: `scaleX(${scale})`,
        }
    },
    h4stylel() {
        var scale = 0
        if(this.slide4Pos == 0)
            scale = 3.0
        
        return {
            transform: `scaleX(${scale})`,
        }
    },
    h5stylel() {
        var scale = 0
        if(this.slide5Pos == 0)
            scale = 3.0
        
        return {
            transform: `scaleX(${scale})`,
        }
    },
  },
  methods: {
      slide1() {
        if(this.slide2Pos < this.slide1Pos)
            this.slide2Pos++;
        if(this.slide3Pos < this.slide1Pos)
            this.slide3Pos++;
        if(this.slide4Pos < this.slide1Pos)
            this.slide4Pos++;
        if(this.slide5Pos < this.slide1Pos)
            this.slide5Pos++;

        this.slide1Pos = 0;
      },
      slide2() {
        if(this.slide1Pos < this.slide2Pos)
            this.slide1Pos++;
        if(this.slide3Pos < this.slide2Pos)
            this.slide3Pos++;
        if(this.slide4Pos < this.slide2Pos)
            this.slide4Pos++;
        if(this.slide5Pos < this.slide2Pos)
            this.slide5Pos++;

        this.slide2Pos = 0;
      },
      slide3() {
        if(this.slide2Pos < this.slide3Pos)
            this.slide2Pos++;
        if(this.slide1Pos < this.slide3Pos)
            this.slide1Pos++;
        if(this.slide4Pos < this.slide3Pos)
            this.slide4Pos++;
        if(this.slide5Pos < this.slide3Pos)
            this.slide5Pos++;

        this.slide3Pos = 0;
      },
      slide4() {
        if(this.slide2Pos < this.slide4Pos)
            this.slide2Pos++;
        if(this.slide3Pos < this.slide4Pos)
            this.slide3Pos++;
        if(this.slide1Pos < this.slide4Pos)
            this.slide1Pos++;
        if(this.slide5Pos < this.slide4Pos)
            this.slide5Pos++;

        this.slide4Pos = 0;
      },
      slide5() {
        if(this.slide2Pos < this.slide5Pos)
            this.slide2Pos++;
        if(this.slide3Pos < this.slide5Pos)
            this.slide3Pos++;
        if(this.slide4Pos < this.slide5Pos)
            this.slide4Pos++;
        if(this.slide1Pos < this.slide5Pos)
            this.slide1Pos++;

        this.slide5Pos = 0;
      },
  },
};
</script>

<style>
.slideContainer {
    position: relative;
    width: 100px;
    height: 100px;
}

.backContainer {
  position: fixed;
  top: 35px;
  left: 25px;
  width: 50px;
  z-index: 10;
  cursor: pointer;
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

.screen {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 30vh;
    margin-left: auto;
    margin-right: 20vw;
}

.selector {
    margin-right: 200px;
    font-size: 17px;
}

.selector h1{
    margin: 0px;
    margin-bottom: 10px;
    transform-origin: left;
    transition: 0.3s;
    font-weight: 50;
}

hr {
    position: relative;
    top: -15px;
    right: -6px;
    transform: scaleX(0);
    transform-origin: left;
    transition: 0.3s;
    margin: 0px;
    color: black;
    border: 1px dotted black;
}



</style>
