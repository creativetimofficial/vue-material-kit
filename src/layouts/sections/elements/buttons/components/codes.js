export const buttonsGradientCode = `<script setup>
//Vue Material Kit 2 components
import MaterialButton from "@/components/MaterialButton.vue";
</script>
<template>
  <section class="py-7 mt-3 bg-gray-100">
    <div class="container">
      <div class="row justify-space-between text-center py-2">
        <div class="col-12 mx-auto">
            <MaterialButton variant="gradient" color="secondary" class="w-auto me-2">Primary</MaterialButton>
            <MaterialButton variant="gradient" color="primary" class="w-auto me-2">Secondary</MaterialButton>
            <MaterialButton variant="gradient" color="info" class="w-auto me-2">Info</MaterialButton>
            <MaterialButton variant="gradient" color="success" class="w-auto me-2">Success</MaterialButton>
            <MaterialButton variant="gradient" color="warning" class="w-auto me-2">Warning</MaterialButton>
            <MaterialButton variant="gradient" color="danger" class="w-auto me-2">Danger</MaterialButton>
            <MaterialButton variant="gradient" color="light" class="w-auto me-2">Light</MaterialButton>
            <MaterialButton variant="gradient" color="dark" class="w-auto me-2">Dark</MaterialButton>
            <MaterialButton variant="gradient" color="white" class="w-auto me-2">White</MaterialButton>

        </div>
      </div>
    </div>
  </section>
</template>
`;

export const buttonsContainedCode = `<script setup>
//Vue Material Kit 2 components
import MaterialButton from "@/components/MaterialButton.vue";
</script>
<template>
  <section class="py-7 mt-3">
    <div class="container">
      <div class="row justify-space-between text-center py-2">
        <div class="col-12 mx-auto">
          <MaterialButton
            variant="contained"
            color="secondary"
            class="w-auto me-2">
            Primary
          </MaterialButton>
          
          <MaterialButton
            variant="contained"
            color="primary"
            class="w-auto me-2">
            Secondary
          </MaterialButton>
          
          <MaterialButton variant="contained" color="info" class="w-auto me-2">
            Info
          </MaterialButton>
          
          <MaterialButton
            variant="contained"
            color="success"
            class="w-auto me-2">
            Success
          </MaterialButton>
          
          <MaterialButton
            variant="contained"
            color="warning"
            class="w-auto me-2">
            Warning
          </MaterialButton>
          
          <MaterialButton variant="contained" color="danger" class="w-auto me-2">
            Danger
          </MaterialButton>
          
          <MaterialButton variant="contained" color="light" class="w-auto me-2">
            Light
          </MaterialButton>
          
          <MaterialButton variant="contained" color="dark" class="w-auto me-2">
            Dark
          </MaterialButton>
          <MaterialButton variant="contained" color="white" class="w-auto me-2">
            White
          </MaterialButton>
        </div>
      </div>
    </div>
  </section>
</template>
`;

export const buttonsOutlinedCode = `<script setup>
//Vue Material Kit 2 components
import MaterialButton from "@/components/MaterialButton.vue";
</script>
<template>
        <section class="py-7 mt-3">
  <div class="container">
    <div class="row justify-space-between text-center py-2">
      <div class="col-12 mx-auto">
        <MaterialButton variant="outline" color="secondary" class="w-auto me-2">Primary</MaterialButton>
        <MaterialButton variant="outline" color="primary" class="w-auto me-2">Secondary</MaterialButton>
        <MaterialButton variant="outline" color="info" class="w-auto me-2">Info</MaterialButton>
        <MaterialButton variant="outline" color="success" class="w-auto me-2">Success</MaterialButton>
        <MaterialButton variant="outline" color="warning" class="w-auto me-2">Warning</MaterialButton>
        <MaterialButton variant="outline" color="danger" class="w-auto me-2">Danger</MaterialButton>
        <MaterialButton variant="outline" color="light" class="w-auto me-2">Light</MaterialButton>
        <MaterialButton variant="outline" color="dark" class="w-auto me-2">Dark</MaterialButton>
        <MaterialButton variant="outline" color="white" class="w-auto me-2">White</MaterialButton>        
      </div>
    </div>
  </div>
</section>
</template>`;

export const buttonsSizesCode = `<script setup>
//Vue Material Kit 2 components
import MaterialButton from "@/components/MaterialButton.vue";
</script>
<template>
  <section class="py-7 mt-3">
    <div class="container">
      <div class="row justify-space-between text-center py-2">
        <div class="col-12 mx-auto">
            <MaterialButton variant="gradient" color="success" size="sm" class="me-2">Small</MaterialButton>
            <MaterialButton variant="gradient" color="success" class="w-auto me-2">Default</MaterialButton>
            <MaterialButton variant="gradient" color="success" size="lg">Large</MaterialButton>
        </div>
      </div>
    </div>
  </section>
</template>
`;

export const buttonsIconLeftCode = `<script setup>
//Vue Material Kit 2 components
import MaterialButton from "@/components/MaterialButton.vue";
</script>
<template>
  <section class="py-7 m-3 bg-gray-100">
    <div class="container">
      <div class="row justify-space-between text-center py-2">
        <div class="col-12 mx-auto">
            <MaterialButton variant="gradient" color="primary" size="sm" class="btn-icon">
            <div class="d-flex align-items-center">
              <i class="material-icons me-2" aria-hidden="true">favorite</i>
              Small
            </div>
            </MaterialButton>

            <MaterialButton variant="gradient" color="primary" class="btn-icon">
            <div class="d-flex align-items-center">
              <i class="material-icons me-2" aria-hidden="true">favorite</i>
              Default
            </div>
            </MaterialButton>

            <MaterialButton variant="gradient" color="primary" size="lg" class="btn-icon mx-2">
            <div class="d-flex align-items-center">
              <i class="material-icons me-2" aria-hidden="true">favorite</i>
              Large
            </div>
            </MaterialButton>

        </div>
      </div>
    </div>
  </section>
</template>
`;

export const buttonsIconRightCode = `<script setup>
//Vue Material Kit 2 components
import MaterialButton from "@/components/MaterialButton.vue";
</script>
<template>
  <section class="py-7 m-3 bg-gray-100">
    <div class="container">
      <div class="row justify-space-between text-center py-2">
        <div class="col-12 mx-auto">
            <MaterialButton variant="gradient" color="success" size="sm" class="btn-icon">
            <div class="d-flex align-items-center">
                Small
              <i class="material-icons ms-2" aria-hidden="true">favorite</i>
            </div>
            </MaterialButton>

            <MaterialButton variant="gradient" color="success" class="btn-icon mx-2">
            <div class="d-flex align-items-center">
                Default
              <i class="material-icons ms-2" aria-hidden="true">favorite</i>
            </div>
            </MaterialButton>

            <MaterialButton variant="gradient" color="success" size="lg" class="btn-icon">
            <div class="d-flex align-items-center">
                Large
              <i class="material-icons ms-2" aria-hidden="true">favorite</i>
            </div>
            </MaterialButton>

        </div>
      </div>
    </div>
  </section>
</template>
`;
