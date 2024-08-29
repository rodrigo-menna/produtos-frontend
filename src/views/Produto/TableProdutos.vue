<template>
  <div>
    <h1 class="title">Lista de Produtos</h1>
    <router-link to="/produtos/novo" class="button is-info mb-2">
      <span class="icon is-small">
        <i class="fas fa-plus"></i>
      </span>
      <span>Cadastrar Produto</span>
    </router-link>

    <table class="table is-fullwidth">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Preço</th>
          <th>Data de Validade</th>
          <th>Imagem</th>
          <th>Categoria</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Banana</td>
          <td>cacho de banana</td>
          <td>R$14.99</td>
          <td>27/05/2024</td>
          <td>Figura 01</td>
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
  name: "lista-de-produtos",
});
</script>