<script lang="ts" setup>
import { useKeenSlider } from 'keen-slider/vue.es';
import DownloadIcon from '~/components/icons/DownloadIcon.vue';
import IconLeft from '~/components/icons/IconLeft.vue';
import IconRight from '~/components/icons/IconRight.vue';
import type { IImages } from '~/intefaces/images';

import 'keen-slider/keen-slider.min.css';

interface Props {
  images: IImages[];
}

const props = defineProps<Props>();

const current = ref(0);
const [container, slider] = useKeenSlider({
  initial: current.value,
  slideChanged: (s) => {
    current.value = s.track.details.rel;
  },
});

const currentImg = computed(() => props.images.find((item, index) => index === current.value));

function downloadURI() {
  const link = document.createElement('a');
  link.download = currentImg.value?.name || '';
  link.href = currentImg.value?.path || '';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}
</script>

<template>
  <div
    ref="container"
    :class="['flex-auto max-w-full overflow-hidden relative']"
    class="keen-slider"
  >
    <div
      v-for="img in images"
      :key="img.id"
      :class="['w-full h-full flex items-center justify-center keen-slider__slide']"
    >
      <NuxtImg :src="img.path" loading="eager" :class="$style.slide" />
    </div>
    <div :class="['absolute text-white', $style['icon-right']]" @click="slider?.next()">
      <IconRight />
    </div>
    <div :class="['absolute text-white', $style['icon-left']]" @click="slider?.prev()">
      <IconLeft />
    </div>
    <div
      :class="[
        'absolute rounded-full border-solid  p-2 border-slate-500 text-slate-700 hover:text-slate-900 hover:drop-shadow-2xl transition',
        $style['icon-download'],
      ]"
      @click="downloadURI"
    >
      <DownloadIcon />
    </div>
  </div>
</template>

<style module>
.slide {
  height: 100% !important;
}

.icon-right {
  cursor: pointer;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-left {
  cursor: pointer;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-download {
  cursor: pointer;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 586px) {
  .slide {
    width: 100% !important;
    height: auto !important;
  }
}
</style>
