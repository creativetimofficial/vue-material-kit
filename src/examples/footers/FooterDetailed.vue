<script setup>
defineProps({
  brand: {
    type: Object,
    name: String,
    description: String,
    default: () => ({
      name: "MATERIAL UI DESIGN",
      description: "The next generation of design systems.",
    }),
  },
  socials: {
    type: Array,
    icon: String,
    link: String,
    required: true,
  },
  menus: {
    type: Array,
    name: String,
    items: {
      type: Array,
      name: String,
      href: String,
    },
  },
  copyright: {
    type: String,
    default: "Material Design by Creative Tim.",
  },
});
</script>
<template>
  <footer class="footer p-5">
    <div class="container">
      <div class="row">
        <div class="col-lg-3 mb-5 mb-lg-0">
          <h6 class="text-uppercase mb-2">{{ brand.name }}</h6>
          <p class="mb-4 pb-2">{{ brand.description }}</p>
          <a
            v-for="{ icon, link } of socials"
            :key="link"
            :href="link"
            target="_blank"
            class="text-secondary me-xl-4 me-3"
            v-html="icon"
          >
          </a>
        </div>
        <div
          class="col-md-2 col-6 ms-lg-auto mb-md-0 mb-4"
          v-for="{ name, items } of menus"
          :key="name"
        >
          <h6 class="text-sm">{{ name }}</h6>
          <ul class="flex-column ms-n3 nav">
            <li class="nav-item" v-for="item of items" :key="item.name">
              <a
                class="nav-link text-secondary"
                :href="item.href"
                target="_blank"
              >
                {{ item.name }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr class="horizontal dark mt-lg-5 mt-4 mb-sm-4 mb-1" />
      <div class="row">
        <div class="col-8 mx-lg-auto text-lg-center">
          <p class="text-sm text-secondary">
            Copyright ©
            {{ new Date().getFullYear() }}
            {{ copyright }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>
