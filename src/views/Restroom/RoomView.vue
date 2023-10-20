<script>
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import MaterialCheckbox from "@/components/MaterialCheckbox.vue";
import vueMkHeader from "@/assets/img/bg.jpg";
import Breadcrumbs from "@/examples/Breadcrumbs.vue";
import roomData from "@/assets/dataJson/rooms.json";
// import posts from "../posts.json";

// import axios from "axios";
// const fs = require('fs');
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

export default {
  components: {
    MaterialInput,
    MaterialButton,
    Breadcrumbs,
    MaterialCheckbox,
  },
  setup() {
    return {
      listRoom,
      NoRoom,
      vueMkHeader,
      roomData,
    };
  },

  data() {
    return {
      value: { name: "Vue.js", language: "JavaScript" },
      options: [
        { label: "Vue.js", value: "JavaScript" },
        { label: "Rails", value: "Ruby" },
        { label: "Sinatra", value: "Ruby" },
        { label: "Laravel", value: "PHP" },
        { label: "Phoenix", value: "Elixir" },
      ],
      selectedColor: "",
    };
  },
  created() {
    // this.$route.query
  },
  methods: {
    gotodetail(id, index) {
      console.log(index);
      let action;
      if (index == "unavailable") action = "edit";
      if (index == "waiting") action = "add";
      if (index == "free") action = "add";
      this.$router.push({ path: `/room/detail/${id}`, query: { mode: action } });
    },
  },
};
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
          <!-- d-flex justify-content-between -->
          <div>
            <Breadcrumbs
              :routes="[{ label: 'หน้าหลัก', route: '/' }, { label: 'สถานะห้องพัก' }]"
            />
          </div>
          <div class="row pt-4">
            <div class="col-8">
              <div class="nav-item dropdown dropdown-hover mx-2 w-45">
                <a
                  role="button"
                  class="nav-link ps-2 d-flex cursor-pointer align-items-center"
                  id="dropdownMenuPages"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="material-icons opacity-6 me-2 text-md">home</i>
                  เลือกตึก
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
                <label>ค้นหาผู้เช่า</label>
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
            <!-- v-for="(item, index) in NoRoom" :key="index" -->
            <div>
              <p class="text-start mt-4">
                <MaterialButton
                  variant="outline"
                  color="success"
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                  >ตึก1</MaterialButton
                >
                <!-- item?.title -->
              </p>
              <div class="collapse show" id="collapseExample" aria-expanded="true">
                <div>
                  <div class="d-flex justify-content-end">
                    <MaterialCheckbox id="terms" checked>
                      <a href="javascript:;" class="text-success font-weight-bolder">
                        ว่าง</a
                      >
                    </MaterialCheckbox>
                    <MaterialCheckbox id="terms" >
                      <a href="javascript:;" class="text-danger font-weight-bolder">
                        ไม่ว่าง</a
                      >
                    </MaterialCheckbox>
                    <MaterialCheckbox id="terms" >
                      <a href="javascript:;" class=" font-weight-bolder" style="color: #fb8c00">
                        รอซ่อม</a
                      >
                    </MaterialCheckbox>
                    <MaterialCheckbox id="terms" >
                      <a href="javascript:;" class="font-weight-bolder" style="color: #ffca28">
                        รอคืนห้อง</a
                      >
                    </MaterialCheckbox>
                  </div>
                  <div class="row row-cols-auto" :style="{ '--bs-gutter-x': '0.5rem' }">
                    <div class="col" v-for="(item, index) in roomData" :key="index">
                      <div
                        class="card mb-2"
                        :class="{
                          'bg-red': item?.status == 'unavailable',
                          'bg-green': item?.status == 'free',
                          'bg-warning': item?.status == 'waiting',
                          'bg-return': item?.status == 'return',
                        }"
                        :style="{ width: `110px` }"
                      >
                        <div class="card-body">
                          <p class="card-title">
                            <a
                              style="cursor: pointer"
                              @click="gotodetail(item?.dataIndex, item?.status)"
                              class="text-white"
                              >{{ item?.title }}</a
                            >
                          </p>
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
    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">เลือกผู้เช่าห้องพัก</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <v-select :options="options" v-model="selectedColor"></v-select>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              ปิดหน้าต่าง
            </button>
            <MaterialButton variant="gradient" color="success">บันทึก</MaterialButton>
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
.bg-warning {
  background: #fb8c00 !important;
  color: #fff;
}
.bg-return {
  background: #ffca28 !important;
  color: #fff;
}
</style>
