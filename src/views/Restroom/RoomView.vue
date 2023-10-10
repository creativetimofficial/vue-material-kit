<script setup>
import { onMounted } from "vue";

//example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";

//image
import image from "@/assets/img/illustrations/illustration-signin.jpg";

//material components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";
import MaterialButton from "@/components/MaterialButton.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});

const landingColumns = [
  {
    title: "ห้อง 1",
    dataIndex: "1",
    status: true
  },
  {
    title: "ห้อง 2",
    dataIndex: "2",
    status: false
  },
  {
    title: "ห้อง 3",
    dataIndex: "3",
    status: true
  },
  {
    title: "ห้อง 4",
    dataIndex: "4",
    status: true
  },
  {
    title: "ห้อง 5",
    dataIndex: "5",
    status: false
  },
  {
    title: "ห้อง 6",
    dataIndex: "6",
    status: false
  },
  {
    title: "ห้อง 7",
    dataIndex: "7",
    status: true
  },
  {
    title: "ห้อง 8",
    dataIndex: "8",
    status: false
  },
  {
    title: "ห้อง 9",
    dataIndex: "9",
    status: false
  },
  {
    title: "ห้อง 10",
    dataIndex: "10",
    status: false
  },
  {
    title: "ห้อง 11",
    dataIndex: "11",
    status: true
  },
  {
    title: "ห้อง 12",
    dataIndex: "12",
    status: false
  },
  {
    title: "ห้อง 13",
    dataIndex: "13",
    status: false
  },
];
</script>
<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <DefaultNavbar
          :sticky="true"
          :action="{
            route: 'https://www.creative-tim.com/product/vue-material-kit-pro',
            color: 'bg-gradient-success',
            label: 'Buy Now',
          }"
        />
      </div>
    </div>
  </div>
  <section>
    <div class="page-header min-vh-100">
      <div class="container">
        <div class=" text-center">
          <div class="row row-cols-auto" :style="{'--bs-gutter-x': '0.5rem'}">
            <div class="col" v-for="(item,index) in landingColumns" :key="index">
              <div class="card mb-2" v-bind:class="{'bg-red': item?.status,  'bg-green': !item?.status}" :style="{ width: `110px`,  }">
                <div class="card-body">
                  <p class="card-title " >{{ item?.title }}</p>
                  <a href="#" class="card-link"><i class="bi bi-pencil-square"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>
<style>
.bg-green{
  background : #567b57 !important;
  color: #fff;
}
.bg-red{
  background: #d24c4a !important;
  color: #fff;
}
.bg-waring{
  background: #d1d3d5 !important;
  color: #fff;
}
</style>