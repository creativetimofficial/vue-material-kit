<template>
  <div class="wrapper">
    <div id="menu">
      <div class="md-layout">
        <div class="md-layout-item md-size-50 md-small-size-100">
          <div class="title">
            <h3>Menu</h3>
          </div>
          <md-toolbar class="md-primary">
            <div class="md-toolbar-row">
              <div class="md-toolbar-section-start">
                <h3 class="md-title">Menu</h3>
                <md-list>
                  <md-list-item href="#/">
                    <p>Link</p>
                  </md-list-item>

                  <md-list-item href="javascript:void(0)">
                    <p>Link</p>
                  </md-list-item>

                  <li class="md-list-item">
                    <a
                      href="javascript:void(0)"
                      class="md-list-item-router md-list-item-container md-button-clean dropdown"
                    >
                      <div class="md-list-item-content">
                        <drop-down direction="down">
                          <md-button
                            slot="title"
                            class="md-button md-button-link md-white md-simple dropdown-toggle"
                            data-toggle="dropdown"
                          >
                            <p>Dropdown</p>
                          </md-button>
                          <ul
                            class="dropdown-menu"
                            :class="{ 'dropdown-menu-right': responsive }"
                          >
                            <li class="dropdown-header">Dropdown header</li>
                            <li>
                              <a href="#pablo" class="dropdown-item">Action</a>
                            </li>
                            <li>
                              <a href="#pablo" class="dropdown-item"
                                >Another action</a
                              >
                            </li>
                            <li>
                              <a href="#pablo" class="dropdown-item"
                                >Something else here</a
                              >
                            </li>
                            <li class="dropdown-divider"></li>
                            <li>
                              <a href="#pablo" class="dropdown-item"
                                >Separated link</a
                              >
                            </li>
                            <li class="dropdown-divider"></li>
                            <li>
                              <a href="#pablo" class="dropdown-item"
                                >One more separated link</a
                              >
                            </li>
                          </ul>
                        </drop-down>
                      </div>
                    </a>
                  </li>
                </md-list>
              </div>
              <div class="md-toolbar-section-end">
                <md-button
                  class="md-just-icon md-simple md-white md-toolbar-toggle"
                >
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </md-button>

                <div class="md-collapse"></div>
              </div>
            </div>
          </md-toolbar>
        </div>
        <div class="md-layout-item md-size-50 md-small-size-100">
          <div class="title">
            <h3>Menu with Icons</h3>
          </div>
          <md-toolbar class="md-info">
            <div class="md-toolbar-row">
              <div class="md-toolbar-section-start">
                <h3 class="md-title">Icons</h3>
              </div>
              <div class="md-toolbar-section-end">
                <md-button
                  class="md-just-icon md-simple md-white md-toolbar-toggle"
                >
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </md-button>

                <div class="md-collapse">
                  <md-list>
                    <md-list-item href="javascript:void(0)">
                      <md-icon>email</md-icon>
                    </md-list-item>

                    <md-list-item href="javascript:void(0)">
                      <md-icon>face</md-icon>
                    </md-list-item>

                    <li class="md-list-item">
                      <a
                        href="javascript:void(0)"
                        class="md-list-item-router md-list-item-container md-button-clean dropdown"
                      >
                        <div class="md-list-item-content">
                          <drop-down direction="down">
                            <md-button
                              slot="title"
                              class="md-button md-button-link md-white md-simple md-just-icon"
                              data-toggle="dropdown"
                            >
                              <md-icon>settings</md-icon>
                            </md-button>
                            <ul class="dropdown-menu dropdown-menu-right">
                              <li class="dropdown-header">Dropdown header</li>
                              <li>
                                <a href="#pablo" class="dropdown-item"
                                  >Action</a
                                >
                              </li>
                              <li>
                                <a href="#pablo" class="dropdown-item"
                                  >Another action</a
                                >
                              </li>
                              <li>
                                <a href="#pablo" class="dropdown-item"
                                  >Something else here</a
                                >
                              </li>
                              <li class="dropdown-divider"></li>
                              <li>
                                <a href="#pablo" class="dropdown-item"
                                  >Separated link</a
                                >
                              </li>
                              <li class="dropdown-divider"></li>
                              <li>
                                <a href="#pablo" class="dropdown-item"
                                  >One more separated link</a
                                >
                              </li>
                            </ul>
                          </drop-down>
                        </div>
                      </a>
                    </li>
                  </md-list>
                </div>
              </div>
            </div>
          </md-toolbar>
        </div>
      </div>
      <div class="title">
        <h3>Navigation</h3>
      </div>
    </div>
    <!-- end menu -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      responsive: false
    };
  },
  methods: {
    onResponsiveInverted() {
      if (window.innerWidth < 500) {
        this.responsive = true;
      } else {
        this.responsive = false;
      }
    }
  },
  mounted() {
    this.onResponsiveInverted();
    window.addEventListener("resize", this.onResponsiveInverted);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.onResponsiveInverted);
  }
};
</script>

<style lang="css"></style>
