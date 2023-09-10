<template>
  <nav class="sl-nav_wrapper">
    <div><img src="@/assets/logo.svg"/></div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.sl-nav_wrapper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-height: 50px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding:24px 16px;
    background: #00056A;
    box-shadow: 0px 2px 4px 0px rgba(141, 143, 169, 0.10);
}
</style>