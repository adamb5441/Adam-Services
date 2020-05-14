import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      loggedIn: false,
      navigation: [],
      history: [],

    }),
    mutations: {
      createNavigation (state, payload) {
        state.navigation = payload
      },
      createHistory (state, payload) {
        state.history = payload
      },
      logIn(state){
        state.loggedIn = true
      }
    },
    getters: {
      getNav(state){
        return state.navigation
      },
      getHistory(state){
        return state.navigation
      },
      getters(state){
        return state.isLoggedIn
      }
    }
  })
}

export default createStore
