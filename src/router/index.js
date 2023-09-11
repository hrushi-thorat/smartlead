import { createRouter, createWebHistory } from "vue-router";
import LoginView from "../views/LoginView.vue";

const routes = [
  {
    path: "/",
    name: "login",
    meta: { guestOnly: true },
    component: LoginView,
  },
  {
    path: "/dashboard",
    component: () => import("@/layouts/AppLayout.vue"),
    meta: { requiresAuth: true },
    children: [
      {
        path: "",
        name: "dashboard",
        component: () => import("../views/DashboardView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem("currentUser") !== null;

  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      next({ name: "login" });
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.guestOnly)) {
    // If the user is logged in and tries to visit the login page, redirect to dashboard
    if (isAuthenticated) {
      next({ name: "dashboard" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
