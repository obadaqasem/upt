<template>
  <div class="careers-cont w-100 height-fit absolute">
    <div class="page-body vertical layout w-100 h-100">
      <div class="wrapper w-100 h-100">
        <div class="header horizontal layout space-between">
          <div class="info flex">
            <p class="title ft-size-50 ft-primary ft-w-bold header-font">{{$t("careers.title")}}</p>
            <p class="desc ft-size-20 ft-neutral-white">{{$t("careers.desc")}}</p>
            <div class="fancy-btn ft-size-18 width-fit" v-on:click="goToJobs()">
              {{$t("careers.cta")}}
              <span></span><span></span><span></span><span></span>
            </div>
          </div>
          <img src="../assets/images/careers/team.jpg" alt="team" class="flex">
        </div>
        <!-- <div id="positions-section" class="positions-cont">
          <career-card v-for="(position,index) in positions" v-bind:key="index" v-bind:position="position"></career-card>
        </div> -->
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
  import Vue from "vue";
  import CareerCard from "../components/Careers/CareerCard.vue";
  import FooterComponent from "../components/Shared/FooterComponent.vue";

  Vue.component("career-card",CareerCard);
  Vue.component("footer-component",FooterComponent);

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "careers",
    components: {
      // eslint-disable-next-line vue/no-unused-components
      CareerCard,
      FooterComponent
    },
    mounted() {
      
    },
    data() {
      return {
        positions: [
          {
            title: "Accountant",
            location: "Amman, Jordan",
            level: "Senior"
          },
          {
            title: "Accountant",
            location: "Amman, Jordan",
            level: "Intermediate"
          },
          {
            title: "UI/UX Designer",
            location: "Riyadh, Saudi Arabia",
            level: "Intermediate"
          },
          {
            title: "Audio Engineer",
            location: "Dubai, United Arab Emirates",
            level: "Junior"
          },
          {
            title: "Web Developer",
            location: "Full Remote",
            level: "Senior"
          },
          {
            title: "Internship at UPT House",
            location: "Amman, Jordan",
            level: "Internship"
          }
        ]
      }
    },
    methods: {
      goToJobs: function() {
        window.open("https://www.linkedin.com/company/upthouse/jobs","_blank=");
      }
    }
  };
</script>

<style scoped lang="scss">
  .careers-cont{
    top: 0;
    background-image: url("../assets/images/pattern.png");
    background-size: contain;
    background-attachment: fixed;
    background-position: center center;
    .page-body{
      .wrapper{
        .header{
          padding: 50px 0;
          .info{
            max-width: 500px;
            .title{
              margin: 32px 0;
            }
            .desc{
              line-height: 28px;
              margin: 0 0 0 0;
            }
            .fancy-btn{
              padding: 10px 20px;
              margin: 40px 0 0 0;
            }
          }
          img{
            max-width: 600px;
            object-fit: contain;
          }
        }
        .positions-cont{
          padding: 100px 0;
        }
      }
    }
  }

  body[dir="ltr"] {
    .careers-cont{
      .page-body{
        .wrapper{
          .header{
            .info{
              padding-right: 32px;
            }
          }
        }
      }
    }
  }

  body[dir="rtl"] {
    .careers-cont{
      .page-body{
        .wrapper{
          .header{
            .info{
              padding-left: 32px;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1050px){
    .careers-cont{
      .page-body{
        .wrapper{
          .header{
            img{
              max-width: 500px;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 900px){
    .careers-cont{
      .page-body{
        .wrapper{
          .header{
            img{
              display: none;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 575px){
    .careers-cont{
      .page-body{
        .wrapper{
          .header{
            .info{
              padding: 0!important;
              .title{
                font-size: 30px;
                margin: 16px 0;
              }
              .desc{
                line-height: 26px;
                font-size: 18px;
              }
              .fancy-btn{
                margin: 32px auto 0 auto;
              }
            }
          }
          .positions-cont{
            padding: 80px 0;
          }
        }
      }
    }
  }
</style>