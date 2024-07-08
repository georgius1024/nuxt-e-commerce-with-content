<template>
  <div class="container articles py-5">
    <ContentDoc :path="`/${path}`" />
    <hr>
    <NuxtLink v-if="path !== 'list'" to="/articles">Back to list of articles</NuxtLink>
  </div>
</template>
<script setup>
  const route = useRoute();
  const path = route.params.slug || "list";
</script>
