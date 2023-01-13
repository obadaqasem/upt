<template>
  <div class="loading-screen-cont w-100 fixed" v-bind:class="{fadeout: !isLoading}">
    <img src="../../assets/images/upt-blade.png" alt="upt house blade" class="absolute center w-100">
  </div>
</template>

<script>
  export default {
    name: "loading-screen",
    mounted() {
      
    },
    props: {
      isLoading: null
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
  .loading-screen-cont{
    height: 100vh;
    top: 0;
    right: 0;
    left: 0;
    background-color: #030303;
    z-index: 9;
    img{
      right: 0;
      left: 0;
      top: 0;
      bottom: 0;
      max-width: 350px;
      -webkit-animation: spin 2s linear infinite;
      -moz-animation: spin 2s linear infinite;
      animation: spin 2s linear infinite;
    }
    @-moz-keyframes spin{ 
      100%{
        -moz-transform: rotate(360deg);
      } 
    }
    @-webkit-keyframes spin{ 
      100%{
        -webkit-transform: rotate(360deg);
      } 
    }
    @keyframes spin{ 
      100% { 
        -webkit-transform: rotate(360deg); 
        transform:rotate(360deg); 
      } 
    }
    &.fadeout{
      animation: fadeout 0.5s forwards;
    }
    @keyframes fadeout{
      to{
        opacity: 0;
        visibility: hidden;
      }
    }
  }

  @media only screen and (max-width: 575px){
    .loading-screen-cont{
      img{
        max-width: 250px;
      }
    }
  }
</style>