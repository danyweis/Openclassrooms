<template>
  <div id="app">
    <h1>{{ restaurantName }}</h1>
    <p class="description">
      Bonjour to {{ restaurantName }}! We are known for our freshly baked bread
      and french pastries! Give you morning a warm start or treat yourself in
      the middle of the day. Our butter is imported from local farmers in
      France. Once you take your first bite, you will see why everyone can't get
      enough!
    </p>

    <MenuItem :simpleMenu="simpleMenu" :addToShoppingCart="addToShoppingCart" />

    <aside class="shopping-cart">
      <h2>Shopping Cart: {{ items }} items</h2>
    </aside>

    <footer class="footer">
      <p>{{ copyright }}</p>
    </footer>
  </div>
</template>

<script>
import MenuItem from "../components/MenuItem.vue";

export default {
  name: "Home",
  components: {
    MenuItem,
  },
  data() {
    return {
      restaurantName: "Cafe avec vue",
      items: 0,
      quantityInCart: "",
      simpleMenu: [
        {
          name: "Crossiant",
          image: {
            source: "/images/crossiant.jpg",
            alt: "A crossiant",
          },
          inStock: true,
          quantity: 1,
          price: 2.99,
        },
        {
          name: "French Baguette",
          image: {
            source: "/images/french-baguette.jpeg",
            alt: "Four French Baguettes",
          },
          inStock: true,
          quantity: 1,
          price: 3.99,
        },
        {
          name: "Éclair",
          image: {
            source: "/images/eclair.jpg",
            alt: "Chocolate Éclair",
          },
          inStock: false,
          quantity: 1,
          price: 4.99,
        },
      ],
    };
  },
  methods: {
    addToShoppingCart(item) {
      this.items += Number(item.quantity);
    },
    checkDate() {
      const evenDate = new Date().getDay();
      if (evenDate % 2 === 0) {
        this.simpleMenu.forEach((element) => {
          element.price *= 0.9;
          element.price = Math.round(element.price * 100) / 100;
        });
      }
    },
  },
  computed: {
    copyright() {
      const currentYear = new Date().getFullYear();
      return `Copyright ${this.restaurantName} ${currentYear}`;
    },
  },
  created() {
    this.checkDate();
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
