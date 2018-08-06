<template>
  <div id="app">
   <router-view></router-view>
   <v-Foot v-show='$route.meta.showFoot'></v-Foot>
  </div>
</template>

<script>
import Foot from './components/Foot/Foot.vue';

export default {
  name: 'app',
  data () {
    return {
    
    }
  },
  components:{
    'v-Foot':Foot
  }
}
</script>

<style lang='stylus' ref="stylesheet/stylus">

</style>

