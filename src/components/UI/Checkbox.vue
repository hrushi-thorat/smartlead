<!-- eslint-disable  -->
<template>
  <label class="styled-checkbox">
    <input type="checkbox" v-model="isChecked" />
    <span class="checkbox-custom"></span>
  </label>
</template>
  
  <script>
export default {
  data() {
    return {
      isChecked: false,
    };
  },
  methods: {},
};
</script>
  
  <style scoped>
.styled-checkbox {
  display: inline-block;
  position: relative;
  width: 18px;
  height: 18px;
  border: 1px solid #dadce0;
  border-radius: 4px;
  background: white;
  cursor: pointer;
}

.styled-checkbox input[type="checkbox"] {
  position: absolute;
  opacity: 0;
  cursor: pointer;
}

.checkbox-custom {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 12px;
  height: 12px;
  border: 1px solid #757ae9;
  border-radius: 50%;
  background: #757ae9;
  display: none;
}

.styled-checkbox input[type="checkbox"]:checked + .checkbox-custom {
  display: block;
}
</style>