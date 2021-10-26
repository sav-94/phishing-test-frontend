import { api } from 'boot/axios'
import { Notify } from 'quasar'
import { useI18n } from 'vue-i18n'

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
    async get_edu_field({ commit },locale) {
      try {
        const { data } = await api.get('user-characteristics/get/edu-field')
        let edu_f = []
        if (locale =="it"){
          for (let i = 0; i < 15; i++) {
            let remov_accent= data[i].it_definition.replace('Ã', '\xE0')
            let eduf= { "id" : data[i].id, "name": remov_accent }
            edu_f.push(eduf)
          }
        }else if (locale =="en-US"){
          for (let i = 0; i < 15; i++) {
            let eduf= { "id" : data[i].id, "name": data[i].name}
            edu_f.push(eduf)
          }
        }
        //console.log(edu_f)
        commit('edu_field_success', edu_f);

      } catch (err) {
        //console.log(err)
      }

    },

    async get_edu_level({ commit },locale) {
      try {
        const { data } = await api.get('user-characteristics/get/edu-level')
        let edu_l = []
        if (locale =="it"){
          for (let i = 0; i < 4; i++) {
            let edu= { "id" : data[i].id, "name": data[i].it_definition}
            edu_l.push(edu)
          }
        }else if (locale =="en-US"){
          for (let i = 0; i < 4; i++) {
            let edu= { "id" : data[i].id, "name": data[i].name}
            edu_l.push(edu)
          }
        }
        //console.log(edu_l)
        commit('edu_level_success', edu_l);

      } catch (err) {
        //console.log(err)
      }

    },

    async get_job_field({ commit },locale) {
      try {
        const { data } = await api.get('user-characteristics/get/job-field')
        let job_f = []
        if (locale =="it"){
          for (let i = 0; i < 15; i++) {
            let remove_accent= data[i].it_definition.replace('Ã', '\xE0')
            let job= { "id" : data[i].id, "name": remove_accent}
            job_f.push(job)
          }
        }else if (locale =="en-US"){
          for (let i = 0; i < 15; i++) {
            let job= { "id" : data[i].id, "name": data[i].name}
            job_f.push(job)
          }
        }
        //console.log(job_f)
        commit('job_field_success', job_f);

      } catch (err) {
        //console.log(err)
      }

    },

    async get_empl_type({ commit }, locale) {
      try {
        const { data } = await api.get('user-characteristics/get/empl-type')
        let emp_type = []
        if (locale =="it"){
          for (let i = 0; i < 9; i++) {
            let employment= { "id" : data[i].id, "name": data[i].it_definition}
            emp_type.push(employment)
          }
        }else if (locale =="en-US"){
          for (let i = 0; i < 9; i++) {
            //console.log(data[i])
            let employment= { "id" : data[i].id, "name": data[i].name}
            emp_type.push(employment)
          }
        }
        //console.log(emp_type)
        commit('empl_type_success', emp_type);


      } catch (err) {
        //console.log(err)
      }

    },

    async get_hobby({ commit },locale) {
      try {
        const { data } = await api.get('user-characteristics/get/hobby')
        let hobbies = []
        if (locale =="it"){
          for (let i = 0; i <12; i++) {
            //console.log(data[i])
            let hobby= { "id" : data[i].id, "name": data[i].it_definition}
            hobbies.push(hobby)
          }
        }else if (locale =="en-US"){
          for (let i = 0; i < 12; i++) {
            ////console.log(data[i])
            let hobby= { "id" : data[i].id, "name": data[i].name}
            hobbies.push(hobby)
          }
        }
        //console.log(hobbies)
        commit('hobby_success', hobbies);

      } catch (err) {
        //console.log(err)
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
        //console.log(err)
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
      //console.log(data.access)
      //router.push({name: 'infoBeforeStart'})
      //location.reload()
    },
  }
}
