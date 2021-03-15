<template>
  <div
    class="card-wrap"
    ref="card"
    :style="[cardStyle]"
  >
    <div class="card" >
        <div class="card-bg"></div>
        <h1>Prototype</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "projectCard",
  props: {
      position: String,
  },
  data: () => {
    return {
     
    };
  },
  computed: {
   cardStyle() {
       var scale = 1;
       var left = 0;
       var zIndex = 0

       if(this.position === 0) {
           scale = 1.1;
           left = -50;
           zIndex = 5;
       }
       else if(this.position === 1) {
           scale = 1.0;
           left = 20;
           zIndex = 4;
       }
       else if(this.position === 2) {
           scale = 0.9;
           left = 100;
           zIndex = 3;
       }
       else if(this.position === 3) {
           scale = 0.8;
           left = 175;
           zIndex = 2;
       }
       else if(this.position === 4) {
           scale = 0.7;
           left = 245;
           zIndex = 1;
       }


      return {
        transform: `scale(${scale})`,
        zIndex: `${zIndex}`,
        left: `${left}px`
      };
    },
  },
  methods: {
    
  },
};
</script>

<style scoped>
.card {
  text-align: center;

  position: relative;
  flex: 0 0 240px;
  width: 500px;
  height: 650px;
  background-color: #333;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.66) 0 30px 60px 0, inset #333 0 0 0 5px,
    inset rgba(255, 255, 255, 0.5) 0 0 0 6px;
}

.card-wrap {
  margin: 10px;
  transform: perspective(800px);
  transform-style: preserve-3d;
  cursor: pointer;
  transition: 0.5s;
  position: absolute;

  top:  -270px;
  right: 0px;
}


.card-bg {
  opacity: 0.5;
  position: absolute;
  top: -20px;
  left: -20px;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: #FFF;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: 1s cubic-bezier(0.445, 0.05, 0.55, 0.95),
    opacity 5s 1s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  pointer-events: none;
}

</style>