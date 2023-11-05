/*
=========================================================
* Vue Material Kit 2 - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vue-material-kit-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

import imgPricing from "@/assets/img/pricing.png";
import imgFeatures from "@/assets/img/features.png";
import imgBlogPosts from "@/assets/img/blog-posts.png";
import imgTestimonials from "@/assets/img/testimonials.png";
import imgTeam from "@/assets/img/team.png";
import imgStat from "@/assets/img/stat.png";
import imgContent from "@/assets/img/content.png";
import imgPagination from "@/assets/img/pagination.png";
import imgAlert from "@/assets/img/alerts.jpg";
import imgPopover from "@/assets/img/popovers.jpg";
import imgModal from "@/assets/img/modals.jpg";
import imgDropdowns from "@/assets/img/dropdowns.jpg";

export default [
  {
    heading: "Design Blocks",
    description:
      "A selection of 45 page sections that fit perfectly in any combination",
    items: [
      {
        image: `${imagesPrefix}/headers.jpg`,
        title: "Page Headers",
        subtitle: "10 Examples",
        route: "page-headers",
        pro: false
      },
      {
        image: imgFeatures,
        title: "Features",
        subtitle: "14 Examples",
        route: "page-features",
        pro: false
      },
      {
        image: imgPricing,
        title: "Pricing",
        subtitle: "8 Examples",
        route: "presentation",
        pro: true
      },
      {
        image: `${imagesPrefix}/faq.jpg`,
        title: "FAQ",
        subtitle: "1 Example",
        route: "presentation",
        pro: true
      },
      {
        image: imgBlogPosts,
        title: "Blog Posts",
        subtitle: "11 Examples",
        route: "presentation",
        pro: true
      },
      {
        image: imgTestimonials,
        title: "Testimonials",
        subtitle: "11 Examples",
        route: "presentation",
        pro: true
      },
      {
        image: imgTeam,
        title: "Teams",
        subtitle: "6 Examples",
        route: "presentation",
        pro: true
      },
      {
        image: imgStat,
        title: "Stats",
        subtitle: "3 Examples",
        route: "presentation",
        pro: true
      },
      {
        image: `${imagesPrefix}/call-to-action.jpg`,
        title: "Call to Actions",
        subtitle: "8 Examples",
        route: "presentation",
        pro: true
      },
      {
        image: `${imagesPrefix}/projects.jpg`,
        title: "Applications",
        subtitle: "6 Examples",
        route: "presentation",
        pro: true
      },
      {
        image: `${imagesPrefix}/logo-area.jpg`,
        title: "Logo Areas",
        subtitle: "4 Examples",
        route: "presentation",
        pro: true
      },
      {
        image: `${imagesPrefix}/footers.jpg`,
        title: "Footers",
        subtitle: "10 Examples",
        route: "presentation",
        pro: true
      },
      {
        image: `${imagesPrefix}/general-cards.jpg`,
        title: "General Cards",
        subtitle: "9 Examples",
        route: "presentation",
        pro: true
      },
      {
        image: imgContent,
        title: "Content Sections",
        subtitle: "8 Examples",
        route: "presentation",
        pro: true
      }
    ]
  },
  {
    heading: "Navigation",
    description: "30+ components that will help go through the pages",
    items: [
      {
        image: `${imagesPrefix}/navbars.jpg`,
        title: "Navbars",
        subtitle: "4 Examples",
        route: "navigation-navbars",
        pro: false
      },
      {
        image: `${imagesPrefix}/nav-tabs.jpg`,
        title: "Nav Tabs",
        subtitle: "2 Nav Tabs",
        route: "navigation-navtabs",
        pro: false
      },
      {
        image: imgPagination,
        title: "Pagination",
        subtitle: "3 Examples",
        route: "navigation-pagination",
        pro: false
      }
    ]
  },
  {
    heading: "Input Areas",
    description:
      "50+ elements that you need for text manipulation and insertion",
    items: [
      {
        image: `${imagesPrefix}/newsletters.jpg`,
        title: "Newsletters",
        subtitle: "6 Examples",
        route: "presentation",
        pro: true
      },
      {
        image: `${imagesPrefix}/contact-sections.jpg`,
        title: "Contact Sections",
        subtitle: "8 Examples",
        route: "presentation",
        pro: true
      },
      {
        image: `${imagesPrefix}/forms.jpg`,
        title: "Forms",
        subtitle: "3 Examples",
        route: "inputareas-forms",
        pro: false
      },
      {
        image: `${imagesPrefix}/inputs.jpg`,
        title: "Inputs",
        subtitle: "6 Examples",
        route: "inputareas-inputs",
        pro: false
      }
    ]
  },
  {
    heading: "Attention Catchers",
    description:
      "20+ Fully coded components that popup from different places of the screen",
    items: [
      {
        image: imgAlert,
        title: "Alerts",
        subtitle: "4 Examples",
        route: "ac-alerts",
        pro: false
      },
      {
        image: `${imagesPrefix}/toasts.jpg`,
        title: "Notifications",
        subtitle: "3 Examples",
        route: "presentation",
        pro: true
      },
      {
        image: imgPopover,
        title: "Tooltips & Popovers",
        subtitle: "2 Examples",
        route: "ac-tooltips-popovers",
        pro: false
      },
      {
        image: imgModal,
        title: "Modals",
        subtitle: "5 Examples",
        route: "ac-modals",
        pro: false
      }
    ]
  },
  {
    heading: "Elements",
    description:
      "80+ carefully crafted small elements that come with multiple colors and shapes",
    items: [
      {
        image: `${imagesPrefix}/buttons.jpg`,
        title: "Buttons",
        subtitle: "6 Examples",
        route: "el-buttons",
        pro: false
      },
      {
        image: `${imagesPrefix}/avatars.jpg`,
        title: "Avatars",
        subtitle: "2 Examples",
        route: "el-avatars",
        pro: false
      },
      {
        image: imgDropdowns,
        title: "Dropdowns",
        subtitle: "2 Examples",
        route: "el-dropdowns",
        pro: false
      },
      {
        image: `${imagesPrefix}/switch.jpg`,
        title: "Toggles",
        subtitle: "2 Examples",
        route: "el-toggles",
        pro: false
      },
      {
        image: `${imagesPrefix}/social-buttons.jpg`,
        title: "Social Buttons",
        subtitle: "2 Examples",
        route: "presentation",
        pro: true
      },
      {
        image: `${imagesPrefix}/breadcrumbs.jpg`,
        title: "Breadcrumbs",
        subtitle: "1 Example",
        route: "el-breadcrumbs",
        pro: false
      },
      {
        image: `${imagesPrefix}/badges.jpg`,
        title: "Badges",
        subtitle: "3 Examples",
        route: "el-badges",
        pro: false
      },
      {
        image: `${imagesPrefix}/progress.jpg`,
        title: "Progress Bars",
        subtitle: "4 Examples",
        route: "el-progress-bars",
        pro: false
      },
      {
        image: `${imagesPrefix}/tables.jpg`,
        title: "Tables",
        subtitle: "3 Examples",
        route: "presentation",
        pro: true
      },
      {
        image: `${imagesPrefix}/typography.jpg`,
        title: "Typography",
        subtitle: "2 Examples",
        route: "el-typography",
        pro: false
      }
    ]
  }
];
