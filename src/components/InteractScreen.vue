<template>
  <div class="screen">
    <div ref="boxParent" class="box">
      <h2>Game Over</h2>
      <span @click="goBack">Play again</span>
    </div>
    <div ref="hour" class="hourglass">
      <div class="top"></div>
      <div class="bottom"></div>
    </div>
    <h1 ref="time">
      {{ countdownElement }}
    </h1>
    <!-- <img
      ref="help"
      @click="goFlipFront"
      class="img-front"
      src="../assets/images/light.png"
      alt=""
    />
    <p ref="support">Trợ giúp</p> -->
    <img
      @click="goBack"
      class="img-back"
      src="../assets/images/back.png"
      alt=""
    />
    <div
      class="screen__inner"
      :style="{
        width: `${
          ((((920 - 16 * 4) / Math.sqrt(cardsContext.length) - 16) * 3) / 4 +
            16) *
          Math.sqrt(cardsContext.length)
        }px`,
      }"
    >
      <card-play
        v-for="(card, index) in cardsContext"
        :key="index"
        v-show="isShown"
        :ref="`card-${index}`"
        :imgBackFaceUrl="`images/${card}.png`"
        :card="{ index, value: card }"
        @onFlip="checkRule($event)"
        :cardsContext="cardsContext"
      />
    </div>
  </div>
</template>

<script>
import CardPlay from "./CardPlay.vue";
export default {
  props: {
    cardsContext: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  components: {
    CardPlay,
  },
  data() {
    return {
      rules: [],
      isShown: true,
      countdownElement: "00: 00",
      timer: null,
      showElement: false,
    };
  },
  mounted() {
    this.countDown();
  },
  methods: {
    goFlipFront() {},
    checkRule(card) {
      if (this.rules.length === 2) return false;
      this.rules.push(card);
      if (
        this.rules.length === 2 &&
        this.rules[0].value === this.rules[1].value
      ) {
        console.log("Correct");
        //add class disabled  to component
        this.$refs[`card-${this.rules[0].index}`][0].onEnableDisableMode();
        this.$refs[`card-${this.rules[1].index}`][0].onEnableDisableMode();
        //disappear card
        //reset rule []
        this.rules = [];
        const disabledElements = document.querySelectorAll(
          ".screen .card.disabled"
        );
        if (
          disabledElements &&
          disabledElements.length === this.cardsContext.length - 2
        ) {
          setTimeout(() => {
            this.$emit("onFinish");
          }, 920);
        }
      } else if (
        this.rules.length === 2 &&
        this.rules[0].value !== this.rules[1].value
      ) {
        console.log("Incorrect");
        setTimeout(() => {
          this.$refs[`card-${this.rules[0].index}`][0].onFlipBackCard();
          this.$refs[`card-${this.rules[1].index}`][0].onFlipBackCard();
          //reset lai rule
          this.rules = [];
        }, 800);
      } else return false;
    },
    goBack() {
      window.location.reload();
    },
    countDown() {
      let time = 6; // Thời gian ban đầu (số giây)
      const intervalId = setInterval(() => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        this.countdownElement = `${minutes.toString().padStart(2, "0")}:
          ${seconds.toString().padStart(2, "0")}`;
        if (time <= 0) {
          clearInterval(intervalId);
          const box = this.$refs.boxParent;
          const time = this.$refs.time;
          const hour = this.$refs.hour;
          box.setAttribute(
            "style",
            "visibility: visible; transform: scale(1);"
          );
          time.setAttribute("style", "display: none;");
          hour.setAttribute("style", "display: none;");
          this.isShown = false;
        } else {
          time--;
        }
      }, 1000);
    },
  },
};
</script>

<style lang="css" scoped>
.hourglass {
  border-bottom: solid 1vmin #630;
  border-top: solid 1vmin #630;
  left: 50%;
  margin-left: 77vmin;
  margin-top: -20vmin;
  padding: 0 1vmin;
  position: fixed;
  top: 50%;
}
.hourglass .top,
.hourglass .bottom {
  background-color: #def;
  box-shadow: 0 0 1vmin 1vmin #bcd inset;
  height: 10vmin;
  overflow: hidden;
  position: relative;
  width: 10vmin;
}
.hourglass .top {
  border-radius: 0 0 50% 50%;
}
.hourglass .top:before {
  animation: top 60s linear forwards;
  background-color: #fc6;
  border-radius: 50%;
  content: "";
  display: block;
  height: 10vmin;
  left: 0;
  position: absolute;
  top: 0;
  transform: translateY(50%);
  width: 10vmin;
}
.hourglass .bottom {
  border-radius: 50% 50% 0 0;
}
.hourglass .bottom:before {
  animation: bottom 60s linear forwards;
  background-color: #fc6;
  border-radius: 50%;
  content: "";
  display: block;
  height: 10vmin;
  left: 0;
  position: absolute;
  top: 0;
  transform: translateY(100%);
  width: 10vmin;
}
.hourglass .bottom:after {
  animation: bottom-drip 120s linear forwards;
  background-color: #fc6;
  content: "";
  display: block;
  height: 100%;
  left: 45%;
  position: absolute;
  top: 0;
  width: 10%;
}

@keyframes bottom {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(30%);
  }
}
@keyframes top {
  0% {
    transform: translateY(30%);
  }
  100% {
    transform: translateY(100%);
  }
}
@keyframes bottom-drip {
  0% {
    left: 45%;
    transform: translateY(-100%);
    width: 10%;
  }
  5% {
    transform: translateY(0);
  }
  45%,
  100% {
    left: 50%;
    transform: translateY(0);
    width: 0;
  }
}
.screen {
  width: 100%;
  height: 0;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  color: var(--light);
}

.screen__inner {
  display: flex;
  flex-wrap: wrap;
  margin: 2rem auto;
}
.img-back {
  position: fixed;
  width: 110px;
  height: 30px;
  cursor: pointer;
  transition: 0.5s;
}
.img-back:hover {
  filter: brightness(150%);
}
.img-front {
  position: absolute;
  width: 70px;
  height: 100px;
  top: 40%;
  right: 100px;
  position: fixed;
  transition: 0.5s;
}
p {
  color: #333;
  right: 115px;
  top: 58%;
  position: absolute;
  position: fixed;
}
.img-front {
  cursor: pointer;
  animation: shake 2s;
  animation-iteration-count: infinite;
}
@keyframes shake {
  0% {
    transform: translate(0, 0) rotate(0);
  }
  10% {
    transform: translate(-5px, 0) rotate(-5deg);
  }
  20% {
    transform: translate(5px, 0) rotate(5deg);
  }
  30% {
    transform: translate(-5px, 0) rotate(-5deg);
  }
  40% {
    transform: translate(5px, 0) rotate(5deg);
  }
  50% {
    transform: translate(-5px, 0) rotate(-5deg);
  }
  60% {
    transform: translate(5px, 0) rotate(5deg);
  }
  70% {
    transform: translate(-5px, 0) rotate(-5deg);
  }
  80% {
    transform: translate(5px, 0) rotate(5deg);
  }
  90% {
    transform: translate(-5px, 0) rotate(-5deg);
  }
  100% {
    transform: translate(0, 0) rotate(0);
  }
}
h1 {
  font-size: 80px;
  position: absolute;
  position: fixed;
  top: 50px;
  left: 83%;
}
h2 {
  font-size: 50px;
  text-align: center;
  line-height: 400px;
  color: #fff;
}
.box {
  visibility: hidden;
  z-index: 1;
  position: absolute;
  position: fixed;
  width: 600px;
  height: 400px;
  border: 1px solid #333;
  top: 15%;
  left: 25.5%;
  border-radius: 20px;
  background-color: #333;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  opacity: 0.8;
  transition: transform 0.4s, top 0.4s;
  transform: translateY(-70%) scale(0.1);
}
span {
  position: absolute;
  bottom: 70px;
  border: 1px solid #fff;
  border-radius: 20px;
  font-size: 20px;
  cursor: pointer;
  padding: 10px 28px;
  left: 39%;
}

span:hover {
  color: #333;
  background-color: #fff;
}
</style>
