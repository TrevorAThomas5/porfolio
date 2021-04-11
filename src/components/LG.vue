<template>
    <div class="body">
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

        <div class="scrollBox1">
            <div class="space">
                <div class="centerIt">
                    <cardX
                        class="fade-in"
                        v-bind:width="200"
                        v-bind:height="125"
                    >
                        <h1 slot="header">What is it?</h1>
                        <p slot="content">
                            ---<br />A random dungeon generator written in C# for the Unity game engine.
                        </p>
                    </cardX>
                    <cardX
                        class="fade-in"
                        v-bind:width="200"
                        v-bind:height="170"
                    >
                        <p slot="content">
                            Users can create their own rooms and add them to the list of available rooms 
                            for the dungeon generator. Each room has a set of doors which are used to
                            connect the rooms together.
                        </p>
                    </cardX>
                </div>
                <cardXvid
                    class="fade-in"
                    v-bind:width="400"
                    v-bind:height="400"
                >
                    <video slot="video" width="500" height="400" autoplay loop muted>
                        <source src="/LG1.mp4" type="video/mp4" />
                        Your browser does not support video format.
                    </video>
                </cardXvid>
                
            </div>

            <div class='spaceN'>

            <cardXvid class="fade-in" v-bind:width="400"
                    v-bind:height="400">
                <video slot="video" width="500" height="400" autoplay loop muted>
                    <source src="/LG2.mp4" type="video/mp4" />
                    Your browser does not support video format.
                </video>
            </cardXvid>
            <div class='centerIt'>
            <cardX class="fade-in" v-bind:width="200" v-bind:height="200">
                <h1 slot="header">Dungeon Size</h1>
                <p slot="content">
                    ---<br />
                    The number of rooms can be toggled to any number.
                    This examples shows 5 rooms, 10 rooms, and 20 rooms.
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

            <p class="contactE1">
                https://github.com/TrevorAThomas5/dungeon-gen
            </p>
            <p class="contactE1">TrevorAThomas5@gmail.com</p>
            <p class="contactE1">tathomas@ucsd.edu</p>
                   </div>
    </div>
</template>

<script>
import cardX from "./cardXFFT.vue";
import cardXvid from "./cardXFFTvid.vue";

export default {
    name: "LG",
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
        document.removeEventListener("scroll", this.handleScroll);
        document.removeEventListener("scroll", this.initScroll);
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

<style scoped>
.space {
    margin-bottom: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.spaceN {
    margin-bottom: 0px;
    display: flex;
    align-items: center;
    justify-content: center;
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

.scrollBox1 {
    margin-top: 15vh;
    margin-bottom: 200px;
    width: 100%;
    padding-bottom: 200px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
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
    z-index: -2;
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
    font-size: 14px;
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
    font-size: 20px;
    text-align: left;
}

.scrollImg {
    width: 25px;
}

.centerIt {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
</style>
