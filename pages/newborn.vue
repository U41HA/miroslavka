<script lang="ts" setup>
import axios from 'axios';

definePageMeta({
  layout: 'default',
});
// const {
//   public: { password },
// } = useRuntimeConfig();

const route = useRoute();
const router = useRouter();

const password = 'Mira14112023';

const pass = ref('');
while (pass.value !== password) {
  pass.value = prompt('Страница защищена паролем');
  console.log(pass.value === null);
  if (pass.value === null) {
    router.push('/');
    break;
  }
}

const { data: images } = await axios.get('/api/json/newborn.json');
</script>

<template>
  <CarouselBase :images="images" />
</template>
