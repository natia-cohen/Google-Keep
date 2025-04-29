import { storageService } from "./async-storage.service"

const ENTITY_TYPE = "todoDB"

export const taskService = {
  query,
  add,
  remove,
  toggleDone,

}
_initializeDemoData()

async function query() {
  return await storageService.query(ENTITY_TYPE)
}

async function add(text) {
  const newTask = {
    text,
    isDone: false,
  }
  return await storageService.post(ENTITY_TYPE, newTask)
}

async function remove(taskId) {
  return storageService.remove(ENTITY_TYPE, taskId)
}

async function toggleDone(taskId) {

  const tasks = query()
  const task = tasks.find((task) => task._id === taskId)

  if (task) task.isDone = !task.isDone
  await storageService.put(ENTITY_TYPE, task)
  return task
}
async function _initializeDemoData() {
  const existing = await query()
  if (existing.length) return

  await add('Learn React')
  await add('Walk the dog')
  await add('Read a book')
}