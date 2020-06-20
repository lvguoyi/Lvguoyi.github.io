export default {
    path: "/my",
    component: () => import("../views/my.vue"),
    children: [
        {
            path: "music",
            component: () => import("../components/my/music.vue"),
        },
        {
            path: "login",
            component: () => import("../components/my/login.vue"),
            children: [
                {
                    path: "phonelogin",
                    component: () => import("../components/my/phonelogin.vue")
                },
                {
                    path:"numberlogin",
                    component:()=>import("../components/my/numberlogin.vue")
                }
            ]

        },
        {
            path:"register",
            component:()=>import("../components/my/register.vue")
        }

    ]
}