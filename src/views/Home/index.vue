<template>
  <div class="home">
    <div class="cardBox" v-for="item in cardData" :key="item.id">
      <!-- <card :cardItem="item"></card> -->
    </div>
  </div>
</template>
<script>
import card from './component/card.vue'

import {getCards} from '../../utils/homeApi'
export default {
  name: '',
  components: {card},
  data () {
    return {
      cardData:[]
    }
  },
  created () {
  },
  computed: {},
  methods: {},
  mounted () {
    getCards().then(res=>{
      this.cardData=res.data
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
