<script setup>
import { onMounted } from "vue";

//image
import image from "@/assets/img/illustrations/illustration-signin.jpg";
import vueMkHeader from "@/assets/img/bg.jpg";
//material components
import MaterialInput from "@/components/MaterialInput.vue";
import Breadcrumbs from "@/examples/Breadcrumbs.vue";

import MaterialButton from "@/components/MaterialButton.vue";
// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});
const listRoom = [
  { title: "ตึก 1" },
  { title: "ตึก 2" },
  { title: "ตึก 3" },
  { title: "ตึก 4" },
  { title: "ตึก 5" },
  { title: "ตึก 6" },
  { title: "ตึก 7" },
];

const NoRoom = [
  { title: "ชั้น 1" },
  { title: "ชั้น 2" },
  { title: "ชั้น 3" },
  { title: "ชั้น 4" },
  { title: "ชั้น 5" },
  { title: "ชั้น 6" },
  { title: "ชั้น 7" },
];

const landingColumns = [
  {
    title: "ห้อง 1",
    dataIndex: "1",
    status: true,
  },
  {
    title: "ห้อง 2",
    dataIndex: "2",
    status: false,
  },
  {
    title: "ห้อง 3",
    dataIndex: "3",
    status: true,
  },
  {
    title: "ห้อง 4",
    dataIndex: "4",
    status: true,
  },
  {
    title: "ห้อง 5",
    dataIndex: "5",
    status: false,
  },
  {
    title: "ห้อง 6",
    dataIndex: "6",
    status: false,
  },
  {
    title: "ห้อง 7",
    dataIndex: "7",
    status: true,
  },
  {
    title: "ห้อง 8",
    dataIndex: "8",
    status: false,
  },
  {
    title: "ห้อง 9",
    dataIndex: "9",
    status: false,
  },
  {
    title: "ห้อง 10",
    dataIndex: "10",
    status: false,
  },
  {
    title: "ห้อง 11",
    dataIndex: "11",
    status: true,
  },
  {
    title: "ห้อง 12",
    dataIndex: "12",
    status: false,
  },
  {
    title: "ห้อง 13",
    dataIndex: "13",
    status: false,
  },
];
</script>
<template>
  <Header>
    <div
      class="page-header min-vh-45"
      :style="`background-image: url(${vueMkHeader})`"
      loading="lazy"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <h1 class="pt-3 mt-n5 me-2 head-text">สถานะห้องพัก</h1>
          </div>
        </div>
      </div>
    </div>
  </Header>
  <section>
    <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
      <div class="page-header min-vh-45">
        <div class="container">
          <div>
            <Breadcrumbs
              :routes="[
                { label: 'หน้าหลัก', route: '/' },
                { label: 'สถานะห้องพัก', route: '/room' },
                { label: 'แก้ไขรายละเอียดห้อง' },
              ]"
            />
          </div>
          <!-- d-flex justify-content-between -->
          <h4>แก้ไขรายละเอียดห้อง</h4>
          <div class="text-end">
            <MaterialButton
              variant="gradient"
              color="success"
              data-bs-toggle="modal"
              data-bs-target="#userBackdrop"
              >เพิ่มรายละเอียดสัญญา</MaterialButton
            >
          </div>
          <div class="row pt-4">
            <div class="col-8">
              <div class="nav-item dropdown dropdown-hover mx-2">
                <a
                  role="button"
                  class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                  id="dropdownMenuPages"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="material-icons opacity-6 me-2 text-md">home</i>
                  ตึก
                </a>
                <div
                  class="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-xl mt-0 mt-lg-3"
                  aria-labelledby="dropdownMenuPages"
                >
                  <div class="row">
                    <div class="col-12 px-4 py-2">
                      <div class="row">
                        <div class="position-relative">
                          <p
                            class="dropdown-item border-radius-md"
                            v-for="(item, index) in listRoom"
                            :key="index"
                          >
                            <span>{{ item?.title }}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-4">
              <div>
                <MaterialInput
                  class="input-group-dynamic w-100"
                  icon="search"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>

          <div class="text-center pt-4">
            <div v-for="(item, index) in NoRoom" :key="index">
              <p class="text-start mt-4">
                <a
                  class="btn btn-primary"
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  role="button"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  {{ item?.title }}
                </a>
              </p>
              <div class="collapse show" id="collapseExample" aria-expanded="true">
                <div>
                  <div class="row row-cols-auto" :style="{ '--bs-gutter-x': '0.5rem' }">
                    <div class="col" v-for="(item, index) in landingColumns" :key="index">
                      <div
                        class="card mb-2"
                        v-bind:class="{
                          'bg-red': item?.status,
                          'bg-green': !item?.status,
                        }"
                        :style="{ width: `110px` }"
                      >
                        <div class="card-body">
                          <div
                            style="
                              text-align: right;
                              margin-top: -10px;
                              margin-right: -10px;
                            "
                          >
                            <a href="#" class="card-link"
                              ><span class="material-icons" style="color: #fff">
                                edit
                              </span></a
                            >
                          </div>
                          <p class="card-title">{{ item?.title }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
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
.bg-green {
  background: #567b57 !important;
  color: #fff;
}
.bg-red {
  background: #d24c4a !important;
  color: #fff;
}
.bg-waring {
  background: #d1d3d5 !important;
  color: #fff;
}
</style>
