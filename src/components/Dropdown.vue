<template>
  <div
    :class="[
      { open: isOpen },
      { dropdown: direction === 'down' },
      { dropup: direction === 'up' }
    ]"
    @click="toggleDropDown"
    v-click-outside="closeDropDown"
  >
    <slot name="title">
      <a
        class="dropdown-toggle"
        data-toggle="dropdown"
        href="javascript:void(0)"
      >
        <i :class="icon"></i>
        <p>{{ title }}</p>
      </a>
    </slot>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "drop-down",
  props: {
    direction: {
      type: String,
      default: "down"
    },
    multiLevel: {
      type: Boolean,
      default: false
    },
    title: String,
    icon: String
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    toggleDropDown() {
      if (this.multiLevel) {
        this.isOpen = true;
      } else {
        this.isOpen = !this.isOpen;
      }
    },
    closeDropDown() {
      this.isOpen = false;
    }
  }
};
</script>
