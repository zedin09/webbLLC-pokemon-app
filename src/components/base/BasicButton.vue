<template>
  <button
    class="mb-4 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >
    {{text}}
  </button>
</template>

<script>
export default {
  name: "BasicButton",
  props:{
    text: String,
  }
};
</script>

<style scoped></style>
