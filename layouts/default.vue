<script lang="ts" setup=""></script>

<template>
  <div>
    <header
      class="flex items-center justify-center h-[60px] bg-slate-500/50 mb-[-60px] relative z-1"
    >
      <ul class="flex items-center gap-[12px] text-white">
        <NuxtLink tag="li" to="/" :class="['transition']">New Born</NuxtLink>
        <NuxtLink tag="li" to="/outlet" :class="['transition']">Выписка</NuxtLink>
      </ul>
    </header>
    <main :class="['flex flex-col items-center justify-center h-[100dvh] bg-slate-800 pt-[60px]']">
      <slot />
    </main>
  </div>
</template>

<style module></style>
