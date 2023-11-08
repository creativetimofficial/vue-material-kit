<script>
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import Breadcrumbs from "@/examples/Breadcrumbs.vue";
import vueMkHeader from "@/assets/img/bg.jpg";
import userData from "@/assets/dataJson/users.json";
import axios from "axios";
import Datepicker from "vue3-datepicker";

export default {
  components: {
    MaterialInput,
    MaterialButton,
    Breadcrumbs,
    Datepicker,
  },
  setup() {
    return {
      vueMkHeader,
      userData,
    };
  },

  data() {
    return {
      selectedUser: "",
      firstName: "",
      lastName: "",
      Affiliation: "", //สังกัด
      rank: "", //ยศ
      idcard: "",
      phone: "",
      bookNumber: "",
      queueList: [],
      userList: [],
      userByid: {},
      searchName: "",
      typeUserByqueue: "ทั้งหมด",
      typeroomByqueue: "",
      olddatatypeQueue: [],
      datatypeQueue: [],
      no: 0,
      userId: "",
      picked: new Date(),
    };
  },
  created() {
    this.getAllqueue();
    // this.getAllusers();
    this.getAllNoqueue();
  },
  watch: {
    selectedUser: function (newValue) {
      this.getAllusersByid(newValue.value);
    },
  },
  computed: {
    queueList() {
      return this.queueList.filter((item) => item.firstName.includes(this.searchName));
    },
  },
  methods: {
    changedLabel(event) {
      console.log(event);
      // this.selected = event;
    },

    queuetypefilter(e) {
      if (e.target) this.typeroomByqueue = e.target.value;
    },

    editTypeRoom(event) {
      // console.log(event);
      this.typeroomByqueue = event;
    },

    queuefilter(e) {
      if (e.target) this.typeUserByqueue = e.target.value;
      else this.typeUserByqueue = e;
      this.datatypeQueue = this.olddatatypeQueue;
      if (this.typeUserByqueue !== "ทั้งหมด") {
        let dataqueue = this.datatypeQueue.filter(
          (e) => e.typeRoom == this.typeUserByqueue
        );
        this.queueList = dataqueue;
      } else if (this.typeUserByqueue == "ทั้งหมด") {
        this.queueList = this.datatypeQueue;
      }
    },
    getAllqueue() {
      try {
        axios
          .get(`http://localhost:3001/queue/inqueue`)
          .then((res) => {
            this.queueList = res.data;
            this.olddatatypeQueue = this.queueList;
            this.queueList.sort((a, b) => a.pickedBook - b.pickedBook);
            this.no = this.queueList.length + 1;
            this.queuefilter("ทั้งหมด");
          })
          .catch((err) => {
            console.log(err.response);
          });
      } catch (error) {
        console.error(error);
      }
    },

    getAllusersByid(id) {
      this.userId = id;
      try {
        axios
          .get(`http://localhost:3001/users/${id}`)
          .then((res) => {
            let data = res.data;
            this.userByid = data;
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.error(error);
      }
    },

    getAllNoqueue() {
      try {
        axios
          .get(`http://localhost:3001/queue/none`)
          .then((res) => {
            this.userList = res.data.map((ele) => {
              return {
                label: ele.rank + " " + ele.firstName + " " + ele.lastName,
                value: ele.id,
              };
            });
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.error(error);
      }
    },

    getAllusers() {
      try {
        axios
          .get("http://localhost:3001/users")
          .then((res) => {
            this.userList = res.data.map((ele) => {
              return {
                label: ele.rank + " " + ele.firstName + " " + ele.lastName,
                value: ele.id,
              };
            });
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.error(error);
      }
    },

    submitForm() {
      let body = {
        ...this.userByid,
        no: this.no,
        bookNumber: this.bookNumber,
        pickedBook: this.picked.toISOString(),
        typeRoom: this.typeroomByqueue,
        queue: "inqueue",
      };
      delete body.id;
      axios
        .put(`http://localhost:3001/queue/${this.userId}`, body, {
          headers: {
            // remove headers
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          this.getAllqueue();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    EditsubmitForm() {
      let body = {
        typeRoom: this.typeroomByqueue,
      };
      delete body.id;
      axios
        .put(`http://localhost:3001/queue/${this.userId}`, body, {
          headers: {
            // remove headers
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          this.getAllqueue();
        })
        .catch((err) => {
          console.log(err);
        });
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
              :routes="[{ label: 'หน้าหลัก', route: '/' }, { label: 'ระบบคิว' }]"
            />
          </div>
          <h4>ระบบคิว</h4>
          <div class="d-flex justify-content-between align-items-baseline">
            <div class="mb-3">
              <div class="form-check form-check-inline">
                <label style="margin-right: 20px">ประเภทห้องพัก</label>
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="ช1"
                  @change="queuefilter($event)"
                  :checked="typeUserByqueue == 'ช1'"
                />
                <label class="form-check-label" for="inlineRadio1">ช1</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="ช2"
                  @change="queuefilter($event)"
                  :checked="typeUserByqueue == 'ช2'"
                />
                <label class="form-check-label" for="inlineRadio2">ช2</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio3"
                  value="ช3"
                  @change="queuefilter($event)"
                  :checked="typeUserByqueue == 'ช3'"
                />
                <label class="form-check-label" for="inlineRadio3">ช3</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio4"
                  value="ทั้งหมด"
                  @change="queuefilter($event)"
                  :checked="typeUserByqueue == 'ทั้งหมด'"
                />
                <label class="form-check-label" for="inlineRadio4">ทั้งหมด</label>
              </div>
            </div>
            <div class="d-flex align-items-baseline">
              <label style="margin-right: 20px">ค้นหาชื่อ </label>
              <MaterialInput
                style="margin-right: 20px; width: 300px"
                class="input-group-dynamic"
                icon="search"
                type="text"
                placeholder="Search"
                :value="searchName"
                @input="(event) => (searchName = event.target.value)"
              />
              <MaterialButton
                variant="gradient"
                color="success"
                data-bs-toggle="modal"
                data-bs-target="#seleteUserBackdrop"
                >เพิ่มผู้เช่าลงคิว</MaterialButton
              >
            </div>
          </div>
          <div class="text-center pt-4 table-responsive">
            <table class="table border border-2 border-success">
              <thead class="border border-2 border-success border-bottom">
                <tr>
                  <th scope="col">ลำดับ</th>
                  <!-- <th scope="col">ยศ</th> -->
                  <th scope="col">ชื่อ-สกุล</th>
                  <th scope="col">สังกัด</th>
                  <th scope="col">สถานภาพ</th>
                  <th scope="col">เลขบัตรประชาชน</th>
                  <th scope="col">เบอร์ติดต่อ</th>
                  <th scope="col">เลขลงรับหนังสือ</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in queueList" :key="index">
                  <th scope="row">{{ item?.no }}</th>
                  <td>{{ item?.rank }} {{ item?.firstName }} {{ item?.lastName }}</td>
                  <td>{{ item?.affiliation }}</td>
                  <td>{{ item?.status }}</td>
                  <td>{{ item?.idcard }}</td>
                  <td>{{ item?.phone }}</td>
                  <td>{{ item?.bookNumber }}</td>
                  <td>
                    <a
                      @click="editTypeRoom(item?.typeRoom)"
                      data-bs-toggle="modal"
                      data-bs-target="#editTypeBackdrop"
                      ><i
                        class="material-icons me-2"
                        style="cursor: pointer"
                        aria-hidden="true"
                        >edit</i
                      ></a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div
      class="modal fade"
      id="seleteUserBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">เพิ่มผู้เช่าลงคิว</h5>
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
                <label>ชื่อผู้เช่า</label>
                <v-select :options="userList" v-model="selectedUser"></v-select>
              </div>
              <div class="mb-3">
                <label style="margin-left: -5px">กรอกเลขลงรับหนังสือ</label>
                <textarea
                  :value="bookNumber"
                  @input="(event) => (bookNumber = event.target.value)"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="ตัวอย่าง : 11244"
                ></textarea>
              </div>
              <div class="mb-4">
                <label style="margin-left: -5px">วันที่ลงรับหนังสือ</label>
                <Datepicker style="text-align: center" v-model="picked" />
              </div>
              <div class="mb-3">
                <label style="margin-right: 20px">ประเภทห้องพัก</label>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio5"
                    value="ช1"
                    @change="queuetypefilter($event)"
                    checked
                  />
                  <label class="form-check-label" for="inlineRadio5">ช1</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio6"
                    value="ช2"
                    @change="queuetypefilter($event)"
                  />
                  <label class="form-check-label" for="inlineRadio6">ช2</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio7"
                    value="ช3"
                    @change="queuetypefilter($event)"
                  />
                  <label class="form-check-label" for="inlineRadio7">ช3</label>
                </div>
              </div>
              <div class="row g-0" v-if="selectedUser !== ''">
                <div class="col-md-12">
                  <div class="row">
                    <h5 class="card-title">รายละเอียด</h5>
                    <p class="card-text pt-1">
                      ชือ-สกุล : {{ userByid?.rank }} {{ userByid?.firstName }}
                      {{ userByid?.lastName }}
                    </p>
                    <p class="card-text">สังกัด : {{ userByid?.affiliation }}</p>
                    <p class="card-text">เลขบัตรประชาชน : {{ userByid?.idcard }}</p>
                    <p class="card-text">สถานภาพ : {{ userByid?.status }}</p>
                    <p class="card-text">เบอร์โทร : {{ userByid?.phone }}</p>
                  </div>
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
    <div
      class="modal fade"
      id="editTypeBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">แก้ไขประเภทห้องพัก</h5>
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
                <label style="margin-right: 20px">ประเภทห้องพัก</label>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio52"
                    value="ช1"
                    @change="queuetypefilter($event)"
                    :checked="typeroomByqueue == 'ช1'"
                  />
                  <label class="form-check-label" for="inlineRadio52">ช1</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio53"
                    value="ช2"
                    :checked="typeroomByqueue == 'ช2'"
                    @change="queuetypefilter($event)"
                  />
                  <label class="form-check-label" for="inlineRadio53">ช2</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio54"
                    value="ช3"
                    :checked="typeroomByqueue == 'ช3'"
                    @change="queuetypefilter($event)"
                  />
                  <label class="form-check-label" for="inlineRadio54">ช3</label>
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
              @click="EditsubmitForm"
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
</style>
