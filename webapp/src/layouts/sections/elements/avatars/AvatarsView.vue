<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import View from "../../components/View.vue";

// Avatars page components
import AvatarGroup from "./components/AvatarGroup.vue";
import AvatarSize from "./components/AvatarSize.vue";

// Avatars page components codes
import { avatarGroupCode, avatarSizeCode } from "./components/codes";

//nav-pills
import setNavPills from "@/assets/js/nav-pills";

//hook
onMounted(() => {
  setNavPills();
});
</script>
<template>
  <BaseLayout
    title="Avatars"
    :breadcrumb="[{ label: 'Elements', route: '#' }, { label: 'Avatars' }]"
  >
    <View title="Avatar Group" :code="avatarGroupCode" id="avatar-group">
      <AvatarGroup />
    </View>
    <View title="Avatar Size" :code="avatarSizeCode" id="avatar-size">
      <AvatarSize />
    </View>
  </BaseLayout>
</template>
