<template>
  <div id="app">
    <transition name="fade-in-out" mode="out-in">
      <router-view v-if="$route.path === '/'" />
      <router-view v-else />
    </transition>
  </div>
</template>

<style lang="scss">
#nprogress .bar {
  background: #409eff !important; //自定义颜色
}
#app {
  min-width: 1366px;
  width: 100vw;
  line-height: 1.6;
  font-family: Comic Sans MS, Helvetica Neue, Microsoft Yahei, -apple-system, sans-serif !important;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  color: #2c3e50;
}
.fade-in-out-leave-active,
.fade-in-out-enter-active {
  transition: all 0.5s;
}
.fade-in-out-enter {
  opacity: 0;
}
.fade-in-out-leave-to {
  opacity: 0;
}
</style>
