<template>
    <div
        class="card-wrap"
        @mousemove="handleMouseMove"
        @mouseenter="handleMouseEnter"
        @mouseleave="handleMouseLeave"
        ref="card"
    >
        <div class="card" :style="[size]" v-on:click="this.handlePress">
            <div class="card-bg" :style="[cardBgImage]"></div>
            <div class="anim"></div>
            <div class="cardInfo">
                <slot name="header"></slot>
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "card",
    props: {
        image: String,
        isBlurred: Boolean,
        touchFunction: { type: Function },
        offAny: { type: Function },
        clickFunction: { type: Function },
        width: Number,
        height: Number,
    },
    data: () => {
        return {
            width: 240,
            height: 320,
            mouseX: 0,
            mouseY: 0,
            mouseLeaveDelay: null,
            scale: 1,
        };
    },
    computed: {
        size() {
            return {
                width: `${this.width}px`,
                height: `${this.height}px`,
            };
        },
        blurred() {
            var blurAmount = 0;
            if (this.isBlurred === true) {
                blurAmount = 10;
            }

            return {
                filter: `blur(${blurAmount}px)`,
            };
        },
        mousePX() {
            return this.mouseX / this.width;
        },
        mousePY() {
            return this.mouseY / this.height;
        },
        cardStyle() {
            const rX = this.mousePX * 30;
            const rY = this.mousePY * -15;

            return {
                transform: `rotateY(${rX}deg) rotateX(${rY}deg) scale(${this.scale})`,
            };
        },
        cardBgTransform() {
            const tX = this.mousePX * -40;
            const tY = this.mousePY * -25;

            return {
                transform: `translateX(${tX}px) translateY(${tY}px)`,
            };
        },
        cardBgImage() {
            return {
                backgroundImage: `url(${this.image})`,
            };
        },
    },
    methods: {
        log() {
            console.log("aaaaa");
        },
        handleMouseMove(e) {
            this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
            this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
        },
        handleMouseEnter() {
            clearTimeout(this.mouseLeaveDelay);
            this.touchFunction();

            this.scale = 1.1;
        },
        handleMouseLeave() {
            this.scale = 1;
            this.offAny();
            this.mouseLeaveDelay = setTimeout(() => {
                this.mouseX = 0;
                this.mouseY = 0;
            }, 10);
        },
        handlePress() {
            this.clickFunction();
        },
    },
};
</script>

<style scoped>
.anim {
    width: 6400px;
    height: 198px;
    color: white;

    margin: 0px;
    position: absolute;
    bottom: 0px;
    left: 0px;

    transform: scaleY(0);
    transform-origin: bottom;
    transition: 5s;

    background: url("/wave.svg");
    background-repeat: repeat-x;

    animation: wave 3s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
}

@keyframes wave {
    0% {
        margin-left: 0;
    }
    100% {
        margin-left: -1600px;
    }
}

.card-wrap:hover .anim {
    transform: scaleY(1);
}

.card {
    display: flex;

    position: relative;
    flex: 0 0 240px;
    background-color: #333;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
        inset rgba(255, 255, 255, 0.5) 0 0 0 6px;
    transition: 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transform: scale(1);
}

.card-wrap {
    margin: 10px;
    transform: perspective(800px);
    transform-style: preserve-3d;
}

.card-bg {
    position: absolute;
    top: -20px;
    left: -20px;
    width: 100%;
    height: 100%;
    padding: 20px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    background: black;

    transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95),
        opacity 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.cardInfo {
    margin-left: 15px;
    margin-right: 15px;
    align-self: center;
    color: white;
    mix-blend-mode: difference;
}

.cardInfo h1 {
    line-height: 0;
    font-size: 20px;
    font-weight: bold;
}

.cardInfo p {
    font-size: 14px;
    font-weight: 100;
}
</style>
