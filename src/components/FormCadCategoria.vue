<template>
  <h1 class="title">Cadastro de Categorias</h1>
  <form class="box" @submit.prevent="handleSubmit()">
    <div class="field">
      <label class="label" for="categoriaNome">Nome:</label>
      <div class="control">
        <input
          id="categoriaNome"
          class="input"
          type="text"
          placeholder="Informe o nome da categoria"
          v-model="categoria.nome"
        />
      </div>
    </div>

    <button class="button is-primary" type="submit">Salvar</button>
    <router-link to="/categorias" class="button is-danger ml-2">
      <span>Voltar</span>
    </router-link>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from "vue-router";
import http from '@/plugins/axios';
import ICategoria from '@/Interfaces/ICategoria';

export default defineComponent({
  name: "formulario-categoria",
  data() {
    return {
      categoria: {} as ICategoria,
      router: useRouter()
    }
  },
  methods: {
    async handleSubmit() {
      await http.post('/categoria/create', this.categoria);
      this.router.push("/categorias")
    }
  }
})
</script>