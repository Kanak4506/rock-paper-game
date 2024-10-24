<script setup></script>
<template>
  <div class="tw-bg-teal-400 tw-flex tw-flex-col tw-items-center tw-h-screen" style="font-family: cursive">
    <h1 class="tw-text-3xl tw-font-bold tw-m-10">
      Are You Ready To Play??
    </h1>
    <div class="tw-text-4xl tw-font-bold tw-text-center">
      Stone, Paper, Scissor
    </div>
    <div class="tw-mt-10 tw-mb-3 tw-font-semibold tw-text-xl">Select the Mode</div>
    <ul class="tw-list-none tw-text-lg">
      <li class="tw-p-1 tw-h-10 tw-w-52 hover:tw-text-slate-700 over:tw-font-semibold"><router-link to="2VGame">2 Player Game</router-link></li>
      <li class="tw-p-1 tw-h-10 tw-w-52 hover:tw-text-slate-700 over:tw-font-semibold"><router-link to="Vs-Computer">Player Vs Computer</router-link></li>
      <li class="tw-p-1 tw-h-10 tw-w-52 hover:tw-text-slate-700 over:tw-font-semibold"><router-link to="nhi-khelna">I do not want to play</router-link></li>
    </ul>
  </div>
</template>
<style scoped></style>