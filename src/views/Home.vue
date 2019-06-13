<template>
  <div class="flex-container">
    <div class="widget-btn slide-in-bottom" @click="open = !open">
      <i class="fas fa-star"></i>
    </div>
    <div class="info-container slide-in-right" v-if="open">
      <h1>This is header</h1>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data() {
    return {
      open: false
    };
  }
};
</script>

<style>
.flex-container {
  display: flex;
  justify-content: center;
  align-items: right;
  position: absolute;
  right: 25px;
  bottom: 25px;
  flex-wrap: wrap-reverse;
}

.widget-btn {
  height: 50px;
  width: 50px;
  background: #0fbbda;
  border-radius: 100%;
  color: aliceblue;
  transition: 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: right;
}

.slide-in-bottom {
  -webkit-animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.slide-in-right {
  -webkit-animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
  animation: slide-in-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
}

.widget-btn:hover {
  background: #f566ad;
  color: #fff;
}

.widget-btn:hover i {
  transform: rotate(72deg);
}

i {
  font-size: 1.5rem;
  margin: 0;
  padding: 0;
  transition: 0.3s;
}

.info-container {
  width: 100%;
  height: 450px;
  background: #f7ecf1;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(168, 168, 168, 0.445);
}

@-webkit-keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-bottom {
  0% {
    -webkit-transform: translateY(1000px);
    transform: translateY(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}

@-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
    transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}
</style>

