<template>
  <div class="wrapper">
    <div id="notifications">
      <div class="alert alert-info">
        <div class="container">
          <button
            type="button"
            aria-hidden="true"
            class="close"
            @click="event => removeNotify(event, 'alert-info')"
          >
            <md-icon>clear</md-icon>
          </button>
          <div class="alert-icon">
            <md-icon>info_outline</md-icon>
          </div>
          <b> INFO ALERT </b> : You've got some friends nearby, stop looking at
          your phone and find them...
        </div>
      </div>
      <div class="alert alert-success">
        <div class="container">
          <button
            type="button"
            aria-hidden="true"
            class="close"
            @click="event => removeNotify(event, 'alert-success')"
          >
            <md-icon>clear</md-icon>
          </button>
          <div class="alert-icon">
            <md-icon>check</md-icon>
          </div>

          <b> SUCCESS ALERT </b> : Yuhuuu! You've got your $11.99 album from The
          Weeknd
        </div>
      </div>
      <div class="alert alert-warning">
        <div class="container">
          <button
            type="button"
            aria-hidden="true"
            class="close"
            @click="event => removeNotify(event, 'alert-warning')"
          >
            <md-icon>clear</md-icon>
          </button>
          <div class="alert-icon">
            <md-icon>warning</md-icon>
          </div>
          <b> WARNING ALERT </b> : Hey, it looks like you still have the
          "copyright © 2015" in your footer. Please update it!
        </div>
      </div>
      <div class="alert alert-danger">
        <div class="container">
          <button
            type="button"
            aria-hidden="true"
            class="close"
            @click="event => removeNotify(event, 'alert-danger')"
          >
            <md-icon>clear</md-icon>
          </button>
          <div class="alert-icon">
            <md-icon>info_outline</md-icon>
          </div>
          <b> ERROR ALERT </b> : Damn man! You screwed up the server this time.
          You should find a good excuse for your Boss...
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    removeNotify(e, notifyClass) {
      var target = e.target;
      while (target.className.indexOf(notifyClass) === -1) {
        target = target.parentNode;
      }
      return target.parentNode.removeChild(target);
    }
  }
};
</script>

<style lang="css"></style>
