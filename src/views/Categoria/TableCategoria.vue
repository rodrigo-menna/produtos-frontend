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
        <tr>
          <td>Pereciveis</td>
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
import { defineComponent } from "vue";

export default defineComponent({
  name: "lista-de-categorias",
});
</script>