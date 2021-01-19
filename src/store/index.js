import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    // todo 清單
    todoList: [
        {
            id: 1,
            text: 'my todo 1',
            status: false
        },
        {
            id: 2,
            text: 'my todo 2',
            status: true
        }
    ]
}

const actions = {
    async A_addTodo ({ state, commit, dispatch }, newTodo) {
        commit(_M.ADD_TODO, newTodo)
    },
    async A_deleteTodo ({ state, commit, dispatch }, TodoID) {
        commit(_M.DEL_TODO, TodoID)
    },
    async A_updateTodo ({ state, commit, dispatch }, payload) {
        commit(_M.UPDATE_TODO, payload)
    }
}

const mutations = {
    [_M.ADD_TODO] (state, newTodo) {
        state.todoList.push(newTodo)
    },
    [_M.DEL_TODO] (state, TodoID) {
        state.todoList.splice(TodoID, 1)
    },
    [_M.UPDATE_TODO] (state, { TodoID, newTodo }) {
        const target = state.todoList.find(({ id }) => id === TodoID)
        target.status = !target.status
    }
}

const getters = {
    getTodoList: state => state.todoList
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})
