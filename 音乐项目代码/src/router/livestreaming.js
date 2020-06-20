export default{
    path:"/livestreaming",
    component:()=>import("../views/livestreaming.vue"),
   children:[
       {
           path:"attention",
           component:()=>import("../components/livestreaming/attention.vue")
       }
   ]
}