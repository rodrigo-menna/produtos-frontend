<template>
  <div>
    <h1 class="title">Lista de Categorias</h1>
    <router-link to="/categorias/novo" class="button is-info mb-2">
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
      <span>Cadastrar Categoria</span>
    </router-link>
    <table class="table is-fullwidth is-hoverable">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="categoria in categorias" :key="categoria.id">
          <td>{{ categoria.nome }}</td>
          <td>
            <button class="button ml-2 is-link">
              <span class="icon is-small">
                <i class="fas fa-pencil-alt"></i>
              </span>
            </button>
            <button class="button ml-2 is-danger">
              <span class="icon is-small">
                <i class="fas fa-trash"></i>
              </span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "vue";
import http from "@/plugins/axios";
import ICategoria from "@/Interfaces/ICategoria";

export default defineComponent({
  name: "lista-de-categorias",
  data() {
    return {
      categorias: [] as Array<ICategoria>,
    };
  },
  mounted() {
    this.loadCategorias();
  },
  methods: {
    async loadCategorias() {
      this.categorias = (await http.get("/categoria/find")).data;
    },
  },
});
</script>