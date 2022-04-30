import Vue from 'vue'
import Vuex from 'vuex'

// import {checkFields} from '../helper'
import movie from "@/services/movie"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoaded: false,
        originalMovies: [],
        filterMovies: [],
        filters: {
            name: '',
            minScore: 0
        },
        sort: ''
    },
    getters: {
        movies(state) {
            // const keys = checkFields(state.filters)
            // const movies = []
            state.filterMovies = state.originalMovies

            state.filterMovies = state.filterMovies.filter(e => {
                // console.log(e)
                const originalName = e.name.toLocaleLowerCase()
                const filterName = state.filters.name.toLocaleLowerCase()

                return originalName.includes(filterName)
            })

            state.filterMovies = state.filterMovies.filter(e => {
                const floatToIntRating = parseInt(e.rating)
                return floatToIntRating > state.filters.minScore
            })

            const firstMovie = state.originalMovies.length ? state.originalMovies[0] : {}

            if (firstMovie.hasOwnProperty(state.sort)) {
                const key = state.sort
                state.filterMovies = state.filterMovies.sort((a, b) => {
                    const first = a[key], second = b[key]

                    return ((first < second) ? 1 : ((first > second) ? -1 : 0))
                })
            }

            return state.filterMovies
        },
        isLoaded(state) {
            return state.isLoaded
        }
    },
    mutations: {
        setMovies(state, payload) {
            state.originalMovies = payload
        },
        setName(state, payload) {
            console.log('name', payload)
            state.filters.name = payload ? payload.trim() : ''
        },
        setMinScore(state, payload) {
            console.log('minScore', payload, isNaN(payload))
            state.filters.minScore = isNaN(payload) ? 0 : payload
        },
        setSort(state, payload) {
            state.sort = payload
        },
        setIsLoaded(state) {
            state.isLoaded = true
        },
    },
    actions: {
        async getAndSetMovies({commit}) {
            setTimeout(async () => {
                const payload = await movie.get()
                commit('setMovies', payload)
                commit('setIsLoaded')
                // console.log(payload)
            }, 2000)
        },
        resetForm({commit}) {
            commit('setName', '')
            commit('setMinScore', 0)
            commit('setSort', '')
        }
    },
})
