<script>
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import vueMkHeader from "@/assets/img/bg.jpg";
import Breadcrumbs from "@/examples/Breadcrumbs.vue";
import masterData from "@/assets/dataJson/masterData.json";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

export default {
  components: {
    MaterialInput,
    MaterialButton,
    Breadcrumbs,
  },
  setup() {
    return {
      vueMkHeader,
      masterData,
    };
  },

  data() {
    return {
      selectedColor: "",
      Edifice: "",
      Building: "",
      Floors: "",
      selectedRoomtype: "ช๑",
      buildingList: [],
      searchName: "",
      FloorsList: [],
      Area: "",
    };
  },
  created() {
    // console.log(this.masterData);
    this.getBuildings();
  },
  watch: {
    selectedColor: function (newValue) {
      // this.updateColor(newValue)
      console.log(newValue);
    },
  },
  computed: {
    buildingList() {
      return this.buildingList.filter((item) => item.name.includes(this.searchName));
    },
  },
  methods: {
    changedFloors() {
      let array = [];
      let idbuilding = uuidv4();
      for (let index = 0; index < this.Floors; index++) {
        array.push({
          buildingId: idbuilding,
          name: this.Building,
          floor: index + 1,
          committee: "",
          rooms: [
            {
              buildingId: idbuilding,
              id: uuidv4(),
              name: this.Building,
              floor: index + 1,
              index: 1,
              numberRoom: 1,
              ranks: "",
              firstName: "",
              laststName: "",
              Affiliation: "",
              typeRoom: "",
              roomconditions: "ปกติ",
              roomStatus: "free",
            },
          ],
          sumroom: 1,
        });
      }
      this.FloorsList = array;
    },
    addRoom(item) {
      item.rooms.push({
        buildingId: item.buildingId,
        id: uuidv4(),
        name: item.name,
        floor: item.floor,
        index: item.sumroom + 1,
        numberRoom: item.sumroom + 1,
        ranks: "",
        firstName: "",
        laststName: "",
        Affiliation: "",
        typeRoom: "",
        roomconditions: "ปกติ",
        roomStatus: "free",
      });
      item.sumroom = item.sumroom + 1;
    },

    async submitForm() {
      let sum = 0;
      this.FloorsList.forEach((num) => {
        sum += num.sumroom;
      });
      let body = {
        buil: this.Area,
        name: this.Building,
        sumroom: sum,
        floor: this.Floors,
        roomnumber: "",
        type: "",
        listRoom: this.FloorsList,
      };
      await axios
        .post(`http://localhost:3001/buildings`, body, {
          headers: {
            // remove headers
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          this.submitRoom();
          this.getBuildings();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async submitRoom() {
      let floorsList = [];
      await this.FloorsList.forEach((e) => {
        e.rooms.forEach((ele) => {
          floorsList.push(ele);
        });
      });
      // let body = floorsList
      console.log(floorsList);
      await floorsList.forEach(x => {
         axios
        .post(`http://localhost:3001/rooms`, x, {
          headers: {
            // remove headers
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
      }) 
    },

    // buildings
    async getBuildings() {
      try {
        await axios
          .get("http://localhost:3001/buildings")
          .then((res) => {
            this.buildingList = res.data;
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.error(error);
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
    <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
      <div class="page-header min-vh-45">
        <div class="container">
          <div>
            <Breadcrumbs
              style="padding"
              :routes="[{ label: 'หน้าหลัก', route: '/' }, { label: 'ผังห้องพัก' }]"
            />
          </div>
          <h4>ผังห้องพัก</h4>
          <div class="d-flex justify-content-end align-items-baseline">
            <label style="margin-right: 10px">ค้นหาชื่ออาคาร </label>
            <MaterialInput
              class="input-group-dynamic w-30"
              icon="search"
              type="text"
              placeholder="Search"
              :value="searchName"
              @input="(event) => (searchName = event.target.value)"
            />
            <MaterialButton
              style="margin-left: 20px"
              variant="gradient"
              color="success"
              data-bs-toggle="modal"
              data-bs-target="#Addroomplan"
              >สร้างผังห้อง</MaterialButton
            >
          </div>
          <div class="text-center pt-4 table-responsive">
            <table class="table table-hover border border-2 border-success">
              <thead class="border border-2 border-success border-bottom">
                <tr>
                  <th scope="col">ลำดับ</th>
                  <th scope="col">อาคารบ้านพัก</th>
                  <th scope="col">ชื่ออาคาร</th>
                  <th scope="col">ชั้น</th>
                  <th scope="col">จำนวนห้อง</th>
                  <!-- <th scope="col">เลขห้อง</th> -->
                  <!-- <th scope="col">ประเภทห้องพัก</th> -->
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in buildingList" :key="index">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ item?.buil }}</td>
                  <td>{{ item?.name }}</td>
                  <td>{{ item?.floor }}</td>
                  <td>{{ item?.sumroom }}</td>
                  <!-- <td>{{ item?.roomnumber }}</td> -->
                  <!-- <td>{{ item?.type }}</td> -->
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->
    <div
      class="modal fade"
      id="Addroomplan"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">เพิ่มผังห้อง</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div>
              <div class="mb-3">
                <MaterialInput
                  :value="Area"
                  @input="(event) => (Area = event.target.value)"
                  class="input-group-static"
                  label="อาคารบ้านพัก"
                  type="text"
                  placeholder="อาคารบ้านพัก"
                />
              </div>
              <div class="mb-3">
                <MaterialInput
                  :value="Building"
                  @input="(event) => (Building = event.target.value)"
                  class="input-group-static"
                  label="ชื่ออาคาร"
                  type="text"
                  placeholder="ชื่ออาคาร"
                />
              </div>
              <div class="mb-3">
                <MaterialInput
                  :value="Floors"
                  @input="(event) => (Floors = event.target.value)"
                  class="input-group-static"
                  label="จำนวนชั้น"
                  type="number"
                  placeholder="จำนวนชั้น"
                  @change="changedFloors()"
                />
                <div class="card pt-4" v-for="(item, index) in FloorsList" :key="index">
                  <ul
                    class="list-group list-group-flush"
                    style="border: 2px solid #2b572d"
                  >
                    <li class="list-group-item">
                      <span style="font-size: 16px; font-weight: bold"
                        >ชั้นที่ {{ item.floor }}</span
                      >
                      <div>
                        <label
                          style="font-size: 16px; font-weight: bold; margin-left: 20px"
                        >
                          จำนวนห้อง {{ item.sumroom }}
                        </label>
                      </div>
                      <div class="flex-container2">
                        <div v-for="(item2, index) in item?.rooms" :key="index">
                          ห้อง {{ item2.numberRoom }}
                        </div>
                        <div
                          style="
                            background: white;
                            color: #000;
                            border: 2px solid #4cbb17;
                            cursor: pointer;
                            text-decoration: underline;
                            font-size: 18px;
                          "
                        >
                          <a @click="addRoom(item)">เพิ่มห้อง</a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
              ปิดหน้าต่าง
            </button>
            <MaterialButton
              variant="gradient"
              color="success"
              @click="submitForm"
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
.bg-green {
  border: 2px solid #4cbb17 !important;
  color: #000;
}
.bg-red {
  border: 2px solid #d24c4a !important;
  color: #000;
}
.bg-warning {
  border: 2px solid #fb8c00 !important;
  color: #000;
}
.bg-return {
  border: 2px solid #ffca28 !important;
  color: #000;
}
.bg-special {
  border: 2px solid #edc7c7 !important;
  color: #000;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
.flex-container2 {
  display: flex;
  flex-wrap: wrap;
}

.flex-container2 > div {
  background-color: #4cbb17;
  color: white;
  width: 98px;
  margin: 10px;
  height: 80px;
  text-align: center;
  font-size: 24px;
  line-height: 80px;
}
</style>
