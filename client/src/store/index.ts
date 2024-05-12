import rootActions from "./actions";
import { defineStore } from "pinia";

export interface Store {
    _isLogin: boolean;
    _isLoading: boolean;
    _isProgress: number;
    getters: {
        _getUser: any;
    };
}

export default defineStore("store", {
    state: (): Store => ({
        _isLogin: false,
        _isProgress: 0,
        _isLoading: true,
        getters: {
            _getUser: null,
        },
    }),

    getters: {},
    actions: rootActions,
});
