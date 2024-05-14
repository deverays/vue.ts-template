/**Vue */
import { createRouter, createWebHistory, RouteComponent } from "vue-router";

const routes = [
    {
        name: "homepage",
        path: "/",
        component: (): Promise<RouteComponent> => import("../views/HomePage.vue"),
    },
];
const router = createRouter({
    routes,
    history: createWebHistory(),
});

router.beforeEach(async (to, from, next) => {
    const { VITE_PROJECT_TITLE } = import.meta.env;
    document.title = VITE_PROJECT_TITLE;

    next();
});

export default router;
