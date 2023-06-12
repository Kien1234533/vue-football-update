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
  color: var(--light);
  z-index: 2;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}
.text {
  position: absolute;
  text-align: center;
  top: 50px;
  left: 0;
  right: 0;
}
.screen h1 {
  margin-left: 100px;
  text-transform: uppercase;
  font-size: 1rem;
}
.screen p {
  margin-left: 100px;
  font-size: 0.6rem;
}
.modes {
  display: block;
  transform: translateY(90px);
}
.modes button {
  margin-left: 100px;
  margin-top: 10px;
  width: 160px;
  height: 70px;
  display: flex;
  font: var(--font);
  padding: 10px 5px;
  border-radius: 10px;
  background: transparent;
  box-shadow: none;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid var(--light);
  color: var(--light);
  flex-direction: column;
  transition: background 0.3s ease-in-out;
}
@media (min-width: 992px) {
  .screen {
    width: 100%;
    height: 0;
    top: 0;
    left: 0;
  }
  .text {
    top: 100px;
  }
  .screen h1 {
    margin-left: 0px;
    font-size: 4.5rem;
  }
  .screen p {
    margin-left: 0px;
    font-size: 2rem;
  }

  .modes {
    display: flex;
    transform: translateY(0px);
    margin-top: 60%;
  }

  .modes button {
    width: 150px;
    height: 150px;
    display: flex;
    border-radius: 1rem;
    margin: 0 1rem;
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
}
</style>
