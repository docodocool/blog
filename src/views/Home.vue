<template>
  <div class="default-layout">
    <nav-bar></nav-bar>
    <div class="home-main-wrapper">
      <div class="grid-layout">
        <transition name="fade-transform" mode="out-in">
          <router-view />
        </transition>
        <side-list></side-list>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import SideList from '@/components/SideList.vue';

export default {
  name: 'DefaultLayout',
  components: {
    NavBar,
    SideList,
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  mounted() {},
  methods: {},
};
</script>

<style lang="scss">
.default-layout {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 100vh;
  background-color: #fff;

  .home-main-wrapper {
    width: 100vw;
    height: calc(100vh - 60px);
    overflow: scroll;
    overflow-x: hidden;
  }
  .grid-layout {
    width: 1040px;
    max-width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: calc(100% - 320px) 300px;
    grid-column-gap: 20px;
    grid-template-areas: 'main side';
    .side-list {
      grid-area: side;
    }
  }
  .fade-transform-leave-active,
  .fade-transform-enter-active {
    transition: all 0.5s;
  }
  .fade-transform-enter {
    opacity: 0;
    transform: translateX(-20px);
  }
  .fade-transform-leave-to {
    opacity: 0;
    transform: translateX(20px);
  }
}
</style>
