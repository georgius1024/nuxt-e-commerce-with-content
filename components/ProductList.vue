<template>
  <div class="d-flex flex-row flex-wrap">
    <ProductPreview
      v-for="product in products"
      :product="product"
      :key="product.id"
      class="mb-2 me-2"
      @click="navigate" />
  </div>
</template>
<script setup>
  import ProductPreview from "@/components/ProductPreview.vue";
  const props = defineProps({
    products: {
      type: Array,
      required: true,
    },
  });

  const navigate = (id) => {
    const product = props.products.find(e => e.id === id)
    navigateTo(`/category/${product?.category}/${id}`)
  }
</script>
