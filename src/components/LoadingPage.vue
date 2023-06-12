<template>
  <div class="loading-overlay">
    <div class="loading-container">
      <vue-loading-overlay
        :active="true"
        :can-cancel="false"
        color="#3498db"
        :opacity="0.8"
      >
        <!-- Nội dung của loading -->
        <p style="font-size: 50px; color: white">Loading...</p>
      </vue-loading-overlay>
    </div>
    <div class="loading-spinner"></div>
  </div>
</template>

<script>
import VueLoadingOverlay from "vue-loading-overlay";

export default {
  components: {
    VueLoadingOverlay,
  },
};
</script>

<style scoped>
@media (min-width: 992px) {
  .loading-spinner {
    position: absolute;
    border: 4px solid #f3f3f3;
    border-top: 4px solid #3498db;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: spin 2s linear infinite;
    top: 55%;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .loading-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }

  .loading-container {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
  }
}
</style>
