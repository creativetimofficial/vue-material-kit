<template>
  <md-card class="md-card-nav-tabs" :class="{'no-label': noLabel, 'md-card-plain': tabsPlain}">
    <md-card-content>
      <slot name="content"></slot>
    </md-card-content>
  </md-card>
</template>

<script>
export default {
  name: "nav-tabs-card",
  props: {
    noLabel: Boolean,
    tabsPlain: Boolean
  }
};
</script>
