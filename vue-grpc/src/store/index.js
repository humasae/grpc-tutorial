import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const APP_GETTERS = {
    GRPC_CLIENT: 'grpcClient'
}

export const APP_MUTATIONS = {
    GRPC_CLIENT: 'grpcClient'
}

const store = new Vuex.Store({
    state () {
      return {
        grpcClient: 0
      }
    },
    getters: {
        [APP_GETTERS.GRPC_CLIENT]: (state) => {
            return state.grpcClient
        }
    },
    mutations: {
      [APP_MUTATIONS.GRPC_CLIENT]: (state, value) => {
        Vue.set(state, 'grpcClient', value)
      }
    }
  })

export default store;