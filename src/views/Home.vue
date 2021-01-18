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
                text: 'my todo 1',
                status: false
            },
            {
                id: 2,
                text: 'my todo 2',
                status: true
            }]
        }
    },
    computed: {
        // 取得過濾後的代辦清單
        getFilterList () {
            const { status = 2 } = this.$route.params

            // 全選
            if (+status > 1) {
                return this.list || []
            }

            // 過濾狀態
            return this.list.filter(({ status: listStatus }) => +listStatus === +status)
        }
    },
    methods: {
        // 新增代辦
        addTodo () {
            const id = this.list.length + 1

            // 防呆: 輸入框為空值時擋送出
            if (this.newTodo === '') {
                return
            }

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
        updateTodo (TodoID) {
            const target = this.list.find(({ id }) => id === TodoID)
            target.status = !target.status
        }
    }
}
</script>
