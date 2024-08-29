<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "CategoriaPage",
});
</script>

<style scoped>
.container {
  padding: 2rem;
}
</style>