import VuexPersistence from 'vuex-persist'

export default ({ store }) => {
  window.onNuxtReady(() => {

    new VuexPersistence({
      storage: window.localStorage,
      reducer: (state) => {
        return {
          parameters: state.parameters
        }
      }
    }).plugin(store)

  })
}
