<template>
  <nav class="navbar navbar-expand-lg bg-primary mb-4">
    <div class="container-fluid">
      <NuxtLink to="/" class="navbar-brand text-light">Home</NuxtLink>
      <NuxtLink to="/articles" class="text-white">
        Articles
      </NuxtLink>
      <div class="flex-grow"></div>
      <button v-if="!size" data-testid="checkout" class="btn btn-secondary">Your cart is empty</button>
      <NuxtLink to="/checkout" v-else data-testid="checkout" class="btn btn-secondary">
        {{ size }} product in your cart
      </NuxtLink>
    </div>
  </nav>
</template>
<script setup>
import { computed } from "vue";
import { useCartStore } from "@/stores/cart";
const store = useCartStore();

const size = computed(() => store.size);
</script>
