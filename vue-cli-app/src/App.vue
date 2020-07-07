<template>
  <div id="app">
    <h1>{{ restaurantName }}</h1>
    <p class="description">
      Bonjour to {{ restaurantName }}! We are known for our freshly baked
      bread and french pastries! Give you morning a warm start or treat
      yourself in the middle of the day. Our butter is imported from local
      farmers in France. Once you take your first bite, you will see why
      everyone can't get enough!
    </p>

    <MenuItem :simpleMenu="simpleMenu" :addToShoppingCart="addToShoppingCart" />

    <aside class="shopping-cart">
      <h2>Shopping Cart: {{ items }} items</h2>
    </aside>

    <h2>Contact Us</h2>
    <p>Address: {{ address }}</p>
    <p>Phone: {{ phone }}</p>
    <p>Email: {{ email }}</p>
    <p>Hours:</p>
    <ul>
      <li>M-F: 06:00 to 16:00</li>
      <li>Saturday: 07:00 to 14:00</li>
      <li>Sunday: 07:00 to 12:00</li>
    </ul>
    <footer class="footer">
      <p>{{ copyright }}</p>
    </footer>
  </div>
</template>

<script>
import MenuItem from "./components/MenuItem.vue";

export default {
  name: "App",
  components: {
    MenuItem
  },
  data() {
    return {
      restaurantName: "Cafe avec vue",
      address: "9274 Beurre Ave, Paris, France",
      phone: "+08 88 88 88 88 88",
      email: "hello@cafewithavue.bakery",
      items: 0,
      quantityInCart: "",
      simpleMenu: [
        {
          name: "Crossiant",
          image: {
            source: "/images/crossiant.jpg",
            alt: "A crossiant"
          },
          inStock: true,
          quantity: 1
        },
        {
          name: "French Baguette",
          image: {
            source: "/images/french-baguette.jpeg",
            alt: "Four French Baguettes"
          },
          inStock: true,
          quantity: 1
        },
        {
          name: "Éclair",
          image: {
            source: "/images/eclair.jpg",
            alt: "Chocolate Éclair"
          },
          inStock: false,
          quantity: 1
        }
      ]
    };
  },
  methods: {
    addToShoppingCart(item) {
      this.items += Number(item.quantity);
    }
  },
  computed: {
    copyright() {
      const currentYear = new Date().getFullYear();
      return `Copyright ${this.restaurantName} ${currentYear}`;
    }
  }
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
