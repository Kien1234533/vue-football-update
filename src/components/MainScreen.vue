<template>
  <div class="screen">
    <div class="text">
      <h1>Football player</h1>
      <p>Select mode to start game</p>
    </div>

    <div class="modes">
      <button @click="onStart(16)">
        <span>4x4</span>
        <span>Easy</span>
      </button>
      <button @click="onStart(36)">
        <span>6x6</span>
        <span>Normal</span>
      </button>
      <button @click="onStart(64)">
        <span>8x8</span>
        <span>Hard</span>
      </button>
      <button @click="onStart(100)">
        <span>10x10</span>
        <span>Super Hard</span>
      </button>
    </div>
  </div>
  <copy-right />
  <loading-page v-if="loading" />
</template>

<script>
import CopyRight from "./CopyRight.vue";
import LoadingPage from "./LoadingPage.vue";
export default {
  data() {
    return {
      loading: false,
    };
  },
  components: {
    CopyRight,
    LoadingPage,
  },
  mounted() {
    // Giả định một hành động chuyển trang gây ra loading
    this.loading = true;

    // Giả định thời gian loading
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  },
  name: "MainScreen",
  emits: ["onStart"],
  methods: {
    onStart(totalOfBlocks) {
      this.$emit("onStart", { totalOfBlocks });
    },
  },
};
</script>

<style lang="css" scoped>
.screen {
  width: 100%;
  position: fixed;
  height: 0;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: var(--light);
}
.text {
  top: 100px;
  position: absolute;
  text-align: center;
}

.screen h1 {
  font-size: 4.5rem;
  text-transform: uppercase;
}
.screen p {
  font-size: 2rem;
}

.modes {
  display: flex;
  margin-top: 60%;
}

.modes button {
  font: var(--font);
  width: 150px;
  height: 150px;
  background: transparent;
  box-shadow: none;
  border: 1px solid var(--light);
  color: var(--light);
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  margin: 0 1rem;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease-in-out;
}

.modes button:hover {
  background-color: var(--light);
  color: var(--dark);
}

.modes button span:first-child {
  font-size: 2rem;
}

.modes button span:last-child {
  display: block;
  font-size: 1.25rem;
  margin-top: 0.5rem;
}
</style>
