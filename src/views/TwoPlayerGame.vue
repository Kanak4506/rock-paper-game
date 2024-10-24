<script setup>
import { ref } from "vue";

const p1Output = ref("");
const p2Output = ref(null);
const result = ref("");

function player1Output(event) {
  p1Output.value = event.target.innerText;
}
function player2Output(event) {
  p2Output.value = event.target.innerText;
}

function decisionFactor() {
  console.log(p1Output.value);

  console.log(p2Output.value);
  if (p1Output.value === null || p2Output.value === null) {
    alert("Please make a choice to see result");
  } else if (p1Output.value === p2Output.value) {
    console.log("Match draw");
    result.value = "Match draw";
  } else {
    if (p1Output.value === "Stone" && p2Output.value === "Paper") {
      console.log("person 2 won");
      result.value = "Person 2";
    } else if (p1Output.value === "Stone" && p2Output.value === "Scissor") {
      console.log("person 1 won");
      result.value = "Person 1";
    } else if (p1Output.value === "Scissor" && p2Output.value === "Stone") {
      console.log("person 2 won");
      result.value = "Person 2";
    } else if (p1Output.value === "Paper" && p2Output.value === "Stone") {
      console.log("person 1 won");
      result.value = "Person 1";
    }  else if (p1Output.value === "Paper" && p2Output.value === "Scissor") {
      console.log("person 1 won");
      result.value = "Person 1";
    } else if (p1Output.value === "Scissor" && p2Output.value === "Paper") {
      console.log("person 1 won");
      result.value = "Person 1";
    }
  }
}
</script>

<template>
  <div class="tw-p-3 tw-text-white tw-bg-black tw-h-screen">
    <div class="tw-text-3xl tw-font-bold tw-text-center tw-p-20">
      Stone, Paper, Scissor
    </div>
    <div class="tw-flex tw-justify-center tw-items-center tw-gap-20">
      <div>
        <div class="tw-text-xl tw-font-semibold tw-border tw-p-2">Player 1</div>
        <ul class="tw-list-none tw-cursor-pointer">
          <li @click="player1Output" class="tw-p-2 tw-m-2">Stone</li>
          <li @click="player1Output" class="tw-p-2 tw-m-2">Paper</li>
          <li @click="player1Output" class="tw-p-2 tw-m-2">Scissor</li>
        </ul>
      </div>
      <div>
        <div class="tw-text-xl tw-font-semibold tw-border tw-p-2">Player 2</div>
        <ul class="tw-list-none tw-cursor-pointer">
          <li @click="player2Output" class="tw-p-2 tw-m-2">Paper</li>
          <li @click="player2Output" class="tw-p-2 tw-m-2">Scissor</li>
          <li @click="player2Output" class="tw-p-2 tw-m-2">Stone</li>
        </ul>
      </div>
    </div>
    <div class="tw-text-center tw-m-8">
      <div
        @click="decisionFactor"
        class="tw-cursor-pointer tw-inline tw-bg-teal-700 tw-p-2 tw-rounded"
      >
        Result
      </div>
    </div>
    <div>
      <div v-if="result">
        <div
          class="tw-m-2 tw-text-center tw-font-semibold tw-underline tw-text-pink-600"
        >
          {{ result }} WON !!
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>