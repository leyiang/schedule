import {createRouter, createWebHistory} from "vue-router";
import TimePage from "./pages/time.vue";
import TaskPage from "./pages/task.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: TaskPage
        },

        {
            path: "/time",
            component: TimePage,
        }
    ]
});


export { router };