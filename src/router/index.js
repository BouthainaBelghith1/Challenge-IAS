import { createRouter, createWebHistory } from "vue-router";

import dashboardView from "@/pages/master/dashboardView";
import realtimeView from '@/pages/realtimeView'
import historiqueView from '@/pages/historiqueView'

const routes =  [
    {
        name: 'Dashboard',
        path: '/',
        component: dashboardView,
        children: [
            {
                name: 'realtime',
                path: '/realtime',
                component: realtimeView
            },
            {
                name: 'historique',
                path: '/historique',
                component: historiqueView
            },
        ]
    },
    
];

const router = Router();
export default router;
function Router(){
    const router = new createRouter({
        history: createWebHistory(),
        routes,
    });
    return router;
}
