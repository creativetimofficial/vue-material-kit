export const inputStaticCode = `<script setup>
//Vue Material Kit 2 components
import MaterialInput from "@/components/MaterialInput.vue";
</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row justify-space-between py-2">
        <div class="col-lg-4 mx-auto">
          <MaterialInput
            class="input-group-static mb-4"
            label="First Name"
            type="text"
            placeholder="eg. Thomas Shelby"
          />
        </div>
      </div>
    </div>
  </section>
</template>
`;

export const inputDynamicCode = `<script setup>
//Vue Material Kit 2 components
import MaterialInput from "@/components/MaterialInput.vue";
</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row justify-space-between py-2">
        <div class="col-lg-4 mx-auto">
          <MaterialInput
            class="input-group-dynamic"
            :label="{ text: 'Regular', class: 'form-label' }"
            type="text"
          />
        </div>
      </div>
    </div>
  </section>
</template>
`;

export const inputOutlinedCode = `<script setup>
//Vue Material Kit 2 components
import MaterialInput from "@/components/MaterialInput.vue";
</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row justify-space-between py-2">
        <div class="col-lg-4 mx-auto">
          <MaterialInput
            class="input-group-outline mb-4"
            :label="{ text: 'Outline', class: 'form-label' }"
            type="text"
          />
        </div>
      </div>
    </div>
  </section>
</template>
`;

export const inputIconCode = `<script setup>
//Vue Material Kit 2 components
import MaterialInput from "@/components/MaterialInput.vue";
</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row justify-space-between py-2">
        <div class="col-lg-4 mx-auto">
          <MaterialInput
            class="input-group-dynamic mb-4"
            icon="search"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  </section>
</template>
`;

export const inputSuccessCode = `<script setup>
//Vue Material Kit 2 components
import MaterialInput from "@/components/MaterialInput.vue";
</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row justify-space-between py-2">
        <div class="col-lg-4 mx-auto">
          <MaterialInput
            class="input-group-static mb-4"
            label="First Name"
            type="text"
            placeholder="eg. Thomas Shelby"
          />
        </div>
      </div>
    </div>
  </section>
</template>
`;

export const inputErrorCode = `<script setup>
//Vue Material Kit 2 components
import MaterialInput from "@/components/MaterialInput.vue";
</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row justify-space-between py-2">
        <div class="col-lg-4 mx-auto">
          <MaterialInput type="text" placeholder="Error" error />
        </div>
      </div>
    </div>
  </section>
</template>
`;

export const inputDisabledCode = `<script setup>
//Vue Material Kit 2 components
import MaterialInput from "@/components/MaterialInput.vue";
</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row justify-space-between py-2">
        <div class="col-lg-4 mx-auto">
          <MaterialInput type="text" placeholder="Disabled" isDisabled />
        </div>
      </div>
    </div>
  </section>
</template>
`;
