<script setup>
import { RouterLink } from "vue-router";
import { ref, watch } from "vue";
import { useWindowsWidth } from "../../assets/js/useWindowsWidth";

// images
import ArrDark from "@/assets/img/down-arrow-dark.svg";
import downArrow from "@/assets/img/down-arrow.svg";
import DownArrWhite from "@/assets/img/down-arrow-white.svg";

const props = defineProps({
  action: {
    type: Object,
    route: String,
    color: String,
    label: String,
    default: () => ({
      route: "https://www.creative-tim.com/product/vue-material-kit",
      color: "bg-gradient-success",
      label: "Free Download"
    })
  },
  transparent: {
    type: Boolean,
    default: false
  },
  light: {
    type: Boolean,
    default: false
  },
  dark: {
    type: Boolean,
    default: false
  },
  sticky: {
    type: Boolean,
    default: false
  },
  darkText: {
    type: Boolean,
    default: false
  }
});

// set arrow  color
function getArrowColor() {
  if (props.transparent && textDark.value) {
    return ArrDark;
  } else if (props.transparent) {
    return DownArrWhite;
  } else {
    return ArrDark;
  }
}

// set text color
const getTextColor = () => {
  let color;
  if (props.transparent && textDark.value) {
    color = "text-dark";
  } else if (props.transparent) {
    color = "text-white";
  } else {
    color = "text-dark";
  }

  return color;
};

// set nav color on mobile && desktop

let textDark = ref(props.darkText);
const { type } = useWindowsWidth();

if (type.value === "mobile") {
  textDark.value = true;
} else if (type.value === "desktop" && textDark.value == false) {
  textDark.value = false;
}

watch(
  () => type.value,
  (newValue) => {
    if (newValue === "mobile") {
      textDark.value = true;
    } else {
      textDark.value = false;
    }
  }
);
</script>
<template>
  <nav
    class="navbar navbar-expand-lg top-0"
    :class="{
      'z-index-3 w-100 shadow-none navbar-transparent position-absolute my-3':
        props.transparent,
      'my-3 blur border-radius-lg z-index-3 py-2 shadow py-2 start-0 end-0 mx-4 position-absolute mt-4':
        props.sticky,
      'navbar-light bg-white py-3': props.light,
      ' navbar-dark bg-gradient-dark z-index-3 py-3': props.dark
    }"
  >
    <div
      :class="
        props.transparent || props.light || props.dark
          ? 'container'
          : 'container-fluid px-0'
      "
    >
      <RouterLink
        class="navbar-brand d-none d-md-block"
        :class="[
          (props.transparent && textDark.value) || !props.transparent
            ? 'text-dark font-weight-bolder ms-sm-3'
            : 'text-white font-weight-bolder ms-sm-3'
        ]"
        :to="{ name: 'presentation' }"
        rel="tooltip"
        title="Designed and Coded by Creative Tim"
        data-placement="bottom"
      >
        Material Kit 2
      </RouterLink>
      <RouterLink
        class="navbar-brand d-block d-md-none"
        :class="
          props.transparent || props.dark
            ? 'text-white'
            : 'font-weight-bolder ms-sm-3'
        "
        to="/"
        rel="tooltip"
        title="Designed and Coded by Creative Tim"
        data-placement="bottom"
      >
        Material Design
      </RouterLink>
      <a
        href="https://www.creative-tim.com/product/vue-material-kit-pro"
        class="btn btn-sm bg-gradient-success mb-0 ms-auto d-lg-none d-block"
        >Buy Now</a
      >
      <button
        class="navbar-toggler shadow-none ms-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon mt-2">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      <div
        class="collapse navbar-collapse w-100 pt-3 pb-2 py-lg-0"
        id="navigation"
      >
        <ul class="navbar-nav navbar-nav-hover ms-auto">
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              id="dropdownMenuPages"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i
                class="material-icons opacity-6 me-2 text-md"
                :class="getTextColor()"
                >dashboard</i
              >
              Pages
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-2 d-lg-block d-none"
              />
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-1 d-lg-none d-block ms-auto"
              />
            </a>
            <div
              class="dropdown-menu dropdown-menu-animation ms-n3 dropdown-md p-3 border-radius-xl mt-0 mt-lg-3"
              aria-labelledby="dropdownMenuPages"
            >
              <div class="row d-none d-lg-block">
                <div class="col-12 px-4 py-2">
                  <div class="row">
                    <div class="position-relative">
                      <div
                        class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-1"
                      >
                        Landing Pages
                      </div>
                      <RouterLink
                        :to="{ name: 'about' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>About Us</span>
                      </RouterLink>
                      <RouterLink
                        :to="{ name: 'contactus' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Contact Us</span>
                      </RouterLink>
                      <RouterLink
                        :to="{ name: 'author' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Author</span>
                      </RouterLink>
                      <div
                        class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-0 mt-3"
                      >
                        Account
                      </div>
                      <RouterLink
                        :to="{ name: 'signin-basic' }"
                        class="dropdown-item border-radius-md"
                      >
                        <span>Sign In</span>
                      </RouterLink>
                    </div>
                  </div>
                </div>
              </div>
              <div class="d-lg-none">
                <div
                  class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-0"
                >
                  Landing Pages
                </div>
                <RouterLink
                  :to="{ name: 'about' }"
                  class="dropdown-item border-radius-md"
                >
                  <span>About Us</span>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'contactus' }"
                  class="dropdown-item border-radius-md"
                >
                  <span>Contact Us</span>
                </RouterLink>
                <RouterLink
                  :to="{ name: 'author' }"
                  class="dropdown-item border-radius-md"
                >
                  <span>Author</span>
                </RouterLink>
                <div
                  class="dropdown-header text-dark font-weight-bolder d-flex align-items-center px-0 mt-3"
                >
                  Account
                </div>
                <RouterLink
                  :to="{ name: 'signin-basic' }"
                  class="dropdown-item border-radius-md"
                >
                  <span>Sign In</span>
                </RouterLink>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              id="dropdownMenuBlocks"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i
                class="material-icons opacity-6 me-2 text-md"
                :class="getTextColor()"
                >view_day</i
              >
              Sections
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-2 d-lg-block d-none"
              />
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-1 d-lg-none d-block ms-auto"
              />
            </a>
            <div
              class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md dropdown-md-responsive p-3 border-radius-lg mt-0 mt-lg-3"
              aria-labelledby="dropdownMenuBlocks"
            >
              <div class="d-none d-lg-block">
                <ul class="list-group">
                  <li
                    class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0"
                  >
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href="javascript:;"
                    >
                      <div class="d-flex">
                        <div
                          class="w-100 d-flex align-items-center justify-content-between"
                        >
                          <div>
                            <h6
                              class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                            >
                              Page Sections
                            </h6>
                            <span class="text-sm">See all sections</span>
                          </div>
                          <img
                            :src="downArrow"
                            alt="down-arrow"
                            class="arrow"
                          />
                        </div>
                      </div>
                    </a>
                    <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                      <RouterLink
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        :to="{ name: 'page-headers' }"
                      >
                        Page Headers
                      </RouterLink>
                      <RouterLink
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        :to="{ name: 'page-features' }"
                      >
                        Features
                      </RouterLink>
                    </div>
                  </li>
                  <li
                    class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0"
                  >
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href="javascript:;"
                    >
                      <div class="d-flex">
                        <div
                          class="w-100 d-flex align-items-center justify-content-between"
                        >
                          <div>
                            <h6
                              class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                            >
                              Navigation
                            </h6>
                            <span class="text-sm">See all navigations</span>
                          </div>
                          <img
                            :src="downArrow"
                            alt="down-arrow"
                            class="arrow"
                          />
                        </div>
                      </div>
                    </a>
                    <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                      <RouterLink
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        :to="{ name: 'navigation-navbars' }"
                      >
                        Navbars
                      </RouterLink>
                      <RouterLink
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        :to="{ name: 'navigation-navtabs' }"
                      >
                        Nav Tabs
                      </RouterLink>
                      <RouterLink
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        :to="{ name: 'navigation-pagination' }"
                      >
                        Pagination
                      </RouterLink>
                    </div>
                  </li>
                  <li
                    class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0"
                  >
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href="javascript:;"
                    >
                      <div class="d-flex">
                        <div
                          class="w-100 d-flex align-items-center justify-content-between"
                        >
                          <div>
                            <h6
                              class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                            >
                              Input Areas
                            </h6>
                            <span class="text-sm">See all input areas</span>
                          </div>
                          <img
                            :src="downArrow"
                            alt="down-arrow"
                            class="arrow"
                          />
                        </div>
                      </div>
                    </a>
                    <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                      <RouterLink
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        :to="{ name: 'inputareas-inputs' }"
                      >
                        Inputs
                      </RouterLink>
                      <RouterLink
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        :to="{ name: 'inputareas-forms' }"
                      >
                        Forms
                      </RouterLink>
                    </div>
                  </li>
                  <li
                    class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0"
                  >
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href="javascript:;"
                    >
                      <div class="d-flex">
                        <div
                          class="w-100 d-flex align-items-center justify-content-between"
                        >
                          <div>
                            <h6
                              class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                            >
                              Attention Catchers
                            </h6>
                            <span class="text-sm">See all examples</span>
                          </div>
                          <img
                            :src="downArrow"
                            alt="down-arrow"
                            class="arrow"
                          />
                        </div>
                      </div>
                    </a>
                    <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                      <RouterLink
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        :to="{ name: 'ac-alerts' }"
                      >
                        Alerts
                      </RouterLink>
                      <RouterLink
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        :to="{ name: 'ac-modals' }"
                      >
                        Modals
                      </RouterLink>
                      <RouterLink
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        :to="{ name: 'ac-tooltips-popovers' }"
                      >
                        Tooltips & Popovers
                      </RouterLink>
                    </div>
                  </li>
                  <li
                    class="nav-item dropdown dropdown-hover dropdown-subitem list-group-item border-0 p-0"
                  >
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href="javascript:;"
                    >
                      <div class="d-flex">
                        <div
                          class="w-100 d-flex align-items-center justify-content-between"
                        >
                          <div>
                            <h6
                              class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                            >
                              Elements
                            </h6>
                            <span class="text-sm">See all elements</span>
                          </div>
                          <img
                            :src="downArrow"
                            alt="down-arrow"
                            class="arrow"
                          />
                        </div>
                      </div>
                    </a>
                    <div class="dropdown-menu mt-0 py-3 px-2 mt-3">
                      <RouterLink
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        :to="{ name: 'el-avatars' }"
                      >
                        Avatars
                      </RouterLink>
                      <RouterLink
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        :to="{ name: 'el-badges' }"
                      >
                        Badges
                      </RouterLink>
                      <RouterLink
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        :to="{ name: 'el-breadcrumbs' }"
                      >
                        Breadcrumbs
                      </RouterLink>
                      <RouterLink
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        :to="{ name: 'el-buttons' }"
                      >
                        Buttons
                      </RouterLink>
                      <RouterLink
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        :to="{ name: 'el-button-groups' }"
                      >
                        Button Groups
                      </RouterLink>
                      <RouterLink
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        :to="{ name: 'el-dropdowns' }"
                      >
                        Dropdowns
                      </RouterLink>
                      <RouterLink
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        :to="{ name: 'el-progress-bars' }"
                      >
                        Progress Bars
                      </RouterLink>
                      <RouterLink
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        :to="{ name: 'el-toggles' }"
                      >
                        Toggles
                      </RouterLink>
                      <RouterLink
                        class="dropdown-item ps-3 border-radius-md mb-1"
                        :to="{ name: 'el-typography' }"
                      >
                        Typography
                      </RouterLink>
                    </div>
                  </li>
                </ul>
              </div>
              <div class="row d-lg-none">
                <div class="col-md-12">
                  <div class="d-flex mb-2">
                    <div
                      class="w-100 d-flex align-items-center justify-content-between"
                    >
                      <div>
                        <h6
                          class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                        >
                          Page Sections
                        </h6>
                      </div>
                    </div>
                  </div>
                  <RouterLink
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    :to="{ name: 'page-headers' }"
                  >
                    Page Headers
                  </RouterLink>
                  <RouterLink
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    :to="{ name: 'page-features' }"
                  >
                    Features
                  </RouterLink>
                  <div class="d-flex mb-2 mt-3">
                    <div
                      class="w-100 d-flex align-items-center justify-content-between"
                    >
                      <div>
                        <h6
                          class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                        >
                          Navigation
                        </h6>
                      </div>
                    </div>
                  </div>
                  <RouterLink
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    :to="{ name: 'navigation-navbars' }"
                  >
                    Navbars
                  </RouterLink>
                  <RouterLink
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    :to="{ name: 'navigation-navtabs' }"
                  >
                    Nav Tabs
                  </RouterLink>
                  <RouterLink
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    :to="{ name: 'navigation-pagination' }"
                  >
                    Pagination
                  </RouterLink>
                  <div class="d-flex mb-2 mt-3">
                    <div
                      class="w-100 d-flex align-items-center justify-content-between"
                    >
                      <div>
                        <h6
                          class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                        >
                          Input Areas
                        </h6>
                      </div>
                    </div>
                  </div>
                  <RouterLink
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    :to="{ name: 'inputareas-inputs' }"
                  >
                    Inputs
                  </RouterLink>
                  <RouterLink
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    :to="{ name: 'inputareas-forms' }"
                  >
                    Forms
                  </RouterLink>
                  <div class="d-flex mb-2 mt-3">
                    <div
                      class="w-100 d-flex align-items-center justify-content-between"
                    >
                      <div>
                        <h6
                          class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                        >
                          Attention Catchers
                        </h6>
                      </div>
                    </div>
                  </div>
                  <RouterLink
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    :to="{ name: 'ac-alerts' }"
                  >
                    Alerts
                  </RouterLink>
                  <RouterLink
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    :to="{ name: 'ac-modals' }"
                  >
                    Modals
                  </RouterLink>
                  <RouterLink
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    :to="{ name: 'ac-tooltips-popovers' }"
                  >
                    Tooltips & Popovers
                  </RouterLink>
                  <div class="d-flex mb-2 mt-3">
                    <div
                      class="w-100 d-flex align-items-center justify-content-between"
                    >
                      <div>
                        <h6
                          class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                        >
                          Elements
                        </h6>
                      </div>
                    </div>
                  </div>
                  <RouterLink
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    :to="{ name: 'el-avatars' }"
                  >
                    Avatars
                  </RouterLink>
                  <RouterLink
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    :to="{ name: 'el-badges' }"
                  >
                    Badges
                  </RouterLink>
                  <RouterLink
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    :to="{ name: 'el-breadcrumbs' }"
                  >
                    Breadcrumbs
                  </RouterLink>
                  <RouterLink
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    :to="{ name: 'el-buttons' }"
                  >
                    Buttons
                  </RouterLink>
                  <RouterLink
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    :to="{ name: 'el-button-groups' }"
                  >
                    Button Groups
                  </RouterLink>
                  <RouterLink
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    :to="{ name: 'el-dropdowns' }"
                  >
                    Dropdowns
                  </RouterLink>
                  <RouterLink
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    :to="{ name: 'el-progress-bars' }"
                  >
                    Progress Bars
                  </RouterLink>
                  <RouterLink
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    :to="{ name: 'el-toggles' }"
                  >
                    Toggles
                  </RouterLink>
                  <RouterLink
                    class="dropdown-item ps-3 border-radius-md mb-1"
                    :to="{ name: 'el-typography' }"
                  >
                    Typography
                  </RouterLink>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a
              role="button"
              class="nav-link ps-2 d-flex cursor-pointer align-items-center"
              :class="getTextColor()"
              id="dropdownMenuDocs"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i
                class="material-icons opacity-6 me-2 text-md"
                :class="getTextColor()"
                >article</i
              >
              Docs
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-2 d-lg-block d-none"
              />
              <img
                :src="getArrowColor()"
                alt="down-arrow"
                class="arrow ms-1 d-lg-none d-block ms-auto"
              />
            </a>
            <div
              class="dropdown-menu dropdown-menu-end dropdown-menu-animation dropdown-md mt-0 mt-lg-3 p-3 border-radius-lg"
              aria-labelledby="dropdownMenuDocs"
            >
              <div class="d-none d-lg-block">
                <ul class="list-group">
                  <li class="nav-item list-group-item border-0 p-0">
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href=" https://www.creative-tim.com/learning-lab/vue/overview/material-kit/"
                    >
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                      >
                        Getting Started
                      </h6>
                      <span class="text-sm"
                        >All about overview, quick start, license and
                        contents</span
                      >
                    </a>
                  </li>
                  <li class="nav-item list-group-item border-0 p-0">
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href=" https://www.creative-tim.com/learning-lab/vue/colors/material-kit/"
                    >
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                      >
                        Foundation
                      </h6>
                      <span class="text-sm"
                        >See our colors, icons and typography</span
                      >
                    </a>
                  </li>
                  <li class="nav-item list-group-item border-0 p-0">
                    <a
                      class="dropdown-item py-2 ps-3 border-radius-md"
                      href=" https://www.creative-tim.com/learning-lab/vue/alerts/material-kit/"
                    >
                      <h6
                        class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                      >
                        Components
                      </h6>
                      <span class="text-sm"
                        >Explore our collection of fully designed
                        components</span
                      >
                    </a>
                  </li>
                </ul>
              </div>
              <div class="row d-lg-none">
                <div class="col-md-12 g-0">
                  <a
                    class="dropdown-item py-2 ps-3 border-radius-md"
                    href="./pages/about-us.html"
                  >
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                    >
                      Getting Started
                    </h6>
                    <span class="text-sm"
                      >All about overview, quick start, license and
                      contents</span
                    >
                  </a>
                  <a
                    class="dropdown-item py-2 ps-3 border-radius-md"
                    href="./pages/about-us.html"
                  >
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                    >
                      Foundation
                    </h6>
                    <span class="text-sm"
                      >See our colors, icons and typography</span
                    >
                  </a>
                  <a
                    class="dropdown-item py-2 ps-3 border-radius-md"
                    href="./pages/about-us.html"
                  >
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                    >
                      Components
                    </h6>
                    <span class="text-sm"
                      >Explore our collection of fully designed components</span
                    >
                  </a>
                  <a
                    class="dropdown-item py-2 ps-3 border-radius-md"
                    href="./pages/about-us.html"
                  >
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                    >
                      Plugins
                    </h6>
                    <span class="text-sm"
                      >Check how you can integrate our plugins</span
                    >
                  </a>
                  <a
                    class="dropdown-item py-2 ps-3 border-radius-md"
                    href="./pages/about-us.html"
                  >
                    <h6
                      class="dropdown-header text-dark font-weight-bolder d-flex justify-content-cente align-items-center p-0"
                    >
                      Utility Classes
                    </h6>
                    <span class="text-sm"
                      >For those who want flexibility, use our utility
                      classes</span
                    >
                  </a>
                </div>
              </div>
            </div>
          </li>
          <li class="nav-item dropdown dropdown-hover mx-2">
            <a
              href="https://www.github.com/creativetimofficial/vue-material-kit"
              class="nav-link d-flex cursor-pointer align-items-center"
            >
              <svg
                width="20px"
                height="20px"
                class="material-icons me-2 opacity-6"
                viewBox="0 0 24 24"
                aria-hidden="true"
                data-testid="GitHubIcon"
                :fill="props.transparent && '#fff'"
              >
                <path
                  d="M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"
                ></path>
              </svg>
              Github
            </a>
          </li>
        </ul>
        <ul class="navbar-nav d-lg-block d-none">
          <li class="nav-item">
            <a
              :href="action.route"
              class="btn btn-sm mb-0"
              :class="action.color"
              onclick="smoothToPricing('pricing-soft-ui')"
              >{{ action.label }}</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>
