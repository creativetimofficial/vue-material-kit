<script>
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import MaterialCheckbox from "@/components/MaterialCheckbox.vue";
import vueMkHeader from "@/assets/img/bg.jpg";
import Breadcrumbs from "@/examples/Breadcrumbs.vue";
// import roomData from "@/assets/dataJson/rooms.json";
// import posts from "../posts.json";
import axios from "axios";

export default {
  components: {
    MaterialInput,
    MaterialButton,
    Breadcrumbs,
    MaterialCheckbox,
  },
  setup() {
    return {
      vueMkHeader,
      // roomData,
    };
  },

  data() {
    return {
      typeRoom: [
        { label: "ทั้งหมด", value: "ทั้งหมด" },
        { label: "ช1", value: "ช1" },
        { label: "ช2", value: "ช2" },
        { label: "ช3", value: "ช3" },
      ],

      listRoom: [],
      selectedtypeRoom: "ช1",
      selectedColor: "",
      statusfree: false,
      statusreturn: false,
      statuseunavailable: false,
      statusewaiting: false,
      selectedlistRoom: { label: "อาคารแฟลต 1/11", value: "อาคารแฟลต 1/11" },
      committee: "",
      selectedStatus: "",
      selectedReturn: "",
      selectedUnavailable: "",
      selectedWaiting: "",
      selectedScaple: "",
      roomData: [],
      buildingList: [],
    };
  },
  created() {
    // this.$route.query
    try {
      axios.get(`http://localhost:3001/users/`).then();
    } catch (e) {
      console.error(e);
    }

    this.getRooms();
    this.getBuildings();
  },
  watch: {
    selectedtypeRoom: function (newValue) {
      this.roomData = this.oldData;
      if (newValue !== null) {
        if (newValue.value !== "ทั้งหมด") {
          const typeRoom = this.roomData.filter(
            (tagreturn) => tagreturn.typeRoom === newValue.value
          );
          this.roomData = typeRoom;
        } else {
          this.roomData = this.oldData;
        }
      }
    },

    // selectedtypeRoom: async function (newValue) {
    //   // this.dataBuilding["listRoom"] = [];
    //   let buildingList = [];
    //   buildingList = this.oldData
    //   let datalist = []
    //   if (newValue !== null) {
    //     if (newValue.value !== "ทั้งหมด") {
    //       datalist = buildingList["listRoom"].map((ele, i) => {
    //         ele.rooms = ele.rooms.filter((c) => c.typeRoom == newValue.value);
    //         return ele; // return ele;
    //       });

    //       this.dataBuilding["listRoom"] = datalist;
    //       console.log(this.dataBuilding);
    //     } else {
    //       // this.roomData = this.oldData;
    //     }
    //   }
    // },
  },
  methods: {
    gotodetail(id, index) {
      let action;
      if (index == "unavailable") action = "edit";
      if (index == "waiting") action = "add";
      if (index == "free") action = "add";
      if (index == "special") action = "special";
      if (index == "return") action = "return";
      this.$router.push({ path: `/room/detail/${id}`, query: { mode: action } });
    },

    async roomType() {
      this.dataBuilding["listRoom"] = [];
      let buildingList = [];
      let datalist = await axios.get(`http://localhost:3001/buildings/`);
      buildingList = await datalist.data.find(
        (el) => el.name == this.selectedlistRoom.value
      );
      if (newValue !== null) {
        if (newValue.value !== "ทั้งหมด") {
          datalist = buildingList["listRoom"].map((ele, i) => {
            ele.rooms = ele.rooms.filter((c) => c.typeRoom == newValue.value);
            return ele; // return ele;
          });

          this.dataBuilding["listRoom"] = datalist;
          console.log(this.dataBuilding);
        } else {
          // this.roomData = this.oldData;
        }
      }
    },
    async getRooms() {
      try {
        await axios
          .get("http://localhost:3001/rooms")
          .then((res) => {
            this.roomData = res.data;
            console.log(this.roomData);
            this.oldData = this.roomData;
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.error(error);
      }
    },
    async getBuildings() {
      try {
        axios.get(`http://localhost:3001/buildings/`).then((res) => {
          this.buildingList = res.data;
          // this.oldData = res.data
          let roomValue = this.buildingList.find(
            (el) => el.name == this.selectedlistRoom.value
          );
          this.committee = roomValue.committee;
          this.dataBuilding = { ...roomValue };
          // this.oldData = { ...roomValue };
          // console.log(this.dataBuilding);
          this.listRoom = this.buildingList.map((ele) => {
            return {
              label: ele.name,
              value: ele.name,
            };
          });
        });
      } catch (e) {
        console.error(e);
      }
    },

    async EdituserForm() {
      let body = {
        committee: this.committee,
      };
      axios
        .put(`http://localhost:3001/buildings`, body, {
          headers: {
            // remove headers
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          this.getBuildings();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    onChangeEvent(e, event, selectedStatus) {
      this.roomData = this.oldData;
      if (e == "free") {
        if (event.target.checked) {
          const free = this.roomData.filter((tagfree) => tagfree.status === "free");
          this.roomData = free;
        }
      } else if (e == "unavailable") {
        if (event.target.checked) {
          const statuseunavailable = this.roomData.filter(
            (tagun) => tagun.status === "unavailable"
          );
          this.roomData = statuseunavailable;
        }
      } else if (e == "waiting") {
        if (event.target.checked) {
          const waiting = this.roomData.filter(
            (tagwaiting) => tagwaiting.status === "waiting"
          );
          this.roomData = waiting;
        }
      } else if (e == "return") {
        if (event.target.checked) {
          const returns = this.roomData.filter(
            (tagreturn) => tagreturn.status === "return"
          );
          this.roomData = returns;
        }
      } else if (e == "special") {
        if (event.target.checked) {
          const specials = this.roomData.filter(
            (tagreturn) => tagreturn.status === "special"
          );
          this.roomData = specials;
        }
      }
    },
  },
};
</script>
<template>
  <Header>
    <div
      class="page-header min-vh-70"
      :style="`background-image: url(${vueMkHeader})`"
      loading="lazy"
    >
      <div class="container">
        <div class="text-center" style="margin-top: -120px">
          <img src="../../assets/img/logo.png" alt="title" loading="lazy" class="w-35" />
        </div>
        <div class="row pt-6">
          <div class="col-lg-12 text-center mx-auto position-relative">
            <h1 class="pt-3 mt-n5 me-2 head-text">
              โปรแกรมทะเบียนบ้านพัก
              <br />
              <span
                style="font-size: 24px; border-top: 4px solid #000; font-weight: normal"
                >กองบัญชาการตำรวจตระเวนชายแดน</span
              >
            </h1>
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
          <h4>สถานะห้องพัก</h4>
          <div class="row pt-4 align-items-baseline">
            <div class="col-4">
              <div class="d-flex justify-content-start align-items-baseline">
                <label class="w-30">
                  <i class="material-icons opacity-6 me-2 text-md">home</i>
                  เลือกตึก</label
                >
                <v-select
                  class="w-100"
                  :options="listRoom"
                  v-model="selectedlistRoom"
                ></v-select>
              </div>
            </div>
            <div class="col-8">
              <div class="d-flex justify-content-end align-items-baseline">
                <div class="d-flex">
                  <!-- <MaterialCheckbox id="terms6">
                    <a href="javascript:;" class="font-weight-bolder"> ตึกทั้งหมด</a>
                  </MaterialCheckbox> -->
                </div>
                <!-- <label style="margin-right: 10px; margin-left: 20px"
                  >ค้นหาชื่อหรือเลขห้อง
                </label>
                <MaterialInput
                  class="input-group-dynamic w-50"
                  icon="search"
                  type="text"
                  placeholder="Search"
                /> -->
              </div>
            </div>
          </div>

          <div class="text-center pt-4">
            <div class="d-flex justify-content-start align-items-baseline pt-1 w-35">
              <label class="w-30" style="margin-right: 5px"> เลือกประเภทห้อง</label>
              <v-select
                class="w-50"
                :options="typeRoom"
                v-model="selectedtypeRoom"
              ></v-select>
            </div>
            <div class="d-flex justify-content-between align-items-baseline p-2">
              <div class="text-start">
                <p class="d-flex align-items-baseline p-2">
                  <a data-bs-toggle="modal" data-bs-target="#Edituser">
                    <span style="font-weight: bold; text-decoration: underline">
                      คณะกรรมการประจําตึก : {{ committee || "เพิ่มชื่อ" }}</span
                    >
                    <i
                      class="material-icons"
                      style="cursor: pointer; margin-left: 10px"
                      aria-hidden="true"
                      >edit</i
                    ></a
                  >
                </p>
                <h6 class="pt-1">{{ selectedlistRoom?.label || "อาคารแฟลต 1/11" }}</h6>
              </div>

              <div class="d-flex">
                <MaterialCheckbox
                  id="terms"
                  color="green"
                  :checked="statusfree"
                  v-model="selectedStatus"
                  @click="onChangeEvent('free', $event, selectedStatus)"
                >
                  <a href="javascript:;" class="font-weight-bolder"> ว่าง</a>
                </MaterialCheckbox>
                <MaterialCheckbox
                  id="terms2"
                  color="red"
                  :checked="statuseunavailable"
                  v-model="selectedUnavailable"
                  @click="onChangeEvent('unavailable', $event)"
                >
                  <a href="javascript:;" class="font-weight-bolder"> ไม่ว่าง</a>
                </MaterialCheckbox>
                <MaterialCheckbox
                  id="terms3"
                  color="warning2"
                  :checked="statusewaiting"
                  @change="onChangeEvent('waiting', $event)"
                >
                  <a href="javascript:;" class="font-weight-bolder"> ชำรุด</a>
                </MaterialCheckbox>
                <MaterialCheckbox
                  id="terms4"
                  color="return"
                  :checked="statusreturn"
                  @change="onChangeEvent('return', $event)"
                >
                  <a href="javascript:;" class="font-weight-bolder"> ผ่อนผัน</a>
                </MaterialCheckbox>
                <MaterialCheckbox
                  id="terms5"
                  color="warning3"
                  :checked="statusreturn"
                  @change="onChangeEvent('return', $event)"
                >
                  <a href="javascript:;" class="font-weight-bolder"> รอคืนเงินประกัน</a>
                </MaterialCheckbox>
                <MaterialCheckbox
                  id="terms6"
                  color="special"
                  @change="onChangeEvent('special', $event)"
                >
                  <a href="javascript:;" class="font-weight-bolder"> กรณีพิเศษ</a>
                </MaterialCheckbox>
              </div>
            </div>

            <!-- v-for="(item, index) in NoRoom" :key="index" -->
            <div v-for="(item, index) in dataBuilding?.listRoom" :key="index">
              <div class="card mb-2">
                <div class="card-body">
                  <p class="text-start">
                    <MaterialButton
                      variant="outline"
                      color="success"
                      data-bs-toggle="collapse"
                      href="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                      >ชั้น {{ item?.floor }}</MaterialButton
                    >
                  </p>
                  <div class="collapse show" id="collapseExample" aria-expanded="true">
                    <div class="flex-container">
                      <div v-for="(item2, index) in roomData" :key="index">
                        <div
                          class="card mb-2"
                          :class="{
                            'bg-red': item2?.status == 'unavailable',
                            'bg-green': item2?.status == 'free',
                            'bg-warning2': item2?.status == 'waiting',
                            'bg-return': item2?.status == 'return',
                            'bgg-red': item2?.status == 'special',
                          }"
                          :style="{ width: `220px`, height: `170px` }"
                        >
                          <div class="card-body p-1">
                            <a
                              style="cursor: pointer"
                              @click="gotodetail(item2?.index, item2?.status)"
                            >
                              <p
                                class="card-title"
                                style="
                                  color: #000;
                                  border: 2px solid #f7f4f0 !important;
                                  border-radius: 10px;
                                  background: white;
                                "
                              >
                                <a style="font-size: medium"
                                  >ห้อง {{ item2?.numberRoom }}</a
                                >
                              </p>
                              <p
                                v-if="item2?.status == 'free'"
                                class="card-title bgg-green"
                                style="font-size: 16px"
                              >
                                {{ "ว่าง" }}
                              </p>
                              <p
                                v-if="item2?.status == 'unavailable'"
                                class="card-title bgg-red"
                                style="font-size: 16px"
                              >
                                {{ "ไม่ว่าง" }}
                              </p>
                              <p
                                v-if="item2?.status == 'waiting'"
                                class="card-title bgg-warning2"
                                style="font-size: 16px"
                              >
                                {{ "ชำรุด" }}
                              </p>
                              <p
                                v-if="item2?.status == 'return'"
                                class="card-title bgg-return"
                                style="font-size: 16px"
                              >
                                {{ "ผ่อนผัน" }}
                              </p>
                              <p class="card-title" style="font-size: 14px">
                                {{ item2?.ranks }} {{ item2?.firstName }}
                                {{ item2?.laststName }}
                              </p>
                              <div>
                                <span
                                  v-if="item2?.status !== 'special'"
                                  style="text-align: right; font-size: small"
                                  >{{ item2?.Affiliation }}</span
                                >
                                <span
                                  v-if="item2?.status == 'special'"
                                  style="text-align: right; font-size: 16px"
                                  >{{ "กรณีพิเศษ" }}</span
                                >
                              </div>
                            </a>
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

    <!-- Modal -->
    <div
      class="modal fade"
      id="Edituser"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">แก้ไขชื่อคณะกรรมการ</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label"
                >ชื่อคณะกรรมการ</label
              >
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="กรอกชื่อ"
                :value="committee"
                @input="(event) => (committee = event.target.value)"
              ></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              ปิดหน้าต่าง
            </button>
            <MaterialButton
              variant="gradient"
              color="success"
              @click="EdituserForm"
              html-type="submit"
              data-bs-dismiss="modal"
              >บันทึก</MaterialButton
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style>
.flex-container {
  display: flex;
  flex-wrap: wrap;
}

.flex-container > div {
  background-color: #f1f1f1;
  width: 220px;
  height: 170px;
  margin: 12px;
  text-align: center;
  line-height: 75px;
  font-size: 30px;
}
.bg-green {
  background-color: #4cbb17 !important;
  color: #fff;
}
.bg-red {
  background-color: #d24c4a !important;
  color: #fff !important;
}
.bg-warning2 {
  background-color: #fb8c00 !important;
  color: #fff !important;
}
.bg-warning3 {
  background-color: #eada29 !important;
  color: #fff !important;
}
.bg-return {
  background-color: #816613 !important;
  color: #fff !important;
}
.bg-special {
  background-color: #edc7c7 !important;
  color: #fff !important;
}
.bgg-green {
  background-color: #4cbb17 !important;
  color: #fff !important;
}
.bgg-red {
  background-color: #d24c4a !important;
  color: #fff !important;
}
.bgg-warning2 {
  background-color: #fb8c00 !important;
  color: #fff !important;
}
.bgg-warning3 {
  background-color: #eada29 !important;
  color: #fff !important;
}
.bgg-return {
  background-color: #816613 !important;
  color: #fff !important;
}
.bgg-special {
  background-color: #cbc0c0 !important;
  color: #fff !important;
}
.text-red {
  color: #d24c4a !important;
}
ol.breadcrumb {
  padding: 1rem !important;
}
</style>
