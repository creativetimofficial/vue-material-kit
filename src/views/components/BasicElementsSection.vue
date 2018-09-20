<template>
  <div class="wrapper">
    <div id="buttons">
      <div class="title">
        <h3>Buttons <br>
          <small>Pick your style</small>
        </h3>
      </div>
      <div class="md-layout">
        <div class="md-layout-item md-size-66 mx-auto">
          <md-button class="md-primary">Default</md-button>
          <md-button class="md-primary md-round">Round</md-button>
          <md-button class="md-primary"><md-icon >favorite</md-icon> With Icon</md-button>
          <md-button class="md-primary md-just-icon md-round"><md-icon >favorite</md-icon></md-button>
          <md-button class="md-primary md-simple">Simple</md-button>
        </div>
      </div>
      <div class="title">
        <h3><small>Pick your size</small></h3>
      </div>
      <div class="md-layout">
        <div class="md-layout-item md-size-66 mx-auto md-xsmall-size-100">
          <div class="vertical-center">
            <md-button class="md-primary md-sm">Small</md-button>
            <md-button class="md-primary">Regular</md-button>
            <md-button class="md-primary md-lg">Large</md-button>
          </div>
        </div>
      </div>
      <div class="title">
        <h3><small>Pick your color</small></h3>
      </div>
      <div class="md-layout">
        <div class="md-layout-item md-size-66 mx-auto">
          <md-button>Default</md-button>
          <md-button class="md-primary">Primary</md-button>
          <md-button class="md-info">Info</md-button>
          <md-button class="md-success">Success</md-button>
          <md-button class="md-warning">Warning</md-button>
          <md-button class="md-danger">Danger</md-button>
          <md-button class="md-rose">Rose</md-button>
        </div>
      </div>
    </div>
    <!-- end buttons -->
    <div class="space-50"></div>

    <!-- Inputs -->
    <div id="inputs">
      <div class="title">
        <h3>Inputs</h3>
      </div>
      <div class="md-layout">
        <div class="md-layout-item md-size-25 md-xsmall-size-100 md-small-size-50 md-medium-size-25">
          <md-field>
            <md-input v-model="initial" placeholder="Regular"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-size-25 md-xsmall-size-100 md-small-size-50 md-medium-size-25">
          <md-field>
            <label>With Floating Label</label>
            <md-input v-model="floatingLabel" type="text"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-size-25 md-xsmall-size-100 md-small-size-50 md-medium-size-25">
          <md-field class="md-valid">
            <label>Success Input</label>
            <md-input v-model="success" type="text"></md-input>
            <md-icon>done</md-icon>
          </md-field>
        </div>
        <div class="md-layout-item md-size-25 md-xsmall-size-100 md-small-size-50 md-medium-size-25">
          <md-field class="md-error">
            <label>Error Input</label>
            <md-input v-model="error" type="text"></md-input>
            <md-icon>clear</md-icon>
          </md-field>
        </div>
        <div class="md-layout-item md-size-25 md-xsmall-size-100 md-small-size-50 md-medium-size-25">
          <md-field class="md-form-group">
            <md-icon>face</md-icon>
            <md-input v-model="withMIcon" placeholder="With Material Icons"></md-input>
          </md-field>
        </div>
        <div class="md-layout-item md-size-25 md-xsmall-size-100 md-small-size-50 md-medium-size-25">
          <md-field class="md-form-group">
            <i class="fas fa-users"></i>
            <md-input v-model="withFaIcon" placeholder="With Font Awesome Icons"></md-input>
          </md-field>
        </div>
      </div>
    </div>
    <!-- end inputs -->

    <div class="space-50"></div>

    <!-- Checkboxes/Radios/Toggle -->
    <div id="checkRadios">
      <div class="md-layout">
        <div class="md-layout-item md-size-25 md-xsmall-size-100 md-small-size-50 md-medium-size-25">
          <div class="title">
            <h3>Checkboxes</h3>
          </div>
          <div class="flex-column">
            <md-checkbox v-model="checkbox1">Checked</md-checkbox>
            <md-checkbox v-model="checkbox2">Unchecked</md-checkbox>
            <md-checkbox v-model="checkbox3" disabled>Disabled Checked</md-checkbox>
            <md-checkbox v-model="checkbox4" disabled>Disabled Unchecked</md-checkbox>
          </div>
        </div>
        <div class="md-layout-item md-size-25 md-xsmall-size-100 md-small-size-50 md-medium-size-25">
          <div class="title">
            <h3>Radios</h3>
          </div>
          <div class="flex-column">
            <md-radio v-model="radio1" :value="true">Radio is on</md-radio>
            <md-radio v-model="radio1" :value="false">Radio is off</md-radio>
            <md-radio v-model="radio2" :value="true" disabled>Disabled Radio is on</md-radio>
            <md-radio v-model="radio2" :value="false" disabled>Disabled Radio is off</md-radio>
          </div>
        </div>
        <div class="md-layout-item md-size-25 md-xsmall-size-100 md-small-size-50 md-medium-size-25">
          <div class="title">
            <h3>Toggle Buttons</h3>
          </div>
          <div class="flex-column">
            <md-switch v-model="switch1">Toogle is on</md-switch>
            <md-switch v-model="switch2">Toogle is off</md-switch>
          </div>
        </div>
      </div>
    </div>
    <!-- end Checkboxes/Radios/Toggle -->

    <div class="space-70"></div>

    <!-- Progress/Pagination -->
    <div id="progress-pagination">
      <div class="md-layout">
        <div class="md-layout-item md-size-50 md-xsmall-size-100">
          <div class="title">
            <h3>Progress</h3>
          </div>
          <md-progress-bar class="md-primary" :md-value="amount"></md-progress-bar>
          <md-progress-bar class="md-info" :md-value="amount2"></md-progress-bar>
          <md-progress-bar class="md-warning" md-mode="buffer" :md-value="buffer" :md-buffer="buffer"></md-progress-bar>
        </div>
        <div class="md-layout-item md-size-50 md-xsmall-size-100">
          <div class="title">
            <h3>Pagination</h3>
          </div>
          <pagination
            no-arrows
            v-model="defaultPagination"
            :page-count="5">
          </pagination>
          <pagination
            class="pagination-info"
            v-model="infoPagination"
            with-text
            :page-count="5">
          </pagination>
        </div>
      </div>
    </div>
    <!-- end progress/pagination -->

    <div class="space-50"></div>

    <!-- Sliders -->
    <div id="sliders">
      <div class="md-layout">
        <div class="md-layout-item md-size-50 md-xsmall-size-100">
          <div class="title">
            <h3>Sliders</h3>
          </div>
          <slider v-model="sliders.simple">
          </slider>

          <slider v-model="sliders.rangeSlider"
                  type="info"
                  :connect="true">
          </slider>
        </div>
        <div class="md-layout-item md-size-50 md-xsmall-size-100">
          <div class="title">
            <h3>Badges</h3>
          </div>
          <badge type="default">Default</badge>
          <badge type="primary">Primary</badge>
          <badge type="info">Info</badge>
          <badge type="success">Success</badge>
          <badge type="warning">Warning</badge>
          <badge type="danger">Danger</badge>
          <badge type="rose">Rose</badge>
        </div>
      </div>
    </div>
    <!-- end sliders -->
  </div>
</template>

<script>
import { Pagination } from "@/components";
import { Slider } from "@/components";
import { Badge } from "@/components";

export default {
  components: {
    Pagination,
    Slider,
    Badge
  },
  data() {
    return {
      defaultPagination: 3,
      infoPagination: 3,
      initial: null,
      floatingLabel: null,
      success: null,
      error: null,
      withMIcon: null,
      withFaIcon: null,
      checkbox1: true,
      checkbox2: null,
      checkbox3: true,
      checkbox4: null,
      radio1: true,
      radio2: false,
      switch1: true,
      switch2: null,
      amount: 30,
      amount2: 60,
      buffer: 40,
      sliders: {
        simple: 40,
        rangeSlider: [20, 60]
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.vertical-center {
  display: flex;
  align-items: center;
}
.flex-column {
  display: flex;
  flex-direction: column;
}
.md-checkbox,
.md-radio {
  display: flex;
  margin: 0;
  margin-bottom: 0.5rem;
}
</style>
