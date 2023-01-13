<template>
  <div class="team-cont">
    <div class="wrapper h-100 w-100">
      <div class="section-header">
        <p class="ft-size-40 ft-neutral-white ft-w-bold header-font m-0">{{$t("home.team.title")}}</p>
      </div>
      <swiper class="swiper" v-bind:options="swiperOption">
        <swiper-slide v-for="(member,index) in members" v-bind:key="index" class="relative pointer" >
          <img v-bind:src="getMemberPicture(member.picture)" v-bind:alt="member.name" class="w-100 h-100">
          <div class="member-info bg-neutral-white absolute w-100">
            <p class="name ft-size-18 ft-neutral-black ft-w-bold">{{member.name}}</p>
            <p class="ft-size-16 ft-neutral-black m-0">{{member.position}}</p>
          </div>
        </swiper-slide>
        <div class="swiper-pagination" ></div>
      </swiper>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { Swiper,SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
// eslint-disable-next-line vue/multi-word-component-names
Vue.component("swiper",Swiper);
Vue.component("swiper-slide",SwiperSlide);
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "team",
  components: {
    Swiper,
    SwiperSlide
  },
  mounted() {

  },
  data() {
    return {
      members: [
        {
          name: "Ibraheem Diab",
          position: "Founder/Director",
          picture: "ibraheem-diab"
        },
        {
          name: "Hisham Abu Aisheh",
          position: "Partner/Marketing Director",
          picture: "hisham-abu-aisheh"
        },
        {
          name: "Basil Mfarrej",
          position: "Partner/Marketing Executive",
          picture: "basil-mfarrej"
        },


        {
          name: "Tarek Ziad",
          position: "Video Production Coordinator",
          picture: "tarek-ziad"
        },
        {
          name: "Ibrahim Abdallah",
          position: "Video Production Manager",
          picture: "ibrahim-abdallah"
        },

        {
          name: "Ibrahim Qamar",
          position: "Head of Graphic Design",
          picture: "ibrahim-qamar"
        },

        {
          name: "Ibrahim Hawileh",
          position: "Post Production Unit Supervisor",
          picture: "ibrahim-hawileh"
        },
        {
          name: "zaineb",
          position: "Senior Account Manager",
          picture: "zaineb"
        },

        {
          name: "Malek Smadi",
          position: "Art Director-Strategic",
          picture: "malek-smadi"
        },
        {
          name: "Rand Obeidat",
          position: "Account planner",
          picture: "rand-obeidat"
        },
        {
          name: "Juwaireya Touqan",
          position: "Account Manager",
          picture: "juwaireya-touqan"
        },

      ],
      swiperOption: {
        effect: "coverflow",
        grabCursor: true,
        slideToClickedSlide: true,
        centeredSlides: true,
        slidesPerView: "auto",
        clickable: true,
        initialSlide: 3,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true
        },
        pagination: {
          el: ".swiper-pagination",
          type: "bullets"
        }
      }
    }
  },
  methods: {
    getMemberPicture: function(pictureName) {
      return require("../../assets/images/team/" + pictureName + ".jpg");
    }
  }
};
</script>

<style scoped lang="scss">
.team-cont{
  background-image: url("../../assets/images/pattern.png");
  background-size: contain;
  background-attachment: fixed;
  background-position: center center;
  .wrapper{
    padding-top: 50px;
    padding-bottom: 50px;
    max-width: 1500px;
    .swiper{
      margin: 50px auto;
      width: 100%;
      max-width: 1250px;
      .swiper-slide{
        width: 100%;
        max-width: 320px;
        height: 500px;
        img{
          object-fit: cover;
          object-position: center center;
        }
        .member-info{
          bottom: 0;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
          padding: 12px 18px 32px 18px;
          .name{
            margin: 0 0 4px 0;
          }
        }
      }
      .swiper-pagination{
      .swiper-pagination-bullet.swiper-pagination-bullet-active{
          background-color: var(--primary);
        }
      }
    }
  }
}
@media only screen and (max-width: 575px){
  .team-cont{
    .wrapper{
      .swiper{
        .swiper-slide{
          height: 400px;
          .member-info{
            padding: 12px 18px 42px 18px;
          }
        }
      }
      .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
        bottom: 0px;
      }
    }
  }
}
</style>