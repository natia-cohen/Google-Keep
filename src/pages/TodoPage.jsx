import { useEffect, useState } from "react"
import { TodoList } from "../cmps/TodoList"
import { taskService } from "../services/taskService"
import { TodoHeader } from "../cmps/TodoHeader"


export function TodoPage() {
  const [tasks, setTasks] = useState()

  useEffect(() => {
    loadTasks()
  }, [])

  async function loadTasks() {
    const tasksFromStorage = await taskService.query()
    setTasks(tasksFromStorage)
  }

  return (
    <section className="todo-page">
      <TodoHeader/>
      <TodoList tasks={tasks} />
    </section>
  )
}
