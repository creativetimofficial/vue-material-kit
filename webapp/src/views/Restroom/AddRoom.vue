<script>
import { onMounted } from "vue";

//image
import image from "@/assets/img/illustrations/illustration-signin.jpg";
import vueMkHeader from "@/assets/img/bg.jpg";
//material components
import MaterialInput from "@/components/MaterialInput.vue";
import Breadcrumbs from "@/examples/Breadcrumbs.vue";

import MaterialButton from "@/components/MaterialButton.vue";
// material-input
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

     // {
        //     "buil": "อาคารบ้านพักส่วนกลาง",
        //     "name": "ลือชา ตร.",
        //     "room": "-",
        //     "floor": "-",
        //     "roomnumber": "-",
        //     "type": "-"
        // },
        // {
        //     "buil": "อาคารบ้านพักส่วนกลาง",
        //     "name": "ทุ่งสองห้อง",
        //     "room": "-",
        //     "floor": "-",
        //     "roomnumber": "-",
        //     "type": "-"
        // },
        // {
        //     "buil": "อาคารบ้านพักส่วนกลาง",
        //     "name": "วิภาวดี",
        //     "room": "-",
        //     "floor": "-",
        //     "roomnumber": "-",
        //     "type": "-"
        // },
        // {
        //     "buil": "อาคารบ้านพักส่วนกลาง",
        //     "name": "ถนอมมิตร",
        //     "room": "-",
        //     "floor": "-",
        //     "roomnumber": "-",
        //     "type": "-"
        // },
        // {
        //     "buil": "อาคารบ้านพักส่วนกลาง",
        //     "name": "อุดมสุข",
        //     "room": "-",
        //     "floor": "-",
        //     "roomnumber": "-",
        //     "type": "-"
        // },
        // {
        //     "buil": "อาคารบ้านพักส่วนกลาง",
        //     "name": "เฉลิมลาภ",
        //     "room": "-",
        //     "floor": "-",
        //     "roomnumber": "-",
        //     "type": "-"
        // }

const userlist = [
  {
    dataIndex: "1",
    firstName: "สมชาย",
    lastName: "แสงทอง",
    Affiliation: "บก", //สังกัด
    rank: "ร้อยตรี", //ยศ
    idcard: "134044411441122",
    phone: "0325647846",
    ContractDate: "12/11/2566", //สังกัด
    Lengthofstay: "3 เดือน", //ยศ
    InsuranceMoney: "10,000",
    Status: "รอคิว",
  },
  {
    dataIndex: "2",
    firstName: "สมชัย",
    lastName: "แสงสุข",
    Affiliation: "กก", //สังกัด
    rank: "ร้อยตรี", //ยศ
    idcard: "134044411441178",
    phone: "0325647845",
    ContractDate: "12/11/2566", //สังกัด
    Lengthofstay: "3 เดือน", //ยศ
    InsuranceMoney: "10,000",
    Status: "รอคิว",
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
      vueMkHeader,
      userlist,
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
      old: "",
      birthday: "",
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
      // this.userlist.push(body)
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
                { label: 'เพิ่มผู้เช่าห้องพัก' },
              ]"
            />
          </div>
          <h4>เพิ่มผู้เช่าห้องพัก</h4>

          <div class="row pt-4">
            <div class="card mb-3">
              <h5>ลำดับคิว</h5>
              <div class="text-end">
                <MaterialButton
                  variant="gradient"
                  color="success"
                  data-bs-toggle="modal"
                  data-bs-target="#contractBackdrop"
                  >เพิ่มผู้เช่าลงคิว</MaterialButton
                >
              </div>
              <div class="text-center pt-4 table-responsive">
                <table class="table border border-2 border-success">
                  <thead class="border border-2 border-success border-bottom">
                    <tr>
                      <th scope="col">ลำดับ</th>
                      <th scope="col">ชื่อ</th>
                      <th scope="col">สกุล</th>
                      <th scope="col">สังกัด</th>
                      <th scope="col">ยศ</th>
                      <th scope="col">เลขบัตรประชาชน</th>
                      <th scope="col">เบอร์ติดต่อ</th>
                      <th scope="col">วันที่ได้รับอนุมัติ</th>
                      <th scope="col">ระยะเวลาที่เข้าพัก</th>
                      <th scope="col">เงินค่าประกัน</th>
                      <th scope="col">สถานะ</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, index) in userlist" :key="index">
                      <th scope="row">{{ index + 1 }}</th>
                      <td>{{ item.firstName }}</td>
                      <td>{{ item.lastName }}</td>
                      <td>{{ item.Affiliation }}</td>
                      <td>{{ item.rank }}</td>
                      <td>{{ item.idcard }}</td>
                      <td>{{ item.phone }}</td>
                      <td>{{ item.ContractDate }}</td>
                      <td>{{ item.Lengthofstay }}</td>
                      <td>{{ item.InsuranceMoney }}</td>
                      <td>{{ item.Status }}</td>
                      <td>
                        <MaterialButton variant="gradient" color="success"
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
    <!-- modal -->
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
                <label>ชื่อผู้เช่า</label>
                <v-select :options="options" v-model="selectedColor"></v-select>
              </div>

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
                  :value="insurance"
                  @input="(event) => (Affiliation = event.target.value)"
                  class="input-group-static"
                  label="เงินค่าประกัน"
                  type="text"
                  placeholder="เงินค่าประกัน"
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
              >บันทึก</MaterialButton
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

