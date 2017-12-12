<template>
    <div>
        <div class='shouye_wrapper'>
            <Daohang class='daohang'></Daohang>
            <Mhsy></Mhsy>
            <Imgneirong></Imgneirong>
            <Footerview></Footerview>
        </div>
        <router-view></router-view>
    </div>
</template>
<script>
  import Daohang from '@/components/gwshouyedaohang/Gwshouyedaohang.vue'
  import Mhsy from '@/components/gwmhsy/Gwmhsy.vue'
  import Imgneirong from '@/components/gwimgneirong/Gwimgneirong.vue'
  import Footerview from '@/components/gwfooter/Gwfooter.vue'
  export default{
    components: {
      Daohang,
      Mhsy,
      Imgneirong,
      Footerview
    }
  }
</script>
<style scoped>
  .shouye_wrapper {
    position: relative;
    min-width: 1180px !important;
  }
  .daohang {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100;
  }
</style>
