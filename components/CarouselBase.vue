<script lang="ts" setup>
import IconLeft from '~/components/icons/IconLeft.vue';
import IconRight from '~/components/icons/IconRight.vue';
import type { IImages } from '~/intefaces/images';

interface Props {
  images: IImages[];
}

import { useKeenSlider } from 'keen-slider/vue.es';
import 'keen-slider/keen-slider.min.css';

const current = ref(1);
const [container, slider] = useKeenSlider({
  initial: current.value,
  slideChanged: (s) => {
    current.value = s.track.details.rel;
  },
});
const props = defineProps<Props>();
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
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-left {
  cursor: pointer;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
