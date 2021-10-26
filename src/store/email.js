import { api } from 'boot/axios'
import {date} from 'quasar'

//  import { Notify } from 'quasar'


export default {
  namespaced: true,


  state: {
    email: [],
    result: []
  },

  getters: {
    email: state => state.email,
    result: state => state.result
  },

  actions: {
    // Login action
    async get_email({ commit }, form) {
      try {
        const payload = {
          id: localStorage.getItem('userId'),
          name: form.first_name,
          email: form.email,
          lang: form.lang,
          platform: window.navigator.platform
        }
        const { data } = await api.post('email/get/', payload)

        commit('email_success', data);

      } catch (err) {
        //console.log(err)
      }

    },
    async test_delivery({ commit }, payload) {
      try {
        const { data } = await api.post('email/test-delivery/', payload)
        commit('result_success', data);

      } catch (err) {
        //console.log(err)
      }

    },


    async get_home(commit) {
      try {
        //const { data } = await api.post('email/test-delivery/', payload)
        await localStorage.removeItem('access_token');
        await localStorage.removeItem('refresh_token');
        await localStorage.removeItem('userId');
        delete api.defaults.headers.common['Authorization'];
        commit('result_success', data);

      } catch (err) {
        //console.log(err)
      }

    }

  },

  mutations: {
    email_success(state, email) {
      for (let i = 0; i < 10; i++) {
          email[i].data = new Date(email[i].data);
          email[i].data = email[i].data.toLocaleString()
      }
      state.email = email
    },
    result_success(state, result) {
      state.result = result
    }
  }
}




