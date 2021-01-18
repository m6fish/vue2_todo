<template>
  <div class="home">
      <div>
          <input type="text"> <button>Add</button>
      </div>
      <ul>
          <li>
                <div>
                    <input type="checkbox">
                    <label>456</label>
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
            list: [{
                id: 1,
                text: 'my todo',
                status: 1
            }]
        }
    },
    computed: {
        // 取得過濾後的代辦清單
        getFilterList () {
            return []
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
