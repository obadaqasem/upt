<template>
  <div class="production-house-cont w-100 height-fit absolute">
    <div class="wrapper h-100 w-100">
      <div class="section-header">
        <p class="ft-size-40 ft-neutral-white ft-w-bold header-font m-0">{{$t("production-house.title")}}</p>
      </div>
      <div class="projects-cont">
        <div class="project horizontal layout space-between">
          <img src="../assets/images/production-house/1.jpg" onclick="window.openInNewTab('https://youtu.be/a-hurDk9aYQ')" alt="GMC Yukon - To be or not to be | UPT House" class="shadow">
          <div class="project-info">
            <p class="title ft-size-40 ft-neutral-white ft-w-bold">GMC Yukon - To be or not to be | UPT House
            </p>
            <p class="desc ft-size-20 ft-neutral-white m-0">Be or not to be; making the right choice even if it's difficult to decide which Yukon to choose
            </p>
          </div>
        </div>
        <div class="project horizontal layout space-between">
          <div class="project-info">
            <p class="title ft-size-40 ft-neutral-white ft-w-bold">Lying detection device TVC | Video by UPT House Jordan
            </p>

          </div>
          <img src="../assets/images/production-house/2.jpg" onclick="window.openInNewTab('https://youtu.be/8wXmMrWwJXI')" alt="Lying detection device TVC | Video by UPT House Jordan" class="shadow">
        </div>
        <div class="project horizontal layout space-between">
          <img src="../assets/images/production-house/3.jpg" onclick="window.openInNewTab('https://youtu.be/j8wM1ncD5J8')" alt="Chevrolet Tahoe 2022 Review | UPT House" class="shadow">
          <div class="project-info">
            <p class="title ft-size-40 ft-neutral-white ft-w-bold">Chevrolet Tahoe 2022 Review | UPT House
            </p>
            <p class="desc ft-size-20 ft-neutral-white m-0">Celebrating the leadership of every generation in it's own time.
            </p>
          </div>
        </div>
      </div>
      <div style="padding-bottom: 20px" class="elfsight-app-9494ff8d-f405-4f9a-9357-587620d1dc69"></div>
      <div class="section-header">
        <p class="ft-size-40 ft-neutral-white ft-w-bold header-font m-0">{{$t("production-house.about-title")}}</p>
      </div>
      <div class="about-section horizontal layout space-between">
        <div class="info">
          <p class="ft-size-20 ft-neutral-white">Upt House was created in 2011, and it is now a regional leader in visual creation. It is made of a passionate group of production and post-production specialists who believe in the ultimate importance of film craft. That is exactly what Upt House aims to do. We began making high-quality films in Jordan and quickly expanded to Saudi Arabia and the United Arab Emirates.
            And we accomplish it by working with the greatest in the world, seeking to enhance your vision through unique filmmaking built on layers upon layers of one-of-a-kind innovation.</p>
        </div>
        <img src="../assets/images/production-house/about.jpg"  alt="about UPT production house" class="shadow">
      </div>



    </div>


    <div class="back-home-cont bg-neutral-white pointer fixed shadow border-radius-full d-flex align-center justify-center" v-on:click="$router.push({path: '/home'}).catch(error => {})">
      <i class="ft-secondary ft-size-30 fa-solid fa-arrow-left"></i>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
  import Vue from "vue";
  import FooterComponent from "../components/Shared/FooterComponent.vue";
  import './ProductionHouse.css';
  Vue.component("footer-component",FooterComponent);

  export default {
    name: "production-house",
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
  .production-house-cont{
    top: 0;
    background-image: url("../assets/images/pattern.png");
    background-size: contain;
    background-attachment: fixed;
    background-position: center center;
    .wrapper{
      padding-top: 50px;
      padding-bottom: 50px;
      .projects-cont{
        margin: 50px 0 75px 0;
        .project{
          margin-bottom: 75px;
          &>img,.project-info{
            width: calc(50% - 32px);
          }
          &>img{
            max-height: 400px;
            object-fit: cover;
            cursor: pointer;
            object-position: center center;
          }
          .project-info{
            .title{
              border-bottom: 1px solid #FFF;
              margin: 0 0 32px 0;
              padding: 0 0 12px 0;
            }
            .desc{
              line-height: 32px;
            }
          }
        }
      }
      .more-projects{
        margin: 50px 0 75px 0;
        .project-item{
          width: 250px;
          height: 250px;
          margin: 0 12px 24px 12px;
          a{
            top: 0;
            right: 0;
            left: 0;
            img{
              object-fit: cover;
              object-position: center center;
            }
            p{
              padding: 0 14px;
              color: transparent;
              line-height: 38px;
            }
          }
          &:hover{
            a{
              img{
                filter: brightness(0.5);
              }
              p{
                color: #FFF;
              }
            }
          }
        }
      }
      .about-section{	
        margin-top: 50px;	
        margin-bottom: 32px;	
        .info{	
          width: calc(50% - 32px);	
          p{	
            line-height: 32px;	
            margin-top: 0;	
          }	
        }	
        img{	
          width: calc(50% - 32px);	
          height: auto;	
          object-fit: cover;	
          object-position: center center;	
        }	
      }
    }
    .back-home-cont{
      top: 300px;
      left: 5px;
      width: 50px;
      height: 50px;
      transform: translatex(0px);
      animation: float 2s ease-in-out infinite;
      @keyframes float{
        0%{
          transform: translatex(0px);
        }
        50%{
          transform: translatex(10px);
        }
        100%{
          transform: translatex(0px);
        }
      }
    }
  }

  @media only screen and (max-width: 768px){
    .production-house-cont{
      .wrapper{
        padding-top: 32px;
        padding-bottom: 32px;
        .projects-cont{
          margin-top: 40px;
          .project{
            flex-direction: column;
            &>img,.project-info{
              width: 100%;
            }
            &>img{
              margin-bottom: 24px;
              order: 0;
            }
            .project-info{
              order: 1;
              .title{
                text-align: center;
                font-size: 24px;
                margin: 0 0 20px 0;
                padding: 0 0 10px 0;
              }
              .desc{
                font-size: 16px;
                line-height: 28px;
              }
            }
          }
        }
        .more-projects{	
          margin-top: 40px;	
        }	
        .about-section{	
          margin-top: 40px;	
          flex-direction: column;	
          img{	
            margin-top: 20px;	
            width: 100%;	
          }	
          .info{	
            width: 100%;	
            p{	
              font-size: 16px;	
              line-height: 28px;	
            }	
          }	
        }
      }
      .back-home-cont{
        width: 30px;
        height: 30px;
        i{
          font-size: 20px;
        }
        @keyframes float{
          0%{
            transform: translatex(0px);
          }
          50%{
            transform: translatex(5px);
          }
          100%{
            transform: translatex(0px);
          }
        }
      }
    }
  }

  @media only screen and (max-width: 575px){
    .production-house-cont{
      .wrapper{
        .more-projects{
          .project-item{
            width: 130px;
            height: 130px;
            margin: 0 9px 18px 9px;
            a{
              img{
                filter: brightness(0.8);
              }
              p{
                font-size: 14px;
                line-height: 18px;
                color: #FFF;
                text-shadow: 0 0px 8px rgba(0,0,0,0.5);
              }
            }
          }
        }
      } 
    }
  }
</style>