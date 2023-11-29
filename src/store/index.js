import {createStore} from 'vuex';
import { categorias } from '../database';

const store = createStore({
    state: {
        lead:{},
        complementaryInfos:{},
        modelos:[],
        modelosSelected:[],
        step: 1
    },
    getters: {

    },
    mutations: {
        storeLead(state, data){
            state.lead = data;
        },
        addComplementaryInfos(state, data){
            state.complementaryInfos = data;
        },
        searchModels(state, data){
            state.modelos = data
        },
        adicionarModeloSelecionado(state, modelo) {
            state.modelosSelected.push(modelo);
        },
        removerModeloSelecionado(state, modeloId) {
            state.modelosSelected = state.modelosSelected.filter((modelo) => modelo.id !== modeloId);
        },
        skipStep(state, data){
            state.step = data
        }
    },
    actions: {
        storeLead(context,  { data, router }){
            context.commit('storeLead', data)
            if(data.usingFor == 'Trabalho em app'){
                router.push('/assinatura/falha')
            } else {
                router.push('/assinatura/sucesso')
                context.commit('skipStep', 2)
            }
        },
        addComplementaryInfos(context, {data,router}){
            context.commit('addComplementaryInfos', data)
            router.push('/assinatura/cotacao')
            context.commit('skipStep', 3)
        },
        searchModels(context, data){
            const categoria = data.categoria 
            context.commit('searchModels', categorias[categoria]) 
        },
        adicionarModeloSelecionado(context, data) {
            context.commit('adicionarModeloSelecionado', data);
        },
        removerModeloSelecionado(context, data) {
            context.commit('removerModeloSelecionado', data);
        },
        sendQuotation(context, {router}){
            if(import.meta.env.VITE_REACT_APP_SHOW_TAGSEMPARAR_STEP == 1){
                router.push('/assinatura/opicionais')
            } else {
                router.push('/assinatura/concluido')
            }
        },
        sendTagSemParar(context, {data, router}){
            router.push('/assinatura/concluido')
        }
    }
});

export default store;