<template>
  <div class="contact-us-cont">
    <div class="wrapper h-100 w-100">
      <div class="section-header">
        <p class="ft-size-40 ft-neutral-white ft-w-bold header-font m-0">{{$t("home.contact-us.title")}}</p>
      </div>
      <div class="form-cont horizontal layout space-between">
        <div class="info flex">
          <p class="title ft-size-30 ft-neutral-white ft-w-bold m-0">{{$t("home.contact-us.sub-title")}}</p>
          <p class="desc ft-size-18 ft-neutral-white">{{$t("home.contact-us.desc")}}</p>
        </div>
        <div class="flex">

          <div class="form-box vertical layout center">
            <input type="text" v-bind:placeholder="$t('home.contact-us.form.full-name')" class="ft-size-16 ft-secondary w-100 border-radius-8" spellcheck="false" autocomplete="false">
            <input type="text" v-bind:placeholder="$t('home.contact-us.form.email')" class="ft-size-16 ft-secondary w-100 border-radius-8" spellcheck="false" autocomplete="false">
            <input type="text" v-bind:placeholder="$t('home.contact-us.form.phone')" class="ft-size-16 ft-secondary w-100 border-radius-8" spellcheck="false" autocomplete="false">
            <textarea v-bind:placeholder="$t('home.contact-us.form.message')" rows="7" class="ft-size-16 ft-secondary w-100 border-radius-8"></textarea>
            <div class="fancy-btn ft-size-18 bg-secondary border-radius-8">
              {{$t("shared.submit")}}
              <span></span><span></span><span></span><span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "contact-us",
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
  .contact-us-cont{
    background-image: url("../../assets/images/contact-us/contact-us.jpg");
    background-size: cover;
    background-color: #000000a6;
    background-blend-mode: color;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center center;
    .wrapper{
      padding-top: 50px;
      padding-bottom: 50px;
      max-width: 1500px;
      p{
        text-shadow: 0 0px 8px rgba(0,0,0,0.5);
      }
      .form-cont{
        margin-top: 50px;
        .info{
          padding: 0 24px;
          .desc{
            line-height: 32px;
          }
        }
        .form-box{
          max-width: 400px;
          input{
            height: 50px;
            margin-bottom: 16px;
          }
          textarea{
            resize: none;
          }
          .fancy-btn{
            margin: 24px 0;
            padding: 13px 0;
          }
        }
      }
    }
  }

  @media only screen and (max-width: 750px){
    .contact-us-cont{
      .wrapper{
        .form-cont{
          flex-direction: column;
          margin-top: 40px;
          .info{
            padding: 0;
            .title{
              font-size: 22px;
            }
            .desc{
              font-size: 16px;
              line-height: 28px;
              margin: 16px 0 36px 0;
            }
          }
        }
      }
    }
  }

  @media only screen and (max-width: 575px){
    .contact-us-cont{
      
    }
  }
</style>