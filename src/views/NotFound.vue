<template>
  <div class="not-found-cont w-100 height-fit absolute">
    <div class="page-body vertical layout align-center justify-center w-100 h-100">
      <p class="code ft-size-150 ft-primary ft-w-bold header-font force-lemon-milk m-0">404</p>
      <p class="not-found-text ft-size-28 ft-neutral-white text-center">{{$t("404.msg")}}</p>
      <div class="fancy-btn ft-size-20" v-on:click="$router.push({path: '/home'}).catch(error => {})">
        {{$t("404.go-home")}}
        <span></span><span></span><span></span><span></span>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
  import Vue from "vue";
  import FooterComponent from "../components/Shared/FooterComponent.vue";

  Vue.component("footer-component",FooterComponent);

  export default {
    name: "not-found",
    components: {
      FooterComponent
    },
    mounted() {
      
    },
    data() {
      return {

      }
    },
    methods: {

    }
  };
</script>

<style scoped lang="scss">
  .not-found-cont{
    top: 0;
    background-image: url("../assets/images/clouds.png");
    background-size: 100%;
    background-color: #030303;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center center;
    .page-body{
      padding: 50px;
      min-height: calc(100vh - 150px);
      .code{
        letter-spacing: 20px;
      }
      .not-found-text{
        margin: 20px 0 35px 0;
      }
      .fancy-btn{
        padding: 10px 50px;
      }
    }
  }

  @media only screen and (max-width: 575px){
    .not-found-cont{
      background-size: 400%;
      .page-body{
        .code{
          font-size: 80px;
          letter-spacing: 10px;
        }
        .not-found-text{
          font-size: 18px;
          line-height: 26px;
          margin: 12px 0 25px 0;
        }
        .fancy-btn{
          font-size: 16px;
          padding: 8px 35px;
        }
      }
    }
  }
</style>