<template>
  <div class="layout">
    <div class="left">
      <navbar />
    </div>
    <div class="right">
      <headers />
      <div class="mainContent">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import headers from "./component/headers.vue";
import navbar from "./component/navbar.vue";
export default {
  name: "layout",
  components: { headers, navbar },
  data() {
    return {};
  },
  created() {},
  computed: {},
  methods: {},
  mounted() {},
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
}

.left {
  height: 100vh;
  background-color: #545c64;
}

.right {
  height: 100vh;
  flex: 1;
}
</style>
