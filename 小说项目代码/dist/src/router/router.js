export const routes = [
    {
        path: "/homePage",
        name: "homePage",

        component: () => import('../views/homePage.vue')
    },
    {
        path: "/my",
        name: "my",

        component: () => import('../views/my.vue')
    },
    {
        path: "/search",
        name: "search",

        component: () => import('../views/search.vue'),

    },
    {
        path: "/book",
        name: "book",

        component: () => import('../views/book.vue')
    },
    {
        path: "/read",
        name: "read",

        component: () => import('../views/read.vue')

    },
    {
        path: "/details",
        name: "details",

        component: () => import('../views/details.vue')
    },
    {
        path: '*',
        redirect: {
            name: 'homePage'
        }

    }
]