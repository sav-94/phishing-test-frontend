import { api } from 'boot/axios'
import { Notify } from 'quasar'

export default {
  namespaced: true,

  state: {
    token: localStorage.getItem('access_token'),
    user: null,
    eduField: [],
    eduLevel: [],
    jobField: [],
    emplType: [],
    hobby: []
  },

  getters: {
    isLoggedIn: state => state.token,
    user: state => state.user,
    eduField: state => state.eduField,
    eduLevel: state => state.eduLevel,
    jobField: state => state.jobField,
    emplType: state => state.emplType,
    hobby: state => state.hobby
  },

  actions: {
    async get_edu_field({ commit }) {
      try {
        const { data } = await api.get('user-characteristics/get/edu-field')
        commit('edu_field_success', data);

      } catch (err) {
        console.log(err)
      }

    },

    async get_edu_level({ commit }) {
      try {
        const { data } = await api.get('user-characteristics/get/edu-level')
        commit('edu_level_success', data);

      } catch (err) {
        console.log(err)
      }

    },

    async get_job_field({ commit }) {
      try {
        const { data } = await api.get('user-characteristics/get/job-field')
        commit('job_field_success', data);

      } catch (err) {
        console.log(err)
      }

    },

    async get_empl_type({ commit }) {
      try {
        const { data } = await api.get('user-characteristics/get/empl-type')
        commit('empl_type_success', data);

      } catch (err) {
        console.log(err)
      }

    },

    async get_hobby({ commit }) {
      try {
        const { data } = await api.get('user-characteristics/get/hobby')
        commit('hobby_success', data);

      } catch (err) {
        console.log(err)
      }

    },

    async register({ commit }, payload) {
      try {
        const { data } = await api.post('auth/user/create/', payload)
        //  Store the token into the local storage
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);
        // store user ID
        localStorage.setItem('userId', data.id);
        // Set the axios defaults
        api.defaults.headers.common['Authorization'] = 'JWT ' + data.access;
        //Notify.create({ type: 'positive', message: 'Data entered successfully!' })
        commit('register_success', data);
      } catch (err) {
        Notify.create({ type: 'negative', message: 'Something went wrong...' })
        console.log(err)
      }

    }

  },

  mutations: {
    edu_field_success(state, eduField) {
      state.eduField = eduField
    },
    edu_level_success(state, eduLevel) {
      state.eduLevel = eduLevel
    },
    job_field_success(state, jobField) {
      state.jobField = jobField
    },
    empl_type_success(state, emplType){
      state.emplType = emplType
    },
    hobby_success(state, hobby) {
      state.hobby = hobby
    },
    register_success(state, data) {
      state.user = data.id
      state.token = data.access
      state.isLoggedIn = data.access
      console.log(data.access)
      //router.push({name: 'infoBeforeStart'})
      //location.reload()
    },
  }
}
