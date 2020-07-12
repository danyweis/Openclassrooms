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

          <BaseButton>
            <button @click="updateShoppingCart(item)">
              Add to Shopping Cart
            </button>
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import BaseButton from "./BaseButton.vue";
import { mapState } from "vuex";

export default {
  name: "MenuItem",
  components: {
    BaseButton,
  },
  // props: {
  //   simpleMenu: { type: Array, default: () => [] }
  // },
  methods: {
    updateShoppingCart(item) {
      //console.log(this.$emit("add-items-to-card", { items: this.item }));
      this.$emit("add-items-to-cart", { items: item });
    },
  },
  computed: {
    ...mapState({
      simpleMenu: "simpleMenu",
    }),
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
.menu {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.menu-item {
  display: flex;
  width: 500px;
  justify-content: space-between;
  margin-bottom: 30px;
}

.menu-item__image {
  max-width: 300px;
}
</style>
