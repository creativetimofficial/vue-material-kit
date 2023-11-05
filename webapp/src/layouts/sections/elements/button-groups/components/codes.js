export const buttonGroupsSimpleCode = `<script setup>
//Vue Material Kit 2 components
import MaterialButton from "@/components/MaterialButton.vue";
</script>
<template>
  <section class="py-7 m-3 bg-gray-100">
    <div class="container">
      <div class="row justify-space-between text-center py-2">
        <div class="col-6 mx-auto">
          <div class="btn-group" role="group" aria-label="Basic example">
            <MaterialButton variant="contained" color="success">Left</MaterialButton>
            <MaterialButton variant="contained" color="success">Middle</MaterialButton>
            <MaterialButton variant="contained" color="success">Right</MaterialButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
`;

export const buttonGroupsOutlineCode = `<script setup>
//Vue Material Kit 2 components
import MaterialButton from "@/components/MaterialButton.vue";
</script>
<template>
  <section class="py-7 m-3 bg-gray-100">
    <div class="container">
      <div class="row justify-space-between text-center py-2">
        <div class="col-6 mx-auto">
          <div class="btn-group" role="group" aria-label="Basic example">
            <MaterialButton variant="outline" color="dark">
              Left
            </MaterialButton>
            <MaterialButton variant="outline" color="dark">
              Middle
            </MaterialButton>
            <MaterialButton variant="outline" color="dark">
              Right
            </MaterialButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
`;

export const buttonGroupsCheckboxCode = `<script setup></script>
<template>
  <section class="py-7 m-3 bg-gray-100">
    <div class="container">
      <div class="row justify-space-between text-center py-2">
        <div class="col-6 mx-auto">
        <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
          <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
          <label class="btn btn-outline-dark" for="btncheck1">Checkbox 1</label>

          <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
          <label class="btn btn-outline-dark" for="btncheck2">Checkbox 2</label>

          <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off">
          <label class="btn btn-outline-dark" for="btncheck3">Checkbox 3</label>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
`;

export const buttonGroupsRadioCode = `<script setup></script>
<template>
  <section class="py-7 m-3 bg-gray-100">
    <div class="container">
      <div class="row justify-space-between text-center py-2">
        <div class="col-6 mx-auto">
        <div class="btn-group" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
          <label class="btn btn-outline-dark" for="btnradio1">Radio 1</label>

          <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off">
          <label class="btn btn-outline-dark" for="btnradio2">Radio 2</label>

          <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
          <label class="btn btn-outline-dark" for="btnradio3">Radio 3</label>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>
`;

export const buttonGroupsSizingCode = `<script setup>
//Vue Material Kit 2 components
import MaterialButton from "@/components/MaterialButton.vue";
</script>
<template>
  <section class="py-7 m-3 bg-gray-100">
    <div class="container">
      <div class="row text-start py-2">
        <div class="col-6 mx-auto">
          <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
            <MaterialButton variant="contained" color="success">
              Left
            </MaterialButton>
            <MaterialButton variant="contained" color="success">
              Middle
            </MaterialButton>
            <MaterialButton variant="contained" color="success">
              Right
            </MaterialButton>
          </div>

          <div class="btn-group" role="group" aria-label="Basic example">
            <MaterialButton variant="contained" color="success">
              Left
            </MaterialButton>
            <MaterialButton variant="contained" color="success">
              Middle
            </MaterialButton>
            <MaterialButton variant="contained" color="success">
              Right
            </MaterialButton>
          </div>

          <div class="btn-group btn-group-sm" role="group" aria-label="Basic example">
            <MaterialButton variant="contained" color="success">
              Left
            </MaterialButton>
            <MaterialButton variant="contained" color="success">
              Middle
            </MaterialButton>
            <MaterialButton variant="contained" color="success">
              Right
            </MaterialButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
`;
