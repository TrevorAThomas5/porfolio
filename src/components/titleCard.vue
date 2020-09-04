<template>
  <div
    class="card-wrap"
    @mousemove="handleMouseMove"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    ref="card"
  >
    <div class="card" :style="cardStyle">
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
  name: "titleCard",
  props: {
    image: String,
  },
  data: () => {
    return {
      width: 500,
      height: 500,
      mouseX: 0,
      mouseY: 0,
      mouseLeaveDelay: null,
    };
  },
  computed: {
    mousePX() {
      return this.mouseX / this.width;
    },
    mousePY() {
      return this.mouseY / this.height;
    },
    cardStyle() {
      const rX = this.mousePX * 10;
      const rY = this.mousePY * -10;

      console.log(this.mousePX + " " + this.mousePY);

      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
      };
    },
    cardBgTransform() {
      const tX = this.mousePX * -20;
      const tY = this.mousePY * -20;

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
    handleMouseMove(e) {
      this.mouseX = e.pageX - this.$refs.card.offsetLeft - this.width / 2;
      this.mouseY = e.pageY - this.$refs.card.offsetTop - this.height / 2;
    },
    handleMouseEnter() {
      clearTimeout(this.mouseLeaveDelay);
    },
    handleMouseLeave() {
      this.mouseLeaveDelay = setTimeout(() => {
        this.mouseX = 0;
        this.mouseY = 0;
      }, 10);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  position: relative;
  flex: 0 0 700px;
  width: 700px;
  height: 500px;
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
  margin-bottom: 200px;
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
.card-wrap:hover .card-info::after {
  transition: 5s cubic-bezier(0.23, 1, 0.32, 1);
  opacity: 1;
  transform: translateY(0);
}
.card-wrap:hover .card-bg {
  transition: 0.6s cubic-bezier(0.23, 1, 0.32, 1),
    opacity 5s cubic-bezier(0.23, 1, 0.32, 1);
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
  padding: 20px;
  position: absolute;
  width: 100%;
  bottom: 0;
  color: #fff;
  transform: translateY(40%);
  transition: 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
}
.card-info p {
  opacity: 0;
  text-shadow: rgba(0, 0, 0, 1) 0 2px 3px;
  transition: 0.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  width: 80%;
}
.card-info * {
  position: relative;
  z-index: 1;
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

.card-info h1 {
  font-family: "Playfair Display";
  font-size: 36px;
  font-weight: 700;
  text-shadow: rgba(0, 0, 0, 0.5) 0 10px 10px;
  margin: 0;
}
</style>
