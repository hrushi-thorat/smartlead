<template>
  <nav class="sl-nav_wrapper">
    <div><img src="@/assets/logo.svg" /></div>
    <div v-if="showCta" class="sl-nav_user-cta">
      <div class="sl-nav_user-trail-expairy-tag">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M8.97 0.969727L10.8688 6.10121L16.0003 8.00003L10.8688 9.89885L8.97 15.0303L7.07118 9.89885L1.9397 8.00003L7.07118 6.10121L8.97 0.969727Z"
            fill="#757AE9"
          />
          <path
            d="M2.66667 0L3.38691 1.94642L5.33333 2.66667L3.38691 3.38691L2.66667 5.33333L1.94642 3.38691L0 2.66667L1.94642 1.94642L2.66667 0Z"
            fill="#757AE9"
          />
          <path
            d="M2.66667 10.6667L3.38691 12.6131L5.33333 13.3333L3.38691 14.0536L2.66667 16L1.94642 14.0536L0 13.3333L1.94642 12.6131L2.66667 10.6667Z"
            fill="#757AE9"
          />
        </svg>
        <span>Trail expires in 12 days</span>
      </div>
      <img class="sl-nav_cta-item" src="@/assets/help.svg" />
      <img class="sl-nav_cta-item" src="@/assets/gifts.svg" />
      <img @click="logout" class="sl-nav_cta-item" src="@/assets/user.png" />
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  methods: {
    ...mapActions(["logoutUser"]),
    logout() {
      this.logoutUser();
      this.$router.push("/");
    },
  },
  props: {
    showCta: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.sl-nav_wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-height: 50px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 24px 16px;
  background: #00056a;
  box-shadow: 0px 2px 4px 0px rgba(141, 143, 169, 0.1);
}
.sl-nav_user-cta {
  display: flex;
  align-items: center;
  gap: 20px;
  .sl-nav_user-trail-expairy-tag {
    padding: 7px 12px;
    border-radius: 46px;
    background: rgba(255, 255, 255, 0.2);
    display: flex;
    padding: 7px 12px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #fff;
    font-size: 12px;
    font-weight: 400;
  }
}
.sl-nav_cta-item {
  cursor: pointer;
}
</style>