
export function TodoList({ tasks }) {
  if (!tasks) return <p>No tasks yet</p>

  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <li key={task._id}>{task.text}</li>
      ))}
    </ul>
  )
}
