<script setup>
import { onMounted, ref } from "vue";

const computerOutcomes = ref(["Stone", "Paper", "Scissor"]);
const pOutput = ref(null);
const computerOutput = ref("");
const result = ref("");

function generateRandomNumbers() {
  computerOutput.value = computerOutcomes.value[Math.floor(Math.random() * 3)];
  console.log(`oho computer value: ${computerOutput.value}`);
}
onMounted(() => {
  generateRandomNumbers();
});

function playerOutput(event) {
  pOutput.value = event.target.innerText;
}

function decisionFactor() {
  console.log(computerOutput.value);

  console.log(pOutput.value);
  if (pOutput.value === null) {
    alert("Please make a choice to see result");
  } else if (computerOutput.value === pOutput.value) {
    console.log("Match draw");
    result.value = "Match draw";
  } else {
    if (computerOutput.value === "Stone" && pOutput.value === "Paper") {
      console.log("You won");
      result.value = "You won";
    } else if ( computerOutput.value === "Stone" && pOutput.value === "Scissor" ) {
      console.log("You lose");
      result.value = "You lose";
    } else if (
      computerOutput.value === "Scissor" && pOutput.value === "Stone"
    ) {
      console.log("You won");
      result.value = "You won";
    } else if (computerOutput.value === "Paper" && pOutput.value === "Stone") {
      console.log("You lose");
      result.value = "You lose";
    } else if (computerOutput.value === "Paper" && pOutput.value === "Scissor") {
      console.log("You won");
      result.value = "You won";
    } else if (computerOutput.value === "Scissor" && pOutput.value === "Paper") {
      console.log("You lose");
      result.value = "You lose";
    }
  }
  generateRandomNumbers();
}
</script>

<template>
  <div class="tw-p-3 tw-text-white tw-bg-orange-300 tw-h-screen">
    <div class="tw-text-3xl tw-font-bold tw-text-center tw-p-20">
      Stone, Paper, Scissor
    </div>
    <div class="tw-flex tw-justify-center tw-items-center tw-gap-20">
      <div>
        <div class="tw-text-xl tw-font-semibold tw-border tw-p-2">Computer</div>
        <ul class="tw-list-none tw-cursor-pointer">
          <li class="tw-p-2 tw-m-2">Stone</li>
          <li class="tw-p-2 tw-m-2">Paper</li>
          <li class="tw-p-2 tw-m-2">Scissor</li>
        </ul>
      </div>
      <div>
        <div class="tw-text-xl tw-font-semibold tw-border tw-p-2">Player 1</div>
        <ul class="tw-list-none tw-cursor-pointer">
          <li @click="playerOutput" class="tw-p-2 tw-m-2">Paper</li>
          <li @click="playerOutput" class="tw-p-2 tw-m-2">Scissor</li>
          <li @click="playerOutput" class="tw-p-2 tw-m-2">Stone</li>
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
          class="tw-m-2 tw-text-center tw-font-semibold tw-underline tw-text-red-600"
        >
          {{ result }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>