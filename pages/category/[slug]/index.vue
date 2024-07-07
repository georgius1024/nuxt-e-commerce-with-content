<template>
  <div class="container">
    <ol class="breadcrumb">
      <li class="breadcrumb-item">
        <NuxtLink to="/">Categories</NuxtLink>
      </li>
      <li class="breadcrumb-item active text-capitalize">{{ category }}</li>
    </ol>

    <h1>Products in category {{ category }}</h1>
    <template v-if="loading">
      <div class="d-flex flex-row gap-4">
        <div class="spinner-grow" />
        <div class="spinner-grow" />
        <div class="spinner-grow" />
        <div class="spinner-grow" />
        <div class="spinner-grow" />
      </div>
      <p>Loading...</p>
    </template>
    <ProductList  v-else :products="products"/>
  </div>
</template>
<script setup>
  import { ref, onMounted } from "vue";
  import listProducts from "@/services/products";
  import ProductList from "@/components/ProductList.vue";

  const route = useRoute()
  const category = route.params.slug
  const loading = ref(false);
  const products = ref([]);
  const load = async () => {
    loading.value = true;
    const data = await listProducts(category);
    products.value = data.products;
    loading.value = false;
  };
  onMounted(load);
 </script>
