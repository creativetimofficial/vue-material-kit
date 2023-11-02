<script>
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import Breadcrumbs from "@/examples/Breadcrumbs.vue";
import vueMkHeader from "@/assets/img/bg.jpg";

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

const userlist = [
  {
    dataIndex: "1",
    firstName: "สมชาย",
    lastName: "แสงทอง",
    Affiliation: "ฝอ.2", //สังกัด
    rank: "ส.ต.ต.", //ยศ
    old: "32",
    status: "สมรส",
    birthday: "04/03/2534",
    idcard: "134044411441122",
    phone: "0325647846",
  },
  {
    dataIndex: "2",
    firstName: "สมชัย",
    lastName: "แสงสุข",
    Affiliation: "ฝอ.2", //สังกัด
    rank: "ส.ต.ต.", //ยศ
    old: "32",
    status: "โสด",
    birthday: "14/07/2534",
    idcard: "134044411441178",
    phone: "0325647845",
  },
];

export default {
  components: {
    MaterialInput,
    MaterialButton,
    Breadcrumbs,
  },
  setup() {
    return {
      listRoom,
      NoRoom,
      userlist,
      vueMkHeader,
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
      selectedColor: "",
      firstName: "",
      lastName: "",
      Affiliation: "", //สังกัด
      rank: "", //ยศ
      idcard: "",
      phone: "",
    };
  },
  watch: {
    selectedColor: function (newValue) {
      // this.updateColor(newValue)
      console.log(newValue);
    },
  },
  methods: {
    changedLabel(event) {
      console.log(event);
      // this.selected = event;
    },

    submitForm() {
      let body = {
        firstName: this.firstName,
        lastName: this.lastName,
        Affiliation: this.Affiliation,
        rank: this.rank,
        idcard: this.idcard,
        phone: this.phone,
      };
      // let b = []
      // b.push(body)
      this.userlist.push(body);
      console.log(this.userlist);
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
                style="margin-right: 20px; width:300px"
                class="input-group-dynamic "
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
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, index) in userlist" :key="index">
                  <th scope="row">{{ index + 1 }}</th>
                  <td>{{ item.rank }} {{ item.firstName }} {{ item.lastName }}</td>
                  <td>{{ item.Affiliation }}</td>
                  <td>{{ item.status }}</td>
                  <td>{{ item.idcard }}</td>
                  <td>{{ item.phone }}</td>
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
                <v-select :options="options" v-model="selectedColor"></v-select>
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
  border: 2px solid #567b57 !important;
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
