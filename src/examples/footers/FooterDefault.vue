<script setup>
import logoDark from "@/assets/img/logo-ct-dark.png";
defineProps({
  brand: {
    type: Object,
    name: String,
    logo: String,
    route: "",
    default: () => ({
      name: "Material Kit 2",
      logo: logoDark,
      route: "/"
    })
  },

  menus: {
    type: Array,
    name: String,
    items: {
      type: Array,
      name: String,
      href: String
    },
    default: () => [
      {
        name: "company",
        items: [
          {
            name: "about us",
            href: "https://www.creative-tim.com/presentation"
          },
          {
            name: "freebies",
            href: "https://www.creative-tim.com/templates/free"
          },
          {
            name: "premium tools",
            href: "https://www.creative-tim.com/templates/premium"
          },
          { name: "blog", href: "https://www.creative-tim.com/blog" }
        ]
      },
      {
        name: "resources",
        items: [
          { name: "illustrations", href: "https://iradesign.io/" },
          {
            name: "bits & snippets",
            href: "https://www.creative-tim.com/bits"
          },
          {
            name: "affiliate program",
            href: "https://www.creative-tim.com/affiliates/new"
          }
        ]
      },
      {
        name: "help & support",
        items: [
          {
            name: "contact us",
            href: "https://www.creative-tim.com/contact-us"
          },
          {
            name: "knowledge center",
            href: "https://www.creative-tim.com/knowledge-center"
          },
          {
            name: "custom development",
            href: "https://services.creative-tim.com/"
          },
          {
            name: "sponsorships",
            href: "https://www.creative-tim.com/sponsorships"
          }
        ]
      },
      {
        name: "legal",
        items: [
          {
            name: "terms & conditions",
            href: "https://www.creative-tim.com/terms"
          },
          {
            name: "privacy policy",
            href: "https://www.creative-tim.com/privacy"
          },
          {
            name: "licenses (EULA)",
            href: "https://www.creative-tim.com/license"
          }
        ]
      }
    ]
  }
});
</script>
<template>
  <footer class="footer pt-5 mt-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3 mb-4 ms-auto">

         
        </div>


        <div class="col-12">
          <div class="text-center">
            <p class="text-dark my-4 text-sm font-weight-normal">
              Екатерина Кузнецова, Ирина Комарова.
              {{ new Date().getFullYear() }}
              . Использованы материалы
              <a href="https://www.creative-tim.com" target="_blank"
                >Creative Tim</a
              >.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
