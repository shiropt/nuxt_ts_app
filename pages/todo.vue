<template>
  <div class="container">
    <WideForm :value.sync="todo" 
     @click="addTodo"
     class="wide-form">
      <template v-slot:inputLabel>Todoを追加</template>
      <template v-slot:button>追加</template>
    </WideForm>
    <Tab
      @firstButtonEvent="showIncompleteTodo"
      @secondButtonEvent="showcompleteTodo"
      @thirdButtonEvent="fetchTodoList"
    >
      <template v-slot:firstButton>
        未完了のTODO
      </template>
      <template v-slot:secondButton>
        完了したTODO
      </template>
      <template v-slot:thirdButton>
        全てのTODO
      </template>
    </Tab>
    <ul  v-for="(todo,index) in todoList" :key="index">
      <List 
        @firstContentClick="changeFlag(index)"
        @buttonClick="deleteTodo(index)"
      >
        <template v-slot:firstContent>
        {{todo.complete ? "☑️" : "□" }}
        </template>
          <template v-slot:secondContent>
            {{todo.todo}}
        </template>
        <template v-slot:button>
          削除
        </template>
      </List>
    </ul>
    <p class="no-todo-message" v-if="todoList.length === 0">Todoリストがありません。</p>
 </div>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
import WideForm from '@/components/WideForm.vue'
import Tab from '@/components/TheTab.vue'
import List from '@/components/List.vue'

@Component({
  components: {
      WideForm,
      Tab,
      List
    }
})
export default class  extends Vue {
  todoId:number = this.$store.state.todo.todoList.length
  todo:string = ""
  todoList:any[] = []
  storeTodoList:any[] = this.$store.state.todo.todoList
  showTodoFlag:string = "incomplete"
  
  addTodo(){
    if (!this.todo){
      return
    }
    const todoObj:object = {
      id:this.todoId ++,
      todo:this.todo,
      complete:false
      }
    this.$store.dispatch("todo/addTodo",todoObj)
    this.showIncompleteTodo()
    this.todo = ""
  }
  deleteTodo(index:number){
    const deleteTodoId:number = this.todoList[index].id
    this.$store.dispatch("todo/deleteTodo",deleteTodoId) 
    this.storeTodoList = this.$store.state.todo.todoList
    if (this.showTodoFlag === "incomplete"){
      this.showIncompleteTodo()
    } else if(this.showTodoFlag ==="complete"){
      this.showcompleteTodo()
    } else {
      this.fetchTodoList()
    }
  }
  changeFlag(index:number){
    const changeFlagId:number = this.todoList[index].id
    this.$store.dispatch("todo/changeFlag",changeFlagId) 
  }
  showIncompleteTodo(){
    this.todoList = this.storeTodoList.filter(todo =>{
      return !todo.complete
    })
    this.showTodoFlag = "incomplete"
  }
  showcompleteTodo(){
    this.todoList = this.storeTodoList.filter(todo =>{
      return todo.complete
    })
    this.showTodoFlag = "complete"
  }
  fetchTodoList(){
    this.todoList = this.storeTodoList
    this.showTodoFlag = "all" 
  }
  created(){
    this.showIncompleteTodo()
  }
}

</script>
<style scoped>
.container{
  width: 80%;
  height: 600px;
  padding-top: 100px;
  margin: 0 auto;
  max-width: 800px;
}
.wide-form{
  width: 80%;
  height: 50px;
  margin: 0 auto;
}
.no-todo-message{
  width: 40%;
  margin: 0 auto;
}
</style>
