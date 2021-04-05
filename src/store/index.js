import Vue from 'vue'
import Vuex from 'vuex'
import Service from '../services/Services'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    countries: [],
    country: {},
  },
  mutations: {
    SET_COUNTRIES(state, countries) {
      state.countries = countries
    },
    SET_COUNTRY(state, country) {
      state.country = country
    },
  },
  actions: {
    fetchCountries({ commit }) {
      Service.getCountries()
        .then((response) => {
          commit('SET_COUNTRIES', response.data)
        })
        .catch((error) => {
          console.log('There Was An Error:' + error.response)
        })
    },
    fetchCountry({ commit }, alpha2Code) {
      Service.getCountry(alpha2Code)
        .then((response) => {
          commit('SET_COUNTRY', response.data)
        })
        .catch((error) => {
          console.log('There was an error:', +error.response)
        })
    },
  },
  modules: {},
})
