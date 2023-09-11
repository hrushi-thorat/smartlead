<template>
  <div :class="['progress', size]">
    <svg
      :stroke-width="backWidth"
      class="progress__back"
      viewBox="0 0 100 100"
      :stroke="backColor"
      :fill="innerColor"
    >
      <circle cx="50" cy="50" r="45"></circle>
    </svg>
    <svg
      :stroke-linecap="rounded ? 'round' : ''"
      :stroke-width="frontWidth"
      :stroke-dashoffset="calcValue"
      :stroke="frontColor"
      class="progress__front"
      viewBox="0 0 100 100"
    >
      <circle cx="50" cy="50" r="45"></circle>
    </svg>
    <svg
      v-if="status === 'stopped'"
      xmlns="http://www.w3.org/2000/svg"
      width="47"
      height="47"
      viewBox="0 0 47 47"
      fill="none"
    >
      <circle cx="23.5" cy="23.5" r="20.5" stroke="#E5E8F7" stroke-width="5" />
      <circle cx="24" cy="24" r="8" stroke="#7E808E" stroke-width="1.2" />
      <path
        d="M18.6652 29.3363L29.3318 18.6696"
        stroke="#7E808E"
        stroke-width="1.2"
      />
      <path
        d="M44 24C44 12.402 35.0457 3 24 3"
        stroke="#CB4B4B"
        stroke-width="4"
      />
    </svg>
    <svg
      v-else-if="status === 'draft'"
      xmlns="http://www.w3.org/2000/svg"
      width="47"
      height="47"
      viewBox="0 0 47 47"
      fill="none"
    >
      <circle cx="23.5" cy="23.5" r="20.5" stroke="#E5E8F7" stroke-width="5" />
      <path
        opacity="0.6"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M28.6583 17.9437C29.9571 19.018 30.1259 20.9274 29.0354 22.2085L23.1238 29.1535C23.0834 29.2042 23.0331 29.2474 22.9749 29.28C22.9237 29.3087 22.8683 29.328 22.8114 29.3379L18.7814 30.1613C18.6293 30.1924 18.4712 30.1531 18.3523 30.0547C18.2333 29.9563 18.1667 29.8097 18.1713 29.6566L18.2928 25.644C18.2808 25.5156 18.3188 25.3828 18.4095 25.2762L24.3322 18.3183C25.4227 17.0372 27.3596 16.8695 28.6583 17.9437ZM19.3043 25.7816L25.1097 18.9614C25.8397 18.1038 27.1362 17.9916 28.0055 18.7107C28.8748 19.4298 28.9878 20.7079 28.2579 21.5654L22.4488 28.3899L19.2053 29.0526L19.3043 25.7816Z"
        fill="#282B42"
      />
      <path
        d="M31.4453 30.9986L18.999 30.9986"
        stroke="#7E808E"
        stroke-linecap="round"
      />
    </svg>
    <svg
      v-else-if="status === 'paused'"
      xmlns="http://www.w3.org/2000/svg"
      width="47"
      height="47"
      viewBox="0 0 47 47"
      fill="none"
    >
      <circle cx="23.5" cy="23.5" r="20.5" stroke="#E5E8F7" stroke-width="5" />
      <g opacity="0.6">
        <circle cx="24" cy="24" r="7.5" stroke="#282B42" />
        <path d="M22 20V28" stroke="#282B42" />
        <path d="M26 20V28" stroke="#282B42" />
      </g>
      <path
        d="M44 24C44 12.402 35.0457 3 24 3"
        stroke="#DD9553"
        stroke-width="4"
      />
    </svg>
    <span v-else :style="[{ color: textColor }]" class="progress__value"
      >{{ value }}%</span
    >
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0,
      validator(value) {
        return value >= 0 && value <= 100 ? true : false;
      },
    },
    frontColor: {
      type: String,
      default: "#ff7e29",
    },
    frontWidth: { type: Number, default: 4 },
    backColor: {
      type: String,
      default: "#f5dfd0;",
    },
    status: {
      type: String,
    },
    backWidth: { type: Number, default: 8 },
    rounded: { type: Boolean, default: false },
    textColor: { type: String, default: "#737373" },
    innerColor: { type: String, default: "none" },
    size: {
      type: String,
      default: "small",
      validator(value) {
        return ["small", "medium", "large"].includes(value);
      },
    },
  },
  computed: {
    calcValue() {
      return 283 - (283 * this.value) / 100;
    },
  },
};
</script>

<style lang="scss">
.small {
  width: 41px;
  height: 41px;
  font-size: 1.2rem;
}

.medium {
  width: 41px;
  height: 41px;
  font-size: 1.6rem;
}

.large {
  width: 9rem;
  height: 9rem;
  font-size: 1.8rem;
}

.progress {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #282b42;
  font-size: 12px;
  font-weight: 400;
  svg {
    height: inherit;
    width: inherit;
  }

  .progress__back {
    position: absolute;
    top: 0;
    left: 0;
  }

  .progress__front {
    position: absolute;
    top: 0;
    left: 0;
    transform: rotate(-90deg);

    circle {
      fill: none;
      stroke-dasharray: 283;
    }
  }

  .progress__value {
    position: relative;
    font-size: inherit;
    pointer-events: none;
    z-index: 2;
  }
}
</style>