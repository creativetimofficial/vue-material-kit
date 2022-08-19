<script setup>
import { onMounted } from "vue";

//Vue Material Kit 2 components
import MaterialAvatar from "@/components/MaterialAvatar.vue";

// images
import team1 from "@/assets/img/team-1.jpg";
import team2 from "@/assets/img/team-2.jpg";
import team3 from "@/assets/img/team-3.jpg";
import team4 from "@/assets/img/team-4.jpg";

// popover
import setTooltip from "@/assets/js/tooltip";

// store
import { useAppStore } from "@/stores";
const store = useAppStore();

// hook
onMounted(() => {
  setTooltip(store.bootstrap);
});
</script>
<template>
  <div class="container py-6">
    <div class="row mt-5 text-center">
      <div class="col-12">
        <div class="avatar-group">
          <a
            href="javascript:;"
            class="avatar avatar-lg"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Ryan Tompson"
          >
            <MaterialAvatar :image="team1" alt="Image placeholder" size="lg" />
          </a>
          <a
            href="javascript:;"
            class="avatar avatar-lg"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Romina Hadid"
          >
            <MaterialAvatar :image="team2" alt="Image placeholder" size="lg" />
          </a>
          <a
            href="javascript:;"
            class="avatar avatar-lg"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Alexander Smith"
          >
            <MaterialAvatar :image="team3" alt="Image placeholder" size="lg" />
          </a>
          <a
            href="javascript:;"
            class="avatar avatar-lg"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            title="Jessica Doe"
          >
            <MaterialAvatar :image="team4" alt="Image placeholder" size="lg" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
