<template>
  <div class="sl--report-column-entity__wrapper">
    <span class="--title" :style="{ color: valueColor }"
      >{{ value }} <sub v-if="valuePercent">{{ valuePercent }}</sub></span
    >
    <span class="--value"
      >{{ title }}
      <svg
        v-if="
          status === 'draft' &&
          (title === 'Clicked' || title === 'Opened' || title === 'Replied')
        "
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="11"
        viewBox="0 0 12 11"
        fill="none"
      >
        <path
          d="M5.28555 0.62034C5.60365 0.0598831 6.39635 0.0598826 6.71445 0.620339L11.8875 9.7344C12.2065 10.2964 11.8093 11 11.173 11H0.826965C0.190745 11 -0.206463 10.2964 0.11251 9.7344L5.28555 0.62034Z"
          fill="#DD9553"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.99394 8.06322C5.68856 8.06322 5.441 8.31595 5.441 8.6277C5.441 8.93946 5.68856 9.19218 5.99394 9.19218C6.29932 9.19218 6.54688 8.93946 6.54688 8.6277C6.54688 8.31595 6.29932 8.06322 5.99394 8.06322ZM5.63735 7.01491C5.63735 7.21637 5.79724 7.37968 5.99446 7.37968C6.19168 7.37968 6.35156 7.21637 6.35156 7.01491V3.78746C6.35156 3.586 6.19168 3.42269 5.99446 3.42269C5.79724 3.42269 5.63735 3.586 5.63735 3.78746V7.01491Z"
          fill="white"
        />
      </svg>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    valueColor: {
      type: String,
      default: "#6E58F1",
    },
    valuePercent: {
      type: String,
      default: "",
    },
    status: {
      type: String,
    },
    value: {
      type: String,
      default: "520",
    },
    title: {
      type: String,
      default: "Sent",
    },
  },
};
</script>

<style lang="scss">
.sl--report-column-entity__wrapper {
  display: flex;
  flex-direction: column;
  gap: 8px;
  .--title {
    color: #6e58f1;
    font-size: 20px;
    font-weight: 500;
    display: flex;
    align-items: baseline;
    gap: 4px;
    sub {
      color: #282b42;
      font-size: 12px;
      font-weight: 400;
    }
  }
  .--value {
    color: #282b42;
    font-family: DM Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    align-items: baseline;
    gap: 4px;
  }
}
</style>