<template>
  <div class="header">
    <div class="breadcrumb">
      <!-- 面包屑 -->
    </div>
    <div class="userLogo">
      <el-dropdown>
        <el-avatar :size="40" :src="url"
          icon="el-icon-user-solid"
          class="el-dropdown-link"
        ></el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人主页</el-dropdown-item>
          <el-dropdown-item>更多操作</el-dropdown-item>
          <el-dropdown-item divided>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
export default {
  name: "demo",
  components: {},
  data() {
    return {
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    };
  },
  created() {},
  computed: {},
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  height: 60px;
  width: 100%;
  border-bottom: 1px solid #ccc;
  .userLogo {
    position: absolute;
    top: 10px;
    right: 50px;
    .el-dropdown-link {
      cursor: pointer;
      color: #409eff;
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
  }
}
</style>
