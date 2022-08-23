<template>
  <el-menu
    default-active=""
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :collapse="iscollapse"
  >
    <h3 v-show="!iscollapse">通用后台管理系统</h3>
    <h3 v-show="iscollapse">系统</h3>
    
    <el-menu-item  @click="menuItemClick(item)"
      v-for="item in noChildren"
      :index="item.path"
      :key="item.path"
    >
      <i :class="'mgr-10 iconfont icon-' + item.icon"></i>
      <span>{{ item.label }}</span>
    </el-menu-item>
    <el-submenu v-for="item in hasChildren" :index="item.name" :key="item.path">
      <template slot="title">
        <i :class="'mgr-10 iconfont icon-' + item.icon"></i>
        <span>{{ item.label }}</span>
      </template>
      <el-menu-item-group v-for="subItem in item.child" :key="subItem.path">
        <el-menu-item :index="subItem.name" @click="menuItemClick(item)">
          {{ subItem.label }}
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<script>

import {getMenu} from "../../utils/api";
export default {
  name: "navbar",
  components: {},
  data() {
    return {
      menu: []
    };
  },
  created() {},
  computed: {
    noChildren() {
      return this.menu.filter((item) => !item.child);
    },
    hasChildren() {
      return this.menu.filter((item) => item.child);
    },
    iscollapse(){
      return this.$store.iscollapse;
    }
  },
  methods: {
    menuItemClick:function(item){
      this.$router.push({
        name:item.name
      })
    }
  },
  mounted() {
      getMenu().then(res=>{
        this.menu=res.data
      })
  },
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  h3 {
    color: #fff;
    height: 60px;
    line-height: 60px;
    text-align: center;
    cursor: pointer;
  }
}
.mgr-10 {
  margin-right: 10px;
}
</style>
