<script lang="ts" setup="">
import DownloadIcon from '~/components/icons/DownloadIcon.vue';
import { useExampleStore } from '~/stores/example';

const store = useExampleStore();
function downloadURI() {
  const link = document.createElement('a');
  link.download = store.currentImage?.name || '';
  link.href = store.currentImage?.path || '';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
</script>

<template>
  <div>
    <header
      class="flex items-center justify-center h-[60px] bg-slate-500/50 mb-[-60px] relative z-1"
    >
      <div class="flex items-center gap-20">
        <ul class="flex items-center gap-[12px] text-white text-s">
          <NuxtLink tag="li" to="/" :class="['transition']">Выписка</NuxtLink>
          <NuxtLink tag="li" to="/newborn" :class="['transition']">New Born</NuxtLink>
        </ul>
        <div
          class="inline-flex items-center rounded-[12px] text-white cursor-pointer hover:text-amber-100 transition"
          @click="downloadURI"
        >
          <p class="mr-1">Скачать фото</p>
          <div :class="['p-2', $style['icon-download']]">
            <DownloadIcon />
          </div>
        </div>
      </div>
    </header>
    <main :class="['flex flex-col items-center justify-center h-[100dvh] bg-slate-800 pt-[60px]']">
      <slot @download="downloadURI" />
    </main>
  </div>
</template>

<style module>
.icon-download {
  cursor: pointer;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
