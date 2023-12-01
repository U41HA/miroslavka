<script lang="ts" setup>
import axios from 'axios';

definePageMeta({
  layout: 'default',
});
const { data: images } = await axios.get('/api/json/newborn.json');
</script>

<template>
  <CarouselBase :images="images" />
</template>
