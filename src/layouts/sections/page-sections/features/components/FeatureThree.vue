<script setup>
// example component
import SimpleInfoCard from "@/examples/cards/infoCards/SimpleInfoCard.vue";
</script>
<template>
  <section class="py-6">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 mx-auto text-center pb-4">
          <h2>Turn your idea into a startup</h2>
          <p class="lead">
            We’re constantly trying to express ourselves and actualize our
            dreams. If you have the opportunity to play
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-4 col-md-6">
          <SimpleInfoCard
            direction="text-center"
            class="p-3"
            color="primary"
            icon="person"
            title="Check our team"
            description="People in this world shun people for being great. For being a bright color. For standing out."
          />
        </div>
        <div class="col-lg-4 col-md-6">
          <SimpleInfoCard
            direction="text-center"
            class="p-3"
            color="success"
            icon="support_agent"
            title="Support 24/7"
            description="We get insulted by others, lose trust for those others. We get
              back here to follow my dreams"
          />
        </div>
        <div class="col-lg-4 col-md-6 mx-md-auto">
          <SimpleInfoCard
            direction="text-center"
            class="p-3"
            color="warning"
            icon="update"
            title="Unlimited revisions"
            description="The time is now to be okay to be the greatest you. Would you
              believe in what you believe in?"
          />
        </div>
      </div>
    </div>
  </section>
</template>
