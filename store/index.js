import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      navigation: []
    }),
    mutations: {
      createNavigation (state, payload) {
        state.navigation = payload
      }
    },
    getters: {
      getNav(state){
        return state.navigation
      }
    }
  })
}

export default createStore