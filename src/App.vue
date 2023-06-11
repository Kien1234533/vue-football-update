<template>
  <div id="app" :class="{ 'theme-dark': nightMode }" class="bg-all">
    <main-screen
      v-if="statusMatch === 'default'"
      @onStart="onHandleBeforeStart($event)"
    />
    <interact-screen
      v-if="statusMatch === 'match'"
      :cardsContext="settings.cardsContext"
      @onFinish="onGetResult"
      @goBack="statusMatch = 'default'"
    />
    <result-screen
      v-if="statusMatch === 'result'"
      :timer="timer"
      @onStartAgain="statusMatch = 'default'"
    />
    <sidebar-tool />
    <nav>
      <i
        class="fas fa-moon icon-moon"
        v-if="nightMode"
        @click="nightMode = !nightMode"
      ></i>
      <i class="fas fa-sun icon-sun" v-else @click="nightMode = !nightMode"></i>
    </nav>
  </div>
</template>

<script>
import MainScreen from "./components/MainScreen.vue";
import InteractScreen from "./components/InteractScreen.vue";
import { shuffled } from "./utils/array";
import ResultScreen from "./components/ResultScreen.vue";
import SidebarTool from "./components/SidebarTool.vue";
export default {
  name: "App",
  components: {
    MainScreen,
    InteractScreen,
    ResultScreen,
    SidebarTool,
  },

  data() {
    return {
      nightMode: false,
      settings: {
        totalOfBlocks: 0,
        cardsContext: [],
        startedAt: null,
      },
      timer: 0,
      statusMatch: "default",
    };
  },
  methods: {
    onHandleBeforeStart(configs) {
      this.settings.totalOfBlocks = configs.totalOfBlocks;

      const firstCards = Array.from(
        { length: this.settings.totalOfBlocks / 2 },
        (_, i) => i + 1
      );
      const secondCards = [...firstCards];
      const cards = [...firstCards, ...secondCards];

      this.settings.cardsContext = shuffled(shuffled(shuffled(cards)));
      this.settings.startedAt = new Date().getTime();
      this.statusMatch = "match";
    },
    onGetResult() {
      this.timer = new Date().getTime() - this.settings.startedAt;
      this.statusMatch = "result";
    },
  },
  watch: {
    nightMode: function () {
      localStorage.setItem("nightMode", JSON.stringify(this.nightMode));
    },
  },
  created() {
    this.nightMode = JSON.parse(localStorage.getItem("nightMode"));
  },
};
</script>
<style lang="css" scoped>
@import url("https://use.fontawesome.com/releases/v5.8.1/css/all.css");
.bg-all {
  background-image: url(./assets/images/background.png);
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 155vh;
}
nav {
  position: absolute;
  position: fixed;
  height: 50px;
  top: 10px;
  right: 10px;
}
i {
  top: 10px;
  right: 10px;
  font-size: 1.6rem;
  cursor: pointer;
}

.icon-sun {
  color: #fcda5f;
}
.icon-moon {
  color: #0f6ada;
}
.theme-dark {
  color: var(--light);
  background-image: linear-gradient(0, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8));
  background-position: center;
  background-size: cover;
}
</style>
