<template>
  <div>
    <app-header></app-header>
    <main>
        <router-view />
    </main>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue';
export default {
    components:{
        AppHeader
}
}
</script>

<style>

</style>