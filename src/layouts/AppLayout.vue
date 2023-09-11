<template>
  <div>
    <app-header></app-header>
    <app-sidebar></app-sidebar>
    <main>
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

<style>
</style>