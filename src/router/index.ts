import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Produtos from "@/views/Produtos.vue";
import Categoria from "@/views/Categorias.vue";

const rotas: RouteRecordRaw[] = [
  {
    path: "/",
    name: "HomePage",
    component: Home,
  },
  {
    path: "/produtos",
    name: "ProdutoPage",
    component: Produtos
  },
  {
    path: "/categorias",
    name: "CategoriaPage",
    component: Categoria
  }
];

const roteador = createRouter({
  history: createWebHashHistory(),
  routes: rotas,
});

export default roteador;
