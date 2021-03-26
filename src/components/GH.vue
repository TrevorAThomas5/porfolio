<template>
    <div>
        <div onclick="window.location.href='/#/projects';" class="backContainer">
            <img src="/left-arrow.svg" />
        </div>
       
        <div class="scrollContainer">
            <h1 class="scrollText">Scroll</h1>
            <div class="scrollImg">
                <img src="/arrow-down-solid.svg" />
            </div>
        </div>
        
        <div class="scrollBox">
            <cardX class="fade-in" v-bind:width="800" v-bind:height="600"></cardX>
            <div class="centerIt">
                <cardX class="fade-in" v-bind:width="300" v-bind:height="300">
                    <h1 slot="header">What is it?</h1>
                    <p slot="content">---<br>A raycast render engine heavily based on id Tech 1, more commonly known as the Doom engine.</p>
                </cardX>
                <cardX class="fade-in" v-bind:width="300" v-bind:height="300">
                <p slot="content">My goal with this project was to flex my C++ muscles, mainly in regards to optimization.<br><br>This engine utilizes exclusively the CPU, meaning there is little room for wasted resources.</p>
                </cardX>
            </div>
            <div class="centerIt">
                <cardX class="fade-in" v-bind:width="300" v-bind:height="400">
                    <h1 slot="header">The Start</h1>
                    <p slot="content">---<br>This project began as a simple 2D game engine.<br>However, the scope of the project quickly explanded.<br><br>I had always been interested in the rendering algorithms put to use by id Software in the 1990s.</p>
                </cardX>
                <cardX class="fade-in" v-bind:width="300" v-bind:height="250">
                <p slot="content">Here is a visual of the project early on.<br><br>The player is just a dot rendered either in respect to himself, or to the center of the world.</p>
                </cardX>
            </div>
            <cardX class="fade-in" v-bind:width="600" v-bind:height="600"></cardX>

            
            

            <cardX class="fade-in" v-bind:width="750" v-bind:height="500"></cardX>
            <cardX class="fade-in" v-bind:width="500" v-bind:height="300">
                <h1 slot="header">Map Support</h1>
                <p slot="content">---<br></p>
            </cardX>
            <cardX class="fade-in" v-bind:width="400" v-bind:height="300"></cardX>
            
            
            <div class="centerIt">    
                <cardX class="fade-in" v-bind:width="400" v-bind:height="300"></cardX>
                <cardX class="fade-in" v-bind:width="400" v-bind:height="300"></cardX>
            </div>
            <cardX class="fade-in" v-bind:width="400" v-bind:height="600"></cardX>

        </div>


        <div class="contactContainer">
            <p class="contactE">https://github.com/TrevorAThomas5/SDLtest</p>
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
import cardX from "./cardX.vue";

export default {
  name: "GH",
  components: {
    cardX,
  },
  mounted() {
    this.fadeInElements = Array.from(document.getElementsByClassName('fade-in'))
    document.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  },
  destroyed()  {
    document.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
      handleScroll() {
        for (var i = 0; i < this.fadeInElements.length; i++) {
            var elem = this.fadeInElements[i]
            if (this.isCardVisible(elem)) {
              elem.style.opacity = '1';
              elem.getElementsByClassName("card")[0].style.transform = 'scale(1) translate(0px, 0px)';
            }
            else {
                elem.style.opacity = '0';
                elem.getElementsByClassName("card")[0].style.transform = 'scale(0.9) translate(0px, 100px)';
            }
        }
      },
      isCardVisible(card) {
        var rect = card.getBoundingClientRect();
        var cardTop = rect.top + 200;    
        var cardBottom = rect.bottom;
        return cardTop < (window.innerHeight-300) && cardBottom >= 200
      },
  },
};
</script>

<style>

.fade-in {
    opacity: 0;
    transition: 0.4s;
    cursor: default;
}

.scrollBox {
    margin-top: 15vh;
    width: 1200px;
    padding-bottom: 200px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
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

.scrollContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 35px;
  right: 50px;
  z-index: 10;
}

.scrollText {
    line-height: 0;
    font-size: 40px;
    text-align: left;
}

.scrollImg {
    width: 45px;
}

.centerIt {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
