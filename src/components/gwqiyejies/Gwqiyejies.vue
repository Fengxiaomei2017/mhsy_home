<template>
<div>
  <div class="wrapper">
    <Daohang class='daohang'></Daohang>
    <div class='qiyejies'>
      <Liebiaoleft :xinweninfo='xinweninfo'></Liebiaoleft>
      <Liebiaoright :xinweninfo='xinweninfo'></Liebiaoright>
    </div>
    <Footerview class='footerview'></Footerview>
  </div>
</div>
</template>
<script>
  import Daohang from '@/components/gwshouyedaohang/Gwshouyedaohang.vue'
  import Liebiaoleft from '@/components/gwliebiaoleft/Gwliebiaoleft.vue'
  import Liebiaoright from '@/components/gwliebiaoright/Gwliebiaoright.vue'
  import Footerview from '@/components/gwfooter/Gwfooter.vue'
  export default{
    data () {
      return {
        xinweninfo: {
          'lefttitle': '企业介绍',
          'righttitle': '关于美华',
          'gaikuoxinxi': [
            '美国美华集团在华子公司',
            '全球唯一基因动力学科技成果转化公司',
            '中国政府扶持新兴生物科技企业'
          ],
          'img': 'static/img/qiyejies1.png',
          'gsjies': ['美华尚医（成都）生物科技有限公司，是美国美华基因动力科学公司全资子公司，作为全球唯一专注于研究基因动力编辑程序与应用开发的前沿科技公司，美华尚医致力于成为基因能量精准治疗领域里的世界领军企业。', '公司的创始团队数十年专注于基因动力学源起论及基因动力学编辑法则的研究,首次在科学领域里揭示了基因编辑的动力学过程，创立了微观物力子论 ——MICRODYNAMIST THEORY。同时在科学史上首次提出了DNA能量公式，由此开创性的建立了生命动力学模型，即生命多维能量程序模型，这个模型诠释了基因编辑的生命动力学过程，确立了基因的动力源起论及它的动力学编辑法则。这是一门横跨数学，物理与生命科学的新兴学科，它揭示了疾病发病原理与基因动态编辑的关系，从而构建了疾病的能量精准康复解决方案！基因编辑的动力学原理第一次从基因动态编辑层面揭开了人类疾病的动态发生和发展过程，证明了基因的变异是发生在我们生命蓝图的构建过程中，也就是生命的动力学编辑过程，因此要最终解决人类疾病问题，就必须应用基因编辑的动力学法则，而能量的自然疗法也将成为未来遗传类疾病和各种基因疾病的根本解决方案。它的应用将会使医疗资源的人人共享成为现实。', '美华尚医（成都）生物科技有限公司致力于基因动力科学在各个领域中的理论研究和应用开发。我们真诚的邀请全世界有志于基因动力科学研究的科学家们，与我们一道尽快的将人类基因能量疗法应用于全人类，提高人們的生命和生活品质，实现医疗资源人人共享的未来,根据基因编辑的动力学原理，我们研究并开发了动态修复智能系统，在世界上首次运用单纯的能量疗法治疗糖尿病及各种威胁人类健康的慢病。动态修复智能系统将会引领人类进入疾病修复与预防的生命微观的物力子科学时代，这个产品的未来，将会走进每一个家庭，医疗资源的共享时代就会到来！'
          ]
        }
      }
    },
    components: {
      Daohang,
      Footerview,
      Liebiaoleft,
      Liebiaoright
    }
  }
</script>
<style scoped>
.wrapper{
  width: 98%;
  margin: 0 auto;
}
.daohang {
  background-color: #64686B;
}
.qiyejies{
  display: flex;
  width: 100%;
  text-align: left;
  font-size: 1.5em;
  color: #000;
  font-family: 'FangSong';
  font-weight: bold;
}
</style>
