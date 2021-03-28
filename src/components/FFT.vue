<template>
    <div class="body">
        <div
            onclick="window.location.href='/#/projects';"
            class="backContainer"
        >
            <img src="/left-arrow.svg" />
        </div>

        <div class="scrollContainer1">
            <h1 class="scrollText">Scroll</h1>
            <div class="scrollImg">
                <img src="/arrow-down-solid.svg" />
            </div>
        </div>

        <div class="scrollBox1">
            <div class="space">
                <div class="centerIt">
                    <cardX
                        class="fade-in"
                        v-bind:width="300"
                        v-bind:height="300"
                    >
                        <h1 slot="header">What is it?</h1>
                        <p slot="content">
                            ---<br />Food for Thought is an Android app that
                            helps people to find recipes based off of
                            ingredients in their inventory. There are five main
                            components to our app.
                        </p>
                    </cardX>
                    <cardX
                        class="fade-in"
                        v-bind:width="300"
                        v-bind:height="250"
                    >
                        <p slot="content">
                            From left to right in the bottom of the navigation
                            bar: a recipe page, a recipe feed on the main page,
                            an inventory page, a shopping page, and a profile
                            page.
                        </p>
                    </cardX>
                </div>
                <cardXvid
                    class="fade-in"
                    v-bind:width="448"
                    v-bind:height="800"
                >
                    <video slot="video" width="475" height="800" autoplay loop>
                        <source src="/demo1.mp4" type="video/mp4" />
                        Your browser does not support video format.
                    </video>
                </cardXvid>
                <div class="centerIt">
                    <cardX
                        class="fade-in"
                        v-bind:width="300"
                        v-bind:height="275"
                    >
                        <h1 slot="header">My Role</h1>
                        <p slot="content">
                            ---<br />I served as the lead fontend developer on
                            this project. I mainly worked on recipe information
                            page, setting the tone for the rest of the UI on the
                            entire project.
                        </p>
                    </cardX>
                    <cardX
                        class="fade-in"
                        v-bind:width="300"
                        v-bind:height="400"
                    >
                        <h1 slot="header">Technology</h1>
                        <p slot="content">
                            ---<br />This project was built for Andriod using
                            Andriod Studio, Java, and Firebase.<br /><br />The
                            project was completed in 10 weeks by a group of 10
                            people. We worked under the Agile software
                            development paradigm.
                        </p>
                    </cardX>
                </div>
            </div>

            <div class="space">
                <div class="centerIt">
                    <cardX
                        class="fade-in"
                        v-bind:width="400"
                        v-bind:height="300"
                    >
                        <h1 slot="header">Shopping</h1>
                        <p slot="content">
                            ---<br />Users can place all the ingredients they
                            want to buy in the shopping list page. When users
                            have purchased the ingredients at the store, they
                            can click the checkmark next to the ingredient and
                            it will transfer the ingredients to their inventory
                            list.
                        </p>
                    </cardX>
                    <cardX
                        class="fade-in"
                        v-bind:width="400"
                        v-bind:height="225"
                    >
                        <p slot="content">
                            Alternatively, users can add ingredients that they
                            already own to their inventory page. Once they have
                            items in their inventory, the user can see the
                            recipes that can be made with the ingredients in
                            their inventory on the main page.
                        </p>
                    </cardX>
                </div>
                <cardXvid
                    class="fade-in"
                    v-bind:width="448"
                    v-bind:height="800"
                >
                    <video slot="video" width="475" height="800" autoplay loop>
                        <source src="/demo2.mp4" type="video/mp4" />
                        Your browser does not support video format.
                    </video>
                </cardXvid>
            </div>
            <cardX class="fade-in" v-bind:width="300" v-bind:height="500">
                <h1 slot="header">Feed</h1>
                <p slot="content">
                    ---<br />The recipe feed is created by taking the
                    ingredients in the inventory and comparing them to
                    ingredients in the database of recipes. Recipes that have a
                    higher ratio of ingredients to total number of ingredients
                    will display first in the feed. When a user clicks on a
                    recipe in their feed, they can view which ingredients they
                    have in their ingredient. In the top right corner, the user
                    can save the recipe.
                </p>
            </cardX>
            <cardXvid class="fade-in" v-bind:width="448" v-bind:height="800">
                <video slot="video" width="475" height="800" autoplay loop>
                    <source src="/demo3.mp4" type="video/mp4" />
                    Your browser does not support video format.
                </video>
            </cardXvid>

            <cardX class="fade-in" v-bind:width="300" v-bind:height="425">
                <h1 slot="header">Customization</h1>
                <p slot="content">
                    ---<br />Other features include the ability to like and
                    dislike recipes as well as commenting on recipes. In
                    addition, users have the ability to create their own custom
                    recipes. On the recipe page, they can view their saved
                    recipes as well as create new recipes. They can view their
                    custom recipes on their profile page.
                </p>
            </cardX>
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
                https://github.com/jo32pilot/Food-for-Thought
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
            return cardTop < window.innerHeight - 300 && cardBottom >= 200;
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
}

.backContainer {
    position: fixed;
    top: 35px;
    left: 25px;
    width: 50px;
    z-index: 10;
    cursor: pointer;
}

.fade-in {
    opacity: 0;
    transition: 0.4s;
    cursor: default;
}

.scrollBox1 {
    margin-top: 10vh;
    margin-bottom: 200px;
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
    z-index: -2;
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
