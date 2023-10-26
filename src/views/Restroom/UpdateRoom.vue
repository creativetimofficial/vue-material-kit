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
import setMaterialInput from "@/assets/js/material-input";
// onMounted(() => {
//   setMaterialInput();
// });
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

const landingColumns = [
  {
    title: "ห้อง 1",
    dataIndex: "1",
    status: true,
  },
  {
    title: "ห้อง 2",
    dataIndex: "2",
    status: false,
  },
  {
    title: "ห้อง 3",
    dataIndex: "3",
    status: true,
  },
  {
    title: "ห้อง 4",
    dataIndex: "4",
    status: true,
  },
  {
    title: "ห้อง 5",
    dataIndex: "5",
    status: false,
  },
  {
    title: "ห้อง 6",
    dataIndex: "6",
    status: false,
  },
  {
    title: "ห้อง 7",
    dataIndex: "7",
    status: true,
  },
  {
    title: "ห้อง 8",
    dataIndex: "8",
    status: false,
  },
  {
    title: "ห้อง 9",
    dataIndex: "9",
    status: false,
  },
  {
    title: "ห้อง 10",
    dataIndex: "10",
    status: false,
  },
  {
    title: "ห้อง 11",
    dataIndex: "11",
    status: true,
  },
  {
    title: "ห้อง 12",
    dataIndex: "12",
    status: false,
  },
  {
    title: "ห้อง 13",
    dataIndex: "13",
    status: false,
  },
];
const userlist = [
  {
    dataIndex: "1",
    firstName: "สมชาย",
    lastName: "แสงทอง",
    Affiliation: "ฝอ.2", //สังกัด
    rank: "ส.ต.ต.", //ยศ
    old: "32",
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
      vueMkHeader,
      userlist,
    };
  },

  data() {
    return {
      value: { name: "Vue.js", language: "JavaScript" },
      options: [
        { label: "มกราคม", value: "01" },
        { label: "กุมภาพันธ์", value: "02" },
        { label: "มีนาคม", value: "03" },
        { label: "เมษายน", value: "04" },
        { label: "พฤษภาคม", value: "05" },
        { label: "มิถุนายน", value: "06" },
        { label: "กรกฎาคม ", value: "07" },
        { label: "สิงหาคม", value: "08" },
        { label: "กันยายน", value: "09" },
        { label: "ตุลาคม", value: "10" },
        { label: "พฤศจิกายน", value: "11" },
        { label: "ธันวาคม", value: "12" },
      ],
      optionsUser: [
        { label: "มานพ", value: "มานพ" },
        { label: "วิชัย", value: "วิชัย" },
        { label: "ธนาพร", value: "ธนาพร" },
        { label: "มนตรี", value: "มนตรี" },
      ],
      optionsRoomtype: [
        { label: "ช๑", value: "ช๑" },
        { label: "ช๒", value: "ช๒" },
        { label: "ช๓", value: "ช๓" },
      ],
      optionsBuilding: [
        { label: "อาคารแฟลต 1/11", value: "1" },
        { label: "อาคารแฟลต 1/12", value: "2" },
        { label: "อาคารแฟลต 1/13", value: "3" },
        { label: "อาคารแฟลต 1/14", value: "4" },
        { label: "อาคารแฟลต 1/15", value: "5" },
        { label: "อาคารแฟลต 1/16", value: "3" },
        { label: "อาคารแฟลต 1/17", value: "4" },
        { label: "อาคารแฟลต 1/18", value: "5" },
        { label: "แฟลตลือชา 1", value: "5" },
        { label: "แฟลตลือชา 2", value: "3" },
        { label: "แฟลตลือชา 3", value: "4" },
        { label: "แฟลตบางเขน 1", value: "5" },
        { label: "แฟลตบางเขน 2", value: "5" },
      ],
      optionsFloor: [
        { label: "ชั้น 1", value: "1" },
        { label: "ชั้น 2", value: "2" },
        { label: "ชั้น 3", value: "3" },
        { label: "ชั้น 4", value: "4" },
        { label: "ชั้น 5", value: "5" },
      ],
      optionsRoom: [
        { label: "ห้อง 101", value: "1" },
        { label: "ห้อง 202", value: "2" },
        { label: "ห้อง 303", value: "3" },
        { label: "ห้อง 404", value: "4" },
        { label: "ห้อง 505", value: "5" },
      ],
      selectedBuilding: "อาคารแฟลต 1/11",
      selectedFloor: "ชั้น 1",
      selectedRoom: "ห้อง 101",
      selectedMonth: "ตุลาคม",
      firstName: "สมชาย",
      lastName: "0237",
      Affiliation: "0426 ", //สังกัด
      rank: "ปกติ", //ยศ
      idcard: "120",
      phone: "1200",
      old: "100",
      birthday: "200",
      Roomtype: "ช๑",
      Roomconditions: "ปกติ",
      selectedRoomtype: "ช๑",
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
    <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 pt-6">
      <div class="page-header min-vh-45">
        <div class="container">
          <div>
            <Breadcrumbs
              :routes="[
                { label: 'หน้าหลัก', route: '/' },
                { label: 'สถานะห้องพัก', route: '/room' },
                { label: 'จัดการห้องพัก' },
              ]"
            />
          </div>
          <!-- d-flex justify-content-between -->
          <h4>จัดการห้องพัก</h4>
          <div class="row pt-4 min-vh-45">
            <div class="col-lg-3">
              <div
                class="nav flex-column nav-pills me-3"
                id="v-pills-tab"
                role="tablist"
                aria-orientation="vertical"
              >
                <button
                  class="nav-link active"
                  id="v-pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-home"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-home"
                  aria-selected="true"
                >
                  แก้ไขรายละเอียดห้องพัก
                </button>
                <button
                  class="nav-link"
                  id="v-pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-profile"
                  aria-selected="false"
                >
                  จัดการคิว
                </button>
                <button
                  class="nav-link"
                  id="v-pills-messages-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-messages"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-messages"
                  aria-selected="false"
                >
                  คืนห้องพัก
                </button>
                <button
                  class="nav-link"
                  id="v-pills-settings-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#v-pills-settings"
                  type="button"
                  role="tab"
                  aria-controls="v-pills-settings"
                  aria-selected="false"
                >
                  ค่าสาธารณูปโภค
                </button>
              </div>
            </div>
            <div class="col-lg-9">
              <div class="tab-content" id="v-pills-tabContent">
                <div
                  class="tab-pane fade show active"
                  id="v-pills-home"
                  role="tabpanel"
                  aria-labelledby="v-pills-home-tab"
                >
                  <div class="p-4">
                    <div>
                      <h5>แก้ไขรายละเอียด ห้อง 2</h5>
                      <div class="mb-3">
                        <MaterialInput
                          :value="lastName"
                          @input="(event) => (lastName = event.target.value)"
                          class="input-group-static"
                          label="มิเตอร์น้ำ"
                          type="text"
                          placeholder="มิเตอร์น้ำ"
                        />
                      </div>
                      <div class="mb-3">
                        <MaterialInput
                          :value="Affiliation"
                          @input="(event) => (Affiliation = event.target.value)"
                          class="input-group-static"
                          label="มิเตอร์ไฟ"
                          type="text"
                          placeholder="มิเตอร์ไฟ"
                        />
                      </div>
                      <div class="mb-3">
                        <label>ประเภทห้องพัก</label>
                        <v-select
                          :options="optionsRoomtype"
                          v-model="selectedRoomtype"
                        ></v-select>
                      </div>

                      <div class="mb-3">
                        <div class="form-check form-check-inline">
                          <label style="margin-right: 20px">สภาพห้อง</label>
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio1"
                            value="option1"
                          />
                          <label class="form-check-label" for="inlineRadio1">ชำรุด</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="inlineRadioOptions"
                            id="inlineRadio2"
                            value="option2"
                          />
                          <label class="form-check-label" for="inlineRadio2"
                            >ไม่ชำรุด</label
                          >
                        </div>
                      </div>
                    </div>

                    <div class="text-center">
                      <MaterialButton variant="gradient" color="success"
                        >บันทึก</MaterialButton
                      >
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-profile"
                  role="tabpanel"
                  aria-labelledby="v-pills-profile-tab"
                >
                  <div>
                    <div class="d-flex justify-content-end align-items-baseline">
                      <label style="margin-right: 20px">ค้นหาชื่อ </label>
                      <MaterialInput
                        style="margin-right: 20px"
                        class="input-group-dynamic w-30"
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
                    <div class="text-center pt-4 table-responsive">
                      <table class="table border border-2 border-success">
                        <thead class="border border-2 border-success border-bottom">
                          <tr>
                            <th scope="col">ลำดับ</th>
                            <th scope="col">ชื่อ</th>
                            <th scope="col">สกุล</th>
                            <th scope="col">วันเกิด</th>
                            <th scope="col">อายุ</th>
                            <th scope="col">สังกัด</th>
                            <th scope="col">ยศ</th>
                            <th scope="col">เลขบัตรประชาชน</th>
                            <th scope="col">เบอร์ติดต่อ</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="(item, index) in userlist" :key="index">
                            <th scope="row">{{ index + 1 }}</th>
                            <td>{{ item.firstName }}</td>
                            <td>{{ item.lastName }}</td>
                            <td>{{ item.birthday }}</td>
                            <td>{{ item.old }}</td>
                            <td>{{ item.Affiliation }}</td>
                            <td>{{ item.rank }}</td>
                            <td>{{ item.idcard }}</td>
                            <td>{{ item.phone }}</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div
                  class="tab-pane fade"
                  id="v-pills-messages"
                  role="tabpanel"
                  aria-labelledby="v-pills-messages-tab"
                >
                  <div>
                    <div
                      class="mb-3"
                      style="
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                      "
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
                      style="
                        display: flex;
                        justify-content: space-between;
                        align-items: center;
                      "
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
                    <div class="pt-4 text-end">
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
                <div
                  class="tab-pane fade"
                  id="v-pills-settings"
                  role="tabpanel"
                  aria-labelledby="v-pills-settings-tab"
                >
                  <div>
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link active"
                          style="color: #57b05b"
                          id="home-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#home"
                          type="button"
                          role="tab"
                          aria-controls="home"
                          aria-selected="true"
                        >
                          บันทึกค่าใช้จ่ายบ้านพัก ตร.
                        </button>
                      </li>
                      <li class="nav-item" role="presentation">
                        <button
                          class="nav-link"
                          style="color: #57b05b"
                          id="profile-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#profile"
                          type="button"
                          role="tab"
                          aria-controls="profile"
                          aria-selected="false"
                        >
                          บันทึกค่าใช้จ่ายบ้านพัก บช.ตชด.
                        </button>
                      </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                      <div
                        class="tab-pane fade show active"
                        id="home"
                        role="tabpanel"
                        aria-labelledby="home-tab"
                      >
                        <div class="d-flex justify-content-end align-items-baseline pt-4">
                          <label style="margin-right: 10px">ค้นหาชื่อหรือเลขห้อง </label>
                          <MaterialInput
                            class="input-group-dynamic w-30"
                            icon="search"
                            type="text"
                            placeholder="Search"
                          />
                          <MaterialButton
                            style="margin-left: 20px"
                            variant="gradient"
                            color="success"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop11"
                            >เพิ่มค่าใช้จ่ายบ้านพัก ตร.</MaterialButton
                          >
                        </div>
                        <div class="text-center pt-4 table-responsive">
                          <table class="table table-hover border border-2 border-success">
                            <thead class="border border-2 border-success border-bottom">
                              <tr>
                                <th scope="col">ลำดับ</th>
                                <th scope="col">อาคาร</th>
                                <th scope="col">ชั้น</th>
                                <th scope="col">เลขที่ห้อง</th>
                                <th scope="col">ค่าธรรมเนียม</th>
                                <th scope="col">ค่าน้ำประปา</th>
                                <th scope="col">ค่าไฟฟ้า</th>
                                <th scope="col">ค่าไฟฟ้าส่วนกลาง</th>
                                <th scope="col">ค่าบำรุงลิฟท์</th>
                                <th scope="col">ค่าประกัน</th>
                                <th scope="col">จำนวนงวดประกัน</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">1</th>
                                <td>อาคารแฟลต 1/11</td>
                                <td>2</td>
                                <td>202</td>
                                <td>20,000</td>
                                <td>8,000</td>
                                <td>20,000</td>
                                <td>8,000</td>
                                <td>20,000</td>
                                <td>10,000</td>
                                <td>5</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="profile"
                        role="tabpanel"
                        aria-labelledby="profile-tab"
                      >
                        <div class="d-flex justify-content-end align-items-baseline pt-4">
                          <label style="margin-right: 10px">ค้นหาชื่อหรือเลขห้อง </label>
                          <MaterialInput
                            class="input-group-dynamic w-30"
                            icon="search"
                            type="text"
                            placeholder="Search"
                          />
                          <MaterialButton
                            style="margin-left: 20px"
                            variant="gradient"
                            color="success"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop12"
                            >เพิ่มค่าใช้จ่ายบ้านพัก บช.ตชด.</MaterialButton
                          >
                        </div>
                        <div class="text-center pt-4 table-responsive">
                          <table class="table table-hover border border-2 border-success">
                            <thead class="border border-2 border-success border-bottom">
                              <tr>
                                <th scope="col">ลำดับ</th>
                                <th scope="col">อาคาร</th>
                                <th scope="col">ชั้น</th>
                                <th scope="col">เลขที่ห้อง</th>
                                <th scope="col">ค่าบำรุงฯ</th>
                                <th scope="col">ค่าประกัน</th>
                                <th scope="col">จำนวนงวดประกัน</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <th scope="row">1</th>
                                <td>อาคารแฟลต 1/14</td>
                                <td>2</td>
                                <td>202</td>
                                <td>20,000</td>
                                <td>8,000</td>
                                <td>8</td>
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
                <v-select :options="optionsUser" v-model="selectedColor"></v-select>
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
    <!-- Modal -->
    <div
      class="modal fade"
      id="staticBackdrop11"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              บันทึกค่าใช้จ่ายบ้านพัก ตร. ประจำเดือนตุลาคม
            </h5>
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
                <label>อาคาร</label>
                <v-select
                  :options="optionsBuilding"
                  v-model="selectedBuilding"
                ></v-select>
              </div>
              <div class="mb-3">
                <label>ชั้น</label>
                <v-select :options="optionsFloor" v-model="selectedFloor"></v-select>
              </div>
              <div class="mb-3">
                <label>เลขที่ห้อง</label>
                <v-select :options="optionsRoom" v-model="selectedRoom"></v-select>
              </div>
              <div class="mb-3">
                <MaterialInput
                  name="fee"
                  :value="fee"
                  @input="(event) => (fee = event.target.value)"
                  class="input-group-static"
                  label="ค่าธรรมเนียม"
                  type="text"
                  placeholder="ค่าธรรมเนียม"
                />
              </div>
              <div class="mb-3">
                <MaterialInput
                  :value="Waterbill"
                  @input="(event) => (Waterbill = event.target.value)"
                  class="input-group-static"
                  label="ค่าน้ำประปา"
                  type="text"
                  placeholder="ค่าน้ำประปา"
                />
              </div>
              <div class="mb-3">
                <MaterialInput
                  :value="Electricitybill"
                  @input="(event) => (Electricitybill = event.target.value)"
                  class="input-group-static"
                  label="ค่าไฟฟ้า"
                  type="text"
                  placeholder="ค่าไฟฟ้า"
                />
              </div>
              <div class="mb-3">
                <MaterialInput
                  :value="Central"
                  @input="(event) => (Central = event.target.value)"
                  class="input-group-static"
                  label="ค่าไฟฟ้าส่วนกลาง"
                  type="text"
                  placeholder="ค่าไฟฟ้าส่วนกลาง"
                />
              </div>
              <div class="mb-3">
                <MaterialInput
                  :value="Costs"
                  @input="(event) => (Costs = event.target.value)"
                  class="input-group-static"
                  label="ค่าบำรุงลิฟท์"
                  type="text"
                  placeholder="ค่าบำรุงลิฟท์"
                />
              </div>
              <div class="mb-3">
                <MaterialInput
                  :value="Insurancecost"
                  @input="(event) => (Insurancecost = event.target.value)"
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
                  label="งวดเงินค่าประกัน"
                  type="text"
                  placeholder="งวดเงินค่าประกัน"
                />
              </div>
            </div>
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
      id="staticBackdrop12"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h6 class="modal-title" id="staticBackdropLabel">
              เพิ่มค่าใช้จ่ายบ้านพัก บช.ตชด. ประจำเดือนตุลาคม
            </h6>
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
                <label>อาคาร</label>
                <v-select
                  :options="optionsBuilding"
                  v-model="selectedBuilding"
                ></v-select>
              </div>
              <div class="mb-3">
                <label>ชั้น</label>
                <v-select :options="optionsFloor" v-model="selectedFloor"></v-select>
              </div>
              <div class="mb-3">
                <label>เลขที่ห้อง</label>
                <v-select :options="optionsRoom" v-model="selectedRoom"></v-select>
              </div>
              <div class="mb-3">
                <MaterialInput
                  name="Maintenance"
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
                  :value="Insurance"
                  @input="(event) => (Insurance = event.target.value)"
                  class="input-group-static"
                  label="ค่าน้ำประปา"
                  type="text"
                  placeholder="ค่าน้ำประปา"
                />
              </div>
              <div class="mb-3">
                <MaterialInput
                  :value="Insurancecost"
                  @input="(event) => (Insurancecost = event.target.value)"
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
                  label="งวดเงินค่าประกัน"
                  type="text"
                  placeholder="งวดเงินค่าประกัน"
                />
              </div>
            </div>
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
.vs__actions {
  cursor: pointer;
}
</style>
