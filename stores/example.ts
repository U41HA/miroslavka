import { defineStore } from 'pinia';

export const useExampleStore = defineStore('example', () => {
  const { $axios } = useNuxtApp();
  const examples = ref(['example_1', 'example_2']);
  const todos = ref();

  async function fetchTest() {
    const { data: todosData } = await $axios.get('https://jsonplaceholder.typicode.com/todos');
    todos.value = todosData;
  }

  function clearStore() {
    todos.value = [];
  }

  return {
    examples,
    todos,
    clearStore,
    fetchTest,
  };
});
