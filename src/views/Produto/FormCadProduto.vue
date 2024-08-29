<template>
  <div>
    <h1 class="title">Cadastro de Produtos</h1>
    <form class="box">
      <div class="field">
        <label class="label">Nome:</label>
        <div class="control">
          <input class="input" type="text" placeholder="Nome do produto" />
        </div>
      </div>
      <div class="field">
        <label class="label">Descrição:</label>
        <div class="control">
          <textarea
            class="textarea"
            placeholder="Descrição do produto"
          ></textarea>
        </div>
      </div>
      <div class="field">
        <label class="label">Preço:</label>
        <div class="control">
          <input class="input" type="text" placeholder="Preço do produto" />
        </div>
      </div>
      <div class="field">
        <label class="label">Data de Validade:</label>
        <div class="control">
          <input class="input" type="text" placeholder="Preço do produto" />
        </div>
      </div>
      <div class="field">
        <label class="label">Imagem:</label>
        <div class="control">
          <input class="input" type="text" placeholder="Preço do produto" />
        </div>
      </div>
      <div class="select">
        <select>
          <option>Select dropdown</option>
          <option>With options</option>
        </select>
      </div>
      <br /><br />
      <button class="button is-primary">Salvar</button>
      <router-link to="/produtos" class="button is-danger ml-2">
        <span>Voltar</span>
      </router-link>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "formulario-produto",
});
</script>