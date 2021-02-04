import VueRouter from "vue-router";
import Test1 from "./components/Test1";
import Test2 from "./components/Test2";
import Menu from "./components/Menu";

const routers = [
    // {path:"/", component: Menu},
    // {path:"/menu", component:Menu},

    {
        path: "/Test1",
        name: "Test1",
        component: Test1
    },
    {
        path: "/Test2",
        component: Test2
    }
]

const routes = new VueRouter({
    routers
});

export default routes;