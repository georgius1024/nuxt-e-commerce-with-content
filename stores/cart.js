import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => {
    return { products: {} };
  },
  getters: {
    cart(state) {
      return Object.values(state.products);
    },
    size(state) {
      return Object.keys(state.products).length;
    },
    inCart() {
      return (id) => Boolean(this.products[id]);
    },
  },
  actions: {
    add(product) {
      this.products[product.id] = product;
    },
    remove(product) {
      delete this.products[product.id];
    },
  },
  persist: true,
});
