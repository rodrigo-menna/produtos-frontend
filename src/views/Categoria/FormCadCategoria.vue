<template>
  <h1 class="title">Cadastro de Categorias</h1>
  <form class="box">
    <div class="field">
      <label class="label">Nome:</label>
      <div class="control">
        <input
          class="input"
          type="text"
          placeholder="Informe o nome da categoria"
        />
      </div>
    </div>

    <button class="button is-primary">Salvar</button>
    <router-link to="/categorias" class="button is-danger ml-2">
      <span>Voltar</span>
    </router-link>
  </form>
</template>