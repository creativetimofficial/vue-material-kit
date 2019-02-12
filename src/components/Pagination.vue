<template>
  <ul class="pagination" :class="paginationClass">
    <li
      class="page-item prev-page"
      :class="{ disabled: value === 1, 'no-arrows': noArrows }"
    >
      <a class="page-link" aria-label="Previous" @click="prevPage">
        <template v-if="withText"
          >Prev</template
        >
        <i class="fas fa-angle-double-left" v-else></i>
      </a>
    </li>
    <li
      class="page-item"
      v-for="item in range(minPage, maxPage)"
      :key="item"
      :class="{ active: value === item }"
    >
      <a class="page-link" @click="changePage(item)">{{ item }}</a>
    </li>
    <li
      class="page-item page-pre next-page"
      :class="{ disabled: value === totalPages, 'no-arrows': noArrows }"
    >
      <a class="page-link" aria-label="Next" @click="nextPage">
        <template v-if="withText"
          >Next</template
        >
        <i class="fas fa-angle-double-right" v-else></i>
      </a>
    </li>
  </ul>
</template>
<script>
export default {
  name: "pagination",
  props: {
    type: {
      type: String,
      default: "primary",
      validator: value => {
        return [
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info",
          "rose"
        ].includes(value);
      }
    },
    withText: Boolean,
    noArrows: Boolean,
    pageCount: {
      type: Number,
      default: 0
    },
    perPage: {
      type: Number,
      default: 10
    },
    total: {
      type: Number,
      default: 0
    },
    value: {
      type: Number,
      default: 1
    }
  },
  computed: {
    paginationClass() {
      return `pagination-${this.type}`;
    },
    totalPages() {
      if (this.pageCount > 0) return this.pageCount;
      if (this.total > 0) {
        return Math.ceil(this.total / this.perPage);
      }
      return 1;
    },
    pagesToDisplay() {
      if (this.totalPages > 0 && this.totalPages < this.defaultPagesToDisplay) {
        return this.totalPages;
      }
      return this.defaultPagesToDisplay;
    },
    minPage() {
      if (this.value >= this.pagesToDisplay) {
        const pagesToAdd = Math.floor(this.pagesToDisplay / 2);
        const newMaxPage = pagesToAdd + this.value;
        if (newMaxPage > this.totalPages) {
          return this.totalPages - this.pagesToDisplay + 1;
        }
        return this.value - pagesToAdd;
      } else {
        return 1;
      }
    },
    maxPage() {
      if (this.value >= this.pagesToDisplay) {
        const pagesToAdd = Math.floor(this.pagesToDisplay / 2);
        const newMaxPage = pagesToAdd + this.value;
        if (newMaxPage < this.totalPages) {
          return newMaxPage;
        } else {
          return this.totalPages;
        }
      } else {
        return this.pagesToDisplay;
      }
    }
  },
  data() {
    return {
      defaultPagesToDisplay: 5
    };
  },
  methods: {
    range(min, max) {
      let arr = [];
      for (let i = min; i <= max; i++) {
        arr.push(i);
      }
      return arr;
    },
    changePage(item) {
      this.$emit("input", item);
    },
    nextPage() {
      if (this.value < this.totalPages) {
        this.$emit("input", this.value + 1);
      }
    },
    prevPage() {
      if (this.value > 1) {
        this.$emit("input", this.value - 1);
      }
    }
  },
  watch: {
    perPage() {
      this.$emit("input", 1);
    },
    total() {
      this.$emit("input", 1);
    }
  }
};
</script>
