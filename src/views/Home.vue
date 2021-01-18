<template>
  <div class="home">
      <div>
          <input type="text" v-model="newTodo"> <button @click="addTodo">Add</button>
      </div>
      <ul>
          <li v-for="oneTodo in list" :key="oneTodo.id">
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
            list: [{
                id: 1,
                text: 'my todo',
                status: false
            },
            {
                id: 2,
                text: 'my todo',
                status: true
            }]
        }
    },
    computed: {
        // 取得過濾後的代辦清單
        getFilterList () {
            return this.list || []
        }
    },
    methods: {
        // 新增代辦
        addTodo () {
            const id = this.list.length + 1

            // todo 加入列表
            this.list.push({
                id,
                status: false,
                text: this.newTodo
            })

            // 重置輸入框
            this.newTodo = ''
        },
        /**
         * 刪除指定代辦
         * @param {Number} TodoID todo id
         */
        deleteTodo (TodoID) {
            const targetIdx = this.list.findIndex(({ id }) => id === TodoID)
            this.list.splice(targetIdx, 1)
        },
        // 更新指定代辦
        updateTodo () {

        }
    }
}
</script>
