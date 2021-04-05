import { createRouter, createWebHistory } from "vue-router";
import Show from './pages/Show'
import Add from './pages/Add'
import Edit from './pages/Edit'
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes:
        [
            {
                path: '/',
                component: Show,
                name: "show",
                props: true
            },
            {
                path: '/add',
                component: Add,
                name: "add",
                props: true

            },
            {
                path: '/edit',
                component: Edit,
                name: "edit",
                props: true

            },
        ]
});

export default router;