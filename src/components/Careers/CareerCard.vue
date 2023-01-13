<template>
  <div class="career-card-cont bg-dark-grey w-100 border-radius-4 horizontal layout space-between align-center">
    <div>
      <p class="title ft-size-20 ft-primary ft-w-bold">{{position.title}}</p>
      <p class="ft-size-16 ft-neutral-white">{{$t("careers.location")}}: {{position.location}}</p>
      <p class="ft-size-16 ft-neutral-white">{{$t("careers.level")}}: {{position.level}}</p>
    </div>
    <div class="fancy-btn ft-size-16 width-fit">
      {{$t("careers.apply")}}
      <span></span><span></span><span></span><span></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "career-card",
    mounted() {
      
    },
    props: {
      position: null
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
  .career-card-cont{
    max-width: 700px;
    margin: 0 auto 24px auto;
    padding: 20px 24px;
    border: 1px solid #feca0654;
    p{
      margin: 0 0 4px 0;
      &.title{
        margin: 0 0 12px 0;
      }
    }
    .fancy-btn{
      padding: 8px 24px;
    }
  }

  @media only screen and (max-width: 575px){
    .career-card-cont{
      padding: 20px 18px;
      margin: 0 auto 32px auto;
      flex-direction: column;
      &>div{
        width: 100%;
      }
      .fancy-btn{
        margin-top: 20px;
      }
    }
  }
</style>