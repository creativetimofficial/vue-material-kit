<script>
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import MaterialCheckbox from "@/components/MaterialCheckbox.vue";
import vueMkHeader from "@/assets/img/bg.jpg";
import Breadcrumbs from "@/examples/Breadcrumbs.vue";
import roomData from "@/assets/dataJson/rooms.json";
// import posts from "../posts.json";
// import axios from "axios";

const NoRoom = [{ title: "ชั้น 1" }, { title: "ชั้น 2" }, { title: "ชั้น 3" }];

export default {
  components: {
    MaterialInput,
    MaterialButton,
    Breadcrumbs,
    MaterialCheckbox,
  },
  setup() {
    return {
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
      listRoom: [
        { label: "ตึก 1", value: "ตึก 1" },
        { label: "ตึก 2", value: "ตึก 2" },
        { label: "ตึก 3", value: "ตึก 3" },
        { label: "ตึก 4", value: "ตึก 4" },
        { label: "ตึก 5", value: "ตึก 5" },
        { label: "ตึก 6", value: "ตึก 6" },
        { label: "ตึก 7", value: "ตึก 7" },
      ],
      selectedColor: "",
      statusfree: false,
      statusreturn: false,
      statuseunavailable: false,
      statusewaiting: false,
      selectedlistRoom: "ตึก 1",
    };
  },
  created() {
    // this.$route.query
  },

  methods: {
    gotodetail(id, index) {
      let action;
      if (index == "unavailable") action = "edit";
      if (index == "waiting") action = "add";
      if (index == "free") action = "add";
      this.$router.push({ path: `/room/detail/${id}`, query: { mode: action } });
    },
    onChangeEvent(e) {
      if (e == "free") {
        if (statusfree) {
          const free = this.roomData.filter((tagfree) => tagfree.status === "free");
          console.log(free);
        }
      } else if (e == "unavailable") {
        if (statuseunavailable) {
          const statuseunavailable = this.roomData.filter(
            (tagun) => tagun.status === "unavailable"
          );
          console.log(statuseunavailable);
        }
      } else if (e == "waiting") {
        if (statusrewaiting) {
          const waiting = this.roomData.filter(
            (tagwaiting) => tagwaiting.status === "waiting"
          );
          console.log(waiting);
        }
      } else if (e == "return") {
        if (statusrewaiting) {
          const returns = this.roomData.filter(
            (tagreturn) => tagreturn.status === "return"
          );
          console.log(returns);
        }
      }
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
    <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 pt-6">
      <div class="page-header min-vh-45">
        <div class="container">
          <!-- d-flex justify-content-between -->
          <div>
            <Breadcrumbs
              :routes="[{ label: 'หน้าหลัก', route: '/' }, { label: 'สถานะห้องพัก' }]"
            />
          </div>
          <div class="row pt-4 align-items-baseline">
            <div class="col-4">
              <div class=" d-flex justify-content-start align-items-baseline">
                <label class="w-30" >
                  <i class="material-icons opacity-6 me-2 text-md">home</i>
                  เลือกตึก</label
                >
                <v-select class="w-100" :options="listRoom" v-model="selectedlistRoom"></v-select>
              </div>
             
            </div>
            <div class="col-8">
              <div class="d-flex justify-content-end align-items-baseline">
                <div class="d-flex">
                  <MaterialCheckbox id="terms5" checked>
                    <a href="javascript:;" class=" font-weight-bolder">
                      รายตึก</a
                    >
                  </MaterialCheckbox>
                  <MaterialCheckbox id="terms6">
                    <a href="javascript:;" class=" font-weight-bolder">
                      ตึกทั้งหมด</a
                    >
                  </MaterialCheckbox>
                </div>
                <label style="margin-right: 10px; margin-left: 20px"
                  >ค้นหาชื่อหรือเลขห้อง
                </label>
                <MaterialInput
                  class="input-group-dynamic w-50"
                  icon="search"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>

          <div class="text-center pt-4">
            <div class="d-flex justify-content-between align-items-baseline p-2">
              <h6>ตึก 1</h6>
              <div class="d-flex">
                <MaterialCheckbox
                  id="terms"
                  color="success"
                  :checked="statusfree"
                  @change="onChangeEvent('free')"
                >
                  <a href="javascript:;" class=" font-weight-bolder"> ว่าง</a>
                </MaterialCheckbox>
                <MaterialCheckbox
                  id="terms2"
                  color="red"
                  :checked="statuseunavailable"
                  @change="onChangeEvent('unavailable')"
                >
                  <a href="javascript:;" class="font-weight-bolder">
                    ไม่ว่าง</a
                  >
                </MaterialCheckbox>
                <MaterialCheckbox
                  id="terms3"
                  color="warning"
                  :checked="statusewaiting"
                  @change="onChangeEvent('waiting')"
                >
                  <a
                    href="javascript:;"
                    class="font-weight-bolder"
                  >
                    รอซ่อม</a
                  >
                </MaterialCheckbox>
                <MaterialCheckbox
                  id="terms4"
                  color="return"
                  :checked="statusreturn"
                  @change="onChangeEvent('return')"
                >
                  <a
                    href="javascript:;"
                    class="font-weight-bolder"
                  >
                    รอคืนห้อง</a
                  >
                </MaterialCheckbox>
              </div>
            </div>

            <!-- v-for="(item, index) in NoRoom" :key="index" -->
            <div v-for="(item, index) in NoRoom" :key="index">
              <div class="card mb-2">
                <div class="card-body">
                  <p class="text-start mt-4">
                    <MaterialButton
                      variant="outline"
                      color="success"
                      data-bs-toggle="collapse"
                      href="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                      >{{ item?.title }}</MaterialButton
                    >
                    <!-- item?.title -->
                  </p>
                  <div class="collapse show" id="collapseExample" aria-expanded="true">
                    <div>
                      <div
                        class="row row-cols-auto"
                        :style="{ '--bs-gutter-x': '0.5rem' }"
                      >
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
ol.breadcrumb {
  padding: 1rem !important;
}
</style>
