import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import FormCadProduto from "@/views/Produto/FormCadProduto.vue";
import TableProdutos from "@/views/Produto/TableProdutos.vue";
import TableCategoria from "@/components/TableCategoria.vue";
import FormCadCategoria from "@/components/FormCadCategoria.vue";

const rotas: RouteRecordRaw[] = [
  { path: "/", component: Home },
  {
    path: "/produtos",
    component: () => import("../views/Produto/Produtos.vue"),
    children: [
      {
        path: "",
        name: "Lista de Produtos",
        component:  TableProdutos,
      },
      {
        path: "novo",
        name: "Novo Produto",
        component: FormCadProduto,
      },
    ],
  },
  {
    path: "/categorias",
    component: () => import("../views/Categoria/Categorias.vue"),
    children: [
      {
        path: "",
        name: "Lista de Categorias",
        component: TableCategoria,
      },
      {
        path: "novo",
        name: "Nova Categoria",
        component: FormCadCategoria,
      },
    ],
  },
];

const roteador = createRouter({
  history: createWebHistory(),
  routes: rotas,
});

export default roteador;
