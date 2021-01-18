<template>
  <div class="home">
      <div>
          <input type="text"> <button>Add</button>
      </div>
      <ul>
          <li v-for="oneTodo in list" :key="oneTodo.id">
                <div>
                    <input type="checkbox" v-model="oneTodo.status" :id="oneTodo.id">
                    <label :for="oneTodo.id">{{oneTodo.text}}</label>
                    <button>delete</button>
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
            /**
             * list.id: todo message id
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

        },
        // 刪除指定代辦
        deleteTodo () {

        },
        // 更新指定代辦
        updateTodo () {

        }
    }
}
</script>
