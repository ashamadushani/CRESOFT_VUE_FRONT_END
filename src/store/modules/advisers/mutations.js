export default {
    loadAdvisers(state, payload){
        state.advisersList = payload
        state.advisersCount = payload.length
    }
}