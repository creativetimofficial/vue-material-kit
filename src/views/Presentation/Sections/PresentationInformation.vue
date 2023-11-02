<script setup>
</script>
<template>
  <section class="my-4 py-4">
    <div class="container">
        <div class="row">
            <div class="col-sm-3">
                <div class="card">
                    <div class="card-body text-center">
                        <p class="card-title" style="font-weight: bold; color: #000">ทะเบียน</p>
                        <img src="../../../assets/img/register.png"  alt="title" loading="lazy" class="w-50" />
                        <RouterLink :to="{ name: 'users' }" class="dropdown-item border-radius-md">
                            <a href="#" class="btn btn-success mt-4">ทะเบียน</a>
                        </RouterLink>

                    </div>
                </div>
            </div>
            <div class="col-sm-3 mb-3 mb-sm-0">
                <div class="card">
                    <div class="card-body text-center">
                        <p class="card-title" style="font-weight: bold; color: #000">สถานะห้องพัก</p>
                        <img src="../../../assets/img/status.png" alt="title" loading="lazy" class="w-50" />
                        <RouterLink :to="{ name: 'room' }" class="dropdown-item border-radius-md">
                            <a href="#" class="btn btn-success mt-4">สถานะห้องพัก</a>
                        </RouterLink>
                    </div>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="card">
                    <div class="card-body text-center">
                        <p class="card-title" style="font-weight: bold; color: #000">ผังห้องพัก</p>
                        <img src="../../../assets/img/layout.png" alt="title" loading="lazy" class="w-50" />
                        <RouterLink :to="{ name: 'layout' }" class="dropdown-item border-radius-md">
                          <a href="#" class="btn btn-success mt-4">ผังห้องพัก</a>
                        </RouterLink>
                    </div>
                </div>
            </div>
            <!-- <div class="col-sm-3">
                <div class="card">
                    <div class="card-body text-center">
                        <p class="card-title" style="font-weight: bold; color: #000">ค่าสาธารณุปโภค</p>
                        <img src="../../../assets/img/utilities.png" alt="title" loading="lazy" class="w-50" />
                        <RouterLink :to="{ name: 'utilities' }" class="dropdown-item border-radius-md">
                          <a href="#" class="btn btn-success mt-4">ค่าสาธารณุปโภค</a>
                        </RouterLink>
                    </div>
                </div>
            </div> -->
            <div class="col-sm-3 ">
                <div class="card">
                    <div class="card-body text-center">
                        <p class="card-title" style="font-weight: bold; color: #000">ระบบคิว</p>
                        <img src="../../../assets/img/queue.png" alt="title" loading="lazy" class="w-50" />
                        <RouterLink :to="{ name: 'queue' }" class="dropdown-item border-radius-md">
                          <a href="#" class="btn btn-success mt-4">ระบบคิว</a>
                        </RouterLink>
                    </div>
                </div>
            </div>
            <div class="col-sm-3 mt-4">
                <div class="card">
                    <div class="card-body text-center">
                        <p class="card-title" style="font-weight: bold; color: #000">ระบบเรียกรายงาน</p>
                        <img src="../../../assets/img/result.png" alt="title" loading="lazy" class="w-50" />
                        <RouterLink :to="{ name: 'reports' }" class="dropdown-item border-radius-md">
                          <a href="#" class="btn btn-success mt-4">ระบบเรียกรายงาน</a>
                        </RouterLink>
                    </div>
                </div>
            </div>
            <div class="col-sm-3 mt-4">
                <div class="card">
                    <div class="card-body text-center">
                        <p class="card-title" style="font-weight: bold; color: #000">บันทึกค่าใช้จ่ายรายเดือน ตร</p>
                        <img src="../../../assets/img/accounting.png" alt="title" loading="lazy" class="w-50" />
                        <RouterLink :to="{ name: 'expenses' }" class="dropdown-item border-radius-md">
                          <a href="#" class="btn btn-success mt-4">บันทึกค่าใช้จ่ายรายเดือน ตร</a>
                        </RouterLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  <!-- <section class="my-5 py-5">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
          <RotatingCard>
            <RotatingCardFront
              image="https://images.unsplash.com/photo-1569683795645-b62e50fbf103?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              icon="touch_app"
              title="Feel the <br /> Material Kit"
              description="All the Bootstrap components that you need in a development have been
        re-design with the new look."
            />

            <RotatingCardBack
              image="https://images.unsplash.com/photo-1498889444388-e67ea62c464b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1365&q=80"
              title="Discover More"
              description="You will save a lot of time going from prototyping to full-functional
                code because all elements are implemented."
              :action="[
                {
                  route: './/sections/page-sections/hero-sections.html',
                  label: 'Start with Headers',
                },
              ]"
            />
          </RotatingCard>
        </div>
        <div class="col-lg-6 ms-auto">
          <div class="row justify-content-start">
            <DefaultInfoCard
              icon="content_copy"
              title="Full Documentation"
              description="Built by developers for developers. Check the foundation and
                  you will find everything inside our documentation."
            />
            <DefaultInfoCard
              icon="flip_to_front"
              title="Bootstrap 5 Ready"
              description="The world’s most popular front-end open source toolkit,
                  featuring Sass variables and mixins."
            />
          </div>
          <div class="row justify-content-start mt-5">
            <DefaultInfoCard
              class="mt-3"
              icon="price_change"
              title="Save Time & Money"
              description="Creating your design from scratch with dedicated designers can
                be very expensive. Start with our Design System."
            />
            <DefaultInfoCard
              class="mt-3"
              icon="devices"
              title="Fully Responsive"
              description="Regardless of the screen size, the website content will
                  naturally fit the given resolution."
            />
          </div>
        </div>
      </div>
    </div>
  </section> -->
</template>
