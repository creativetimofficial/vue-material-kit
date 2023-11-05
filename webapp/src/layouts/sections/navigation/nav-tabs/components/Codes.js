export const TabsSimpleCode = `<script setup>
import { onMounted } from "vue";

// nav-pill
import setNavPills from "@/assets/js/nav-pills.js";

onMounted(() => {
  setNavPills();
});
</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row">
        <div class="col-lg-4 mx-auto">
          <div class="nav-wrapper position-relative end-0">
            <ul class="nav nav-pills nav-fill p-1" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link mb-0 px-0 py-1 active"
                  data-bs-toggle="tab"
                  href="#profile-tabs-simple"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="true"
                >
                  My Profile
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link mb-0 px-0 py-1"
                  data-bs-toggle="tab"
                  href="#dashboard-tabs-simple"
                  role="tab"
                  aria-controls="dashboard"
                  aria-selected="false"
                >
                  Dashboard
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
`;
