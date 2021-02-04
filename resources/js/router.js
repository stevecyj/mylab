import VueRouter from "vue-router";
// import Test1 from "./components/Test1";
// import Test2 from "./components/Test2";
// import Menu from "./components/Menu";

const routes = [
    // {path:"/", component: Menu},
    // {path:"/menu", component:Menu},

    {
        path: "/Test1",
        name: "Test1",
        // component: Test1
        component: () =>
            import(/* webpackChunkName: "Test1" */ "./components/Test1")
    },
    {
        path: "/Test2",
        // component: Test2
        component: () =>
            import(/* webpackChunkName: "Test2" */ "./components/Test2")
    }
];

const router = new VueRouter({
    routes
});

export default router;
