<template>
  <div class="header-component-cont shadow" v-bind:class="{agency: $route.name == 'Agency'}">
    <div class="wrapper h-100 w-100 horizontal layout align-center space-between">
      <img src="../../assets/images/logo.png" alt="UPT house logo" width="100" height="100" v-bind:class="{agency: $route.name == 'Agency'}" class="h-100 pointer" v-on:click="$router.push({path: '/home'}).catch(error => {})">
      <nav class="nav horizontal layout align-center">
        <p class="ft-size-16 ft-grey-light ft-w-bold pointer transition-300" v-bind:class="{agency: $route.name == 'Agency'}" v-on:click="scrollTo('about-section')">{{$t("nav.about")}}</p>
        <p class="ft-size-16 ft-grey-light ft-w-bold pointer transition-300" v-bind:class="{agency: $route.name == 'Agency'}" v-on:click="scrollTo('offices-section')">{{$t("nav.offices")}}</p>
        <p class="ft-size-16 ft-grey-light ft-w-bold pointer transition-300" v-bind:class="{agency: $route.name == 'Agency'}" v-on:click="scrollTo('contact-section')">{{$t("nav.contact-us")}}</p>

        <!-- Uncomment the under comment if you want to add arabic to the bar -->

        <!-- <language-switcher v-slot="{links}" class="relative">


          <a v-bind:href="link.url" v-for="link in links" v-bind:key="link.langIndex" aria-label="change language">
            <p v-if="!link.activeClass" class="ft-size-16 ft-grey-light ft-w-bold text-center transition-300" v-bind:class="fontColorAndFamily(link.langName)">{{link.langName}}</p>
          </a>
        </language-switcher> -->
      </nav>
    </div>
  </div>
</template>

<script>
  export default {
    name: "header-component",
    mounted() {
      
    },
    data() {
      return {

      }
    },
    methods: {
      fontColorAndFamily: function(lang){
        let fontClass = "";

        switch(lang){
          case "English":
            fontClass = fontClass + "force-montserrat ";
            break;
          case "العربية":
            fontClass = fontClass + "force-cairo ";
            break;
        }

        if(this.$route.name == "Agency")
          fontClass = fontClass + "agency";
        
        return fontClass;
      }
    }
  };
</script>

<style scoped lang="scss">
  .header-component-cont{
    height: 80px;
    background-color: #030303;
    &.agency{
      background-color: #FFF;
    }
    .wrapper{
      padding-top: 10px;
      padding-bottom: 10px;
      img{
        width: auto;
        max-height: 45px;
        &.agency{
          filter: brightness(0);
        }
      }
      .nav{
        .router-language-switcher{
          padding: 0 20px;
        }
        a{
          text-decoration: none;
          p{
            margin: 0;
          }
        }
        p{
          margin: 0 20px;
          &:hover{
            color: #FFF;
          }
          &.agency{
            color: #464646;
            &:hover{
              color: #030303;
            }
          }
        }
      }
    }
  }

  body[dir="ltr"] {
    .header-component-cont{
      .wrapper{
        .nav{
          .router-language-switcher{
            top: -2px;
          }
        }
      }
    }
  }

  body[dir="rtl"] {
    .header-component-cont{
      .wrapper{
        .nav{
          .router-language-switcher{
            top: 2px;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 575px){
    .header-component-cont{
      height: 60px;
      .wrapper{
        padding: 0 18px;
        img{
          width: 60px;
          height: auto;
        }
        .nav{
          p{
            font-size: 13px;
            margin: 0 6px;
          }
          .router-language-switcher{
            padding: 0 6px;
          }
        }
      }
    }

    body[dir="ltr"] {
      .header-component-cont{
        .wrapper{
          .nav{
            .router-language-switcher{
              top: -1px;
            }
          }
        }
      }
    }

    body[dir="rtl"] {
      .header-component-cont{
        .wrapper{
          .nav{
            .router-language-switcher{
              top: 0px;
            }
          }
        }
      }
    }
  }
</style>