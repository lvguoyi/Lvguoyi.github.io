export default{
    path:"/ksong",
    component:()=>import("../views/ksong.vue"),
    children:[
     {
        path:"recommend",
        component:()=>import("../components/ksong/recommend.vue")
     }
    ]
}