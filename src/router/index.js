import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path : '/assinatura',
        name: 'assinatura',
        component: () => import("../views/SignCar.vue")
    },
    {
        path : '/assinatura/:feedback',
        name: 'sucesso',
        component: () => import("../views/AnalisysFeedback.vue") 
    },
    {
        path: '/assinatura/contrato',
        name: 'contract',
        component: () => import("../views/ContractSpecification.vue")
    },
    {
        path: '/assinatura/cotacao',
        name: 'quotation',
        component: () => import("../views/Quotation.vue")
    },
    {
        path: '/assinatura/opicionais',
        name: 'sem parar',
        component: () => import("../views/SemPararTag.vue")
    },
    {
        path: '/assinatura/concluido',
        name: 'concluido',
        component: () => import("../views/FinishSteps.vue")
    }
]

const router = createRouter({history: createWebHistory(), routes});

export default router;