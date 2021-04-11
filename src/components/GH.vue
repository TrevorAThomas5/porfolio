<template>
    <div>
        <div
            onclick="window.location.href='/#/projects';"
            class="backContainer"
        >
            <img src="/left-arrow.svg" />
        </div>

        <div class="scrollContainer1">
            <h1 class="scrollText">scroll</h1>
            <div class="scrollImg">
                <img src="/arrow-down-solid.svg" />
            </div>
        </div>

        <div class="scrollBox">
            <div class="space">
                <cardXvid
                    class="fade-in"
                    v-bind:width="440"
                    v-bind:height="400"
                >
                    <video slot="video" height="400" width="500" loop autoplay>
                        <source src="/GH1.mp4" type="video/mp4" />
                        Your browser does not support video format.
                    </video>
                </cardXvid>
                <div class="centerIt">
                    <cardX
                        class="fade-in"
                        v-bind:width="200"
                        v-bind:height="200"
                    >
                        <h1 slot="header">What is it?</h1>
                        <p slot="content">
                            ---<br />A software render engine heavily based on
                            id Tech 1, more commonly known as the Doom engine.
                        </p>
                    </cardX>
                    <cardX
                        class="fade-in"
                        v-bind:width="200"
                        v-bind:height="200"
                    >
                        <p slot="content">
                            My goal with this project was to flex my C++
                            muscles, mainly in regards to optimization.<br /><br />This
                            engine utilizes exclusively the CPU, meaning there
                            is little room for wasted resources.
                        </p>
                    </cardX>
                </div>
            </div>

            <div class="space">
                <div class="centerIt">
                    <cardX
                        class="fade-in"
                        v-bind:width="200"
                        v-bind:height="300"
                    >
                        <h1 slot="header">The Start</h1>
                        <p slot="content">
                            ---<br />This project began as a simple 2D game
                            engine.<br />However, the scope of the project
                            quickly explanded.<br /><br />I had always been
                            interested in the rendering algorithms put to use by
                            id Software in the 1990s.
                        </p>
                    </cardX>
                    <cardX
                        class="fade-in"
                        v-bind:width="200"
                        v-bind:height="150"
                    >
                        <p slot="content">
                            Here is a visualization of the project early on.<br /><br />The
                            player is just a dot rendered either in respect to
                            himself, or to the center of the world.
                        </p>
                    </cardX>
                </div>
                <cardXvid
                    class="fade-in"
                    v-bind:width="440"
                    v-bind:height="400"
                >
                    <video slot="video" height="400" width="500" loop autoplay>
                        <source src="/GH2.mp4" type="video/mp4" />
                        Your browser does not support video format.
                    </video>
                </cardXvid>
                
            </div>


        <div class='spaceN'>
            <cardXvid
                    class="fade-in"
                    v-bind:width="440"
                    v-bind:height="400"
                >
                    <video slot="video" height="400" width="500" loop autoplay>
                        <source src="/GH3.mp4" type="video/mp4" />
                        Your browser does not support video format.
                    </video>
                </cardXvid>
            <div class="centerIt">
                <cardX class="fade-in" v-bind:width="300" v-bind:height="250">
                    <h1 slot="header">How it Works</h1>
                    <p slot="content">
                        ---<br />This project uses SDL to create and draw to the
                        screen.<br /><br />The render algorithm involves the
                        creation of a projection, view, and transformation
                        matrix which are multiplied with the player's position
                        to convert 2D data to 3D space.
                    </p>
                </cardX>
                <cardX class="fade-in" v-bind:width="300" v-bind:height="200">
                    <p slot="header">
                        If you want to learn more about this, you can check out
                        the Wikipedia page for id Tech 1:<br /><br />https://en.wikipedia.org/wiki/Doom_engine
                    </p>
                </cardX>
            </div>
        </div>
            </div>

        <div class="contactContainer1">
            <div class="contactInfo1">
                <p class="contact1">contact me ——</p>
                <img
                    class="icon2"
                    onclick="window.location.href='https://github.com/TrevorAThomas5'"
                    src="/github-brands.svg"
                />
                <div class="mailWrapper1">
                    <img
                        class="icon1"
                        onclick="window.location.href='https://www.linkedin.com/in/trevor-thomas-67988b1b6/'"
                        src="/envelope-regular.svg"
                    />
                </div>
            </div>

            <p class="contactE1">https://github.com/TrevorAThomas5/SDLtest</p>
            <p class="contactE1">TrevorAThomas5@gmail.com</p>
            <p class="contactE1">tathomas@ucsd.edu</p>
                    </div>
    </div>
</template>

<script>
import cardX from "./cardX.vue";
import cardXvid from "./cardXFFTvid.vue";

export default {
    name: "GH",
    components: {
        cardX,
        cardXvid,
    },
    mounted() {
        this.fadeInElements = Array.from(
            document.getElementsByClassName("fade-in")
        );
        document.addEventListener("scroll", this.handleScroll);
        document.addEventListener("scroll", this.initScroll);
        this.handleScroll();
    },
    destroyed() {
        document.removeEventListener("scroll", this.handleScroll);1
        document.removeEventListener("scroll", this.initScroll);1
    },
    methods: {
        initScroll() {
            var elem = document.getElementsByClassName("scrollContainer1")[0];
            elem.style.opacity = "0";
        },
        handleScroll() {
            for (var i = 0; i < this.fadeInElements.length; i++) {
                var elem = this.fadeInElements[i];
                if (this.isCardVisible(elem)) {
                    elem.style.opacity = "1";
                    elem.getElementsByClassName("card")[0].style.transform =
                        "scale(1) translate(0px, 0px)";
                } else {
                    elem.style.opacity = "0";
                    elem.getElementsByClassName("card")[0].style.transform =
                        "scale(0.9) translate(0px, 100px)";
                }
            }
        },
        isCardVisible(card) {
            var rect = card.getBoundingClientRect();
            var cardTop = rect.top + 200;
            var cardBottom = rect.bottom;
            return cardTop < window.innerHeight - 200 && cardBottom >= 200;
        },
    },
};
</script>

<style>
.space {
    margin-bottom: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
}

.spaceN {
    margin-bottom: -100px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
}

.backContainer {
    position: fixed;
    top: 35px;
    left: 25px;
    width: 30px;
    z-index: 10;
    cursor: pointer;
}

.fade-in {
    opacity: 0;
    transition: 0.4s;
    cursor: default;
}

.scrollBox {
    margin-top: 15vh;
    margin-bottom: 200px;
    width: 100%;
    padding-bottom: 200px;
    justify-content: center;
    display: flex;
    flex-direction: column;
}

.contactContainer1 {
    text-align: right;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: right;
    position: fixed;
    top: 50px;
    right: 50px;
}

.contact1 {
    text-align: right;
    font-weight: 100;
    font-family: "Playfair Display";
    font-size: 14px;
}

.contactE1 {
    text-align: right;
    font-weight: 100;
    font-family: "Playfair Display";
    font-size: 14px;
}

.icon1,
.icon2 {
    text-align: right;
    height: 14px;
    cursor: pointer;
}

.icon1 {
    margin-left: 7px;
}

.icon2 {
    margin-left: 7px;
}

.mailWrapper1 {
    text-align:right;
    height: 14px;
    width: 14px;
}

.contactInfo1 {
    text-align: right;
    display: flex;
    align-items: flex-end;
    justify-content: right;
    flex-direction: row;
}

.scrollContainer1 {
    transition: 1s;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 50px;
    left: 50vw;
    transform: translateX(-50%);
    z-index: 10;
}

.scrollText {
    line-height: 0;
    font-size: 20px;
    text-align: left;
}

.scrollImg {
    width: 25px;
    animation: shake 0.5s;
    animation-iteration-count: infinite;
}
@keyframes shake {
  0% { transform: translate(1px, 1px) rotate(0deg); }
  10% { transform: translate(-1px, -2px) rotate(-1deg); }
  20% { transform: translate(-3px, 0px) rotate(1deg); }
  30% { transform: translate(3px, 2px) rotate(0deg); }
  40% { transform: translate(1px, -1px) rotate(1deg); }
  50% { transform: translate(-1px, 2px) rotate(-1deg); }
  60% { transform: translate(-3px, 1px) rotate(0deg); }
  70% { transform: translate(3px, 1px) rotate(-1deg); }
  80% { transform: translate(-1px, -1px) rotate(1deg); }
  90% { transform: translate(1px, 2px) rotate(0deg); }
  100% { transform: translate(1px, -2px) rotate(-1deg); }
}
.centerIt {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
