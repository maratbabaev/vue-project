import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let store = new Vuex.Store({
    state: {
        users: [],
        error: false,
        data: [],
        listActive: false,
        modalActive: false,
        user: {}
    },
    mutations: {
        SET_USERS: (state, users) => {
            state.users = users
            state.data = users
        },
        ERROR_ACTIVE: state => {
            state.error = true
        },
        SET_FILTER: (state, value) => {
            if (value.length > 0) {
                state.users = state.data.filter(el => {
                    if (value.toLowerCase().trim() === el.name.toLowerCase().trim() ||
                        value.toLowerCase().trim() === el.username.toLowerCase().trim() ||
                        value.toLowerCase().trim() === el.phone.slice(0, 12) ||
                        value.toLowerCase().trim() === el.email.toLowerCase().trim() ||
                        value.toLowerCase().trim() === el.website.toLowerCase().trim()) {
                        return true
                    }
                })
            } else {
                state.users = state.data
            }
        },
        ADD_LIST_CLASS_ACTIVE: state => {
            state.listActive = true
        },
        REMOVE_LIST_CLASS_ACTIVE: state => {
            state.listActive = false
        },
        ADD_MODAL_CLASS_ACTIVE: state => {
            state.modalActive = true
        },
        REMOVE_MODAL_CLASS_ACTIVE: state => {
            state.modalActive = false
        },
        SET_USER: (state, user) => {
            state.user = user
        }
    },
    actions: {
        GET_USERS({ commit }) {
            return axios('https://jsonplaceholder.typicode.com/users', {
                method: 'GET',
            })
                .then(response => {
                    commit('SET_USERS', response.data)
                })
                .catch(error => {
                    commit('ERROR_ACTIVE')
                })
        },
        GET_FILTER({ commit }, value) {
            commit('SET_FILTER', value)
        },
        ADD_LIST_ACTIVE({commit}) {
            commit('ADD_LIST_CLASS_ACTIVE')
        },
        REMOVE_LIST_ACTIVE({commit}) {
            commit('REMOVE_LIST_CLASS_ACTIVE')
        },
        ADD_MODAL_ACTIVE({commit}, user) {
            commit('ADD_MODAL_CLASS_ACTIVE'),
            commit('SET_USER', user)
        },
        REMOVE_MODAL_ACTIVE({commit}) {
            commit('REMOVE_MODAL_CLASS_ACTIVE')
        }
    },
    getters: {
        USERS(state) {
            return state.users
        },
        ERROR(state) {
            return state.error
        },
        LIST_ACTIVE(state) {
            return state.listActive
        },
        MODAL_ACTIVE(state) {
            return state.modalActive
        },
        USER(state) {
            return state.user
        }
    }
})

export default store