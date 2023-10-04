import { createRouter, createWebHistory } from "vue-router";

export const routes = [
  {
    path: "/collision_detection",
    component: () => import("../views/collision-detection.vue"),
  },
  {
    path: "/custom_node_shape",
    component: () => import("../views/custom-node-shape.vue"),
  },
  {
    path: "/directional_links_particles",
    component: () => import("../views/directional-links-particles.vue"),
  },
  {
    path: "/fit_to_canvas",
    component: () => import("../views/fit-to-canvas.vue"),
  },
  {
    path: "/graph_context_menu",
    component: () => import("../views/graph-context-menu.vue"),
  },
  {
    path: "/highlight_2d",
    component: () => import("../views/highlight-2d.vue"),
  },
  {
    path: "/",
    component: () => import("../views/home.vue"),
  },
  {
    path: "/text_nodes_2d",
    component: () => import("../views/text-nodes-2d.vue"),
  },
  {
    path: "/tree",
    component: () => import("../views/tree.vue"),
  },
];

export default createRouter({
  history: createWebHistory(
    (import.meta as any).env.VITE_MODE === "production"
      ? "/lifetoys-vue-force-graph/"
      : "/"
  ),
  routes,
});
