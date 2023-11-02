<script>
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import Breadcrumbs from "@/examples/Breadcrumbs.vue";
import vueMkHeader from "@/assets/img/bg.jpg";
import masterData from "@/assets/dataJson/masterData.json";

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
    Affiliation: "ฝอ.1", //สังกัด
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
      masterData,
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
      selectedColor: "",
      firstName: "สมชัย",
      lastName: "แสงสุข",
      Affiliation: "", //สังกัด
      rank: "", //ยศ
      idcard: "134044411441178",
      phone: "0325647845",
      selectedRanks: "ส.ต.ต.",
      selectedAffiliation: "ฝอ.2",
      birthday: "14/07/2534",
    };
  },
  created() {
    console.log(this.masterData);
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
            <h1 class="pt-3 mt-n5 me-2 head-text">บันทึกค่าใช้จ่ายรายเดือน ตร</h1>
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
                { label: 'บันทึกค่าใช้จ่ายรายเดือน ตร' },
              ]"
            />
          </div>
          <div class="d-flex justify-content-end align-items-baseline">
            <label style="margin-right: 10px">ค้นหาเลขที่ห้อง </label>
            <MaterialInput
              class="input-group-dynamic w-30"
              icon="search"
              type="text"
              placeholder="Search"
            />
          </div>
          <div class="text-center pt-4 table-responsive">
            <table class="table table-hover border border-2 border-success">
              <thead class="border border-2 border-success border-bottom">
                <tr>
                  <th scope="col">ลำดับ</th>
                  <th scope="col">อาคาร</th>
                  <th scope="col">ชั้น</th>
                  <th scope="col">เลขที่ห้อง</th>
                  <th scope="col">เลขก่อน</th>
                  <th scope="col">เลขหลัง</th>
                  <th scope="col">ยอดใช้</th>
                  <th scope="col">ค่าน้ำประปา</th>
                  <th scope="col">ค่าไฟฟ้า</th>
                  <th scope="col">ค่าไฟฟ้าส่วนกลาง</th>
                  <th scope="col">ค่าบำรุงลิฟท์</th>
                  <th scope="col">ค่าประกัน</th>
                  <th scope="col">จำนวนงวดประกัน</th>
                  <th scope="col">หักได้</th>
                  <th scope="col">หักไม่ได้</th>
                  <th scope="col">สาเหตุที่หัก</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>อาคารแฟลต 1/11</td>
                  <td>2</td>
                  <td>202</td>
                  <td>201</td>
                  <td>205</td>
                  <td>4</td>
                  <td>8,000</td>
                  <td>20,000</td>
                  <td>8,000</td>
                  <td>20,000</td>
                  <td>10,000</td>
                  <td>5/10</td>
                  <td>/</td>
                  <td></td>
                  <td>5555</td>
                  <td>
                    <MaterialButton
                      style="margin-bottom: 0px"
                      variant="gradient"
                      color="success"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop11"
                      >บันทึกค่าใช้จ่ายรายเดือน</MaterialButton
                    >
                  </td>
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
              บันทึกค่าใช้จ่ายบ้านพัก ตร.
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
              <!-- <div class="mb-3">
                <MaterialInput
                  name="fee"
                  :value="fee"
                  @input="(event) => (fee = event.target.value)"
                  class="input-group-static"
                  label="ค่าธรรมเนียม"
                  type="text"
                  placeholder="ค่าธรรมเนียม"
                />
              </div> -->
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
                  label="เลขก่อน"
                  type="text"
                  placeholder="เลขก่อน"
                />
              </div>
              <div class="mb-3">
                <MaterialInput
                  :value="installments"
                  @input="(event) => (installments = event.target.value)"
                  class="input-group-static"
                  label="เลขหลัง"
                  type="text"
                  placeholder="เลขหลัง"
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
              <div class="mb-3">
                <label>สังกัด</label>
                <v-select
                  :options="masterData?.Affiliation"
                  v-model="selectedAffiliation"
                ></v-select>
              </div>
              <div class="mb-3">
                <label>ยศ</label>
                <v-select :options="masterData?.ranks" v-model="selectedRanks"></v-select>
              </div>
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
.breadcrumb-item a:hover {
  color: #4caf50 !important;
}
</style>
