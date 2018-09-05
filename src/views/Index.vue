<template>
  <div class="wrapper">
    <div class="page-header header-filter clear-filter purple-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="brand">
            <h1>Material Kit.</h1>
            <h3>A Badass VueMaterial.io Kit based on Material Design.</h3>
          </div>
        </div>
      </div>
    </div>
    <div class="main main-raised">
        a
    </div>
  </div>


</template>

<script>
export default {
  name: "index",
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/bg2.jpg")
    }
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    }
  }
};
</script>
