import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      loggedIn: false,
      navigation: [],
      history: [],
      selected: {
          url: "",
          type: "",
          body: {}
      }

    }),
    mutations: {
      setURL(state, payload) {
        state.selected.url = payload
      },
      setType(state, payload) {
        state.selected.type = payload
      },
      addHistory(state, payload){

      },
      selectRequest(state, payload) {
        state.selected = payload
      },
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
      getSelected(state){
        return state.selected
      },
      getHistory(state){
        return state.history
      },
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
