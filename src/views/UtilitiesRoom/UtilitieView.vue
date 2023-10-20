<script>
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialButton from "@/components/MaterialButton.vue";
import vueMkHeader from "@/assets/img/bg.jpg";
import Breadcrumbs from "@/examples/Breadcrumbs.vue";
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
      landingColumns,
      vueMkHeader,
    };
  },

  data() {
    return {
      value: { name: "Vue.js", language: "JavaScript" },
      optionsBuilding: [
        { label: "ตึก 1", value: "1" },
        { label: "ตึก 2", value: "2" },
        { label: "ตึก 3", value: "3" },
        { label: "ตึก 4", value: "4" },
        { label: "ตึก 5", value: "5" },
      ],
      optionsFloor: [
        { label: "ชั้น 1", value: "1" },
        { label: "ชั้น 2", value: "2" },
        { label: "ชั้น 3", value: "3" },
        { label: "ชั้น 4", value: "4" },
        { label: "ชั้น 5", value: "5" },
      ],
      optionsRoom: [
        { label: "ห้อง 1", value: "1" },
        { label: "ห้อง 2", value: "2" },
        { label: "ห้อง 3", value: "3" },
        { label: "ห้อง 4", value: "4" },
        { label: "ห้อง 5", value: "5" },
      ],
      selectedBuilding: "ตึก 1",
      selectedFloor: "ชั้น 1",
      selectedRoom: "ห้อง 1",
      fee: "",
      Waterbill: "",
      Electricitybill: "",
      Central: "",
      Costs: "",
      Maintenance: "",
      Insurance: "",
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
            <h1 class="pt-3 mt-n5 me-2 head-text">ค่าสาธารณุปโภค</h1>
          </div>
        </div>
      </div>
    </div>
  </Header>
  <section>
    <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
      <div class="page-header min-vh-45">
        <div class="container">
          <div class="d-flex justify-content-between">
            <div>
              <Breadcrumbs
                :routes="[{ label: 'หน้าหลัก', route: '/' }, { label: 'ค่าสาธารณุปโภค' }]"
              />
            </div>
          </div>
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
                  บันทึกค่าใช้จ่ายบ้านพักส่วนกลาง ตร.
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
                  บันทึกค่าใช้จ่ายบ้านพักส่วนกลาง บช.ตชด.
                </button>
              </li>
              <li class="nav-item" role="presentation">
                <button
                  class="nav-link"
                  style="color: #57b05b"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact"
                  type="button"
                  role="tab"
                  aria-controls="contact"
                  aria-selected="false"
                >
                  สรุปรายงานค่าใช้จ่าย
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
                <div class="text-end pt-4">
                  <MaterialButton
                    variant="gradient"
                    color="success"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop11"
                    >เพิ่มค่าใช้จ่ายบ้านพักส่วนกลาง ตร.</MaterialButton
                  >
                </div>
                <div class="text-center pt-4">
                  <table class="table table-hover border border-2 border-success">
                    <thead class="border border-2 border-success border-bottom">
                      <tr>
                        <th scope="col">ลำดับ</th>
                        <th scope="col">ตึก</th>
                        <th scope="col">ชั้น</th>
                        <th scope="col">ห้อง</th>
                        <th scope="col">ค่าธรรมเนียม</th>
                        <th scope="col">ค่าน้ำประปา</th>
                        <th scope="col">ค่าไฟฟ้า</th>
                        <th scope="col">ค่าไฟฟ้าส่วนกลาง</th>
                        <th scope="col">ค่าบำรุงลิฟท์</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>20,000</td>
                        <td>8,000</td>
                        <td>20,000</td>
                        <td>8,000</td>
                        <td>20,000</td>
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
                <div class="text-end pt-4">
                  <MaterialButton
                    variant="gradient"
                    color="success"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop12"
                    >เพิ่มค่าใช้จ่ายบ้านพักส่วนกลาง บช.ตชด.</MaterialButton
                  >
                </div>
                <div class="text-center pt-4">
                  <table class="table table-hover border border-2 border-success">
                    <thead class="border border-2 border-success border-bottom">
                      <tr>
                        <th scope="col">ลำดับ</th>
                        <th scope="col">ตึก</th>
                        <th scope="col">ชั้น</th>
                        <th scope="col">ห้อง</th>
                        <th scope="col">ค่าบำรุงฯ</th>
                        <th scope="col">ค่าประกัน</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>1</td>
                        <td>2</td>
                        <td>3</td>
                        <td>20,000</td>
                        <td>8,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="contact"
                role="tabpanel"
                aria-labelledby="contact-tab"
              >
                <div class="text-end pt-4">
                  <MaterialButton
                    variant="gradient"
                    color="success"
                    data-bs-toggle="modal"
                    data-bs-target="#staticBackdrop13"
                    >เพิ่มรายงาน</MaterialButton
                  >
                </div>
                <div class="text-center pt-4">
                  <table class="table table-hover border border-2 border-success">
                    <thead class="border border-2 border-success border-bottom">
                      <tr>
                        <th scope="col">ลำดับ</th>
                        <th scope="col">กก.</th>
                        <th scope="col">บก.</th>
                        <th scope="col">ข้อมูลระดับ บช.</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
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
              บันทึกค่าใช้จ่ายบ้านพักส่วนกลาง ตร.
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
                <label>ตึก</label>
                <v-select :options="optionsBuilding" v-model="selectedBuilding"></v-select>
              </div>
              <div class="mb-3">
                <label>ชั้น</label>
                <v-select :options="optionsFloor" v-model="selectedFloor"></v-select>
              </div>
              <div class="mb-3">
                <label>ห้อง</label>
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
            <h5 class="modal-title" id="staticBackdropLabel">
              เพิ่มค่าใช้จ่ายบ้านพักส่วนกลาง บช.ตชด.
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
                <label>ตึก</label>
                <v-select :options="optionsBuilding" v-model="selectedBuilding"></v-select>
              </div>
              <div class="mb-3">
                <label>ชั้น</label>
                <v-select :options="optionsFloor" v-model="selectedFloor"></v-select>
              </div>
              <div class="mb-3">
                <label>ห้อง</label>
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
      id="staticBackdrop13"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">เพิ่มรายงาน</h5>
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
