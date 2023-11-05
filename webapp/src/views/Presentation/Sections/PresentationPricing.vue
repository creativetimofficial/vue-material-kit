<script setup>
import SimplePricingCard from "@/examples/cards/pricingCards/SimplePricingCard.vue";
</script>
<template>
  <section class="py-sm-7" id="pricing-soft-ui">
    <div class="bg-gradient-success position-relative mx-n3 overflow-hidden">
      <img
        src="@/assets/img/shapes/pattern-lines.svg"
        alt="pattern-lines"
        class="position-absolute start-0 top-md-0 w-100 opacity-6"
      />
      <div
        class="container pb-lg-8 pb-7 pt-5 postion-relative z-index-2 position-relative"
      >
        <div class="row">
          <div class="col-md-7 mx-auto text-center">
            <span class="badge bg-gradient-dark mb-2">Pricing</span>
            <h3 class="text-white">Ready to get Material Kit?</h3>
            <p class="text-white">
              Based on the license you get, you will have direct access to our
              team <br />
              of developers who built the product.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-lg-n8 mt-n6">
      <div class="container">
        <div class="row mt-5">
          <SimplePricingCard
            title="Freelancer"
            description="Good for a personal or client web/mobile app."
            :price="{ currency: '$', amount: '79' }"
            :action="{
              route: '/',
              label: 'Buy now',
              color: 'bg-gradient-dark',
            }"
            :specifications="[
              'Complete documentation',
              'Full code',
              'Projects - 1',
              'Team size - 1',
              'Support',
              'Free Updates - 6 months',
            ]"
          />

          <SimplePricingCard
            title="Startup"
            description="Build your startup or client web/mobile app."
            :price="149"
            :specifications="[
              'Complete documentation',
              'Full code',
              'Projects - 1',
              'Team size - up to 5',
              'Support',
              'Free Updates - 12 months',
            ]"
          />

          <SimplePricingCard
            color="bg-gradient-dark"
            title="Company"
            description="Perfect for web/mobile apps or SaaS projects."
            :price="249"
            :action="{ route: '', label: 'Buy now', color: 'btn-white' }"
            :specifications="[
              'Complete documentation',
              'Full code',
              'Use in SaaS',
              'Projects - unlimited',
              'Team Size - up to 20',
              'Priority support',
              'Free Updates - 12 months',
            ]"
          />

          <SimplePricingCard
            title="Enterprise"
            description="Deploy large-scale projects which include redistribution
                    rights."
            :price="599"
            :action="{
              route:
                'https://secure.avangate.com/order/checkout.php?PRODS=37189144&OPTIONS37189144=ENTERPRISE&CART=1&CARD=2&CLEAN_CART=1&SHORT_FORM=1',
              label: 'Buy now',
              color: 'bg-gradient-dark',
            }"
            :specifications="[
              'Complete documentation',
              'Full code',
              'Use in SaaS',
              'Projects - unlimited',
              'Team Size - more than 20',
              'Priority support',
              'Free Updates - 24 months',
            ]"
          />
        </div>
        <div class="row">
          <div class="col-md-12">
            <p class="text-center mt-5">
              <i class="fa fa-lock" aria-hidden="true"></i> Secured Payment by
              <b> 2Checkout </b> with: <br /><br />
              <i class="fa fa-cc-paypal fa-2x me-1" aria-hidden="true"></i>
              <i class="fa fa-cc-visa fa-2x" aria-hidden="true"></i>
              <i class="fa fa-cc-mastercard fa-2x mx-1" aria-hidden="true"></i>
              <i class="fa fa-cc-amex fa-2x" aria-hidden="true"></i>
            </p>
            <p class="text-center max-width-500 mx-auto">
              <b>Info:</b> If you are a Registered Company inside the European
              Union you will be able to add your VAT ID after your Press "Buy
              Now"
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
