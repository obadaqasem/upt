<template>
  <footer>
  <div class="footer-component-cont">
    <div class="main">
      <div class="wrapper h-100 w-100 horizontal layout">
        <div class="logo-cont flex">
          <img src="../../assets/images/logo.png" alt="UPT house logo" width="100" height="100">
          <p class="slogan ft-size-16 ft-neutral-white ft-w-bold">{{$t("footer.slogan")}}</p>
          <a href="mailto:assist@upthouse.com" target="_blank" class="ft-size-14 ft-neutral-white ft-w-bold"><i class="ft-size-20 ft-primary relative fas fa-envelope"></i> ASSIST@UPTHOUSE.COM</a>
        </div>
        <div class="footer-column flex">
          <p class="title ft-size-18 ft-primary ft-w-bold">{{$t("nav.company")}}</p>
          <p class="link ft-size-16 ft-grey-light pointer width-fit transition-300" v-on:click="scrollTo('about-section')">{{$t("nav.about")}}</p>
          <p class="link ft-size-16 ft-grey-light pointer width-fit transition-300" v-on:click="scrollTo('team-section')">{{$t("nav.team")}}</p>
          <p class="link ft-size-16 ft-grey-light pointer width-fit transition-300" v-on:click="scrollTo('partners-section')">{{$t("nav.partners")}}</p>
          <p class="link ft-size-16 ft-grey-light pointer width-fit transition-300" v-on:click="scrollTo('offices-section')">{{$t("nav.offices")}}</p>
          <p class="link ft-size-16 ft-grey-light pointer width-fit transition-300" v-on:click="scrollTo('contact-section')">{{$t("nav.contact-us")}}</p>
        </div>
        <div class="footer-column flex">
          <p class="title ft-size-18 ft-primary ft-w-bold">{{$t("nav.quick-links")}}</p>
          <p class="link ft-size-16 ft-grey-light pointer width-fit transition-300" v-on:click="$router.push({path: '/agency'}).catch(error => {})">{{$t("nav.agency")}}</p>
          <p class="link ft-size-16 ft-grey-light pointer width-fit transition-300" v-on:click="$router.push({path: '/production-house'}).catch(error => {})">{{$t("nav.production-house")}}</p>
          <p class="link ft-size-16 ft-grey-light pointer width-fit transition-300" v-on:click="$router.push({path: '/careers'}).catch(error => {})">{{$t("nav.careers")}}</p>
<!--          <language-switcher v-slot="{links}" class="width-fit">
            <a v-bind:href="link.url" v-for="link in links" v-bind:key="link.langIndex" aria-label="change language">
              <p v-if="!link.activeClass" class="link ft-size-16 ft-grey-light pointer width-fit transition-300" v-bind:class="fontFamilyClass(link.langName)">{{link.langName}}</p>
            </a>
          </language-switcher>-->
        </div>
      </div>
    </div>
    <div class="secondary">
      <div class="wrapper h-100 w-100 horizontal layout align-center space-between">
        <p class="ft-size-12 ft-neutral-white ft-w-bold m-0">© UPT HOUSE {{year}} - <span class="relative">{{$t("footer.copyrights")}}</span></p>
        <div class="social-media-cont horizontal layout align-center">
          <a href="https://facebook.com/UPThousee" target="_blank" class="ft-primary" aria-label="facebook" rel="noopener"><i class="ft-size-20 fab fa-facebook-square"></i></a>
          <a href="https://www.youtube.com/channel/UCmE2G0y-UMmbsHI9cpxtC_Q" target="_blank" class="ft-primary" aria-label="youtube" rel="noopener"><i class="ft-size-20 fab fa-youtube"></i></a>
          <a href="https://instagram.com/theupthouse" target="_blank" class="ft-primary" aria-label="instagram" rel="noopener"><i class="ft-size-20 fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </div>
  </footer>
</template>

<script>
  export default {
    name: "footer-component",
    mounted() {
      
    },
    computed: {
      year: function() {
        return new Date().getFullYear();
      }
    },
    data() {
      return {

      }
    },
    methods: {
      fontFamilyClass: function(lang){
        let fontClass = "";

        switch(lang){
          case "English":
            fontClass = "force-montserrat";
            break;
          case "العربية":
            fontClass = "force-cairo";
            break;
        }
        
        return fontClass;
      }
    }
  };
</script>

<style scoped lang="scss">
  .footer-component-cont{
    .main{
      background-color: #030303;
      .wrapper{
        padding-top: 30px;
        padding-bottom: 30px;
        .logo-cont{
          img{
            width: 110px;
            height: auto;
          }
          .slogan{
            margin: 28px 0 6px 0;
            font-style: italic;
          }
          a{
            text-decoration: none;
            i{
              top: 2px;
            }
          }
        }
        .footer-column{
          padding-top: 30px;
          .title{
            margin: 0 0 32px 0;
          }
          a{
            text-decoration: none;
          }
          .link{
            margin: 0 0 15px 0;
            &:hover{
              color: #FFF;
            }
          }
        }
      }
    }
    .secondary{
      background-color: #141414;
      border-top: 1px solid #404040;
      .wrapper{
        padding-top: 15px;
        padding-bottom: 15px;
        a{
          margin: 0 10px;
        }
      }
    }
  }

  body[dir="ltr"] {
    .footer-component-cont{
      .main{
        .wrapper{
          .logo-cont{
            a{
              i{
                margin: 0 4px 0 0;
              }
            }
          }
        }
      }
    }
  }

  body[dir="rtl"] {
    .footer-component-cont{
      .main{
        .wrapper{
          .logo-cont{
            a{
              i{
                margin: 0 0 0 4px;
              }
            }
          }
        }
      }
      .secondary{
        .wrapper{
          span{
            top: -1px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 750px){
    .footer-component-cont{
      .main{
        .wrapper{
          flex-direction: column;
          align-items: center;
          .logo-cont{
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 20px;
            .slogan{
              margin: 20px 0 6px 0;
            }
            img{
              width: 100px;
            }
          }
          .footer-column{
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            .title{
              margin: 0 0 24px 0;
            }
            .link{
              margin: 0 0 12px 0;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 575px){
    .footer-component-cont{
      .secondary{
        .wrapper{
          flex-direction: column-reverse;
          p{
            margin: 12px 0 6px 0;
          }
        }
      }
    }
  }
</style>