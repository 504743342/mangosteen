import { RouteRecordRaw } from "vue-router";
import { Bar } from "../views/Bar";
import { Foo } from "../views/Foo";
import { first } from "../components/welcome/first";
import { second } from "../components/welcome/second";
import { third } from "../components/welcome/third";
import { forth } from "../components/welcome/forth";
import { welcome } from "../views/Welcome";

export const routes: RouteRecordRaw[] = [
    { path: '/', component: Bar },
    { path: '/about', component: Foo },
    { 
        path: '/welcome',
        component: welcome,  
        children: [
            {path: '1', component: first},
            {path: '2', component: second},
            {path: '3', component: third},
            {path: '4', component: forth}
        ]}
]