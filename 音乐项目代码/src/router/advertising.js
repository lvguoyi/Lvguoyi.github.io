export default{
    path:"/advertising",
    component:()=>import("../components/find/public/advertising.vue"),
    beforeEnter: (to, from, next) => {
        if(localStorage.advertising){
            next()
        }else{
            localStorage.advertising = true;
            next("/guide")
        }
    }
}