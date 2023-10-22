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
    Affiliation: "บก", //สังกัด
    rank: "ร้อยตรี", //ยศ
    old: "32",
    birthday: "04/03/2534",
    idcard: "134044411441122",
    phone: "0325647846",
  },
  {
    dataIndex: "2",
    firstName: "สมชัย",
    lastName: "แสงสุข",
    Affiliation: "กก", //สังกัด
    rank: "ร้อยตรี", //ยศ
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
      userlist,
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
            <h1 class="pt-3 mt-n5 me-2 head-text">ระบบเรียกรายงาน</h1>
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
                  { label: 'ระบบเรียกรายงาน' },
                ]"
              />
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
                <div class="d-flex justify-content-end pt-4">
                  <MaterialButton size="lg" class="btn-icon" style="margin-right: -30px">
                    <div class="d-flex align-items-center">
                      <span style="margin-right: 5px">บันทึก</span>
                      <img
                        src="../../assets/img/pdf.png"
                        alt="title"
                        loading="lazy"
                        width="40"
                      />
                    </div>
                  </MaterialButton>
                  <MaterialButton size="lg" class="btn-icon">
                    <div class="d-flex align-items-center">
                      <span style="margin-right: 5px">บันทึก</span>
                      <img
                        src="../../assets/img/excel.png"
                        alt="title"
                        loading="lazy"
                        width="40"
                      />
                    </div>
                  </MaterialButton>
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
              <div class="d-flex justify-content-end pt-4">
                  <MaterialButton size="lg" class="btn-icon" style="margin-right: -30px">
                    <div class="d-flex align-items-center">
                      <span style="margin-right: 5px">บันทึก</span>
                      <img
                        src="../../assets/img/pdf.png"
                        alt="title"
                        loading="lazy"
                        width="40"
                      />
                    </div>
                  </MaterialButton>
                  <MaterialButton size="lg" class="btn-icon">
                    <div class="d-flex align-items-center">
                      <span style="margin-right: 5px">บันทึก</span>
                      <img
                        src="../../assets/img/excel.png"
                        alt="title"
                        loading="lazy"
                        width="40"
                      />
                    </div>
                  </MaterialButton>
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
              <div class="d-flex justify-content-end pt-4">
                  <MaterialButton size="lg" class="btn-icon" style="margin-right: -30px">
                    <div class="d-flex align-items-center">
                      <span style="margin-right: 5px">บันทึก</span>
                      <img
                        src="../../assets/img/pdf.png"
                        alt="title"
                        loading="lazy"
                        width="40"
                      />
                    </div>
                  </MaterialButton>
                  <MaterialButton size="lg" class="btn-icon">
                    <div class="d-flex align-items-center">
                      <span style="margin-right: 5px">บันทึก</span>
                      <img
                        src="../../assets/img/excel.png"
                        alt="title"
                        loading="lazy"
                        width="40"
                      />
                    </div>
                  </MaterialButton>
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
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type="number"] {
  -moz-appearance: textfield;
}
</style>
