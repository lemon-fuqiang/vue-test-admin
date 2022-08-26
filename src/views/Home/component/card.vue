<template>
  <div class="card">
    <div class="card-l" :style="{'backgroundColor':cardItem.color}">
        <i :class="'iconfont icon-'+cardItem.icon"></i>
    </div>
    <div class="card-r">
        
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  props:{
    cardItem:{
        type:Object
    }
  },
  components: {},
  data () {
    return {}
  },
  created () {
  },
  computed: {},
  methods: {},
  mounted () {
  }
}
</script>

<style lang="scss" scoped>

</style>
