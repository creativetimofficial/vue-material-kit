<script setup>
defineProps({
  variant: {
    validator(val) {
      return ["gradient", "contained", "plain"].includes(val);
    },
    default: "plain",
  },
  color: {
    validator(color) {
      return [
        "primary",
        "secondary",
        "info",
        "success",
        "warning",
        "error",
        "light",
        "dark",
        "",
      ].includes(color);
    },
    default: "",
  },
  rating: {
    type: Number,
    required: true,
  },
  review: {
    type: String,
    required: true,
  },
  author: {
    type: Object,
    image: String,
    name: String,
    date: String,
    required: true,
  },
});
function getColor(variant, color) {
  let colorVal;
  if (variant == "gradient") {
    colorVal = "bg-gradient-" + color;
  } else if (variant == "contained") {
    colorVal = "bg-" + color;
  } else if (variant == "plain" && !color) {
    colorVal = "card-plain";
  }

  return colorVal;
}
</script>
<template>
  <div :class="`card ${getColor(variant, color)}`">
    <div class="card-body">
      <div class="rating float-none">
        <i
          :class="[
            { 'text-white': color },
            {
              'fas fa-star': rating >= 1,
              'fas fa-star-half': rating === 0.5,
              'far fa-star': rating < 0.5 || !rating,
            },
          ]"
        ></i>
        <i
          class="mx-1"
          :class="[
            { 'text-white': color },
            {
              'fas fa-star': rating >= 2,
              'fas fa-star-half': rating === 1.5,
              'far fa-star': rating < 1.5,
            },
          ]"
        ></i>
        <i
          :class="[
            { 'text-white': color },
            {
              'fas fa-star': rating >= 3,
              'fas fa-star-half': rating === 2.5,
              'far fa-star': rating < 2.5,
            },
          ]"
        ></i>
        <i
          class="mx-1"
          :class="[
            { 'text-white': color },
            {
              'fas fa-star': rating >= 4,
              'fas fa-star-half': rating === 3.5,
              'far fa-star': rating < 3.5,
            },
          ]"
        ></i>
        <i
          :class="[
            { 'text-white': color },
            {
              'fas fa-star': rating === 5,
              'fas fa-star-half': rating === 4.5,
              'far fa-star': rating < 4.5,
            },
          ]"
        ></i>
      </div>
      <p class="mt-3" :class="color ? 'text-white' : ''">
        {{ review }}
      </p>
      <div class="author mt-4">
        <img :src="author.image" :alt="author.name" class="avatar shadow" />
        <div class="name ps-2">
          <span :class="color ? 'text-white' : ''">{{ author.name }}</span>
          <div class="stats" :class="color ? 'text-white' : ''">
            <small><i class="far fa-clock"></i> {{ author.date }}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
