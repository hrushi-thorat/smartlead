<template>
  <div>
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <main class="sl--main_section-wrapper">
      <router-view />
    </main>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import AppSidebar from "@/components/AppSidebar.vue";
export default {
  components: {
    AppHeader,
    AppSidebar,
  },
};
</script>

<style lang="scss">
.sl--main_section-wrapper {
  margin-top: 50px;
  margin-left: 230px;
}
</style>