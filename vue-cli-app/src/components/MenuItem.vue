<template>
  <section class="menu">
    <h2>Menu</h2>
    <div v-for="item in simpleMenu" :key="item.name" class="menu-item">
      <img
        class="menu-item__image"
        :src="item.image.source"
        :alt="item.image.alt"
      />
      <div>
        <h3>{{ item.name }}</h3>
        <p>{{ item.price }}</p>
        <p v-if="item.inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <div>
          <label for="add-item-quantity">Quantity:</label>
          <input v-model="item.quantity" id="add-item-quantity" type="number" />

          <button @click="addToShoppingCart(item)">Add to Shopping Cart</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MenuItem",
  props: {
    simpleMenu: Array,
    addToShoppingCart: Function,
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
