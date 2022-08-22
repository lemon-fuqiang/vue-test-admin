<template>
  <div class="layout">
    <div class="left">
      <navbar />
    </div>
    <div class="right">
      <headers />
      <main-content />
    </div>
  </div>
</template>
<script>
import headers from "./headers.vue";
import navbar from "./navbar.vue";
import mainContent from "./mainContent.vue";
export default {
  name: "layout",
  components: { headers, navbar, mainContent },
  data() {
    return {};
  },
  created() { },
  computed: {},
  methods: {},
  mounted() { },
};
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
}

.left {
  height: 100vh;
  background-color: #787f87;
}

.right {
  height: 100vh;
  flex: 1;
}
</style>
