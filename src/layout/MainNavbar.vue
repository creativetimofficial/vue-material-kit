<template>
  <md-toolbar id="toolbar" md-elevation="0" class="md-transparent md-absolute" :class="extraNavClasses" :color-on-scroll="colorOnScroll">
    <div class="md-toolbar-row">
      <div class="md-toolbar-section-start">
        <h3 class="md-title">Material Kit</h3>
      </div>
      <div class="md-toolbar-section-end">
        <md-button class="md-just-icon md-simple md-toolbar-toggle">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </md-button>

        <div class="md-collapse">
          <md-list>
            <li class="md-list-item">
              <a href="javascript:void(0)" class="md-list-item-router md-list-item-container md-button-clean dropdown">
                <div class="md-list-item-content">
                  <drop-down direction="down">
                    <md-button slot="title" class="md-button md-white md-simple dropdown-toggle" data-toggle="dropdown">
                      <i class="material-icons">apps</i>
                      <p>Components</p>
                    </md-button>
                    <ul class="dropdown-menu dropdown-with-icons">
                      <li>
                        <a href="#">
                          <i class="material-icons">layers</i>
                          All Components
                        </a>
                      </li>
                      <li><a href="#">
                        <i class="material-icons">content_paste</i>
                        Documentation</a>
                      </li>
                    </ul>
                  </drop-down>
                </div>
              </a>
            </li>

            <md-list-item href="javascript:void(0)">
              <i class="material-icons">cloud_download</i>
              <p>Download</p>
            </md-list-item>

            <md-list-item href="https://twitter.com/CreativeTim" target="_blank">
              <i class="fab fa-twitter"></i>
              <p class="hidden-lg hidden-md">Twitter</p>
              <md-tooltip md-direction="bottom">Follow us on Twitter</md-tooltip>
            </md-list-item>
            <md-list-item href="https://www.facebook.com/CreativeTim" target="_blank">
              <i class="fab fa-facebook-square"></i>
              <p class="hidden-lg hidden-md">Facebook</p>
              <md-tooltip md-direction="bottom">Like us on Facebook</md-tooltip>
            </md-list-item>
            <md-list-item href="https://www.instagram.com/CreativeTimOfficial" target="_blank">
              <i class="fab fa-instagram"></i>
              <p class="hidden-lg hidden-md">Instagram</p>
              <md-tooltip md-direction="bottom">Follow us on Instagram</md-tooltip>
            </md-list-item>
          </md-list>
        </div>
      </div>
    </div>

  </md-toolbar>
</template>

<script>
let resizeTimeout;
function resizeThrottler(actualResizeHandler) {
  // ignore resize events as long as an actualResizeHandler execution is in the queue
  if (!resizeTimeout) {
    resizeTimeout = setTimeout(() => {
      resizeTimeout = null;
      actualResizeHandler();

      // The actualResizeHandler will execute at a rate of 15fps
    }, 66);
  }
}

export default {
  props: {
    type: {
      type: String,
      default: "white",
      validator(value) {
        return [
          "white",
          "default",
          "primary",
          "danger",
          "success",
          "warning",
          "info"
        ].includes(value);
      }
    },
    colorOnScroll: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      extraNavClasses: ""
    };
  },
  methods: {
    handleScroll() {
      let scrollValue =
        document.body.scrollTop || document.documentElement.scrollTop;
      let navbarColor = document.getElementById("toolbar");
      this.currentScrollValue = scrollValue;
      if (this.colorOnScroll > 0 && scrollValue > this.colorOnScroll) {
        this.extraNavClasses = `md-${this.type}`;
        navbarColor.classList.remove("md-transparent");
      } else {
        if (this.extraNavClasses) {
          this.extraNavClasses = "";
          navbarColor.classList.add("md-transparent");
        }
      }
    },
    scrollListener() {
      resizeThrottler(this.handleScroll);
    }
  },
  mounted() {
    document.addEventListener("scroll", this.scrollListener);
  },
  beforeDestroy() {
    document.removeEventListener("scroll", this.scrollListener);
  }
};
</script>
