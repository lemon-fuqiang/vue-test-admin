<template>
  <div class="page404">
    <div>
      <img src="@/assets/404.gif" alt="" />
    </div>
    <!-- <router-link :to="'/'"> -->
    <el-button style="margin-top:50px" @click="routerBack()">返回上一步</el-button>
  <!-- </router-link> -->
  </div>
  
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {
    routerBack(){
      this.$router.go(-1)
    }
  },
  mounted() {
    
  },
};
</script>

<style lang="scss" scoped>
.page404 {
  background-color: #ccc;
  text-align: center;
  height: 100vh;
  img {
    background-size: 100%, 100%;
  }
}
</style>
