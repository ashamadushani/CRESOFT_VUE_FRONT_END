import adviserMutations from './mutations.js'
import adviserActions from './actions.js'
import adviserGetters from './getters.js'

export default {
    namespaced: true,
    state() {
        return {
            advisersCount: 0,
            advisersList: []
        };
    },
    mutations: adviserMutations,
    actions: adviserActions,
    getters: adviserGetters,
}