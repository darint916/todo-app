import {createWebHistory, createRouter} from 'vue-router';
import Listed from "../ListedShown.vue";
import HomeTest from "../components/HomeTest.vue";
import NotFound from "../components/NotFound.vue";
const routes = [
    {
        path: "/",
        name: "ListedShown",
        component: Listed,
    },
    {
        path: "/todo",
        name: "HomeTest",
        component: HomeTest,
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;