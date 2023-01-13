
<template>
  <div class="home-cont w-100 height-fit absolute">
    <div class="categories-cont w-100 horizontal layout force-ltr">
      <div class="category d-flex align-center justify-center relative" v-on:click="$router.push({path: '/agency'}).catch(error => {})">
        <p class="header-font ft-size-70 ft-neutral-white ft-w-bold text-center absolute m-0 transition-300 pointer">{{$t("nav.agency")}}</p>
        <video autoplay muted loop class="w-100 h-100 transition-300 pointer">
          <source src="../assets/images/n_agency.mp4" type="video/mp4">
        </video>
      </div>
      <div class="category d-flex align-center justify-center relative" v-on:click="$router.push({path: '/production-house'}).catch(error => {})">
        <p class="header-font ft-size-70 ft-neutral-white ft-w-bold text-center absolute m-0 transition-300 pointer">{{$t("nav.production-house")}}</p>
        <video autoplay muted loop class="w-100 h-100 transition-300 pointer">
          <source src="../assets/images/production-house.webm" type="video/webm">
        </video>
      </div>
    </div>
    <div class="sections">
      <section id="about-section">
        <about-us></about-us>
      </section>
      <section id="team-section">
        <team></team>
      </section>
      <section id="partners-section">
        <partners></partners>
      </section>
      <section id="offices-section">
        <offices></offices>
      </section>
      <section>

        <div class="elfsight-app-f4595296-eceb-457d-a87e-7bd8780a4c89"></div>



      </section>

      <section id="contact-section">
        <contact-us></contact-us>
      </section>
    </div>
    <footer-component></footer-component>
  </div>
</template>

<script>
  import Vue from "vue";
  import AboutUs from "../components/Home/AboutUs.vue";
  import Team from "../components/Home/Team.vue";
  import Partners from "../components/Home/Partners.vue";
  import Offices from "../components/Home/Offices.vue";
  import ContactUs from "../components/Home/ContactUs.vue";
  import FooterComponent from "../components/Shared/FooterComponent.vue";

  // eslint-disable-next-line no-unused-vars
import {Swiper} from "vue-awesome-swiper";

  Vue.component("about-us",AboutUs);
  // eslint-disable-next-line vue/multi-word-component-names
  Vue.component("team",Team);
  // eslint-disable-next-line vue/multi-word-component-names
  Vue.component("partners",Partners);
  // eslint-disable-next-line vue/multi-word-component-names
  Vue.component("offices",Offices);
  Vue.component("contact-us",ContactUs);
  Vue.component("footer-component",FooterComponent);

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "home",
    components: {
      AboutUs,
      Team,
      Partners,
      Offices,
      ContactUs,
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
  .home-cont{
    top: 0;
    .categories-cont{
      max-height: 400px;
      .category{
        width: 50%;
        overflow: hidden;
        video{
          object-fit: cover;
          filter: grayscale(1) brightness(0.5);
        }
        p{
          z-index: 1;
          padding: 0 24px;
          text-shadow: 0 0px 8px rgba(0,0,0,0.5);
        }
        &:hover{
          video{
            filter: none;
          }
          p{
            transform: scale(1.10);
          }
        }
      }
    }
  }

  @media only screen and (max-width: 1075px){
    .home-cont{
      .categories-cont{
        .category{
          p{
            font-size: 50px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 800px){
    .home-cont{
      .categories-cont{
        .category{
          p{
            font-size: 32px;
            line-height: 45px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 575px){
    .home-cont{
      .categories-cont{
        flex-direction: column;
        .category{
          width: 100%;
          max-height: 200px;
          video{
            filter: none;
          }
        }
      }
    }
  }
</style>