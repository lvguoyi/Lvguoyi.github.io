export default {
    path: "/find",
    component: () => import("../views/find.vue"),
    children: [
        {
            path: "recommend",
            component: () => import("../components/find/recommend.vue")
        },
       
    ],

}