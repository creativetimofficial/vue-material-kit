<script>
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import Breadcrumbs from "@/examples/Breadcrumbs.vue";
import vueMkHeader from "@/assets/img/bg.jpg";
import masterData from "@/assets/dataJson/masterData.json";
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
      masterData,
    };
  },

  data() {
    return {
      DataObtion: [
        { label: "โสด", value: "โสด" },
        { label: "สมรส", value: "สมรส" },
      ],
      selectedDataObtion: "โสด",
      selectedColor: "",
      firstName: "สมชัย",
      lastName: "แสงสุข",
      Affiliation: "", //สังกัด
      rank: "", //ยศ
      idcard: "134044411441178",
      phone: "0325647845",
      selectedRanks: "",
      selectedAffiliation: "",
      birthday: "14/07/2534",
      typeAffiliation: "",
      typeRanks: "",
      dataUser: [],
      olddata: [],
      datatypeUser: [],
      olddatatypeUser: [],
      modalShow: false,
      id: "",
      searchName: "",
      typeUser: "ตร.",
      typeUserBytype: "",
      typeUserByrankr: "",
    };
  },
  created() {
    this.getAlluser();
  },
  watch: {
    selectedColor: function (newValue) {
      console.log(newValue);
    },
    typeAffiliation: function (newValue) {
      console.log(newValue);
    },
  },
  computed: {
    dataUser() {
      return this.dataUser.filter((item) => item.firstName.includes(this.searchName));
    },
  },
  methods: {
    typeUserfilter(e) {
      if (e.target) this.typeUserBytype = e.target.value;
      else this.typeUserBytype = e;
      this.dataUser = this.olddata;
      if (this.typeUserBytype !== "ทั้งหมด") {
        let dataFind = this.dataUser.filter((e) => e.typeUser === this.typeUserBytype);
        this.datatypeUser = dataFind;
        this.olddatatypeUser = dataFind;
        this.dataUser = dataFind;
        if (this.typeUserByrankr !== "") this.rankrfilter(this.typeUserByrankr);
      } else if (this.typeUserBytype == "ทั้งหมด") {
        this.dataUser = this.olddata;
      }
    },

    rankrfilter(e) {
      if (e.target) this.typeUserByrankr = e.target.value;
      else this.typeUserByrankr = e;
      this.datatypeUser = this.olddatatypeUser;
      let dataRank = this.datatypeUser.filter((e) => e.typeRanks == this.typeUserByrankr);
      this.dataUser = dataRank;
    },

    typeUserchange(e) {
      this.typeUser = e.target.value;
    },

    async editUser(id) {
      await axios
        .get(`http://localhost:3001/users/${id}`)
        .then((res) => {
          let data = res.data;
          this.id = id;
          (this.firstName = data.firstName),
            (this.lastName = data.lastName),
            (this.selectedAffiliation = data.affiliation),
            (this.selectedRanks = data.rank),
            (this.idcard = data.idcard),
            (this.phone = data.phone),
            (this.selectedDataObtion = data.status);
          (this.typeAffiliation = data.typeAffiliation),
            (this.typeRanks = data.typeRanks);
          this.modalShow = true;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async editForm() {
      let typeA;
      this.typeAffiliation.label == "ลูกจ้าง"
        ? (typeA = "ลูกจ้าง")
        : this.typeAffiliation.label == "บช.ตซด."
        ? (typeA = "บช.ตซด.")
        : (typeA = this.selectedAffiliation.label);
      let body = {
        firstName: this.firstName,
        lastName: this.lastName,
        affiliation: typeA,
        rank: this.selectedRanks.value,
        idcard: this.idcard,
        phone: this.phone,
        status: this.selectedDataObtion.value || "โสด",
        typeAffiliation: this.typeAffiliation.value,
        typeRanks: this.typeRanks.value,
      };

      axios
        .put(`http://localhost:3001/users/${this.id}`, body, {
          headers: {
            // remove headers
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          this.getAlluser();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async submitForm() {
      let typeA;
      this.typeAffiliation.label == "ลูกจ้าง"
        ? (typeA = "ลูกจ้าง")
        : this.typeAffiliation.label == "บช.ตซด."
        ? (typeA = "บช.ตซด.")
        : (typeA = this.selectedAffiliation.label);
      let body = {
        firstName: this.firstName,
        lastName: this.lastName,
        affiliation: typeA,
        rank: this.selectedRanks.value,
        idcard: this.idcard,
        phone: this.phone,
        status: this.selectedDataObtion.value || "โสด",
        typeAffiliation: this.typeAffiliation.value,
        typeRanks: this.typeRanks.value,
        typeUser: this.typeUser,
      };
      axios
        .post(`http://localhost:3001/users`, body, {
          headers: {
            // remove headers
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          this.getAlluser();
        })
        .catch((err) => {
          console.log(err);
        });
    },

    async getAlluser() {
      try {
        await axios
          .get("http://localhost:3001/users")
          .then((res) => {
            this.dataUser = res.data;
            this.olddata = res.data;
            this.typeUserfilter("ทั้งหมด");
            // this.rankrfilter("ประทวน");
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
              :routes="[{ label: 'หน้าหลัก', route: '/' }, { label: 'ทะเบียน' }]"
            />
          </div>
          <h4>ทะเบียน</h4>
          <div class="mb-1">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions"
                id="inlineRadio33"
                value="ทั้งหมด"
                @change="typeUserfilter($event)"
                checked
              />
              <label class="form-check-label" for="inlineRadio33">ทั้งหมด</label>
            </div>
          </div>
          <div class="d-flex justify-content-between align-items-baseline">
            <div class="mb-3">
              <div class="form-check form-check-inline">
                <label style="margin-right: 20px">ประเภท</label>
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio1"
                  value="ตร."
                  @change="typeUserfilter($event)"
                />
                <label class="form-check-label" for="inlineRadio1">ตร.</label>
              </div>
              <div class="form-check form-check-inline">
                <input
                  class="form-check-input"
                  type="radio"
                  name="inlineRadioOptions"
                  id="inlineRadio2"
                  value="บช.ตชด."
                  @change="typeUserfilter($event)"
                />
                <label class="form-check-label" for="inlineRadio2">บช.ตชด.</label>
              </div>
            </div>
            <div class="d-flex align-items-baseline">
              <label style="margin-right: 10px">ค้นหาชื่อ </label>
              <MaterialInput
                style="width: 300px"
                class="input-group-dynamic"
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
                data-bs-target="#userBackdrop"
                >เพิ่มสมาชิก</MaterialButton
              >
            </div>
          </div>
          <div>
            <div class="form-check form-check-inline">
              <label style="margin-right: 20px">ยศ</label>
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions1"
                id="inlineRadio3"
                value="ประทวน"
                @change="rankrfilter($event)"
              />
              <label class="form-check-label" for="inlineRadio3">ประทวน</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions1"
                id="inlineRadio4"
                value="สัญญาบัตร"
                @change="rankrfilter($event)"
              />
              <label class="form-check-label" for="inlineRadio4">สัญญาบัตร</label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="inlineRadioOptions1"
                id="inlineRadio5"
                value="ลูกจ้าง"
                @change="rankrfilter($event)"
              />
              <label class="form-check-label" for="inlineRadio5">ลูกจ้าง</label>
            </div>
          </div>
          <div class="text-center pt-4 table-responsive">
            <table class="table border border-2 border-success">
              <thead class="border border-2 border-success border-bottom">
                <tr>
                  <th scope="col">ลำดับ</th>
                  <th scope="col">ยศ</th>
                  <th scope="col">ชื่อ-สกุล</th>
                  <!-- <th scope="col"></th> -->
                  <th scope="col">สังกัด</th>
                  <th scope="col">สถานภาพ</th>
                  <!-- <th scope="col">เลขบัตรประชาชน</th> -->
                  <th scope="col">เบอร์ติดต่อ</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in dataUser" :key="index">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ item?.rank }} </td>
                  <td>{{ item?.firstName }} {{ item?.lastName }}</td>
                  <td>{{ item?.affiliation }}</td>
                  <td>{{ item?.status }}</td>
                  <!-- <td>{{ item.idcard }}</td> -->
                  <td>{{ item?.phone }}</td>
                  <td>
                    <!-- data-bs-toggle="modal" data-bs-target="#EdituserBackdrop" -->
                    <a
                      @click="editUser(item?.id)"
                      data-bs-toggle="modal"
                      data-bs-target="#EdituserBackdrop"
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

    <!-- modal -->
    <div
      class="modal fade"
      id="userBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">เพิ่มสมาชิก</h5>
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
                <div class="form-check form-check-inline">
                  <label style="margin-right: 20px">ประเภท</label>
                  <input
                    class="form-check-input"
                    type="radio"
                    name="typeUser"
                    id="inlinetypeUser1"
                    value="ตร."
                    @change="typeUserchange($event)"
                    checked
                  />
                  <label class="form-check-label" for="inlinetypeUser1">ตร.</label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="typeUser"
                    id="inlinetypeUser"
                    value="บช.ตชด."
                    @change="typeUserchange($event)"
                  />
                  <label class="form-check-label" for="inlinetypeUser">บช.ตชด.</label>
                </div>
              </div>
              <div class="mb-1">
                <label>สังกัด</label>
                <v-select
                  :options="masterData?.typeAffiliation"
                  v-model="typeAffiliation"
                ></v-select>
              </div>
              <div class="mb-3" v-if="typeAffiliation.label == 'บก.อก.'">
                <label>สังกัด {{ typeAffiliation.label }}</label>
                <v-select
                  :options="masterData?.Affiliation"
                  v-model="selectedAffiliation"
                ></v-select>
              </div>
              <div class="mb-3" v-if="typeAffiliation.label == 'บก.สนน.'">
                <label>สังกัด {{ typeAffiliation.label }}</label>
                <v-select
                  :options="masterData?.Affiliation2"
                  v-model="selectedAffiliation"
                ></v-select>
              </div>
              <div class="mb-1">
                <label>ลำดับยศ</label>
                <v-select :options="masterData?.typeranks" v-model="typeRanks"></v-select>
              </div>
              <div class="mb-3" v-if="typeRanks.label == 'ลูกจ้าง'">
                <label> {{ typeRanks.label }}</label>
                <v-select :options="masterData?.ranks" v-model="selectedRanks"></v-select>
              </div>
              <div class="mb-3" v-if="typeRanks.label == 'ประทวน'">
                <label> {{ typeRanks.label }}</label>
                <v-select
                  :options="masterData?.ranks2"
                  v-model="selectedRanks"
                ></v-select>
              </div>
              <div class="mb-3" v-if="typeRanks.label == 'สัญญาบัตร'">
                <label> {{ typeRanks.label }}</label>
                <v-select
                  :options="masterData?.ranks3"
                  v-model="selectedRanks"
                ></v-select>
              </div>
              <div class="mb-3 pt-1">
                <MaterialInput
                  name="firstName"
                  :value="firstName"
                  @input="(event) => (firstName = event.target.value)"
                  class="input-group-static"
                  label="ชื่อ"
                  type="text"
                  placeholder="ชื่อ"
                  isRequired
                />
              </div>
              <div class="mb-3">
                <MaterialInput
                  :value="lastName"
                  @input="(event) => (lastName = event.target.value)"
                  class="input-group-static"
                  label="สกุล"
                  type="text"
                  placeholder="สกุล"
                />
              </div>
              <div class="mb-3">
                <label>สถานภาพ</label>
                <v-select :options="DataObtion" v-model="selectedDataObtion"></v-select>
              </div>
              <div class="mb-3">
                <MaterialInput
                  :value="idcard"
                  @input="(event) => (idcard = event.target.value)"
                  class="input-group-static"
                  label="เลขบัตรประชาชน"
                  type="number"
                  placeholder="เลขบัตรประชาชน"
                />
              </div>
              <div class="mb-3">
                <MaterialInput
                  :value="phone"
                  @input="(event) => (phone = event.target.value)"
                  class="input-group-static"
                  label="เบอร์ติดต่อ"
                  type="number"
                  placeholder="เบอร์ติดต่อ"
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

    <!-- modal -->
    <div
      class="modal fade"
      id="EdituserBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">แก้ไขสมาชิก</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div>
              <div class="mb-1">
                <label>สังกัด</label>
                <v-select
                  :options="masterData?.typeAffiliation"
                  v-model="typeAffiliation"
                ></v-select>
              </div>
              <div
                class="mb-3"
                v-if="
                  typeAffiliation.label == 'บก.อก.' || this.typeAffiliation == 'บก.อก.'
                "
              >
                <label>สังกัด {{ typeAffiliation.label }}</label>
                <v-select
                  :options="masterData?.Affiliation"
                  v-model="selectedAffiliation"
                ></v-select>
              </div>
              <div
                class="mb-3"
                v-if="
                  typeAffiliation.label == 'บก.สนน.' || this.typeAffiliation == 'บก.สนน.'
                "
              >
                <label>สังกัด {{ typeAffiliation.label }}</label>
                <v-select
                  :options="masterData?.Affiliation2"
                  v-model="selectedAffiliation"
                ></v-select>
              </div>
              <div class="mb-1">
                <label>ลำดับยศ</label>
                <v-select :options="masterData?.typeranks" v-model="typeRanks"></v-select>
              </div>
              <div
                class="mb-3"
                v-if="typeRanks.label == 'ลูกจ้าง' || this.typeRanks == 'ลูกจ้าง'"
              >
                <label> {{ typeRanks.label }}</label>
                <v-select :options="masterData?.ranks" v-model="selectedRanks"></v-select>
              </div>
              <div
                class="mb-3"
                v-if="typeRanks.label == 'ประทวน' || this.typeRanks == 'ประทวน'"
              >
                <label> {{ typeRanks.label }}</label>
                <v-select
                  :options="masterData?.ranks2"
                  v-model="selectedRanks"
                ></v-select>
              </div>
              <div
                class="mb-3"
                v-if="typeRanks.label == 'สัญญาบัตร' || this.typeRanks == 'สัญญาบัตร'"
              >
                <label> {{ typeRanks.label }}</label>
                <v-select
                  :options="masterData?.ranks3"
                  v-model="selectedRanks"
                ></v-select>
              </div>
              <div class="mb-3">
                <h6 class="input-required">ชื่อ</h6>
                <MaterialInput
                  name="firstName"
                  :value="firstName"
                  @input="(event) => (firstName = event.target.value)"
                  class="input-group-static"
                 
                  type="text"
                />
              </div>
              <div class="mb-3">
                <MaterialInput
                  :value="lastName"
                  @input="(event) => (lastName = event.target.value)"
                  class="input-group-static"
                  label="สกุล"
                  type="text"
                  placeholder="สกุล"
                />
              </div>
              <div class="mb-3">
                <label>สถานภาพ</label>
                <v-select :options="DataObtion" v-model="selectedDataObtion"></v-select>
              </div>
              <div class="mb-3">
                <MaterialInput
                  :value="idcard"
                  @input="(event) => (idcard = event.target.value)"
                  class="input-group-static"
                  label="เลขบัตรประชาชน"
                  type="number"
                  placeholder="เลขบัตรประชาชน"
                />
              </div>
              <div class="mb-3">
                <MaterialInput
                  :value="phone"
                  @input="(event) => (phone = event.target.value)"
                  class="input-group-static"
                  label="เบอร์ติดต่อ"
                  type="number"
                  placeholder="เบอร์ติดต่อ"
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
              @click="editForm"
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
.breadcrumb-item a:hover {
  color: #4caf50 !important;
}


</style>
