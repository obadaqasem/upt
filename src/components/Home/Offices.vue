<template>
  <div class="offices-cont bg-primary">
    <div class="wrapper h-100 w-100">
      <div class="section-header">
        <p class="ft-size-40 ft-secondary ft-w-bold header-font m-0">{{$t("home.offices.title")}}</p>
      </div>
      <div class="locations-cont horizontal layout">
        <div class="location flex">
          <img src="../../assets/images/offices/jordan.png" alt="jordan office" width="100" height="100" style="width: 80%" class="d-block center">
          <p class="title ft-size-22 ft-secondary ft-w-bold text-center">{{$t("shared.cities.amman")}}</p>
          <p class="info ft-size-16 ft-secondary text-center"><i class="fas fa-location-dot ft-size-18 ft-secondary"></i> DABOUQ, YATHREB ST, JRESAT CENTER (2)</p>
          <p class="info ft-size-16 ft-secondary text-center"><i class="fas fa-phone ft-size-18 ft-secondary"></i> TEL: +96265372424 / +962799434242</p>
        </div>
        <div class="location flex">
          <img src="../../assets/images/offices/ksa.png" alt="KSA office" width="100" height="100" style="width: 80%" class="d-block center">
          <p class="title ft-size-22 ft-secondary ft-w-bold text-center">{{$t("shared.cities.riyadh")}}</p>
          <p class="info ft-size-16 ft-secondary text-center"><i class="fas fa-location-dot ft-size-18 ft-secondary"></i> TAHLIA ST, ASTER CENTER, 4TH FLOOR</p>
          <p class="info ft-size-16 ft-secondary text-center"><i class="fas fa-phone ft-size-18 ft-secondary"></i> TEL: +966569272394</p>
        </div>
        <div class="location flex">
          <img src="../../assets/images/offices/uae.png" alt="UAE office" width="100" height="100" style="width: 80%" class="d-block center">
          <p class="title ft-size-22 ft-secondary ft-w-bold text-center">{{$t("shared.cities.dubai")}}</p>
          <a href="mailto:assist@upthouse.com" target="_blank" class="ft-size-16 ft-secondary text-center d-block center width-fit">ASSIST@UPTHOUSE.COM</a>
          <!-- <p class="info ft-size-16 ft-secondary text-center"><i class="fas fa-location-dot ft-size-18 ft-secondary"></i> DABOUQ- YATHREB ST, JRESAT CENTER (2)</p>
          <p class="info ft-size-16 ft-secondary text-center"><i class="fas fa-phone ft-size-18 ft-secondary"></i> TEL: 065372424 / +962799434242</p> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "offices",
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
  .offices-cont{
    .wrapper{
      padding-top: 50px;
      padding-bottom: 50px;
      max-width: 1500px;
      .section-header::before{
        border-color: var(--secondary);
      }
      .locations-cont{
        margin-top: 32px;
        .location{
          padding: 0 32px;
          img{
            width: 50%;
            height: auto;
            transform: translatey(0px);
            filter: drop-shadow(0 0 5px #565656);
          }

          img{
            animation: float 5s ease-in-out infinite;
          }

          @keyframes float{
            0%{
              transform: translatey(0px);
            }
            50%{
              transform: translatey(-15px);
            }
            100%{
              transform: translatey(0px);
            }
          }
          .info{
            margin: 8px 0;
          }
        }
      }
    }
  }

  body[dir="ltr"] {
    .offices-cont{
      .wrapper{
        .locations-cont{
          .location{
            i{
              margin: 0 5px 0 0;
            }
          }
        }
      }
    }
  }
  
  body[dir="rtl"] {
    .offices-cont{
      .wrapper{
        .locations-cont{
          .location{
            i{
              margin: 0 0 0 5px;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1024px){
    .offices-cont{
      .wrapper{
        .locations-cont{
          .location{
            padding: 0 8px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 575px){
    .offices-cont{
      .wrapper{
        .locations-cont{
          flex-direction: column;
          .location{
            padding: 0;
            margin-bottom: 32px;
            img{
              width: 60%;
            }
            @keyframes float{
              0%{
                transform: translatey(0px);
              }
              50%{
                transform: translatey(-10px);
              }
              100%{
                transform: translatey(0px);
              }
            }
            .title{
              font-size: 18px;
            }
            .info{
              margin: 4px 0;
            }
          }
        }
      }
    }
  }
</style>