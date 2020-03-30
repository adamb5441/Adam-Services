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
    }
  })
}

export default createStore