<template>
  <div class="home">
      <div>
          <input type="text" v-model="newTodo"> <button @click="addTodo">Add</button>
      </div>
      <ul>
          <li v-for="oneTodo in getFilterList" :key="oneTodo.id">
                <div>
                    <input type="checkbox" v-model="oneTodo.status" :id="oneTodo.id">
                    <label :for="oneTodo.id">{{oneTodo.text}}</label>
                    <button @click="deleteTodo(oneTodo.id)">delete</button>
                </div>
          </li>
      </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    name: 'Home',
    data () {
        return {
            newTodo: '', // 新增代辦輸入框的值
            /**
             * list.id: todo id
             * list.text: 標題內容
             * list.status: { false: 未完成, true: 完成 }
             */
            list: []
        }
    },
    computed: {
        ...mapGetters([
            'getTodoList'
        ]),
        // 取得過濾後的代辦清單
        getFilterList () {
            const { status = 2 } = this.$route.params

            // 全選
            if (+status > 1) {
                return this.getTodoList || []
            }

            // 過濾狀態
            return this.getTodoList.filter(({ status: listStatus }) => +listStatus === +status)
        }
    },
    methods: {
        ...mapActions([
            'A_addTodo',
            'A_deleteTodo',
            'A_updateTodo'
        ]),
        // 新增代辦
        addTodo () {
            const id = this.getTodoList.length + 1

            // 防呆: 輸入框為空值時擋送出
            if (this.newTodo === '') {
                return
            }

            // 重置輸入框
            const text = this.newTodo
            this.newTodo = ''

            // todo 加入列表
            this.A_addTodo({
                id,
                status: false,
                text
            })
        },
        /**
         * 刪除指定代辦
         * @param {Number} TodoID todo id
         */
        deleteTodo (TodoID) {
            const targetIdx = this.getTodoList.findIndex(({ id }) => id === TodoID)
            this.A_deleteTodo(targetIdx)
        },
        // 更新指定代辦
        updateTodo (TodoID) {
            const target = this.getTodoList.find(({ id }) => id === TodoID)
            // target.status = !target.status
        }
    }
}
</script>
