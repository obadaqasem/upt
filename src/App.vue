<template>
  <div id="app">
    <header-component></header-component>
    <main class="main-content h-100 relative">
      <transition v-bind:enter-active-class="enterTransitionClass" v-bind:leave-active-class="leaveTransitionClass">
        <router-view ref="mainContentView"></router-view>
      </transition>
    </main>
    <loading-screen v-bind:isLoading="isLoading"></loading-screen>
  </div>
</template>

<script>
  import Vue from "vue";
  import HeaderComponent from "./components/Shared/HeaderComponent.vue";
  import LoadingScreen from "./components/Shared/LoadingScreen.vue";
  import 'animate.css';

  
  Vue.component("header-component",HeaderComponent);
  Vue.component("loading-screen",LoadingScreen);

  export default {
    name: "app",
    components: {
      HeaderComponent,
      LoadingScreen
    },
    created() {
      this.setPageTitle();
    },
    mounted() {
      this.setLangAttrs();
      // this.setMainContentHeight();
      this.runLoader();
    },
    watch: {
      $route: function(to,from) {
        switch(to.name){
          case "Home":
            switch(from.name){
              case "Agency":
                this.enterTransitionClass = "animate__animated animate__slideInRight";
                this.leaveTransitionClass = from.meta.leaveTransitionClassName;
                break;
              case "ProductionHouse":
                this.enterTransitionClass = "animate__animated animate__slideInLeft";
                this.leaveTransitionClass = from.meta.leaveTransitionClassName;
                break;
              default:
                this.enterTransitionClass = "animate__animated animate__fadeIn";
                this.leaveTransitionClass = "animate__animated animate__fadeOut";
            }
            break;
          case "Agency":
            this.enterTransitionClass = to.meta.enterTransitionClassName;
            this.leaveTransitionClass = "animate__animated animate__slideOutRight";
            break;
          case "ProductionHouse":
            this.enterTransitionClass = to.meta.enterTransitionClassName;
            this.leaveTransitionClass = "animate__animated animate__slideOutLeft";
            break;
          default:
            this.enterTransitionClass = "animate__animated animate__fadeIn";
            this.leaveTransitionClass = "animate__animated animate__fadeOut";
        }

        // this.setMainContentHeight();
        this.setPageTitle();
        window.scroll(0,0);
      }
    },
    data() {
      return {
        enterTransitionClass: "",
        leaveTransitionClass: "",
        isLoading: true
      }
    },
    methods: {
      setLangAttrs: function() {
        let lang = this.$i18n.locale;
        let direction = "";
        if(lang == "en")
          direction = "ltr";
        else if(lang == "ar")
          direction = "rtl";
        document.querySelector("body").setAttribute("dir",direction);
        document.querySelector("body").style.direction = direction;
      },
      // setMainContentHeight: function() {
      //   setTimeout(() => {
      //     let mainContentElement = this.$el.querySelector(".main-content");
      //     let mainContentView = this.$refs.mainContentView;
      //     mainContentElement.style.height = mainContentView.$el.clientHeight + "px";
      //   },500);
      // },
      setPageTitle: function() {
        if(this.$route.meta.pageTitle)
          document.title = this.$route.meta.pageTitle;
      },
      runLoader: function() {
        setTimeout(() => {
          this.isLoading = false;
          document.querySelector("body").style.overflow = "auto";
        },3500);
      }
    }
  };
</script>

<style scoped lang="scss">
  #app{
    .main-content{
      // min-height: calc(100vh - 150px);
      // overflow: hidden;
    }
  }
</style>
