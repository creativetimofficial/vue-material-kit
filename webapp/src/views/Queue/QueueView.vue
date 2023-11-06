<script>
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import Breadcrumbs from "@/examples/Breadcrumbs.vue";
import vueMkHeader from "@/assets/img/bg.jpg";
import userData from "@/assets/dataJson/users.json";
import axios from "axios";

export default {
  components: {
    MaterialInput,
    MaterialButton,
    Breadcrumbs,
  },
  setup() {
    return {
      vueMkHeader,
      userData,
    };
  },

  data() {
    return {
      value: { name: "Vue.js", language: "JavaScript" },
      options: [
        { label: "มานพ", value: "มานพ" },
        { label: "วิชัย", value: "วิชัย" },
        { label: "ธนาพร", value: "ธนาพร" },
        { label: "มนตรี", value: "มนตรี" },
      ],
      selectedUser: "",
      firstName: "",
      lastName: "",
      Affiliation: "", //สังกัด
      rank: "", //ยศ
      idcard: "",
      phone: "",
      bookNumber: "",
      queueList : [],
      userList : [],
      userByid: {}
    };
  },
  created() {
    // console.log(this.masterData);
    this.getAllqueue();
    this.getAllusers()
  },
  watch: {
    selectedUser: function (newValue) {
      // this.updateColor(newValue)
      console.log(newValue.value);
      this.getAllusersByid(newValue.value)
    },
  },
  methods: {
    changedLabel(event) {
      console.log(event);
      // this.selected = event;
    },

    getAllqueue() {
      try {
        axios
          .get("http://localhost:3001/queue")
          .then((res) => {
            this.queueList = res.data;
            console.log(this.queueList);
          })
          .catch((err) => {
            console.log(err.response);
          });
      } catch (error) {
        console.error(error);
      }
    },

    getAllusersByid(id) {
      try {
        axios
          .get(`http://localhost:3001/users/${id}`)
          .then((res) => {
            let data =res.data
            this.userByid = data
            // console.log(this.userByid)
          })
          .catch((err) => {
            console.log(err.response);
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
            this.userList = res.data.map(ele =>{
              return {
                label : ele.rank + " "+ ele.firstName + " " + ele.lastName,
                value : ele.id,
              }
            })
          })
          .catch((err) => {
            console.log(err.response);
          });
      } catch (error) {
        console.error(error);
      }
    },

    submitForm() {
      // firstName: this.firstName,
        // lastName: this.lastName,
        // Affiliation: this.Affiliation,
        // rank: this.rank,
        // idcard: this.idcard,
        // phone: this.phone,
      let body = {
        ...this.userByid,
        bookNumber: this.bookNumber
      };
      delete body.id
      console.log(body);
      axios
        .post(`http://localhost:3001/queue`, body, {
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
          console.log(err.response);
        });
      // let b = []
      // b.push(body)
      // this.userlist.push(body);
      // console.log(this.userlist);
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
            <h1 class="pt-3 mt-n5 me-2 head-text">ระบบคิว</h1>
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
          <div class="d-flex justify-content-between align-items-baseline">
            <div class="mb-3">
              <div class="form-check form-check-inline">
                <label style="margin-right: 20px">สถานภาพ</label>
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="โสด"
                  checked
                />
                <label class="form-check-label" for="inlineRadio1">โสด</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="สมรส"
                />
                <label class="form-check-label" for="inlineRadio2">สมรส</label>
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
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ item?.rank }} {{ item?.firstName }} {{ item?.lastName }}</td>
                  <td>{{ item?.affiliation }}</td>
                  <td>{{ item?.status }}</td>
                  <td>{{ item?.idcard }}</td>
                  <td>{{ item?.phone }}</td>
                  <td>{{ item?.bookNumber }}</td>
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
              <div class="row g-0" v-if="selectedUser!== ''">
                <div class="col-md-12">
                    <div class="row" >
                      <h5 class="card-title ">รายละเอียดผู้เช่า</h5>
                        <p class="card-text pt-1">ชือ-สกุล : {{ userByid?.rank }} {{ userByid?.firstName }} {{ userByid?.lastName }}</p>
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
  </section>
</template>
<style>
.bg-green {
  border: 2px solid #4CBB17 !important;
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
