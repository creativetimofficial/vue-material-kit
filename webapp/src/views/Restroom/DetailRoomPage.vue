<script>
//image
import vueMkHeader from "@/assets/img/bg.jpg";
//material components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import Breadcrumbs from "@/examples/Breadcrumbs.vue";
import axios from "axios";


export default {
  components: {
    MaterialInput,
    MaterialButton,
    Breadcrumbs,
  },
  setup() {
    return {
      vueMkHeader
    };
  },

  data() {
    return {
      selectedColor: "",
      statusedit: false,
      mode: "",
      id: "",
      options: [
        { label: "มานพ", value: "มานพ" },
        { label: "วิชัย", value: "วิชัย" },
        { label: "ธนาพร", value: "ธนาพร" },
        { label: "มนตรี", value: "มนตรี" },
      ],
      selectedColor: "",
      firstName: "",
      lastName: "",
      Affiliation: "", //สังกัด
      rank: "", //ยศ
      idcard: "",
      phone: "",
      old: "",
      birthday: "",
      installments: "",
      booknumber: "",
      typeroom: "",
      data: "",
      queueList: [],
      queuefilter: [],
    };
  },
  created() {
    this.mode = this.$route.query.mode;
    if (this.$route.params.id) {
      this.id = this.$route.params.id;
      this.getroomByid(this.id);
    }
  },
  methods: {
    gotoAction() {
      this.$router.push({ path: `/room/update/${this.id}`, query: { mode: this.mode } });
    },
    getAllqueue() {
      try {
        axios
          .get(`http://localhost:3001/queue/inqueue`)
          .then((res) => {
            this.queueList = res.data;
            console.log(this.queueList);
            this.queuefilter = this.queueList.filter((e) => e.typeRoom === this.typeroom);
          })
          .catch((err) => {
            console.log(err.response);
          });
      } catch (error) {
        console.error(error);
      }
    },
    async getroomByid(id) {
      try {
        axios.get(`http://localhost:3001/rooms/${id}`).then((res) => {
          this.data = res.data;
          // console.log(this.data);
          // if (this.data.typeRoom == "ช1") this.typeroom = "โสด";
          // if (this.data.typeRoom == "ช2") this.typeroom = "สมรส";
          // if (this.data.typeRoom == "ช3") this.typeroom = "ทั่วไป";
          this.typeroom = this.data.typeRoom
          this.getAllqueue()
        });
      } catch (e) {
        console.error(e);
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
            console.log(err.response);
          });
      } catch (error) {
        console.error(error);
      }
    },

    async submitForm() {
      let body = {
        ...this.userByid,
        queue: "inroom",
        contract: this.contract,
        checkintime: this.Checkintime,
        maintenance: this.Maintenance,
        insurance: this.insurance,
        installments: this.installments,
      };
      console.log(body);
      await axios
        .post(`http://localhost:3001/history`, body, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          this.submitForm2()
          this.submitForm3()
          this.submitFormRoom()
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async submitForm2() {
      let body = {
        ...this.userByid,
        queue: "inroom",
        contract: this.contract,
        checkintime: this.Checkintime,
        maintenance: this.Maintenance,
        insurance: this.insurance,
        installments: this.installments,
      };

      await axios
        .post(`http://localhost:3001/report`, body, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
    },

    async submitForm3() {
      let body = {
        ...this.userByid,
        queue: "inroom",
        contract: this.contract,
        checkintime: this.Checkintime,
        maintenance: this.Maintenance,
        insurance: this.insurance,
        installments: this.installments,
      };

      await axios
        .put(`http://localhost:3001/queue/${this.userId}`, body, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
    },
    async submitFormRoom() {
      let body = {
        ...this.userByid,
        queue: "inroom",
        roomStatus: 'unavailable',
        contract: this.contract,
        checkintime: this.Checkintime,
        maintenance: this.Maintenance,
        insurance: this.insurance,
        installments: this.installments,
      };

      await axios
        .put(`http://localhost:3001/rooms/${this.id}`, body, {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          this.getAllqueue();
          this.$router.push({ path: `/room` });
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
    <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 pt-6">
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
          <div class="d-flex justify-content-between align-items-baseline">
            <h4>รายละเอียดห้องพัก {{ data?.numberRoom }}</h4>
            <div>
              <MaterialButton variant="gradient" color="success" @click="gotoAction()"
                >จัดการห้องพัก</MaterialButton
              >
            </div>
          </div>
          <div class="row pt-4">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-10">
                  <div class="card-body">
                    <div class="row" v-if="this.mode !== 'add'">
                      <h5 class="card-title">รายละเอียดผู้เช่า</h5>
                      <div class="col-5">
                        <p class="card-text">ชือ : ส.ต.ต. มานะ</p>
                        <p class="card-text">สถานะห้อง : ไม่ว่าง</p>
                        <p class="card-text">สังกัด : ฝอ. 1</p>
                        <p class="card-text">เลขบัตรประชาชน : 123456123456</p>
                        <p class="card-text">วันที่ได้รับอนุมัติ : 12/02/2564</p>

                        <p class="card-text">ระยะเวลาที่เข้าพัก : 3 เดือน</p>
                      </div>
                      <div class="col-7">
                        <p class="card-text">นามสกุล : ถือดี</p>
                        <p class="card-text">เบอร์โทร : 0972534887</p>
                        <p class="card-text">เงินค่าประกัน : 12,000</p>
                        <p class="card-text">งวดค่าประกัน : 5/10</p>
                        <p class="card-text">จำนวนงวดค่าประกัน : 2,000</p>
                        <p class="card-text">ยอดคงเหลือค่าประกัน : 6,000</p>
                      </div>
                    </div>
                    <div class="row" v-if="this.mode !== 'special'">
                      <div class="col-5">
                        <h5 class="card-title pt-2">รายละเอียดห้องพัก</h5>
                        <p class="card-text">ประเภทห้องพัก : {{ data?.typeRoom }}</p>
                        <!-- <p class="card-text">มิเตอร์น้ำ/ไฟ : 745/546</p> -->
                        <p class="card-text">สภาพห้อง : {{ data?.Roomconditions }}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row pt-4">
                <div class="card mb-3" v-if="mode == 'add'">
                  <div class="text-center pt-4 table-responsive">
                    <table class="table border border-2 border-success">
                      <thead class="border border-2 border-success border-bottom">
                        <tr>
                          <th scope="col">ลำดับ</th>
                          <th scope="col">ชื่อ-สกุล</th>
                          <th scope="col">สังกัด</th>
                          <th scope="col">เลขบัตรประชาชน</th>
                          <th scope="col">เบอร์ติดต่อ</th>
                          <th scope="col">เลขลงรับหนังสือ</th>
                          <th scope="col"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(item, index) in queuefilter" :key="index">
                          <th scope="row">{{ item.no }}</th>
                          <td>
                            {{ item.rank }} {{ item.firstName }} {{ item.lastName }}
                          </td>
                          <td>{{ item.Affiliation }}</td>
                          <td>{{ item.idcard }}</td>
                          <td>{{ item.phone }}</td>
                          <td>{{ item.bookNumber }}</td>
                          <td>
                            <MaterialButton
                              variant="gradient"
                              color="success"
                              data-bs-toggle="modal"
                              data-bs-target="#contractBackdrop"
                              @click="getAllusersByid(item.id)"
                              >เพิ่มผู้เช่าห้องพัก</MaterialButton
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="modal fade"
      id="contractBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">เพิ่มรายละเอียดสัญญา</h5>
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
                  name="contract"
                  :value="contract"
                  @input="(event) => (contract = event.target.value)"
                  class="input-group-static"
                  label="วันที่ได้รับอนุมัติ"
                  type="text"
                  placeholder="วันที่ได้รับอนุมัติ"
                />
              </div>
              <div class="mb-3">
                <MaterialInput
                  :value="Checkintime"
                  @input="(event) => (Checkintime = event.target.value)"
                  class="input-group-static"
                  label="ระยะเวลาที่เข้าพัก"
                  type="text"
                  placeholder="ระยะเวลาที่เข้าพัก"
                />
              </div>
              <div class="mb-3">
                <MaterialInput
                  :value="Maintenance"
                  @input="(event) => (Maintenance = event.target.value)"
                  class="input-group-static"
                  label="ค่าธรรมเนียม"
                  type="text"
                  placeholder="ค่าธรรมเนียม"
                />
              </div>
              <div class="mb-3">
                <MaterialInput
                  :value="insurance"
                  @input="(event) => (insurance = event.target.value)"
                  class="input-group-static"
                  label="เงินค่าประกัน"
                  type="text"
                  placeholder="เงินค่าประกัน"
                />
              </div>
              <div class="mb-3">
                <MaterialInput
                  :value="installments"
                  @input="(event) => (installments = event.target.value)"
                  class="input-group-static"
                  label="จำนวนงวดเงินค่าประกัน"
                  type="text"
                  placeholder="จำนวนงวดเงินค่าประกัน"
                />
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
      id="Returntheroom"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered" style="max-width: 740px">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">คืนห้อง</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div>
              <div
                class="mb-3"
                style="display: flex; justify-content: space-between; align-items: center"
              >
                <div class="form-check form-check-inline">
                  <label style="margin-right: 20px">กุญแจห้อง</label>
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineRadio1">มี</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineRadio2">ไม่มี</label>
                </div>
                <div style="width: 360px; margin-bottom: 10px">
                  <MaterialInput
                    name="contract"
                    :value="contract"
                    @input="(event) => (contract = event.target.value)"
                    class="input-group-static"
                    type="text"
                    placeholder="สาเหตุ"
                  />
                </div>
              </div>
              <div
                class="mb-3"
                style="display: flex; justify-content: space-between; align-items: center"
              >
                <div class="form-check form-check-inline">
                  <label style="margin-right: 20px">ทะเบียนบ้าน</label>
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineRadio1">มี</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineRadio2">ไม่มี</label>
                </div>
                <div style="width: 360px; margin-bottom: 10px">
                  <MaterialInput
                    name="contract"
                    :value="contract"
                    @input="(event) => (contract = event.target.value)"
                    class="input-group-static"
                    type="text"
                    placeholder="สาเหตุ"
                  />
                </div>
              </div>
              <div>
                <label style="padding-left: 30px"
                  >หลักฐานแสดงการชําระค่าไฟเดือนล่าสุด</label
                >
              </div>
              <div
                class="mb-3"
                style="
                  margin-left: 10px;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                "
              >
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineRadio1">มี</label>
                </div>
                <div style="width: 250px; margin-bottom: 10px">
                  <MaterialInput
                    name="contract"
                    :value="contract"
                    @input="(event) => (contract = event.target.value)"
                    class="input-group-static"
                    type="text"
                    placeholder="สาเหตุ"
                  />
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineRadio2">ไม่มี</label>
                </div>
                <div style="width: 250px; margin-bottom: 10px">
                  <MaterialInput
                    name="contract"
                    :value="contract"
                    @input="(event) => (contract = event.target.value)"
                    class="input-group-static"
                    type="text"
                    placeholder="สาเหตุ"
                  />
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
</style>
