export const state = () => ({
  todoList: [
    { id:1, todo: "goma", complete: false },
    { id:2, todo: "ted", complete: false },
    { id:3, todo: "nyamotchi", complete: true }
  ]
})

export const mutations =  {
  addTodo(state:any,payload:object) {
    state.todoList.push(payload)
  },
  changeFlag(state: any, changeFlagId: number) {
    let target: any = state.todoList.find((todo: any) => {
      return todo.id === changeFlagId
    })
    
    if (target.complete) {
      target.complete = false
    } else {
      target.complete = true
    }
  },
  deleteTodo(state:any,deleteTodoId:number) {
    const deletedTodoList = state.todoList.filter((todo:any) => {
      return todo.id !== deleteTodoId
    })
    state.todoList = deletedTodoList    
  }
}

export const actions =  {
  addTodo(context:any,payload:object) {
    context.commit("addTodo",payload)
  },
  changeFlag(context: any, changeFlagId:number) {
    context.commit("changeFlag",changeFlagId)
  },
  deleteTodo(context:any,deleteTodoId:number) {
    context.commit("deleteTodo",deleteTodoId)
  }

}