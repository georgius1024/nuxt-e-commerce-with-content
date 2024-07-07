<template>
  <div class="container">
    <ol class="breadcrumb">
      <li class="breadcrumb-item active">Categories</li>
    </ol>

    <h1>Categories</h1>
    <div v-if="loading">
      <div class="d-flex flex-row gap-4">
        <div class="spinner-grow" />
        <div class="spinner-grow" />
        <div class="spinner-grow" />
        <div class="spinner-grow" />
        <div class="spinner-grow" />
      </div>
      <p>Loading...</p>
    </div>

    <ul
      v-else
      class="list-group">
      <li
        class="list-group-item text-capitalize"
        v-for="category in categories"
        :key="category">
        <NuxtLink :to="`/category/${category.slug}`">
          {{ category.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script setup>
  import { ref, onMounted } from "vue";
  import listCategories from "@/services/categories";
  const loading = ref(false);
  const categories = ref([]);
  const load = async () => {
    loading.value = true;
    categories.value = await listCategories();
    loading.value = false;
  };
  onMounted(load);
</script>
