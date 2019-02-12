<template>
  <div class="wrapper">
    <div id="javascriptComponents">
      <div class="title">
        <h2>Javascript components</h2>
      </div>
      <div class="md-layout">
        <div class="md-layout-item md-small-size-100">
          <div class="title">
            <h3>Modal</h3>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-33">
              <md-button
                class="md-success md-block"
                @click="classicModal = true"
                ><md-icon>library_books</md-icon> Classic</md-button
              >
              <modal v-if="classicModal" @close="classicModalHide">
                <template slot="header">
                  <h4 class="modal-title">Modal Title</h4>
                  <md-button
                    class="md-simple md-just-icon md-round modal-default-button"
                    @click="classicModalHide"
                  >
                    <md-icon>clear</md-icon>
                  </md-button>
                </template>

                <template slot="body">
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia, there live the blind
                    texts. Separated they live in Bookmarksgrove right at the
                    coast of the Semantics, a large language ocean. A small
                    river named Duden flows by their place and supplies it with
                    the necessary regelialia. It is a paradisematic country, in
                    which roasted parts of sentences fly into your mouth. Even
                    the all-powerful Pointing has no control about the blind
                    texts it is an almost unorthographic life One day however a
                    small line of blind text by the name of Lorem Ipsum decided
                    to leave for the far World of Grammar.
                  </p>
                </template>

                <template slot="footer">
                  <md-button class="md-simple">Nice Button</md-button>
                  <md-button
                    class="md-danger md-simple"
                    @click="classicModalHide"
                    >Close</md-button
                  >
                </template>
              </modal>
            </div>
          </div>
          <div class="md-layout">
            <div class="md-layout-item md-size-80">
              <div class="title">
                <h3>DatePicker</h3>
              </div>
              <md-datepicker v-model="selectedDate">
                <label>Select date</label>
              </md-datepicker>
            </div>
          </div>
        </div>
        <div class="md-layout-item md-small-size-100">
          <div class="title">
            <h3>Popovers</h3>
          </div>
          <div class="md-layout">
            <div class="md-layout-item">
              <v-popover offset="8" placement="left">
                <md-button>On left</md-button>

                <template slot="popover">
                  <h3 class="popover-header">Popover on left</h3>
                  <div class="popover-body">
                    Here will be some very useful information about his popover.
                    Here will be some very useful information about his popover.
                  </div>
                </template>
              </v-popover>
              <v-popover offset="4" placement="top">
                <md-button>On top</md-button>

                <template slot="popover">
                  <h3 class="popover-header">Popover on top</h3>
                  <div class="popover-body">
                    Here will be some very useful information about his popover.
                  </div>
                </template>
              </v-popover>
              <v-popover offset="4" placement="bottom">
                <md-button>On bottom</md-button>

                <template slot="popover">
                  <h3 class="popover-header">Popover on bottom</h3>
                  <div class="popover-body">
                    Here will be some very useful information about his popover.
                  </div>
                </template>
              </v-popover>
              <v-popover offset="8" placement="right">
                <md-button>On right</md-button>

                <template slot="popover">
                  <h3 class="popover-header">Popover on right</h3>
                  <div class="popover-body">
                    Here will be some very useful information about his popover.
                  </div>
                </template>
              </v-popover>
            </div>
          </div>
          <div class="md-layout" id="tooltips">
            <div class="md-layout-item">
              <div class="title">
                <h3>Tooltips</h3>
              </div>

              <md-button>
                on left
                <md-tooltip md-direction="left">Tooltip on left</md-tooltip>
              </md-button>

              <md-button>
                on top
                <md-tooltip md-direction="top">Tooltip on top</md-tooltip>
              </md-button>

              <md-button>
                on bottom
                <md-tooltip md-direction="bottom">Tooltip on bottom</md-tooltip>
              </md-button>
              <md-button>
                on right
                <md-tooltip md-direction="right">Tooltip on right</md-tooltip>
              </md-button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div class="title">
        <h3>Carousel</h3>
      </div>
      <div class="md-layout">
        <div class="md-layout-item md-size-66 mx-auto md-small-size-100">
          <md-card>
            <carousel
              :per-page="1"
              loop
              :speed="700"
              autoplay
              :autoplay-timeout="5000"
              :mouse-drag="false"
              navigationEnabled
              navigationNextLabel="<i class='material-icons'>keyboard_arrow_right</i>"
              navigationPrevLabel="<i class='material-icons'>keyboard_arrow_left</i>"
            >
              <slide>
                <div class="carousel-caption">
                  <h4>
                    <md-icon>location_on</md-icon>
                    Somewhere Beyond, United States
                  </h4>
                </div>
                <img :src="carousel1" alt="carousel1" />
              </slide>
              <slide>
                <div class="carousel-caption">
                  <h4>
                    <md-icon>location_on</md-icon>
                    Yellowstone National Park, United States
                  </h4>
                </div>
                <img :src="carousel2" alt="carousel2" />
              </slide>
              <slide>
                <div class="carousel-caption">
                  <h4>
                    <md-icon>location_on</md-icon>
                    Yellowstone National Park, United States
                  </h4>
                </div>
                <img :src="carousel3" alt="carousel3" />
              </slide>
            </carousel>
          </md-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from "@/components";
export default {
  components: {
    Modal
  },
  data() {
    return {
      classicModal: false,
      selectedDate: new Date("2018/03/26"),
      carousel1: require("@/assets/img/nature-2.jpg"),
      carousel2: require("@/assets/img/nature.jpg"),
      carousel3: require("@/assets/img/nature-3.jpg")
    };
  },
  methods: {
    classicModalHide() {
      this.classicModal = false;
    }
  }
};
</script>
