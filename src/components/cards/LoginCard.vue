<template>
  <md-card class="md-card-login" :class="{'md-card-hidden': cardHidden}">
    <md-card-header :class="getClass(headerColor)">
      <slot name="title"></slot>
      <div class="social-line">
        <slot name="buttons"></slot>
      </div>
    </md-card-header>

    <md-card-content>
      <slot name="description"></slot>
      <slot name="inputs"></slot>
    </md-card-content>

    <md-card-actions>
      <slot name="footer"></slot>
    </md-card-actions>
  </md-card>
</template>

<script>
export default {
  name: "login-card",
  props: {
    headerColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      cardHidden: true
    };
  },
  beforeMount() {
    setTimeout(this.showCard, 400);
  },
  methods: {
    showCard: function() {
      this.cardHidden = false;
    },
    getClass: function(headerColor) {
      return "md-card-header-" + headerColor + "";
    }
  }
};
</script>

<style lang="css">
</style>

<!-- <div class="card card-login card-hidden">
  <div class="card-header card-header-rose text-center">
    <h4 class="card-title">Log in</h4>
    <div class="social-line">
      <a href="#pablo" class="btn btn-just-icon btn-link btn-white">
        <i class="fa fa-facebook-square"></i>
      </a>
      <a href="#pablo" class="btn btn-just-icon btn-link btn-white">
        <i class="fa fa-twitter"></i>
      </a>
      <a href="#pablo" class="btn btn-just-icon btn-link btn-white">
        <i class="fa fa-google-plus"></i>
      </a>
    </div>
  </div>
  <div class="card-body ">
    <p class="card-description text-center">Or Be Classical</p>
    <span class="bmd-form-group">
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="material-icons">face</i>
          </span>
        </div>
        <input type="text" class="form-control" placeholder="First Name...">
      </div>
    </span>
    <span class="bmd-form-group">
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="material-icons">email</i>
          </span>
        </div>
        <input type="email" class="form-control" placeholder="Email...">
      </div>
    </span>
    <span class="bmd-form-group">
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="material-icons">lock_outline</i>
          </span>
        </div>
        <input type="password" class="form-control" placeholder="Password...">
      </div>
    </span>
  </div>
  <div class="card-footer justify-content-center">
    <a href="#pablo" class="btn btn-rose btn-link btn-lg">Lets Go</a>
  </div>
</div> -->
