<template>
  <div
    class="card-wrap"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    ref="card"
  >
    <div class="card" :style="[cardStyle, blurred]" v-on:click="this.handlePress">
      <div class="unityWrapper">
        <img class="unity" src="/js-brands.svg" />
        <img class="unity" src="/vuejs-brands.svg" />
        <img class="unity" src="/php-brands.svg" />
      </div>
      <div class="card-bg" :style="[cardBgTransform, cardBgImage]"></div>
      <div class="card-info">
        <slot name="header"></slot>
        <slot name="content"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "B9card",
  props: {
    image: String,
    isBlurred: Boolean,
    touchFunction: { type: Function },
    off: { type: Function },
    clickFunction: { type: Function },
  },
  data: () => {
    return {
      width: 144,
      height: 250,
      mouseX: 0,
      mouseY: 0,
      mouseLeaveDelay: null,
      scale: 1,
    };
  },
  computed: {
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
        backgroundImage: `url('/taskman.png')`,
      };
    },
  },
  methods: {
    handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
      this.touchFunction("B9");
      this.scale = 1.1;
    },
    handleMouseLeave() {
      this.scale = 1;
      this.off();
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
.card {
  position: relative;
  flex: 0 0 240px;
  width: 144px;
  height: 250px;
  background-color: #333;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
    inset rgba(255, 255, 255, 0.5) 0 0 0 6px;
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}

.card-wrap {
  margin: 10px;
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;
}
.card-wrap:hover .card-info {
  transform: translateY(0);
}
.card-wrap:hover .card-info p {
  opacity: 1;
}
.card-wrap:hover .card-info,
.card-info p {
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1);
}
.card-wrap:hover .card-info div {
  opacity: 1;
}

.card-wrap:hover .card-bg {
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 1s cubic-bezier(0.23, 1, 0.32, 1);
  opacity: 0.8;
}
.card-wrap:hover .card {
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1),
    box-shadow 2s cubic-bezier(0.23, 1, 0.32, 1);
  box-shadow: rgba(255, 255, 255, 0.2) 0 0 40px 5px,
    rgba(255, 255, 255, 1) 0 0 0 1px, rgba(0, 0, 0, 0.66) 0 30px 60px 0,
    inset #333 0 0 0 5px, inset white 0 0 0 6px;
}

.card-bg {
  opacity: 0.5;
  position: absolute;
  top: -20px;
  left: -20px;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95),
    opacity 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  pointer-events: none;
}

.card-info {
  padding-top: 0px;
  padding-bottom: 20px;
  padding-right: 20px;
  padding-left: 20px;
  position: absolute;
  bottom: 0;
  color: #fff;
  transform: translateY(40%);
  transition: 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.card-info p,
.card-info div {
  font-size: 10px;
  opacity: 0;
  text-shadow: rgba(0, 0, 0, 1) 0 2px 3px;
  transition: 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.card-info * {
  position: relative;
  z-index: 1;
}

.card-info h1 {
  font-family: "Playfair Display";
  font-size: 21px;
  font-weight: 700;
  text-shadow: rgba(0, 0, 0, 0.5) 0 10px 10px;
  margin: 0;
}

.card-info::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    180deg,
    transparent 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
  background-blend-mode: overlay;
  opacity: 0;
  transform: translateY(100%);
  transition: 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}
.card-wrap:hover .card-info::after {
  transition: 5s cubic-bezier(0.23, 1, 0.32, 1);
  opacity: 1;
  transform: translateY(0);
}

.unityWrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20px;
  width: 60px;
  position: absolute;
  top: 10px;
  right: 15px;
  color: #fff;
  margin-right: 0px;
  z-index: 5;
}

.unity {
  margin-left: 5px;
  height: 20px;
  width: 20px;
  color: #fff;
  text-shadow: rgba(0, 0, 0, 1) 0 2px 3px;
}
</style>
