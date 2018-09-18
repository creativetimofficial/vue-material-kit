<template>
  <div class="wrapper">
    <div id="typography">
      <div class="title">
        <h2>Typography</h2>
      </div>
      <div class="md-layout">
        <div class="md-layout-item">
          <div class="tim-typo">
              <h1><span class="tim-note">Header 1</span>The Life of Material Kit </h1>
          </div>
          <div class="tim-typo">
              <h2><span class="tim-note">Header 2</span>The Life of Material Kit</h2>
          </div>
          <div class="tim-typo">
              <h3><span class="tim-note">Header 3</span>The Life of Material Kit</h3>
          </div>
          <div class="tim-typo">
              <h4><span class="tim-note">Header 4</span>The Life of Material Kit</h4>
          </div>
          <div class="tim-typo">
              <h5><span class="tim-note">Header 5</span>The Life of Material Kit</h5>
          </div>
          <div class="tim-typo">
              <h6><span class="tim-note">Header 6</span>The Life of Material Kit</h6>
          </div>
          <div class="tim-typo">
              <h1 class="title"><span class="tim-note">Header 1 Title</span>The Life of Material Kit </h1>
          </div>
          <div class="tim-typo">
              <h2 class="title"><span class="tim-note">Header 2 Title</span>The Life of Material Kit</h2>
          </div>
          <div class="tim-typo">
              <h3 class="title"><span class="tim-note">Header 3 Title</span>The Life of Material Kit</h3>
          </div>
          <div class="tim-typo">
              <h4 class="title"><span class="tim-note">Header 4 Title</span>The Life of Material Kit</h4>
          </div>
          <div class="tim-typo">
              <p><span class="tim-note">Paragraph</span>
                  I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that&#x2019;s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>
          </div>
          <div class="tim-typo">
              <span class="tim-note">Quote</span>
              <div class="blockquote undefined">
               <p>
               I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that&#x2019;s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.
               </p>
               <small>
               Kanye West, Musician
               </small>
              </div>
          </div>

          <div class="tim-typo">
              <span class="tim-note">Muted Text</span>
              <p class="text-muted">
              I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...
              </p>
          </div>
          <div class="tim-typo">
              <span class="tim-note">Primary Text</span>
              <p class="text-primary">
              I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...                        </p>
          </div>
          <div class="tim-typo">
              <span class="tim-note">Info Text</span>
              <p class="text-info">
              I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...                        </p>
          </div>
          <div class="tim-typo">
              <span class="tim-note">Success Text</span>
              <p class="text-success">
              I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...                        </p>
          </div>
          <div class="tim-typo">
              <span class="tim-note">Warning Text</span>
              <p class="text-warning">
              I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...
              </p>
          </div>
          <div class="tim-typo">
              <span class="tim-note">Danger Text</span>
              <p class="text-danger">
              I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...                        </p>
          </div>
          <div class="tim-typo">
              <h2><span class="tim-note">Small Tag</span>
                  Header with small subtitle <br>
                  <small>Use &quot;small&quot; tag for the headers</small>
              </h2>
          </div>
        </div>
      </div>
    </div>
    <div class="space-50"></div>

    <div id="images">
      <div class="title">
        <h2>Images</h2>
      </div>
      <div class="md-layout">
        <div class="md-layout-item md-size-20 md-xsmall-size-100" :class="{'text-center': responsive}">
          <h4>Rounded Image</h4>
          <img :src="image" alt="Rounded Image" class="rounded" :class="{'responsive-image': responsive}">
        </div>
        <div class="md-layout-item md-size-20 md-xsmall-size-100 ml-auto" :class="{'text-center': responsive}">
          <h4>Circle Image</h4>
          <img :src="image" alt="Circle Image" class="rounded-circle" :class="{'responsive-image': responsive}">
        </div>
        <div class="md-layout-item md-size-20 md-xsmall-size-100 ml-auto" :class="{'text-center': responsive}">
          <h4>Rounded Raised</h4>
          <img :src="image" alt="Raised Image" class="img-raised rounded" :class="{'responsive-image': responsive}">
        </div>
        <div class="md-layout-item md-size-20 md-xsmall-size-100 ml-auto" :class="{'text-center': responsive}">
          <h4>Circle Raised</h4>
          <img :src="image" alt="Thumbnail Image" class="img-raised rounded-circle" :class="{'responsive-image': responsive}">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: require("@/assets/img/faces/avatar.jpg"),
      responsive: false
    };
  },
  methods: {
    onResponsiveInverted() {
      if (window.innerWidth < 600) {
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

<style lang="css">
</style>
