<template>
  <div class="wrapper">
    <parallax class="page-header header-filter clear-filter purple-filter" :style="headerStyle">
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="brand">
            <h1>Vue Material Kit.</h1>
            <h3>Badass VueJs Kit based on Material Design.</h3>
          </div>
        </div>
      </div>
    </parallax>
    <div class="main main-raised">
      <div class="section section-basic">
        <div class="container">
          <div class="title">
            <h2>Basic Elements</h2>
          </div>
          <basic-elements></basic-elements>
        </div>
      </div>
      <div class="section section-navbars">
        <div class="container">
          <small-navigation></small-navigation>
        </div>
        <navigation></navigation>
      </div>
      <div class="section section-tabs">
        <div class="container">
          <tabs></tabs>
        </div>
      </div>
      <div class="section section-white">
        <div class="container">
          <nav-pills></nav-pills>
        </div>
      </div>
      <div class="section section-notifications">
        <div class="container">
          <div class="title">
            <h3>Notifications</h3>
          </div>
        </div>
        <notifications></notifications>
      </div>
      <div class="section">
        <div class="container">
          <typography-images></typography-images>
        </div>
      </div>
      <div class="section section-javascript">
        <div class="container">
          <javascript-components></javascript-components>
        </div>
      </div>
      <div class="section">
        <div class="container text-center">
          <div class="md-layout">
              <div class="md-layout-item md-size-66 ml-auto mr-auto text-center">
                  <h2>Completed with examples</h2>
                  <h4>The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. More importantly, looking at them will give you a picture of what you can built with this powerful kit.</h4>
              </div>
          </div>
        </div>
      </div>
      <div class="section section-signup page-header" :style="signupImage">
        <div class="container">
          <div class="md-layout">
            <div class="md-layout-item md-size-33 md-medium-size-40 md-small-size-50 md-xsmall-size-70 mx-auto text-center">
              <login-card header-color="green">
                <h4 slot="title" class="card-title">Login</h4>
                <md-button slot="buttons" to="#facebook" class="md-just-icon md-simple md-white">
                  <i class="fab fa-facebook-square"></i>
                </md-button>
                <md-button slot="buttons" to="#twitter" class="md-just-icon md-simple md-white">
                  <i class="fab fa-twitter"></i>
                </md-button>
                <md-button slot="buttons" to="#google" class="md-just-icon md-simple md-white">
                  <i class="fab fa-google-plus-g"></i>
                </md-button>
                <p slot="description" class="description">Or Be Classical</p>
                <md-field class="md-form-group" slot="inputs">
                  <md-icon>face</md-icon>
                  <label>First Name...</label>
                  <md-input v-model="firstname"></md-input>
                </md-field>
                <md-field class="md-form-group" slot="inputs">
                  <md-icon>email</md-icon>
                  <label>Email...</label>
                  <md-input v-model="email" type="email"></md-input>
                </md-field>
                <md-field class="md-form-group" slot="inputs">
                  <md-icon>lock_outline</md-icon>
                  <label>Password...</label>
                  <md-input v-model="password"></md-input>
                </md-field>
                <md-button slot="footer" class="md-simple md-success md-lg">
                  Get Started
                </md-button>
              </login-card>
            </div>
          </div>
        </div>
      </div>
      <div class="md-layout">
        <div class="md-layout-item text-center">
          <md-button href="#/login" class="md-simple md-primary md-lg">View Login Page</md-button>
        </div>
      </div>
      <div class="section section-examples">
        <div class="container-fluid text-center">
            <div class="md-layout">
                <div class="md-layout-item">
                    <a href="#/landing" target="_blank">
                        <img :src="landing" alt="Rounded Image" class="img-raised rounded img-fluid">
                    </a>
                    <md-button href="#/landing" class="md-simple md-primary md-lg">View Landing Page</md-button>
                </div>
                <div class="md-layout-item">
                  <a href="#/profile" target="_blank">
                      <img :src="profile" alt="Rounded Image" class="img-raised rounded img-fluid">
                  </a>
                  <md-button href="#/profile" class="md-simple md-primary md-lg">View Profile Page</md-button>
                </div>
            </div>
        </div>
      </div>
      <div class="section section-download" id="downloadSection">
        <div class="container">
          <div class="md-layout text-center">
            <div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
              <h2>Do you love this UI Kit?</h2>
              <h4>Cause if you do, it can be yours for FREE. Hit the buttons below to navigate to our website where you can find the kit. Our friends from <a href="https://themeisle.com/?utm_campaign=mkfree-hestia&amp;utm_source=creativetim&amp;utm_medium=website" target="_blank">ThemeIsle</a> created a Wordpress Theme which can be also downloaded for free. Start a new project or give an old Bootstrap project a new look!</h4>
            </div>
            <div class="md-layout-item md-size-50 md-small-size-100 mx-auto">
              <md-button href="https://www.creative-tim.com/product/material-kit" target="_blank" class="md-primary md-lg"><i class="fab fa-html5"></i> Free HTML Download</md-button>
              <md-button href="https://themeisle.com/themes/hestia/?utm_campaign=mkfree-hestia&amp;utm_source=creativetim&amp;utm_medium=website" class="md-primary md-lg" target="_blank"><i class="fab fa-wordpress"></i> Wordpress Theme</md-button>
            </div>
  	      </div>
    	    <br><br>

        	<div class="md-layout text-center">
        		<div class="md-layout-item md-size-66 md-small-size-100 mx-auto">
              <h2>Want more?</h2>
              <h4>We've just launched <a href="https://www.creative-tim.com/product/vue-material-dashboard-pro?ref=utp-mk-demos" target="_blank">Vue Material Dashboard PRO</a>. It has a huge number of components, sections and example pages. Start Your Development With A Badass Bootstrap UI Kit inspired by Material Design.</h4>
            </div>
        		<div class="md-layout-item md-size-50 md-small-size-100 mx-auto">
              <div class="btn-container">
                <md-button href="https://www.creative-tim.com/product/vue-material-kit-pro?ref=utp-vmk-demos" class="md-button md-rose md-lg md-upgrade disabled" target="_blank"><md-icon>unarchive</md-icon>Vue Material Kit PRO</md-button>
                <md-button href="https://www.creative-tim.com/product/vue-material-dashboard-pro?ref=utp-vmk-demos" class="md-button md-rose md-lg md-upgrade" target="_blank"><md-icon>unarchive</md-icon>Vue Material Dashboard PRO</md-button>
              </div>
        		</div>
          </div>

          <div class="sharing-area text-center">
            <div class="md-layout">
              <div class="md-layout-item">
                <h3>Thank you for supporting us!</h3>
              </div>
            </div>

            <md-button class="md-twitter"><i class="fab fa-twitter"></i>Tweet</md-button>
            <md-button class="md-facebook"><i class="fab fa-facebook-square"></i> Share</md-button>
            <md-button class="md-google"><i class="fab fa-google-plus"></i> Share</md-button>
            <md-button class="md-github"><i class="fab fa-github"></i> Star</md-button>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
import BasicElements from "./components/BasicElementsSection";
import Navigation from "./components/NavigationSection";
import SmallNavigation from "./components/SmallNavigationSection";
import Tabs from "./components/TabsSection";
import NavPills from "./components/NavPillsSection";
import Notifications from "./components/NotificationsSection";
import TypographyImages from "./components/TypographyImagesSection";
import JavascriptComponents from "./components/JavascriptComponentsSection";
import { LoginCard } from "@/components";

export default {
  components: {
    BasicElements,
    Navigation,
    SmallNavigation,
    Tabs,
    NavPills,
    Notifications,
    TypographyImages,
    JavascriptComponents,
    LoginCard
  },
  name: "index",
  bodyClass: "index-page",
  props: {
    image: {
      type: String,
      default: require("@/assets/img/bg2.jpg")
    },
    signup: {
      type: String,
      default: require("@/assets/img/city.jpg")
    },
    landing: {
      type: String,
      default: require("@/assets/img/landing.jpg")
    },
    profile: {
      type: String,
      default: require("@/assets/img/profile.jpg")
    }
  },
  data() {
    return {
      firstname: null,
      email: null,
      password: null
    };
  },
  computed: {
    headerStyle() {
      return {
        backgroundImage: `url(${this.image})`
      };
    },
    signupImage() {
      return {
        backgroundImage: `url(${this.signup})`
      };
    }
  }
};
</script>
<style lang="scss">
.section-download {
  .md-button + .md-button {
    margin-left: 5px;
  }
}

@media all and (min-width: 991px) {
  .btn-container {
    display: flex;
  }
}
</style>
