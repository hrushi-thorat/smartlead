<template>
  <div class="sl--campaign-header__wrapper">
    <h6 class="sl--campaign-header--title">All Campaigns (24)</h6>
    <div class="sl--campaign-header__search-cta-wrapper">
      <div class="sl--campaign-header-search-input-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.97968 6.98747C0.97968 3.66946 3.66946 0.97968 6.98747 0.97968C10.3055 0.97968 12.9953 3.66946 12.9953 6.98747C12.9953 10.3055 10.3055 12.9953 6.98747 12.9953C3.66946 12.9953 0.97968 10.3055 0.97968 6.98747ZM6.98747 0C3.1284 0 0 3.1284 0 6.98747C0 10.8465 3.1284 13.9749 6.98747 13.9749C8.74071 13.9749 10.3431 13.3292 11.5699 12.2626L15.1638 15.8565C15.3551 16.0478 15.6652 16.0478 15.8565 15.8565C16.0478 15.6652 16.0478 15.3551 15.8565 15.1638L12.2626 11.5699C13.3292 10.3431 13.9749 8.74071 13.9749 6.98747C13.9749 3.1284 10.8465 0 6.98747 0Z"
            fill="#696D8B"
          />
        </svg>
        <input
          placeholder="Search Campaigns"
          class="sl--campaign-header-search-input"
        />
      </div>
      <button type="button" class="sl--button--primary">+ Add Campaign</button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.sl--campaign-header__wrapper {
  background: linear-gradient(0deg, #fff 0%, #fff 100%), #fff;
  width: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  border-bottom: 1px solid #e1e3ef;
  .sl--campaign-header--title {
    font-weight: 500;
    color: #282b42;
    font-size: 16px;
    position: relative;
    padding-bottom: 15px;
    &::after {
      content: "";
      width: 50px;
      position: absolute;
      background: #757ae9;
      left: 50%;
      transform: translateX(-50%);
      bottom: -3px;
      height: 3px;
      border-radius: 8px 8px 0px 0px;
    }
  }
}
.sl--campaign-header__search-cta-wrapper {
  display: flex;
  align-items: center;
  gap: 29px;
  padding: 12px 0px;
}
.sl--campaign-header-search-input-wrapper {
  display: flex;
  align-items: center;
  gap: 12px;
  border-radius: 3px;
  border: 1px solid #e5e7f9;
  background: #fafaff;
  padding: 10px 12px;
  color: #9699b0;
  font-size: 14px;
  font-weight: 400;
  width: 264px;
  input {
    height: 100%;
    width: 100%;
    border: none;
    outline: none !important;
    flex: 1;
    background: #fafaff;
  }
}
.sl--button--primary {
  padding: 8px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  border-radius: 3px;
  background: #6e58f1;
  flex-shrink: 0;
  color: #fff;
  font-size: 15px;
  font-weight: 500;
  border: none;
  cursor: pointer;
}
</style>