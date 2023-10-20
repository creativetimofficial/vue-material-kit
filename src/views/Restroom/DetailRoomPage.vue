<script>

//image
import vueMkHeader from "@/assets/img/bg.jpg";
//material components
// import MaterialInput from "@/components/MaterialInput.vue";
// import MaterialButton from "@/components/MaterialButton.vue";
import Breadcrumbs from "@/examples/Breadcrumbs.vue";

export default {
  components: {
    // MaterialInput,
    // MaterialButton,
    Breadcrumbs,
  },
  setup() {
    return {
      vueMkHeader,
    };
  },

  data() {
    return {
      selectedColor: "",
      statusedit: false
    };
  },
  created(){
    console.log(this.$route.query.mode);
    let mode = this.$route.query.mode
    mode == "add" ? this.statusedit = false : this.statusedit = true 
    // this.$route.query
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
                { label: 'รายละเอียดห้องพัก' },
              ]"
            />
          </div>
          <!-- d-flex justify-content-between -->
          <h4>รายละเอียดห้องพัก</h4>
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
                    <div class="row" v-if="statusedit == true">
                      <h5  class="card-title">รายละเอียดผู้เช่า</h5>
                      <div class="col-5">
                        <p class="card-text">ชือ : มานะ</p>
                        <p class="card-text">สถานะห้อง : ไม่ว่าง</p>
                        <p class="card-text">ยศ : ร้อยตรี</p>
                        <p class="card-text">วันเกิด : 12/02/2514</p>
                        <p class="card-text">วันทำสัญญา : 12/02/2564</p>
                        <p class="card-text">อายุ : 33 ปี</p>
                        <p class="card-text">ระยะเวลาที่เข้าพัก : 3 เดือน</p>
                      </div>
                      <div class="col-7">
                        <p class="card-text">นามสกุล : ถือดี</p>
                        <p class="card-text">สังกัด : กก</p>
                        <p class="card-text">เลขบัตรประชาชน : 123456123456</p>
                        <p class="card-text">เบอร์โทร : 0972534887</p>
                        <p class="card-text">เงินค่าประกัน : 12,000</p>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-5" >
                        <h5 class="card-title pt-2">รายละเอียดห้องพัก</h5>
                        <p class="card-text">ประเภทห้องพัก : ช๓</p>
                        <p class="card-text">มิเตอร์น้ำ/ไฟ : 745/546</p>
                        <p class="card-text">สภาพห้อง : ปกติ</p>
                      </div>
                      <div class="col-7" v-if="statusedit == true">
                        <h5 class="card-title pt-2">รายละเอียดค่าสาธารณุปโภค</h5>
                        <p class="card-text">ค่าน้ำประปา : 120</p>
                        <p class="card-text">ค่าไฟฟ้า : 700</p>
                        <p class="card-text">ค่าไฟฟ้าส่วนกลาง : 100</p>
                        <p class="card-text">ค่าบำรุงลิฟท์ : 200</p>
                      </div>
                    </div>
                    <!-- <p class="card-text">
                      <small class="text-muted">Last updated 3 mins ago</small>
                    </p> -->
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
 