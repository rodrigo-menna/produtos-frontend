<template>
  <header>
    <h1>
      <img
        alt="Gerenciador de Produtos"
        src="../assets/product-manager.png"
        width="100rem"
      />
    </h1>
    <nav class="panel mt-5">
      <ul>
        <li>
          <router-link to="/" class="link">
            <i class="fas fa-house"></i>
            Home
          </router-link>
        </li>
        <li>
          <router-link to="/produtos" class="link">
            <i class="fas fa-tasks"></i>
            Produtos
          </router-link>
        </li>
        <li>
          <router-link to="/categorias" class="link">
            <i class="fas fa-project-diagram"></i>
            Categoria
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BarraLateral",
  data() {
    return {};
  },
});
</script>
<style scoped>
h1 {
  text-align: center;
}
strong {
  color: #f95738;
}
header {
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  padding: 2rem;
}
@media only screen and (max-width: 768px) {
  header {
    height: auto;
  }
}
.panel li {
  margin: 8px 0;
}
.link {
  color: #fff;
}
.link:hover {
  color: #faf0ca;
}
.link.router-link-active {
  color: #faf0ca;
}
</style>