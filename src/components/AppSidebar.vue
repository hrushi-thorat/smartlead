<template>
  <div class="sl--sidebar-wrapper">
    <div class="sl--sidebar_rout-link-wrapper">
      <div
        v-for="item in menuItems"
        :key="item.path"
        class="sl--sidebar_menu-item"
        :class="{ '--active': item.isActive }"
      >
        <img
          class="sl--sidebar_menu-item-image"
          :src="require(`@/assets/${item.icon}`)"
        />
        <h5 class="sl--sidebar_menu-item-title">{{ item.name }}</h5>
      </div>
    </div>

    <div class="sl--sidebar_rout-link-wrapper --social">
      <div
        v-for="item in socialItems"
        :key="item.path"
        class="sl--sidebar_menu-item"
        :class="{ '--active': item.isActive }"
      >
        <img
          class="sl--sidebar_menu-item-image"
          :src="require(`@/assets/${item.icon}`)"
        />
        <h5 class="sl--sidebar_menu-item-title">{{ item.name }}</h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          name: "All Leads",
          path: "/dashboard/all-leads",
          icon: "allleads.svg",
        },
        {
          name: "Master Inbox",
          path: "/dashboard/master-inbox",
          icon: "masterinbox.svg",
        },
        {
          name: "Email Campaigns",
          path: "/dashboard",
          icon: "emailcampaign.svg",
          isActive: true,
        },
      ],
      socialItems: [
        {
          name: "Join Slack Community",
          icon: "slack.svg",
        },
        {
          name: "Smartlead Tutorials",
          icon: "play.svg",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.sl--sidebar-wrapper {
  background: linear-gradient(0deg, #fff 0%, #fff 100%), #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 230px;
  position: fixed;
  top: 50px;
  left: 0px;
  bottom: 0px;
  padding: 11px 0px;
  border-right: 1px solid #e1e3ef;
  .sl--sidebar_rout-link-wrapper {
    display: flex;
    flex-direction: column;
    gap: 10px;

    &.--social {
      position: relative;
      padding: 10px 0px 0px 0px;
      &::after {
        content: "";
        width: 50px;
        position: absolute;
        background: #e1e3ef;
        left: 50%;
        transform: translateX(-50%);
        top: 0;
        height: 2px;
        border-radius: 8px 8px 0px 0px;
      }
    }
  }
}
.sl--sidebar_menu-item {
  padding: 10px 23px;
  display: flex;
  align-items: center;
  gap: 20px;
  transition: all 0.3s ease;
  border-left: 3px solid transparent;
  &:hover {
    background: rgba(117, 122, 233, 0.1);
  }
  font-weight: 400;
  font-size: 14px;
  color: #282b42;
  cursor: pointer;
  &.--active {
    background: rgba(117, 122, 233, 0.1);
    border-left: 3px solid #757ae9;
  }
}
</style>