<script lang="ts" setup></script>

<template>
  <main :class="['flex items-center justify-center min-h-[calc(100vh-30px)]']">
    <div
      :class="[
        'flex flex-col space-y-[30px] max-w-fit mx-auto text-center items-center mb-[100px]',
      ]"
    >
      <p :class="['bg-tahiti-100/100 text-lg px-[10px]']">
        Some sample of Nuxt 3 with Pinia, axios and tailwind
      </p>
      <p :class="['text-xl font-poppins']">Custom &lt;Suisse&gt; font</p>
      <p :class="['text-xl']">
        <span :class="['text-tahiti']"> With </span>
        <span :class="['text-tahiti-100']"> custom </span>
        <span :class="['text-tahiti-200']"> colors </span>
      </p>
      <p :class="['text-lg font-suisse']">And custom Font Face</p>
      <ul :class="['flex space-x-[10px] text-base text-slate-700 justify-center w-[100%]']">
        <NuxtLink
          tag="li"
          :to="'https://axios-http.com/docs/intro'"
          :class="['btn-blue transition']"
          :target="'_blank'"
          >Axios</NuxtLink
        >
        <NuxtLink
          tag="li"
          :to="'https://pinia.vuejs.org/ssr/nuxt.html'"
          :class="['btn-blue transition']"
          :target="'_blank'"
          >Pinia</NuxtLink
        >
        <NuxtLink
          tag="li"
          :to="'https://tailwindcss.com/'"
          :class="['btn-blue transition']"
          :target="'_blank'"
          >Tailwind</NuxtLink
        >
      </ul>
    </div>
  </main>
</template>
