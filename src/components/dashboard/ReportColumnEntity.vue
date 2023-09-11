<template>
  <div class="sl--report-column-entity__wrapper">
    <span class="--title" :style="{ color: valueColor }"
      >{{ value }} <sub v-if="valuePercent">{{ valuePercent }}</sub></span
    >
    <div class="--value">
      {{ title }}
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
      <svg
        v-if="title === 'Positive Reply' && status !== 'draft'"
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
      >
        <path
          d="M6.02863 5.24387H6.40063V8.29787L6.56263 8.41186L7.07263 8.44787V8.70587H4.94263V8.44787L5.44063 8.41186L5.60263 8.29787V5.71786H4.94263V5.49586L6.02863 5.24387Z"
          fill="#696D8B"
        />
        <path
          d="M6.00624 3.3019C6.16224 3.3019 6.30024 3.35589 6.40824 3.46989C6.51624 3.58389 6.57024 3.7159 6.57024 3.8659C6.57024 4.0159 6.51624 4.1539 6.40824 4.2619C6.30024 4.3699 6.16824 4.42389 6.00624 4.42389C5.84424 4.42389 5.71824 4.3699 5.61024 4.2619C5.50224 4.1539 5.44824 4.0219 5.44824 3.8659C5.44824 3.7099 5.50224 3.5719 5.61024 3.4639C5.71824 3.3559 5.85024 3.3019 6.00624 3.3019Z"
          fill="#696D8B"
        />
        <path
          d="M6 12C2.694 12 0 9.306 0 6C0 2.694 2.694 0 6 0C9.306 0 12 2.694 12 6C12 9.306 9.306 12 6 12ZM6 0.786001C3.126 0.786001 0.785999 3.126 0.785999 6C0.785999 8.874 3.126 11.214 6 11.214C8.874 11.214 11.214 8.874 11.214 6C11.214 3.126 8.874 0.786001 6 0.786001Z"
          fill="#696D8B"
        />
      </svg>
      <svg
        v-else-if="title === 'Positive Reply' && status === 'draft'"
        xmlns="http://www.w3.org/2000/svg"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        fill="none"
      >
        <circle cx="6" cy="6" r="6" fill="#ABACC6" />
        <path
          d="M6.11778 4.2989C5.96816 4.2989 5.84346 4.25446 5.74371 4.16557C5.64895 4.07174 5.60156 3.95569 5.60156 3.81742C5.60156 3.67915 5.64895 3.56557 5.74371 3.47668C5.84346 3.38285 5.96816 3.33594 6.11778 3.33594C6.26741 3.33594 6.38961 3.38285 6.48438 3.47668C6.58413 3.56557 6.63401 3.67915 6.63401 3.81742C6.63401 3.95569 6.58413 4.07174 6.48438 4.16557C6.38961 4.25446 6.26741 4.2989 6.11778 4.2989ZM6.11778 8.66927C5.89879 8.66927 5.72127 8.49174 5.72127 8.27275V5.39172C5.72127 5.17272 5.89879 4.9952 6.11778 4.9952C6.33678 4.9952 6.5143 5.17272 6.5143 5.39172V8.27275C6.5143 8.49174 6.33678 8.66927 6.11778 8.66927Z"
          fill="white"
        />
      </svg>
    </div>
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
.positive-reply-info {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  border: #abacc6;
}
</style>