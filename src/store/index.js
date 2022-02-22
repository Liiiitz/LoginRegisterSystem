import Vue from 'vue'
import Vuex from 'vuex'
import store from "store";
import axios from "axios";
Vue.use(Vuex);
Vue.use(store);
export default new Vuex.Store({
    actions: {
        loadData(context) {
            context.dispatch("loadConditionData")
        },
        UsersData(text) {
            axios.get("../static/users.json").then(
                (Response) => {
                    text.commit("UsersData", Response.data["users"])
                },
            );
        },
        loadConditionData(context) {
            axios.get("../static/Data.json").then(
                (Response) => {
                    context.commit("loadConditionData", Response.data)
                }
            ); 
        }
    },
    mutations: {
        UsersData(state, users) {
            state.users = users;
        },
        loadConditionData(state, conditionData) {
            state.conditionData = conditionData
        },
    },
    state: {
        "users": [],
        "conditionData": []
    }
})
