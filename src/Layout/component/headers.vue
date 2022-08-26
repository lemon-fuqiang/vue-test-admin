<template>
  <div class="header">
    <div style="position:absolute;top:10px;left:15px">
      <el-button type="info" icon="el-icon-menu" size="mini"  @click="changeMenu()"></el-button>
    </div>
    <div class="breadcrumb">
      首页
    </div>
    <div class="userLogo">
      <el-dropdown>
        <el-avatar :size="35" :src="url"
          icon="el-icon-user-solid"
          class="el-dropdown-link"
        ></el-avatar>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>
            <!-- <i class="iconfont icon-yonghu"></i> -->
            <span>个人主页</span>
          </el-dropdown-item>
          <el-dropdown-item>
            <!-- <i class="iconfont icon-chanpin"></i> -->
            <span>更多操作</span>
          </el-dropdown-item>
          <el-dropdown-item divided>
            <i class="iconfont icon-tuichu"></i>
            <span>退出</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { mapMutations } from 'vuex';

export default {
  name: "demo",
  components: {},
  data() {
    return {
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
    };
  },
  created() {},
  computed: {},
  methods: {
    ...mapMutations('tab',['changeMenu']),
  },
  mounted() {
    
  },
};
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #ccc;
  background-color: rgb(17, 16, 16);
  color: #fff;
  .userLogo {
    position: absolute;
    top: 8px;
    right: 50px;
    .el-dropdown-link {
      cursor: pointer;
      color: #409eff;
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
  }
  .breadcrumb{
    position: absolute;
    cursor: pointer;
    top: 15px;
    left: 80px;
  }
}
</style>
