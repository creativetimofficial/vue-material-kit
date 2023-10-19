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
      selectedColor: "",
      firstName: "สมชาย",
      lastName: "มาดี",
      Affiliation: "กก", //สังกัด
      rank: "ร้อยโท", //ยศ
      idcard: "1234",
      phone: "2023654888",
      old: "30",
      birthday: "12/11/2536",
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
        phone: this.phone
      }
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
                { label: 'แก้ไขรายละเอียดห้อง' },
              ]"
            />
          </div>
          <!-- d-flex justify-content-between -->
          <h4>แก้ไขรายละเอียดห้อง</h4>
          <div class="row pt-4">
            <div class="card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    width="300"
                    src="../../assets/img/team-4.jpg"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body">
                    <h5 class="card-title">รายละเอียดเจ้าของห้อง</h5>

                    <div class="row">
                      <div class="col-4">
                        <div>
                          <div class="mb-3">
                            <MaterialInput
                              name="firstName"
                              :value="firstName"
                              @input="(event) => (firstName = event.target.value)"
                              class="input-group-static"
                              label="ชื่อ"
                              type="text"
                              placeholder="ชื่อ"
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
                            <MaterialInput
                              :value="Affiliation"
                              @input="(event) => (Affiliation = event.target.value)"
                              class="input-group-static"
                              label="สังกัด"
                              type="text"
                              placeholder="สังกัด"
                            />
                          </div>
                          <div class="mb-3">
                            <MaterialInput
                              :value="rank"
                              @input="(event) => (rank = event.target.value)"
                              class="input-group-static"
                              label="ยศ"
                              type="text"
                              placeholder="ยศ"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="col-4">
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
                        <div class="mb-3">
                          <MaterialInput
                            :value="birthday"
                            @input="(event) => (birthday = event.target.value)"
                            class="input-group-static"
                            label="วันเกิด"
                            type="text"
                            placeholder="วันเกิด"
                          />
                        </div>
                        <div class="mb-3">
                          <MaterialInput
                            :value="old"
                            @input="(event) => (old = event.target.value)"
                            class="input-group-static"
                            label="อายุ"
                            type="number"
                            placeholder="อายุ"
                          />
                        </div>
                      </div>
                    </div>
                    <!-- <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p> -->
                    <div class="text-center">
                      <MaterialButton
                          variant="gradient"
                          color="success"
                          >บันทึก</MaterialButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
.bg-waring {
  background: #d1d3d5 !important;
  color: #fff;
}
</style>
