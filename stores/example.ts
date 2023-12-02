import { defineStore } from 'pinia';
import type { IImages } from '~/intefaces/images';

export const useExampleStore = defineStore('example', () => {
  const currentImage = ref<IImages>();

  function setCurrentImage(image?: IImages) {
    if (image) currentImage.value = image;
  }

  return {
    currentImage,
    setCurrentImage,
  };
});
