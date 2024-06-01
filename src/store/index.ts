import rootActions from './actions'
import { defineStore } from 'pinia'

export interface Store {
  _isLogin: boolean
  _isLoading: boolean
  _isWorked: number
}

export default defineStore('store', {
  state: (): Store => ({
    _isLogin: false,
    _isWorked: 0,
    _isLoading: true,
  }),

  getters: {},
  actions: rootActions
})
