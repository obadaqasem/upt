<template>
  <div class="agency-cont w-100 height-fit absolute">
    <div class="wrapper h-100 w-100">
      <div class="section-header">
        <p class="ft-size-40 ft-secondary ft-w-bold header-font m-0">{{$t("agency.title")}}</p>
      </div>
      <div class="projects-cont">
        <div class="project horizontal layout space-between">

          <img src="../assets/images/agency/dip-master.png"  alt="Vurger -Branding" class="shadow" onclick="window.openInNewTab('https://www.behance.net/gallery/160587685/Vurger-Brand-Identity/modules/905991945')" >

          <div class="project-info">
            <p class="title ft-size-40 ft-secondary ft-w-bold">Vurger -Branding</p>
            <p class="desc ft-size-20 ft-secondary m-0">The Vurger is a brand-new concept created from the ground up to be the best Americanized burger in our category. The concept development process began with a hype approach, observing specific target audiences and their behaviors, as well as identifying fast-food industry trends. We tested many different ideas and recipes until we found one that incorporated flavors from all over the world with a bold, spicy kick that we were proud of.</p>
          </div>
        </div>
        <div class="project horizontal layout space-between">
          <div class="project-info">
            <p class="title ft-size-40 ft-secondary ft-w-bold">Puffs -3D Nibz Greeting
            </p>
            <p class="desc ft-size-20 ft-secondary m-0">We are pleased to present our 3D project created in collaboration with Puffs. The end result of our efforts, which we had been working on for days, is a beautiful video exploring the concept of adding a touch of creativity to the ordinary and making any greeting unique by creating something visually appealing yet with a strong message.</p>
          </div>
          <img src="../assets/images/agency/photo2.png" alt="Puffs -3D Nibz Greeting
" class="shadow" onclick="window.openInNewTab('https://www.behance.net/gallery/160677047/Puffs-Nibz-2023')">
        </div>
        <div class="project horizontal layout space-between">
          <img src="../assets/images/agency/photo3.png" alt="F1 SAGP 23 Fan Art Competition - Fanart Saudi Motorsport
" class="shadow" onclick="window.openInNewTab('https://www.behance.net/gallery/160588303/F1-SAGP-23-Fan-Art-Competition')">
          <div class="project-info">
            <p class="title ft-size-40 ft-secondary ft-w-bold">F1 SAGP 23 Fan Art Competition - Fanart Saudi Motorsport
            </p>
            <p class="desc ft-size-20 ft-secondary m-0">Formula 1 is the goal behind entering this competition in order to elevate the artworks and incorporate sport scene worldwide. We believe that we can make a change by creating artworks for different purposes, where people have to understand what we are doing and why. We need to educate people about the importance of art and its role in everyday life.</p>
          </div>
        </div>
      </div>
      <div class="section-header">
        <p class="ft-size-40 ft-secondary ft-w-bold header-font m-0">{{$t("agency.more-projects")}}</p>
      </div>

      <div class="more-projects horizontal layout justify-center wrap">
        <div v-for="item in 1" v-bind:key="item" class="project-item relative">
          <a href="https://www.behance.net/gallery/104244617/PUFFS-COFFEE-BAR" target="_blank" class="absolute w-100 h-100 d-flex align-center">
            <img src="../assets/images/agency/1.png" alt="PUFFS COFFEE BAR" class="transition-300 w-100 h-100">
            <p class="ft-size-30 ft-w-bold absolute text-center m-0 w-100 transition-300">PUFFS COFFEE BAR</p>
          </a>
        </div>
        <div v-for="item in 1" v-bind:key="item" class="project-item relative">
          <a href="https://www.behance.net/gallery/119635131/NorthFit-Scrubs" target="_blank" class="absolute w-100 h-100 d-flex align-center">
            <img src="../assets/images/agency/2.png" alt="NorthFit Scrubs" class="transition-300 w-100 h-100">
            <p class="ft-size-30 ft-w-bold absolute text-center m-0 w-100 transition-300">NorthFit Scrubs</p>
          </a>
        </div>
        <div v-for="item in 1" v-bind:key="item" class="project-item relative">
          <a href="https://www.behance.net/gallery/159649383/Christmas-Greetings" target="_blank" class="absolute w-100 h-100 d-flex align-center">
            <img src="../assets/images/agency/3.png" alt="Christmas Greetings" class="transition-300 w-100 h-100">
            <p class="ft-size-30 ft-w-bold absolute text-center m-0 w-100 transition-300">Christmas Greetings</p>
          </a>
        </div>
        <div v-for="item in 1" v-bind:key="item" class="project-item relative">
          <a href="https://www.behance.net/gallery/160571349/Bricks-House-Social-Media" target="_blank" class="absolute w-100 h-100 d-flex align-center">
            <img src="../assets/images/agency/4.png" alt="Bricks House Social Media" class="transition-300 w-100 h-100">
            <p class="ft-size-30 ft-w-bold absolute text-center m-0 w-100 transition-300">Bricks House Social Media</p>
          </a>
        </div>
        <div v-for="item in 1" v-bind:key="item" class="project-item relative">
          <a href="https://www.behance.net/gallery/160592739/Jordanian-strategy-for-artificial-intelligence" target="_blank" class="absolute w-100 h-100 d-flex align-center">
            <img src="../assets/images/agency/5.png" alt="Jordanian strategy for artificial intelligence" class="transition-300 w-100 h-100">
            <p class="ft-size-30 ft-w-bold absolute text-center m-0 w-100 transition-300">Jordanian strategy for artificial intelligence</p>
          </a>
        </div>
        <div v-for="item in 1" v-bind:key="item" class="project-item relative">
          <a href="https://www.behance.net/gallery/104744355/Limitless-Car-Care-Photograohy" target="_blank" class="absolute w-100 h-100 d-flex align-center">
            <img src="../assets/images/agency/6.png" alt="Limitless Car Care - Photograohy
" class="transition-300 w-100 h-100">
            <p class="ft-size-30 ft-w-bold absolute text-center m-0 w-100 transition-300">Limitless Car Care - Photograohy
            </p>
          </a>
        </div>
        <div v-for="item in 1" v-bind:key="item" class="project-item relative">
          <a href="https://www.behance.net/gallery/160587707/VStore-Social-Media" target="_blank" class="absolute w-100 h-100 d-flex align-center">
            <img src="../assets/images/agency/7.png" alt="VStore Social Media" class="transition-300 w-100 h-100">
            <p class="ft-size-30 ft-w-bold absolute text-center m-0 w-100 transition-300">VStore Social Media</p>
          </a>
        </div>
        <div v-for="item in 1" v-bind:key="item" class="project-item relative">
          <a href="https://www.behance.net/gallery/160590587/Coffee-Factory-Halloween-Menu" target="_blank" class="absolute w-100 h-100 d-flex align-center">
            <img src="../assets/images/agency/8.png" alt="Coffee Factory Halloween Menu" class="transition-300 w-100 h-100">
            <p class="ft-size-30 ft-w-bold absolute text-center m-0 w-100 transition-300">Coffee Factory Halloween Menu</p>
          </a>
        </div>
      </div>
      <div class="section-header">
        <p class="ft-size-40 ft-secondary ft-w-bold header-font m-0">{{$t("agency.about-title")}}</p>
      </div>
      <div class="about-section horizontal layout space-between">
        <div class="info">
          <p class="ft-size-20 ft-secondary">Upt House was formed in 2017 and has since grown to become one of the region's visual leaders. It is made up of a dedicated team of client service and creative specialists who feel that advertising and marketing are absolutely essential. That is simply what Upt House plans to do. We began creating high-quality advertisements in Jordan and quickly expanded to Saudi Arabia and the United Arab Emirates.
            And we do it by working with the finest of the best from all around the world to elevate your vision through imaginative campaigns built on layers upon layers of one-of-a-kind creativity.
          </p>

        </div>
        <img src="../assets/images/agency/about.jpg" alt="about UPT agency" class="shadow">
      </div>

    </div>
    <div class="back-home-cont pointer fixed shadow border-radius-full d-flex align-center justify-center" v-on:click="$router.push({path: '/home'}).catch(error => {})">
      <i class="ft-neutral-white ft-size-30 fa-solid fa-arrow-right"></i>
    </div>
    <footer-component></footer-component>
  </div>

</template>

<script>


  import Vue from "vue";
  import FooterComponent from "../components/Shared/FooterComponent.vue";
  import './Agency.css';
  Vue.component("footer-component",FooterComponent);

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "agency",
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
  .agency-cont{
    top: 0;
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
            cursor: pointer;
            max-height: 400px;
            object-fit: cover;
            object-position: center center;
          }
          .project-info{
            .title{
              border-bottom: 1px solid var(--secondary);
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
      right: 5px;
      background-color: #030303;
      width: 50px;
      height: 50px;
      transform: translatex(0px);
      animation: float 2s ease-in-out infinite;
      @keyframes float{
        0%{
          transform: translatex(0px);
        }
        50%{
          transform: translatex(-10px);
        }
        100%{
          transform: translatex(0px);
        }
      }
    }
  }

  @media only screen and (max-width: 768px){
    .agency-cont{
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
            transform: translatex(-5px);
          }
          100%{
            transform: translatex(0px);
          }
        }
      }
    }
  }

  @media only screen and (max-width: 575px){
    .agency-cont{
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