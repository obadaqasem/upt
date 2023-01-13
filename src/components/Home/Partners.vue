<template>
  <div class="partners-cont bg-neutral-black">
    <div class=" space-between wrapper h-100 w-100">


      <div class="section-header">
        <p class="ft-size-40 ft-neutral-white ft-w-bold header-font m-0">{{$t("home.partners.title2")}}</p>
      </div>
      <img src="key-clients.png" style="width: 100%">

    </div>
  </div>
</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "partners",
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
  .partners-cont{
    .wrapper{
      padding-top: 50px;
      padding-bottom: 25px;
      max-width: 1500px;
      .partners-list{
        margin: 32px 0;
        .partner-item{
          width: 20%;
          padding: 24px 0;
          img{
            width: 100%;
            height: 200px;
            object-fit: contain;
            margin: 0 auto;
            display: block;
          }
        }
      }
      .clients-list{
        margin-top: 32px;
        .client-item{
          width: 150px;
          height: 150px;
          background-size: 800%;
          &.bg-MEZETE{  // generated using https://www.toptal.com/developers/css/sprite-generator binary tree
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -0 -0;
          }
          &.bg-MERCEDES_BENZ{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -150px -0;
          }
          &.bg-MENAITECH{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -0 -150px;
          }
          &.bg-MEKEYS{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -150px -150px;
          }
          &.bg-MEAT_ME{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -300px -0;
          }
          &.bg-MANJA{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -300px -150px;
          }
          &.bg-mado{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -0 -300px;
          }
          &.bg-KHCC{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -150px -300px;
          }
          &.bg-KDS{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -300px -300px;
          }
          &.bg-KASEEH{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -450px -0;
          }
          &.bg-JOPACC{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -450px -150px;
          }
          &.bg-JEENY{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -450px -300px;
          }
          &.bg-hk{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -0 -450px;
          }
          &.bg-HELP_AGE{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -150px -450px;
          }
          &.bg-Hammoudeh{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -300px -450px;
          }
          &.bg-goethe{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -450px -450px;
          }
          &.bg-Game{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -600px -0;
          }
          &.bg-ETR{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -600px -150px;
          }
          &.bg-DIP_MASTER{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -600px -300px;
          }
          &.bg-DEJA_BREW{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -600px -450px;
          }
          &.bg-DALA{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -0 -600px;
          }
          &.bg-CYPER_GAIA{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -150px -600px;
          }
          &.bg-Cupra{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -300px -600px;
          }
          &.bg-Caryology{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -450px -600px;
          }
          &.bg-Careem{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -600px -600px;
          }
          &.bg-bmc{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -1950px -0;
          }
          &.bg-BIOLAB{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -1950px -150px;
          }
          &.bg-Between_Buns{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -1950px -300px;
          }
          &.bg-Autoscore{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -1950px -450px;
          }
          &.bg-alia{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -1950px -600px;
          }
          &.bg-alaseel{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -0 -1800px;
          }
          &.bg-AKA{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -150px -1800px;
          }
          &.bg-AIG{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -300px -1800px;
          }
          &.bg-zalatimo{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -450px -1800px;
          }
          &.bg-WHO{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -600px -1800px;
          }
          &.bg-wesamq{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -1950px -1800px;
          }
          &.bg-volume{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -2100px -0;
          }
          &.bg-vivid{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -2100px -150px;
          }
          &.bg-VEGA{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -2100px -300px;
          }
          &.bg-tamer{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -2100px -450px;
          }
          &.bg-strive{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -2100px -600px;
          }
          &.bg-SOS{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -2100px -1800px;
          }
          &.bg-shrimp{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -0 -1950px;
          }
          &.bg-SAMSUNG{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -150px -1950px;
          }
          &.bg-roya{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -300px -1950px;
          }
          &.bg-RJ{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -450px -1950px;
          }
          &.bg-REFLECT{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -600px -1950px;
          }
          &.bg-REd_Bull{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -1950px -1950px;
          }
          &.bg-PUFFS{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -2100px -1950px;
          }
          &.bg-pitchr{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -2250px -0;
          }
          &.bg-ping{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -2250px -150px;
          }
          &.bg-PHOBIA{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -2250px -300px;
          }
          &.bg-mtwkl{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -2250px -450px;
          }
          &.bg-MG{
            background-image: url("../../assets/images/partners/key-clients.png");
            background-position: -2250px -600px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1024px){
    .partners-cont{
      .wrapper{
        .partners-list{
          .partner-item{
            width: 25%;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 575px){
    .partners-cont{
      .wrapper{
        .partners-list{
          .partner-item{
            width: 33.333333%;
            img{
              height: auto;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 450px){
    .partners-cont{
      .wrapper{
        .partners-list{
          .partner-item{
            width: 50%;
            padding: 0;
          }
        }
      }
    }
  }
</style>