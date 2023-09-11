<template>
  <div>
    <campaigns-header></campaigns-header>
    <div class="sl--dashboard-main-section-wrapper">
      <campaings-table></campaings-table>
    </div>
  </div>
</template>

<script>
import CampaignsHeader from "@/components/dashboard/CampaignsHeader.vue";
import CampaingsTable from "@/components/dashboard/CampaingsTable.vue";
export default {
  components: {
    CampaignsHeader,
    CampaingsTable,
  },
};
</script>

<style>
.sl--dashboard-main-section-wrapper {
  padding: 20px;
}
</style>