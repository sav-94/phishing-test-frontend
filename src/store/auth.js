import { api } from 'boot/axios'
import { Notify } from 'quasar'

export default {
  namespaced: true,

  state: {
    token: localStorage.getItem('access_token') || undefined,
    group_code: "",
    user: {}
  },

  getters: {
    group_code: state => state.group_code,
    isLoggedIn: state => state.token,
    user: state => state.user
  },

  actions: {
    // Login action
    async login({ commit }, userInfo) {
      try {
        const { data } = await api.post('auth/user/token/obtain/', userInfo)
        // Store the token into the local storage
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);
        // Set the axios defaults
        api.defaults.headers.common['Authorization'] = 'JWT ' + data.access;
        commit('auth_success', data.access);
        //this.$router.push({ name: 'home' })
      } catch (err) {
        //console.log(err)
      }

    },

    async prova({ commit }, code) {
      try {
        await localStorage.removeItem('access_token');
        await localStorage.removeItem('refresh_token');
        await localStorage.removeItem('userId');
        delete api.defaults.headers.common['Authorization'];
        commit('code_success', code);
        //this.$router.push({ name: 'home' })
      } catch (err) {
        //console.log(err)
      }

    },

    // Register user
    async register({ commit }, form) {
      try {
        const { data } = await api.post('auth/user/create/', form);
        console.log(form)
        //  Store the token into the local storage
        localStorage.setItem('access_token', data.access);
        localStorage.setItem('refresh_token', data.refresh);
        // Set the axios defaults
        api.defaults.headers.common['Authorization'] = 'JWT ' + data.access;
        commit('register_success', data.access);
        Notify.create({ type: 'positive', message: 'Welcome ' + data.first_name })
        //this.$router.push('/email');
        return data;
      } catch (err) {
        Notify.create({ type: 'negative', message: err.response.data.email ? err.response.data.email : err.response.data.password })
        //  //console.log(err)
      }

    },


    // Logout the user
    async logout({ commit }) {
      await localStorage.removeItem('token');
      await localStorage.removeItem('userId');
      delete axios.defaults.headers.common['Authorization'];
      commit('logout');
      this.$router.push('/landing');
      return
    },

  },

  mutations: {
    code_success(state,access){
      let code = String(access.value)
      console.log(code)
      state.group_code = code

    },


    auth_success(state, access) {
      state.token = access
    },
    register_success(state, access) {
      state.token = access

    },
    logout(state) {
      state.token = ''
      state.user = ''
    }
  }
}

