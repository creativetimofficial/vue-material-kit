<script setup>
import { onMounted } from "vue";

//image
import image from "@/assets/img/illustrations/illustration-signin.jpg";
import vueMkHeader from "@/assets/img/bg.jpg";
//material components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import Breadcrumbs from "@/examples/Breadcrumbs.vue";
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
                { label: 'รายละเอียดห้องพัก' },
              ]"
            />
          </div>
          <!-- d-flex justify-content-between -->
          <h4>รายละเอียดห้องพัก</h4>
          <div class="row pt-4">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    width="300"
                    src="../../assets/img/team-4.jpg"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">รายละเอียดเจ้าของห้อง</h5>
                  
                    <div class="row">
                      <div class="col-4">
                        <p class="card-text">ชือ : มานะ</p>
                        <p class="card-text">สถานะห้อง : ไม่ว่าง</p>
                        <p class="card-text">ยศ : ร้อยตรี</p>
                        <p class="card-text">วันเกิด : 12/02/2514</p>
                        <p class="card-text">วันทำสัญญา : 12/02/2564</p>
                        <p class="card-text">อายุ : 33 ปี</p>
                        <p class="card-text">ระยะเวลาที่เข้าพัก : 3 เดือน</p>
                      </div>
                      <div class="col-4">
                        <p class="card-text">นามสกุล : ถือดี</p>
                        <p class="card-text">สังกัด : กก</p>
                        <p class="card-text">เลขบัตรประชาชน : 123456123456</p>
                        <p class="card-text">เบอร์โทร : 0972534887</p>
                        <p class="card-text">เงินค่าประกัน : 12,000</p>
                      </div>
                    </div>
                    <!-- <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p> -->
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
